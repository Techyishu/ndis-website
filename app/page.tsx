import Link from "next/link";
import Image from "next/image";
import DynamicHero from "./components/DynamicHero";
import TestimonialsList from "./components/TestimonialsList";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
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

            {/* About Snippet Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                        <div className="animate-fade-in-up">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                Compassionate Care, <span className="text-primary">Your Way</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                At EverCare Community Support, we believe that everyone deserves to live a life full of possibility and dignity. As a nurse-led NDIS provider, we bring a higher standard of care to your daily support.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We are more than just a service provider; we are your partners in achieving your goals. Whether it&apos;s daily living assistance or community participation, we are here to make your NDIS journey simple and empowering.
                            </p>
                            <Link href="/about" className="btn btn-secondary">
                                Read Our Story
                            </Link>
                        </div>
                        <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up delay-200 group">
                            <Image
                                src="/images/about-team.png"
                                alt="EverCare Community Support Team"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Decorative Badge */}
                            <div className="absolute top-6 right-6 bg-white rounded-xl shadow-lg p-4 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Care with Heart</p>
                                        <p className="text-xs text-gray-600">Since 2010</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
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

            {/* Stats Section */}
            <section className="py-10 sm:py-12 md:py-16 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
                        <div className="animate-fade-in-up">
                            <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary-light">500+</div>
                            <div className="text-gray-300 text-sm md:text-base">Participants Supported</div>
                        </div>
                        <div className="animate-fade-in-up delay-100">
                            <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary-light">15+</div>
                            <div className="text-gray-300 text-sm md:text-base">Years Experience</div>
                        </div>
                        <div className="animate-fade-in-up delay-200">
                            <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary-light">98%</div>
                            <div className="text-gray-300 text-sm md:text-base">Satisfaction Rate</div>
                        </div>
                        <div className="animate-fade-in-up delay-300">
                            <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary-light">24/7</div>
                            <div className="text-gray-300 text-sm md:text-base">Support Available</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
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
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
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
            <section className="py-12 sm:py-16 md:py-20 bg-white">
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
            <section className="py-12 sm:py-16 md:py-20 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                        We&apos;re here to answer your questions and help you navigate your NDIS plan. Let&apos;s chat about how we can support you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <Link href="/contact" className="btn btn-accent text-base sm:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 shadow-xl">
                            Contact Us Today
                        </Link>
                        <Link href="/services" className="btn bg-white text-primary hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4">
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
