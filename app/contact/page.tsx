import { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | EverCare Community Support",
  description: "Get in touch with our friendly team to discuss your NDIS needs. We're here to help.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Let&apos;s Connect
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We&apos;re so glad you&apos;re here. Whether you are a participant or family member looking for
            support, a support coordinator with a referral, or someone passionate about a career in care,
            this is the right place.
          </p>
        </div>
      </section>

      {/* Acknowledgement of Country & Inclusion */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
              Our Commitment to Respect & Inclusion
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  Acknowledgement of Country
                </h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  EverCare Community Support (ECS) respectfully acknowledges the Traditional Custodians of the lands on which we work and live across Victoria. We pay our deepest respects to Elders past, present, and emerging. We extend this respect to all Aboriginal and Torres Strait Islander peoples and are committed to building a culturally safe service.
                </p>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  A Welcoming Space for All
                </h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  We are a safe, welcoming, and inclusive service for everyone. We proudly support participants from all cultural backgrounds, all faiths, all abilities, and all identities, including the LGBTQIA+ community. Our company was built on a foundation of cultural understanding and mutual respect.
                </p>
                <p className="text-sm sm:text-base text-gray-900 leading-relaxed mt-2 font-semibold">
                  You will be seen, heard, and supported here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              For Participants, Families & Support Coordinators
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              This is the first step. Contact our friendly team for a free, no-obligation chat.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Other Contact Methods */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">Other Ways to Reach Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Phone</h4>
              <a href="tel:1300000000" className="text-primary hover:text-primary-light font-semibold text-base sm:text-lg">
                1300 XXX XXX
              </a>
            </div>
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Email</h4>
              <a href="mailto:hello@everecare.com.au" className="text-primary hover:text-primary-light font-semibold text-sm sm:text-base md:text-lg break-all">
                hello@everecare.com.au
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 p-6 sm:p-8 md:p-12 rounded-lg">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              For Career & Job Opportunities
            </h3>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              Are you a compassionate, reliable, and professional person who is passionate about
              empowering others?
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              Our team is the heart of EverCare Community Support. As a nurse-led company, we are
              building a team of the very best support workers, coordinators, and allied health
              professionals. We offer a supportive, respectful, and flexible work environment.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 font-semibold">
              If you share our values, we would love to hear from you.
            </p>
            <div className="bg-white p-5 sm:p-6 rounded-lg">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">How to Apply</h4>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                To express your interest in joining the ECS team, please email your resume
                and a short cover letter to:
              </p>
              <a
                href="mailto:careers@everecare.com.au"
                className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm sm:text-base md:text-lg break-all"
              >
                careers@everecare.com.au
              </a>
              <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4 italic">
                (Please note: This email address is for career enquiries only. All new participant and NDIS enquiries should use the form above.)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
