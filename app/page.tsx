import Link from "next/link";
import Image from "next/image";
import DynamicHero from "./components/DynamicHero";
import TestimonialsList from "./components/TestimonialsList";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "EverCare Community Support | NDIS Provider Melbourne & Victoria | Nurse-Led Disability Support",
    description: "Leading NDIS provider in Melbourne and Victoria offering compassionate, nurse-led disability support services. Core supports, capacity building, community access, and support coordination across greater Melbourne. NDIS registered provider.",
    keywords: "NDIS provider Melbourne, NDIS provider Victoria, disability support services Melbourne, NDIS registered provider, nurse-led NDIS support, NDIS support coordination Victoria, disability care Melbourne, NDIS capacity building, NDIS core supports",
};

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <DynamicHero />

            {/* Feature Cards Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                        {/* Card 1 */}
                        <div className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Nurse-Led Care</h3>
                            <p className="text-gray-700 text-base leading-relaxed">Professional healthcare expertise in every service we provide</p>
                        </div>

                        {/* Card 2 */}
                        <div className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-secondary/30">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Personalized Support</h3>
                            <p className="text-gray-700 text-base leading-relaxed">Tailored to your unique goals, needs, and lifestyle preferences</p>
                        </div>

                        {/* Card 3 */}
                        <div className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-accent/30 sm:col-span-2 md:col-span-1">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">24/7 Available</h3>
                            <p className="text-gray-700 text-base leading-relaxed">Round-the-clock support whenever you need us most</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #6B9B8A 0%, #7BA3B0 100%)' }}>
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 text-center">
                        <div className="animate-fade-in-up">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>500+</div>
                            <div className="text-white/90 text-sm md:text-base font-medium">Participants Supported</div>
                        </div>
                        <div className="animate-fade-in-up delay-100">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>15+</div>
                            <div className="text-white/90 text-sm md:text-base font-medium">Years Experience</div>
                        </div>
                        <div className="animate-fade-in-up delay-200">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>98%</div>
                            <div className="text-white/90 text-sm md:text-base font-medium">Satisfaction Rate</div>
                        </div>
                        <div className="animate-fade-in-up delay-300">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>24/7</div>
                            <div className="text-white/90 text-sm md:text-base font-medium">Support Available</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Snippet Section */}
            <section className="py-20 sm:py-24 md:py-32 bg-muted">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
                        <div className="animate-fade-in-up order-2 lg:order-1">
                            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-6">
                                About Us
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Your Goals. Your Choices.{' '}
                                <span className="text-primary">Your Life.</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                At EverCare Community Support, we believe everyone deserves the freedom to live life on their own terms. As a nurse-led NDIS provider, we bring professional healthcare expertise combined with genuine compassion to every interaction.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We're not just service providers – we're your partners in building independence, confidence, and a life you love. Our culturally diverse team understands that great support starts with truly listening to what matters most to you.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/about"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-white"
                                    style={{ background: 'linear-gradient(135deg, #5A8A79 0%, #4A7A69 100%)' }}
                                    aria-label="Learn more about our story and mission"
                                >
                                    Our Story
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border-2"
                                    style={{ borderColor: '#5A8A79', color: '#4A7A69', background: 'white' }}
                                    aria-label="Get in touch with us"
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-[400px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden shadow-2xl animate-fade-in-up delay-200 group order-1 lg:order-2">
                            <Image
                                src="/images/about-community.png"
                                alt="Diverse community members with various abilities enjoying activities together"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Warm Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>

                            {/* Trust Badge - Always Visible */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-base font-bold text-gray-900">Trusted Care Since 2010</p>
                                        <p className="text-sm text-gray-600">500+ participants supported across Victoria</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview Section */}
            <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-muted">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 animate-fade-in-up">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                        <p className="text-lg text-gray-600">
                            Tailored support designed to help you thrive at home and in the community.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Card 1 - Core Supports */}
                        <Link href="/services/core-supports" className="group block animate-fade-in-up delay-100">
                            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-primary transform hover:-translate-y-2 h-full">
                                {/* Gradient Background Accent */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>

                                {/* Icon */}
                                <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3 relative">Core Supports</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Assistance with daily living activities, household tasks, and personal care to help you maintain independence.
                                </p>

                                <div className="flex items-center text-primary font-bold group-hover:gap-2 transition-all">
                                    Learn More
                                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Service Card 2 - Capacity Building */}
                        <Link href="/services/capacity-building" className="group block animate-fade-in-up delay-200">
                            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-secondary transform hover:-translate-y-2 h-full">
                                {/* Gradient Background Accent */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-full"></div>

                                {/* Icon */}
                                <div className="relative w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3 relative">Capacity Building</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Skill development, therapy support, and training to help you build independence and achieve your long-term goals.
                                </p>

                                <div className="flex items-center text-secondary font-bold group-hover:gap-2 transition-all">
                                    Learn More
                                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Service Card 3 - Community Access */}
                        <Link href="/services/core-supports#community" className="group block animate-fade-in-up delay-300">
                            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-accent transform hover:-translate-y-2 h-full">
                                {/* Gradient Background Accent */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full"></div>

                                {/* Icon */}
                                <div className="relative w-16 h-16 bg-gradient-to-br from-accent to-accent-hover rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3 relative">Community Access</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Support to participate in social activities, community events, and recreational programs you enjoy.
                                </p>

                                <div className="flex items-center text-accent font-bold group-hover:gap-2 transition-all">
                                    Learn More
                                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 sm:py-20 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 animate-fade-in-up">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How We Work With You</h2>
                        <p className="text-lg text-gray-600">
                            Starting your journey with EverCare is simple. We've streamlined our process to make it easy as possible.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="relative text-center animate-fade-in-up delay-100">
                            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                                1
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Get in Touch</h3>
                            <p className="text-gray-600">
                                Contact us via phone, email, or our online form. We'll schedule a free consultation at your convenience.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative text-center animate-fade-in-up delay-200">
                            <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                                2
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Create Your Plan</h3>
                            <p className="text-gray-600">
                                We'll discuss your goals, needs, and NDIS plan to design personalized support that works for you.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative text-center animate-fade-in-up delay-300">
                            <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                                3
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Start Your Support</h3>
                            <p className="text-gray-600">
                                Match with your dedicated support team and begin working towards your goals with confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-muted to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 animate-fade-in-up">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">The EverCare Difference</h2>
                        <p className="text-lg text-gray-600">
                            What sets us apart as a trusted NDIS provider in Victoria.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Nurse-Led Care</h3>
                            <p className="text-gray-600">Our team is led by registered nurses with extensive disability care experience.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
                            <p className="text-gray-600">Support when you need it, whether that's weekdays, weekends, or after hours.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">NDIS Registered</h3>
                            <p className="text-gray-600">Fully registered and compliant with all NDIS quality and safeguarding standards.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Personalized Support</h3>
                            <p className="text-gray-600">Every support plan is tailored to your unique goals, preferences, and lifestyle.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Cultural Diversity</h3>
                            <p className="text-gray-600">We respect and celebrate diversity, offering culturally sensitive support services.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Transparent Reporting</h3>
                            <p className="text-gray-600">Clear communication and regular progress reports to keep you informed.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 sm:py-20 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 animate-fade-in-up">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
                        <p className="text-lg text-gray-600">
                            Hearing from our participants and their families drives everything we do.
                        </p>
                    </div>
                    <TestimonialsList />
                </div>
            </section>

            {/* Why Choose Us Section */}
            <WhyChooseUs />

            {/* FAQ Section */}
            <FAQ />

            {/* CTA Section */}
            <CTASection />
        </div>
    );
}
