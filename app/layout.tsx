import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EverCare Community Support",
  description: "Compassionate NDIS support services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navigation />
        <main className="pt-[120px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
