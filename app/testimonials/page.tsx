import Link from "next/link";
import TestimonialsList from "../components/TestimonialsList";

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

      {/* CTA Sections */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230066CC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
            </div>

            {/* Gradient Header */}
            <div className="relative bg-gradient-to-r from-secondary via-primary to-secondary p-8 sm:p-12 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                Let Us Be Part of Your Story
              </h3>
              <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto">
                Your goals and your well-being are at the center of everything we do
              </p>
            </div>

            {/* Content */}
            <div className="relative p-8 sm:p-12 text-center">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                If you're ready for a simpler, more compassionate approach to NDIS support, we would be honoured to chat with you.
              </p>
              <Link
                href="/contact"
                className="btn btn-accent text-white text-base sm:text-lg px-8 py-4 inline-flex items-center gap-2"
              >
                Get in Touch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Experience Section */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary-dark"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-scale-in">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Share Your Experience
            </h3>
            <p className="text-base sm:text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Are you a current participant or family member? We are always learning and growing, and
              your feedback is incredibly important to us. We would love to hear your story.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-secondary px-8 py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              Share Your Review
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
