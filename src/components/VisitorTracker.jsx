"use client";
import { useEffect, useRef } from "react";

export default function VisitorTracker() {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) return;
    hasTracked.current = true;

    async function track() {
      try {
        const geoRes = await fetch("https://ipapi.co/json/");
        if (!geoRes.ok) return;
        const geoData = await geoRes.json();

        await fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ip: geoData.ip,
            country: geoData.country_name,
            countryCode: geoData.country_code,
            region: geoData.region,
            city: geoData.city,
            userAgent: navigator.userAgent,
            deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent)
              ? "mobile"
              : "desktop",
            path: window.location.pathname,
          }),
        });
      } catch (err) {
        console.warn("Tracking skipped:", err.message);
      }
    }

    track();
  }, []);

  return null;
}
