import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

const Footer = async () => {
  const { data: settingsRows } = await supabase
    .from("site_settings")
    .select("key, value")
    .in("group", ["contact", "social"]);

  const s: Record<string, string> = Object.fromEntries(
    (settingsRows || []).map((r: { key: string; value: string }) => [r.key, r.value])
  );

  const phone = s.contact_phone || "03 7303 7203";
  const email = s.contact_email || "support@evercarecommunity.com.au";
  const address = s.contact_address || "Melbourne, Victoria";
  const facebook = s.social_facebook || "#";
  const instagram = s.social_instagram || "#";
  const linkedin = s.social_linkedin || "#";

  // Format phone for tel: link (strip spaces)
  const phoneHref = `tel:${phone.replace(/\s/g, "")}`;

  return (
    <footer className="text-white pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10" style={{ background: 'linear-gradient(135deg, #026189 0%, #0F897D 50%, #3B6889 100%)' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <Image
                  src="/images/WhatsApp_Image_2025-11-09_at_17.33.01__4_-removebg-preview.png"
                  alt="EverCare Community Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight">EverCare Community</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering you to live your best life with compassionate, personalized NDIS support services across Victoria.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href={facebook} className="w-10 h-10 border-2 border-white/30 hover:border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer" aria-label="Follow us on Facebook">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href={instagram} className="w-10 h-10 border-2 border-white/30 hover:border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer" aria-label="Follow us on Instagram">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href={linkedin} className="w-10 h-10 border-2 border-white/30 hover:border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer" aria-label="Follow us on LinkedIn">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-secondary-light">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all">Our Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all">Contact Us</Link></li>
              <li><Link href="/testimonials" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all">Testimonials</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-secondary-light">Our Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services/core-supports" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all">Core Supports</Link></li>
              <li><Link href="/services/capacity-building" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all">Capacity Building</Link></li>
              <li><Link href="/services/core-supports#community" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all">Community Access</Link></li>
              <li><Link href="/services/capacity-building#coordination" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all">Support Coordination</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-secondary-light">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">{address}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={phoneHref} className="text-gray-300 hover:text-white transition-colors">{phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${email}`} className="text-gray-300 hover:text-white transition-colors">{email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 sm:pt-8 mt-6 sm:mt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/90 text-sm font-medium">
            &copy; {new Date().getFullYear()} EverCare Community. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
            <Link href="/privacy" className="text-white/90 hover:text-white transition-colors font-medium underline-offset-2 hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="text-white/90 hover:text-white transition-colors font-medium underline-offset-2 hover:underline">Terms of Service</Link>
            <Link href="/compliance" className="text-white/90 hover:text-white transition-colors font-medium underline-offset-2 hover:underline">Compliance & Standards</Link>
            <a href="https://www.ndis.gov.au" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors font-medium underline-offset-2 hover:underline">
              NDIS Website
            </a>
            <a href="https://www.ndiscommission.gov.au" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors font-medium underline-offset-2 hover:underline">
              NDIS Commission
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
