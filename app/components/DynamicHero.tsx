import Link from "next/link";
import Image from "next/image";
import ImagePlaceholder from "./ImagePlaceholder";
import { supabase } from "@/lib/supabase";

interface HeroData {
  title: string;
  subtitle: string;
  button_text: string;
  button_link: string;
  background_image: string;
  overlay_opacity: number;
}

async function getHeroData(): Promise<HeroData | null> {
  try {
    const { data, error } = await supabase
      .from('hero_section')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error || !data) {
      return null;
    }

    return {
      title: data.title,
      subtitle: data.subtitle,
      button_text: data.button_text,
      button_link: data.button_link,
      background_image: data.background_image,
      overlay_opacity: data.overlay_opacity,
    };
  } catch (error) {
    console.error('Error fetching hero data:', error);
    return null;
  }
}

export default async function DynamicHero() {
  const heroData = await getHeroData();

  // Fallback to default if no data
  const hero = heroData || {
    title: "Live Your Best Life. We're Here to Help.",
    subtitle: "Compassionate, nurse-led NDIS support in Victoria. We make your journey simple, personalized, and dignified.",
    button_text: "Get Started",
    button_link: "/contact",
    background_image: "/images/hero-bg.png", // We will need to ensure this image exists or use a placeholder
    overlay_opacity: 0.75,
  };

  return (
    <section className="relative min-h-[600px] sm:min-h-[650px] md:min-h-[700px] lg:min-h-[850px] overflow-hidden flex items-center">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="EverCare Community Support"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/85 to-gray-900/70"></div>
        
        {/* Animated Accent Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 md:py-20">
        {/* Centered Content */}
        <div className="text-center max-w-5xl mx-auto mb-8 sm:mb-10 md:mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 sm:px-5 py-2 sm:py-2.5 border border-white/20 mb-6 sm:mb-8 animate-fade-in-up shadow-xl">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold text-white">NDIS Registered Provider • Victoria</span>
          </div>

          {/* Main Heading with Gradient Text */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight animate-fade-in-up delay-100">
            <span className="text-white">{hero.title.split('.')[0]}</span>
            <span className="block mt-2 sm:mt-3 text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-primary">
              {hero.title.split('.').length > 1 ? hero.title.split('.').slice(1).join('.').trim() : 'We\'re Here to Help.'}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 leading-relaxed text-gray-200 max-w-4xl mx-auto animate-fade-in-up delay-200 font-light px-2">
            {hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12 md:mb-16 animate-fade-in-up delay-300">
            <Link
              href={hero.button_link}
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 text-base sm:text-lg font-bold text-gray-900 bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">{hero.button_text}</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 text-base sm:text-lg font-bold text-white bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Explore Services
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Feature Cards Grid - Below Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto animate-fade-in-up delay-400">
          {/* Card 1 */}
          <div className="group bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-2xl border border-white/20 hover:bg-white transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-secondary rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Nurse-Led Care</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Professional healthcare expertise in every service we provide</p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-2xl border border-white/20 hover:bg-white transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-secondary to-accent rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Personalized Support</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Tailored to your unique goals, needs, and lifestyle preferences</p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-2xl border border-white/20 hover:bg-white transition-all duration-300 hover:-translate-y-2 sm:col-span-2 md:col-span-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-accent to-primary rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">24/7 Available</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Round-the-clock support whenever you need us most</p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-10 sm:mt-12 md:mt-16 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/20 p-4 sm:p-5 md:p-6 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-xs sm:text-sm text-gray-300">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">4.9/5</div>
                <div className="text-xs sm:text-sm text-gray-300">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">15+</div>
                <div className="text-xs sm:text-sm text-gray-300">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">98%</div>
                <div className="text-xs sm:text-sm text-gray-300">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Shape */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}

