import Link from "next/link";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | EverCare Community Support",
  description: "Explore our comprehensive NDIS services, including Core Supports, Capacity Building, and Community Access.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our Services
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Comprehensive NDIS support tailored to your unique needs and goals.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Core Supports */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-fade-in-up">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Supports</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Essential support for your daily life. We help you with everyday tasks so you can maintain your independence and live comfortably at home.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Assistance with Daily Life
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Household Tasks & Cleaning
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Community Access & Transport
                  </li>
                </ul>
                <Link href="/services/core-supports" className="btn btn-primary">
                  View Core Supports
                </Link>
              </div>
              <div className="order-1 lg:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-xl animate-fade-in-up delay-200">
                <ImagePlaceholder
                  src="/images/services-core.png"
                  alt="Core Supports"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Capacity Building */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl animate-fade-in-up delay-200">
                <ImagePlaceholder
                  src="/images/services-capacity.png"
                  alt="Capacity Building"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="animate-fade-in-up">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 text-secondary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Capacity Building</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Build your skills and independence. We work with you to develop new skills, improve your health and wellbeing, and achieve your long-term goals.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-teal-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Skill Development & Training
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-teal-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Health & Wellbeing Support
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-teal-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Support Coordination
                  </li>
                </ul>
                <Link href="/services/capacity-building" className="btn btn-secondary">
                  View Capacity Building
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Not sure what you need?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Our team can help you understand your NDIS plan and find the right supports for you.
          </p>
          <Link href="/contact" className="btn btn-accent text-lg px-10 py-4">
            Speak to an Expert
          </Link>
        </div>
      </section>
    </div>
  );
}
