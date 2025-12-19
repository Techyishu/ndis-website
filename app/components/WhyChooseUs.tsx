import Link from "next/link";

export default function WhyChooseUs() {
    const features = [
        {
            title: "Nurse-Led Care",
            description: "Our team is led by experienced nurses, ensuring clinical excellence and safety in every support we provide.",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            color: "bg-primary",
        },
        {
            title: "Tailored to You",
            description: "We don't believe in one-size-fits-all. Your plan is customized to your unique goals, preferences, and lifestyle.",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            ),
            color: "bg-secondary",
        },
        {
            title: "Local & Accessible",
            description: "Based in Victoria, we know the local community and resources, making it easier to connect you with what you need.",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            color: "bg-accent",
        },
        {
            title: "Transparent & Honest",
            description: "No hidden fees or confusing jargon. We communicate clearly and honestly about your funding and services.",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: "bg-primary-light",
        },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
                    <p className="text-lg sm:text-xl text-gray-700 font-medium">
                        We combine professional expertise with a personal touch to deliver support that truly makes a difference.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 sm:p-10 hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-primary/30 hover:-translate-y-2">
                            <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
