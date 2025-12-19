import Link from "next/link";
import ImagePlaceholder from "../components/ImagePlaceholder";
import CTASection from "../components/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NDIS Services Melbourne & Victoria | Core Supports, Capacity Building | EverCare",
  description: "Comprehensive NDIS services across Melbourne and Victoria. Core supports, capacity building, community access, support coordination, and daily living assistance. NDIS registered provider serving greater Melbourne region.",
  keywords: "NDIS services Melbourne, NDIS services Victoria, NDIS core supports Melbourne, NDIS capacity building, community access Victoria, NDIS support coordination, disability services Melbourne",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up text-white">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Comprehensive NDIS support tailored to your unique needs and goals.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Core Supports Card */}
            <div className="group bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:border-primary/50">
              {/* Card Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                <ImagePlaceholder
                  src="/images/services-core.png"
                  alt="Core Supports"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Floating Icon */}
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute bottom-6 left-6">
                  <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Most Popular
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Supports</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Essential support for your daily life. We help you with everyday tasks so you can maintain your independence and live comfortably at home.
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Assistance with Daily Life</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Household Tasks & Cleaning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Community Access & Transport</span>
                  </li>
                </ul>

                <Link href="/services/core-supports" className="btn btn-primary w-full justify-center">
                  View Core Supports
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Capacity Building Card */}
            <div className="group bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:border-secondary/50">
              {/* Card Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-secondary/10 to-secondary/5">
                <ImagePlaceholder
                  src="/images/services-capacity.png"
                  alt="Capacity Building"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Floating Icon */}
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute bottom-6 left-6">
                  <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-secondary">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Build Skills
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Capacity Building</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Build your skills and independence. We work with you to develop new skills, improve your health and wellbeing, and achieve your long-term goals.
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Skill Development & Training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Health & Wellbeing Support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Support Coordination</span>
                  </li>
                </ul>

                <Link href="/services/capacity-building" className="btn btn-secondary w-full justify-center">
                  View Capacity Building
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
