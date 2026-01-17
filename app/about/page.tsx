import Link from "next/link";
import Image from "next/image";
import ImagePlaceholder from "../components/ImagePlaceholder";
import CTASection from "../components/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | EverCare Community Support | NDIS Provider Melbourne Victoria",
  description: "Meet EverCare Community Support - your trusted NDIS registered provider in Melbourne and Victoria. Nurse-led team delivering compassionate disability support services with integrity and empowerment since establishment.",
  keywords: "about EverCare, NDIS provider Melbourne, nurse-led disability support Victoria, NDIS registered provider, Melbourne disability services team",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-6 animate-fade-in-up text-white">
            Our Story
          </h1>
          <p className="text-base sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Founded on the belief that everyone deserves compassionate, high-quality care delivered with dignity and respect.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-2xl sm:text-2xl md:text-2xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  EverCare Community Support was established by a team of experienced nurses and disability support professionals who saw a need for a more personalized approach to NDIS services.
                </p>
                <p>
                  We noticed that many participants felt like just another number in a large system. We wanted to change that. We built EverCare to be different—to be a provider that truly listens, understands, and adapts to your unique needs.
                </p>
                <p>
                  Our &quot;easy as&quot; philosophy means we strip away the complexity and bureaucracy, allowing you to focus on what matters most: living your life your way.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up delay-200">
              <ImagePlaceholder
                src="/images/man-wheelchair-work-front-view.jpg"
                alt="Support worker assisting a person in a wheelchair in a professional setting"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-2xl md:text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-base sm:text-base md:text-base text-gray-600 max-w-2xl mx-auto">
              These core principles guide every interaction and decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary hover:shadow-xl transition-all duration-300 hover:border-primary-light">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compassion First</h3>
              <p className="text-gray-600">
                We lead with kindness and empathy in everything we do, ensuring you always feel heard and valued.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-secondary hover:shadow-xl transition-all duration-300 hover:border-secondary-light">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 text-secondary shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity & Trust</h3>
              <p className="text-gray-600">
                We are transparent, honest, and reliable. You can count on us to deliver on our promises every single day.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-accent hover:shadow-xl transition-all duration-300 hover:border-accent-light">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 text-accent shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Empowerment</h3>
              <p className="text-gray-600">
                Our goal is to empower you to make your own choices and live life on your own terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              To empower every person we support to live a life of dignity, independence, and fulfillment through exceptional, personalized NDIS services.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're committed to breaking down barriers, fostering inclusion, and creating opportunities for meaningful community participation. Every day, we work to ensure that our participants can pursue their goals, develop their skills, and enjoy the quality of life they deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-2xl md:text-2xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Person-centered care guided by industry best practices and clinical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Person-Centered Planning</h3>
                  <p className="text-gray-600">
                    We start by listening. Your goals, preferences, and dreams shape every aspect of your support plan. We believe you are the expert on your own life.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Evidence-Based Practice</h3>
                  <p className="text-gray-600">
                    Our nurse-led team brings clinical expertise and evidence-based approaches to every interaction, ensuring the highest standard of care.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Improvement</h3>
                  <p className="text-gray-600">
                    We regularly review and adapt our services based on feedback, outcomes, and the latest disability support research and innovations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Community Connection</h3>
                  <p className="text-gray-600">
                    We help you build meaningful connections within your community, fostering relationships and opportunities for social inclusion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-2xl md:text-2xl font-bold text-gray-900 mb-4">Accreditations & Compliance</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We meet and exceed all regulatory requirements to ensure your safety and quality of care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">NDIS Registered</h3>
              <p className="text-gray-600 text-sm">
                Fully registered and compliant with NDIS Quality and Safeguards Commission standards
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-secondary transition-colors">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Worker Screening</h3>
              <p className="text-gray-600 text-sm">
                All team members hold current NDIS Worker Screening Checks and Working with Children Checks
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-accent transition-colors">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Continuous Training</h3>
              <p className="text-gray-600 text-sm">
                Ongoing professional development and training in disability support best practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
