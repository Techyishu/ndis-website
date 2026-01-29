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
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <div className="animate-fade-in-up">


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
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <TestimonialsList />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
