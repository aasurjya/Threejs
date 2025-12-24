"use client";
import { useEffect, useRef } from "react";

export default function VisitorTracker() {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) return;
    hasTracked.current = true;

    async function track() {
      try {
        let latitude = null;
        let longitude = null;
        let accuracy = null;
        let locationSource = "ip";

        // Try to get precise location with user permission
        if (navigator.geolocation) {
          await new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition(
              async (position) => {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                accuracy = position.coords.accuracy;
                locationSource = "gps";
                resolve();
              },
              () => {
                // User denied permission or error - continue without precise location
                resolve();
              },
              { timeout: 5000, enableHighAccuracy: true }
            );
          });
        }

        // Get IP-based location as fallback
        const geoRes = await fetch("https://ipapi.co/json/");
        if (!geoRes.ok) return;
        const geoData = await geoRes.json();

        // Reverse geocode if we have precise coordinates
        let preciseCity = geoData.city;
        let preciseRegion = geoData.region;
        let preciseCountry = geoData.country_name;

        if (latitude && longitude) {
          try {
            const reverseGeoRes = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            if (reverseGeoRes.ok) {
              const reverseGeoData = await reverseGeoRes.json();
              const address = reverseGeoData.address || {};
              preciseCity = address.city || address.town || address.village || geoData.city;
              preciseRegion = address.state || geoData.region;
              preciseCountry = address.country || geoData.country_name;
            }
          } catch (err) {
            console.warn("Reverse geocoding failed:", err.message);
          }
        }

        const trackRes = await fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ip: geoData.ip,
            country: preciseCountry,
            countryCode: geoData.country_code,
            region: preciseRegion,
            city: preciseCity,
            latitude: latitude,
            longitude: longitude,
            accuracy: accuracy,
            locationSource: locationSource,
            userAgent: navigator.userAgent,
            deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent)
              ? "mobile"
              : "desktop",
            path: window.location.pathname,
          }),
        });

        if (!trackRes.ok) {
          const errorData = await trackRes.json();
          console.error("Tracking failed:", trackRes.status, errorData);
          return;
        }
        console.log("Visitor tracked successfully");
      } catch (err) {
        console.warn("Tracking skipped:", err.message);
      }
    }

    track();
  }, []);

  return null;
}
