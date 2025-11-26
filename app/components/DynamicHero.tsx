import Link from "next/link";
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
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImagePlaceholder
          src={hero.background_image}
          alt="Diverse community celebrating together"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Enhanced Dark Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60 z-10" />

      {/* Decorative Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-secondary to-transparent z-20" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl animate-fade-in-up">
          {/* Main Heading - Force White with Strong Shadow */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
            style={{
              color: '#FFFFFF',
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            {hero.title}
          </h1>

          {/* Subtitle - White with Shadow */}
          <p
            className="text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl font-medium"
            style={{
              color: '#FFFFFF',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
            }}
          >
            {hero.subtitle}
          </p>

          {/* Buttons with Enhanced Styling */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={hero.button_link}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-accent rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl"
            >
              <span className="relative z-10">{hero.button_text}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border-2 border-white/50 rounded-lg hover:bg-white hover:text-primary hover:border-white transition-all duration-300 shadow-lg"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent z-15 pointer-events-none" />
    </section>
  );
}

