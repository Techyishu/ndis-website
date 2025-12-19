import Link from "next/link";
import Image from "next/image";

export default async function DynamicHero() {
  return (
    <section className="relative min-h-[600px] sm:min-h-[680px] md:min-h-[720px] lg:min-h-[800px] overflow-hidden flex items-center">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-inclusive-community.png"
          alt="Diverse community members with and without disabilities participating together in a warm, welcoming outdoor community setting"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Strong Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A7A6A]/95 via-[#5A8A7A]/85 to-[#6B9B8A]/70"></div>
        {/* Additional overlay on left side for text area */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 md:py-24">
        {/* Left-Aligned Content */}
        <div className="max-w-3xl">
          {/* Trust Badge - NDIS Registered */}
          <div className="mb-6 sm:mb-8 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg text-sm font-semibold text-primary-dark">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              NDIS Registered Provider
            </span>
          </div>

          {/* Strong Tagline - Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8 leading-[1.1] animate-fade-in-up delay-100 text-white" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
            Live Your Life,{' '}
            <span className="text-white/95">Your Way.</span>
          </h1>

          {/* Supportive Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl mb-8 sm:mb-10 leading-relaxed text-white/95 animate-fade-in-up delay-200 font-medium max-w-2xl" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>
            Compassionate NDIS support that puts your goals, your choices, and your independence first.
          </p>

          {/* Value Propositions */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-12 animate-fade-in-up delay-300">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-white text-sm sm:text-base font-medium">Nurse-Led Care</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-white text-sm sm:text-base font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-white text-sm sm:text-base font-medium">Melbourne & Victoria</span>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-bold text-white rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-white/30"
              style={{
                background: 'linear-gradient(135deg, #E8A87C 0%, #D99B6E 100%)',
                boxShadow: '0 8px 32px rgba(232, 168, 124, 0.4)'
              }}
              aria-label="Start your free consultation today"
            >
              <span className="tracking-wide">Start Free Consultation</span>
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="tel:0373037203"
              className="group inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-bold text-primary-dark bg-white rounded-xl shadow-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-white/50"
              aria-label="Call us at 03 7303 7203"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="tracking-wide">03 7303 7203</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
