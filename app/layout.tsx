import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EverCare Community Support | NDIS Provider Melbourne & Victoria",
  description: "Leading NDIS registered provider in Melbourne and Victoria. Nurse-led disability support services including core supports, capacity building, and community access across greater Melbourne.",
  keywords: "NDIS provider Melbourne, NDIS services Victoria, disability support Melbourne, NDIS registered provider",
  openGraph: {
    title: "EverCare Community Support | NDIS Provider Melbourne & Victoria",
    description: "Leading NDIS registered provider in Melbourne and Victoria offering compassionate, nurse-led disability support services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "EverCare Community Support",
    "description": "NDIS registered provider in Melbourne and Victoria offering nurse-led disability support services",
    "url": "https://www.evercare.com.au",
    "logo": "https://www.evercare.com.au/images/WhatsApp_Image_2025-11-09_at_17.33.01__4_-removebg-preview.png",
    "image": "https://www.evercare.com.au/images/WhatsApp_Image_2025-11-09_at_17.33.01__4_-removebg-preview.png",
    "telephone": "03 7303 7203",
    "email": "support@evercarecommunity.com.au",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Melbourne",
      "addressRegion": "Victoria",
      "addressCountry": "AU"
    },
    "areaServed": {
      "@type": "State",
      "name": "Victoria"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Su 00:00-23:59",
    "sameAs": [
      "https://www.facebook.com/evercare",
      "https://www.instagram.com/evercare"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "NDIS Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Core Supports",
            "description": "Daily living assistance, household tasks, and community participation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Capacity Building",
            "description": "Skill development, support coordination, and health wellbeing support"
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Navigation />
        <main className="pt-32 md:pt-36">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
