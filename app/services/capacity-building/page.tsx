import Link from "next/link";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import { ServiceDetail } from "@/lib/types";

export const metadata: Metadata = {
    title: "Capacity Building | Support Coordination & Skills | EverCare",
    description: "Expert Support Coordination and skill development services. Building your capacity to manage your NDIS plan and achieve your life goals.",
    keywords: "NDIS capacity building Melbourne, support coordination Victoria, NDIS skill development, NDIS employment support Melbourne, therapy support Victoria, NDIS health wellbeing",
};

export default async function CapacityBuildingPage() {
    const { data } = await supabase
        .from("service_details")
        .select("*")
        .eq("service_type", "capacity")
        .eq("is_active", true)
        .order("display_order", { ascending: true });

    const sections: ServiceDetail[] = (data as ServiceDetail[]) || [];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-r from-secondary to-secondary-dark text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-6 animate-fade-in-up text-white">
                        Capacity Building
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up delay-100">
                        Empowering you with the skills and confidence to achieve your long-term goals.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 sm:py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Sidebar Navigation */}
                        <div className="lg:col-span-1">
                            <div className="bg-gray-50 p-6 rounded-xl sticky top-24">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">In This Section</h3>
                                <ul className="space-y-2">
                                    {sections.length > 0 ? (
                                        sections.map((section, i) => {
                                            const anchor = section.section_title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
                                            return (
                                                <li key={section.id}>
                                                    <a
                                                        href={`#${anchor}`}
                                                        className={`block text-gray-600 hover:text-secondary transition-colors py-2 ${i < sections.length - 1 ? "border-b border-gray-200" : ""}`}
                                                    >
                                                        {section.section_title}
                                                    </a>
                                                </li>
                                            );
                                        })
                                    ) : (
                                        <>
                                            <li><a href="#skills" className="block text-gray-600 hover:text-secondary transition-colors py-2 border-b border-gray-200">Skill Development</a></li>
                                            <li><a href="#health" className="block text-gray-600 hover:text-secondary transition-colors py-2 border-b border-gray-200">Health & Wellbeing</a></li>
                                            <li><a href="#coordination" className="block text-gray-600 hover:text-secondary transition-colors py-2 border-b border-gray-200">Support Coordination</a></li>
                                            <li><a href="#employment" className="block text-gray-600 hover:text-secondary transition-colors py-2">Employment Support</a></li>
                                        </>
                                    )}
                                </ul>
                                <div className="mt-8">
                                    <Link href="/contact" className="btn btn-secondary w-full text-center text-white">
                                        Enquire Now
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="lg:col-span-2 space-y-16">
                            {sections.length > 0 ? (
                                sections.map((section) => {
                                    const anchor = section.section_title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
                                    return (
                                        <div key={section.id} id={anchor} className="scroll-mt-24">
                                            {section.image_url && (
                                                <div className="relative h-[300px] rounded-xl overflow-hidden mb-6 shadow-lg">
                                                    <ImagePlaceholder
                                                        src={section.image_url}
                                                        alt={section.section_title}
                                                        width={800}
                                                        height={400}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            )}
                                            <h2 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">{section.section_title}</h2>
                                            <p className="text-lg text-gray-600 mb-4">{section.section_description}</p>
                                            {Array.isArray(section.items) && section.items.length > 0 && (
                                                <ul className="space-y-2 text-gray-700 list-disc list-inside marker:text-secondary">
                                                    {section.items.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    );
                                })
                            ) : (
                                <>
                                    <div id="skills" className="scroll-mt-24">
                                        <div className="relative h-[300px] rounded-xl overflow-hidden mb-6 shadow-lg">
                                            <ImagePlaceholder src="/images/inclusive-education-concept.jpg" alt="Inclusive education and skill development support" width={800} height={400} className="w-full h-full object-cover" />
                                        </div>
                                        <h2 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">Skill Development & Training</h2>
                                        <p className="text-lg text-gray-600 mb-4">We focus on building your independence through targeted training and development.</p>
                                        <ul className="space-y-2 text-gray-700 list-disc list-inside marker:text-secondary">
                                            <li>Life skills training (cooking, cleaning, budgeting)</li>
                                            <li>Social skills development</li>
                                            <li>Technology and computer literacy</li>
                                            <li>Travel training</li>
                                            <li>Decision making and problem solving</li>
                                        </ul>
                                    </div>
                                    <div id="health" className="scroll-mt-24">
                                        <h2 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">Health & Wellbeing</h2>
                                        <p className="text-lg text-gray-600 mb-4">Your physical and mental health are our priority. We connect you with allied health professionals.</p>
                                        <ul className="space-y-2 text-gray-700 list-disc list-inside marker:text-secondary">
                                            <li>Exercise physiology and personal training</li>
                                            <li>Dietetics and nutrition advice</li>
                                            <li>Psychology and counseling support</li>
                                            <li>Nursing care plans</li>
                                        </ul>
                                    </div>
                                    <div id="coordination" className="scroll-mt-24">
                                        <div className="relative h-[300px] rounded-xl overflow-hidden mb-6 shadow-lg">
                                            <ImagePlaceholder src="/images/capacity-coordination.png" alt="Support Coordination" width={800} height={400} className="w-full h-full object-cover" />
                                        </div>
                                        <h2 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">Support Coordination</h2>
                                        <p className="text-lg text-gray-600 mb-4">Navigating the NDIS can be complex. Our Support Coordinators help you understand your plan and connect with providers.</p>
                                        <ul className="space-y-2 text-gray-700 list-disc list-inside marker:text-secondary">
                                            <li>Understanding your NDIS plan</li>
                                            <li>Connecting with service providers</li>
                                            <li>Negotiating service agreements</li>
                                            <li>Preparing for plan reviews</li>
                                            <li>Crisis management and resolution</li>
                                        </ul>
                                    </div>
                                    <div id="employment" className="scroll-mt-24">
                                        <h2 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">Employment Support</h2>
                                        <p className="text-lg text-gray-600 mb-4">Finding and keeping a job is a major goal for many. We provide support to help you get work-ready.</p>
                                        <ul className="space-y-2 text-gray-700 list-disc list-inside marker:text-secondary">
                                            <li>Resume writing and interview preparation</li>
                                            <li>Job search assistance</li>
                                            <li>On-the-job support and coaching</li>
                                            <li>Workplace modifications advice</li>
                                        </ul>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-900 mb-6">Ready to build your capacity?</h2>
                    <p className="text-xl text-gray-600 mb-10">
                        Let&apos;s work together to achieve your goals and unlock your potential.
                    </p>
                    <Link href="/contact" className="btn btn-accent text-lg px-10 py-4 text-white">
                        Start Today
                    </Link>
                </div>
            </section>
        </div>
    );
}
