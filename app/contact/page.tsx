import { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Get NDIS Support Today | EverCare Community",
  description: "Get in touch with EverCare Community for personalized NDIS support in Melbourne. Free consultation for participants and families.",
  keywords: "contact NDIS provider Melbourne, NDIS services Victoria contact, NDIS provider near me Melbourne, NDIS consultation Victoria, EverCare contact",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-muted py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
            Let&apos;s Connect
          </h1>
          <p className="text-base sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            We&apos;re so glad you&apos;re here. Whether you are a participant or family member looking for
            support, a support coordinator with a referral, or someone passionate about a career in care,
            this is the right place.
          </p>
        </div>
      </section>

      {/* Acknowledgement of Country & Inclusion */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-secondary to-secondary-dark px-6 sm:px-8 py-5 sm:py-6">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Our Commitment to Respect & Inclusion
                </h3>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="bg-gradient-to-br from-secondary/5 to-transparent p-5 sm:p-6 rounded-lg border-l-4 border-secondary">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                      Acknowledgement of Country
                    </h4>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      EverCare Community (ECS) respectfully acknowledges the Traditional Custodians of the lands on which we work and live across Victoria. We pay our deepest respects to Elders past, present, and emerging. We extend this respect to all Aboriginal and Torres Strait Islander peoples and are committed to building a culturally safe service.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-transparent p-5 sm:p-6 rounded-lg border-l-4 border-primary">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                      A Welcoming Space for All
                    </h4>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                      We are a safe, welcoming, and inclusive service for everyone. We proudly support participants from all cultural backgrounds, all faiths, all abilities, and all identities, including the LGBTQIA+ community. Our company was built on a foundation of cultural understanding and mutual respect.
                    </p>
                    <p className="text-sm sm:text-base text-primary font-bold bg-primary/10 px-4 py-2 rounded-lg inline-block">
                      You will be seen, heard, and supported here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              For Participants, Families & Support Coordinators
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              This is the first step. Contact our friendly team for a free, no-obligation chat.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Other Contact Methods */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">Other Ways to Reach Us</h3>
            <p className="text-sm sm:text-base text-gray-600">Prefer to call or email? We're here for you!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone Card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-br from-primary to-primary-dark p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-1">Call Us</h4>
                <p className="text-white/80 text-sm">Available 24/7</p>
              </div>
              <div className="p-6 text-center">
                <a href="tel:0373037203" className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-2 group">
                  03 7303 7203
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <p className="text-sm text-gray-600 mt-3">Speak directly with our team</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-br from-secondary to-secondary-dark p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-1">Email Us</h4>
                <p className="text-white/80 text-sm">We respond within 24 hours</p>
              </div>
              <div className="p-6 text-center">
                <a href="mailto:support@evercarecommunity.com.au" className="text-lg font-bold text-secondary hover:text-secondary-dark transition-colors inline-flex items-center gap-2 group break-all">
                  support@evercarecommunity.com.au
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <p className="text-sm text-gray-600 mt-3">Send us your inquiry anytime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-accent to-accent-hover px-6 sm:px-8 py-6 sm:py-8">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                    Career & Job Opportunities
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm mt-1">
                    Join our passionate team of care professionals
                  </p>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 sm:p-8">
              <div className="space-y-5 mb-6">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Are you a <span className="font-semibold text-gray-900">compassionate, reliable, and professional</span> person who is passionate about empowering others?
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Our team is the heart of EverCare. We're building a team of the very best <span className="font-semibold text-gray-900">support workers, coordinators, and allied health professionals</span>.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    We offer a <span className="font-semibold text-gray-900">supportive, respectful, and flexible</span> work environment.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-transparent p-5 sm:p-6 rounded-lg border-l-4 border-accent mb-6">
                <p className="text-base sm:text-lg font-bold text-gray-900">
                  If you share our values, we would love to hear from you.
                </p>
              </div>

              {/* How to Apply Card */}
              <div className="bg-gray-50 p-5 sm:p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">How to Apply</h4>
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-4">
                  To express your interest in joining the ECS team, please email your resume and a short cover letter to:
                </p>
                <a
                  href="mailto:support@evercarecommunity.com.au"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-bold text-base sm:text-lg md:text-xl transition-colors group break-all"
                >
                  support@evercarecommunity.com.au
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card Footer */}
            <div className="bg-gray-50 px-6 sm:px-8 py-4 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-gray-600 italic">
                <strong>Please note:</strong> This email address is for career enquiries only. All new participant and NDIS enquiries should use the contact form above.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
