import Link from "next/link";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NDIS Core Supports Melbourne & Victoria | Daily Living Assistance | EverCare",
    description: "NDIS core supports in Melbourne and Victoria. Daily living assistance, household tasks, personal care, community participation, and transport support. Professional NDIS registered provider serving greater Melbourne.",
    keywords: "NDIS core supports Melbourne, daily living assistance Victoria, NDIS personal care Melbourne, household tasks support, community participation NDIS, NDIS transport support Victoria",
};

export default function CoreSupportsPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-6 animate-fade-in-up text-white">
                        Core Supports
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up delay-100">
                        Essential assistance to help you with everyday activities and maintain your independence.
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
                                    <li>
                                        <a href="#daily-living" className="block text-gray-600 hover:text-primary transition-colors py-2 border-b border-gray-200">
                                            Assistance with Daily Life
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#household" className="block text-gray-600 hover:text-primary transition-colors py-2 border-b border-gray-200">
                                            Household Tasks
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#community" className="block text-gray-600 hover:text-primary transition-colors py-2 border-b border-gray-200">
                                            Community Participation
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#transport" className="block text-gray-600 hover:text-primary transition-colors py-2">
                                            Transport Support
                                        </a>
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <Link href="/contact" className="btn btn-primary w-full text-center text-white">
                                        Get Support Now
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="lg:col-span-2 space-y-16">
                            {/* Daily Living */}
                            <div id="daily-living" className="scroll-mt-24">
                                <div className="relative h-[300px] rounded-xl overflow-hidden mb-6 shadow-lg">
                                    <ImagePlaceholder
                                        src="/images/services-core.png"
                                        alt="Assistance with Daily Life"
                                        width={800}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h2 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">Assistance with Daily Life</h2>
                                <p className="text-lg text-gray-600 mb-4">
                                    We provide flexible support with personal care and daily activities to help you live as independently as possible at home.
                                </p>
                                <ul className="space-y-2 text-gray-700 list-disc list-inside marker:text-secondary">
                                    <li>Personal hygiene and grooming</li>
                                    <li>Dressing and getting ready for the day</li>
                                    <li>Meal preparation and assistance with eating</li>
                                    <li>Medication reminders and administration</li>
                                    <li>Mobility and transfer assistance</li>
                                </ul>
                            </div>

                            {/* Household Tasks */}
                            <div id="household" className="scroll-mt-24">
                                <h2 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">Household Tasks</h2>
                                <p className="text-lg text-gray-600 mb-4">
                                    Keeping your home clean and organized is important for your wellbeing. Our team can assist with a range of domestic chores.
                                </p>
                                <ul className="space-y-2 text-gray-700 list-disc list-inside marker:text-secondary">
                                    <li>General cleaning and tidying</li>
                                    <li>Laundry and ironing</li>
                                    <li>Changing bed linen</li>
                                    <li>Grocery shopping and meal planning</li>
                                    <li>Gardening and basic home maintenance</li>
                                </ul>
                            </div>

                            {/* Community Participation */}
                            <div id="community" className="scroll-mt-24">
                                <div className="relative h-[300px] rounded-xl overflow-hidden mb-6 shadow-lg">
                                    <ImagePlaceholder
                                        src="/images/core-community.png"
                                        alt="Community Participation"
                                        width={800}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h2 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">Community Participation</h2>
                                <p className="text-lg text-gray-600 mb-4">
                                    Stay connected and active in your community. We support you to join in social activities, clubs, and events that you enjoy.
                                </p>
                                <ul className="space-y-2 text-gray-700 list-disc list-inside marker:text-secondary">
                                    <li>Attending social groups and clubs</li>
                                    <li>Going to the movies, concerts, or sporting events</li>
                                    <li>Visiting the library or museum</li>
                                    <li>Participating in recreational activities</li>
                                    <li>Volunteering or work experience support</li>
                                </ul>
                            </div>

                            {/* Transport */}
                            <div id="transport" className="scroll-mt-24">
                                <h2 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">Transport Support</h2>
                                <p className="text-lg text-gray-600 mb-4">
                                    Getting around safely is key to independence. We offer transport assistance to help you get to appointments, work, or social outings.
                                </p>
                                <ul className="space-y-2 text-gray-700 list-disc list-inside marker:text-secondary">
                                    <li>Transport to medical appointments</li>
                                    <li>Travel training to use public transport</li>
                                    <li>Driving you to shopping or activities</li>
                                    <li>Assistance with vehicle modifications (if applicable)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-900 mb-6">Need help with Core Supports?</h2>
                    <p className="text-xl text-gray-600 mb-10">
                        Contact us today to discuss how we can tailor our services to your NDIS plan.
                    </p>
                    <Link href="/contact" className="btn btn-accent text-lg px-10 py-4 text-white">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
}
