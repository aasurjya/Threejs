import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
import SchemaMarkup from "@/components/SchemaMarkup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Aasurjya - Professional Portfolio & Services",
  description: "Welcome to Aasurjya. Explore our professional portfolio, services, and creative work. Aasurjya is your destination for quality and innovation.",
  keywords: "aasurjya, portfolio, services, professional, creative",
  authors: [{ name: "Aasurjya" }],
  openGraph: {
    title: "Aasurjya - Professional Portfolio & Services",
    description: "Welcome to Aasurjya. Explore our professional portfolio, services, and creative work.",
    url: "https://aasurjya.in",
    siteName: "Aasurjya",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aasurjya - Professional Portfolio & Services",
    description: "Welcome to Aasurjya. Explore our professional portfolio, services, and creative work.",
  },
  robots: "index, follow",
  canonical: "https://aasurjya.in",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <SchemaMarkup />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://aasurjya.in" />
        <meta property="og:locale" content="en_US" />
      </head>
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
