import Image from "next/image";

export default function TeamSection() {
    const team = [
        {
            name: "Sarah Jenkins",
            role: "Clinical Director & Founder",
            bio: "With over 15 years of nursing experience, Sarah founded EverCare to bridge the gap between clinical excellence and compassionate community support.",
            image: "/images/about-team.png", // Using the existing image as a placeholder or we can use a specific one if available
        },
        {
            name: "David Chen",
            role: "Senior Support Coordinator",
            bio: "David specializes in complex support coordination, helping participants navigate their plans and connect with the right services to achieve their goals.",
            image: "/images/about-team.png",
        },
        {
            name: "Maria Rodriguez",
            role: "Community Access Manager",
            bio: "Maria is passionate about inclusive community participation. She organizes our group activities and ensures everyone feels welcome and valued.",
            image: "/images/about-team.png",
        },
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
                    <p className="text-lg text-gray-600">
                        Dedicated professionals committed to your well-being.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {team.map((member, index) => (
                        <div key={index} className="text-center group">
                            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-emerald-50 group-hover:border-primary transition-colors duration-300">
                                {/* 
                  In a real app, we would have individual images. 
                  For now, using the about-team image as a placeholder or generic avatar.
                  Ideally, we should generate specific avatars.
                */}
                                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                            <p className="text-primary font-medium mb-4">{member.role}</p>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {member.bio}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
