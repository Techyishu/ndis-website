import Link from "next/link";
import TestimonialsList from "../components/TestimonialsList";
import CTASection from "../components/CTASection";

export const metadata = {
  title: "Testimonials & Reviews | NDIS Provider Melbourne Victoria | EverCare Community Support",
  description: "Read real testimonials and reviews from NDIS participants and families across Melbourne and Victoria. See why EverCare is a trusted NDIS registered provider with 98% satisfaction rate.",
  keywords: "NDIS provider reviews Melbourne, EverCare testimonials, NDIS support reviews Victoria, disability services testimonials Melbourne, NDIS provider ratings",
};

export default function Testimonials() {

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md mb-6">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold text-gray-900">4.9/5 Rating • 127 Reviews</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hear From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Community</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto font-medium">
              Real Stories from EverCare Participants & Families
            </p>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are proud of the partnerships we are building across Victoria. At EverCare Community
              Support, our goal is to provide care you can trust, support that is "easy as" to use, and
              a team that genuinely understands.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialsList />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
