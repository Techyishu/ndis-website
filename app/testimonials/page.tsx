import Link from "next/link";
import TestimonialsList from "../components/TestimonialsList";

export const metadata = {
  title: "Testimonials | Hear From Our Community | EverCare Community Support",
  description: "Real stories from EverCare participants and families. See why we're trusted for NDIS support across Victoria.",
};

export default function Testimonials() {

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Hear From Our Community
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-3 sm:mb-4 max-w-3xl mx-auto">
              Real Stories from EverCare Participants & Families
            </p>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are proud of the partnerships we are building across Victoria. At EverCare Community
              Support (ECS), our goal is to provide care you can trust, support that is "easy as" to use, and
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

      {/* CTA Sections */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-6 sm:p-8 md:p-12 shadow-xl text-center border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up">
            <div className="mb-4 sm:mb-6">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Let Us Be Part of Your Story
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Your goals and your well-being are at the center of everything we do. If you're ready for a
              simpler, more compassionate approach to NDIS support, we would be honoured to chat with
              you.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-emerald-600 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-emerald-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Share Your Experience Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-scale-in">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Share Your Experience
            </h3>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-emerald-50 max-w-2xl mx-auto leading-relaxed">
              Are you a current participant or family member? We are always learning and growing, and
              your feedback is incredibly important to us. We would love to hear your story.
            </p>
            <Link
              href="/"
              className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 sm:px-10 sm:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Share Your Review
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
