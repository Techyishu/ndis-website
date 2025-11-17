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
    title: "Live Your Best Life",
    subtitle: "At ECS, we reach out to you wherever you are in Victoria, with exceptional NDIS support right at home.",
    button_text: "GET STARTED",
    button_link: "/contact",
    background_image: "/images/Gemini_Generated_Image_n0seiyn0seiyn0se.png",
    overlay_opacity: 0.7,
  };

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImagePlaceholder
          src={hero.background_image}
          alt="Diverse community celebrating together"
          width={1920}
          height={800}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      
      {/* Dark Overlay on Left Side */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"
        style={{ opacity: hero.overlay_opacity }}
      ></div>
      
      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            {hero.subtitle}
          </p>
          <Link
            href={hero.button_link}
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 text-lg uppercase tracking-wide group"
          >
            <span>{hero.button_text}</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Accessibility Icon in Upper Right */}
      <div className="absolute top-8 right-8 hidden lg:block animate-fade-in-up animation-delay-300">
        <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
      </div>
    </section>
  );
}

