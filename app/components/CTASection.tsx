import Link from "next/link";

interface CTASectionProps {
    heading?: string;
    subheading?: string;
    button1Text?: string;
    button1Link?: string;
    button2Text?: string;
    button2Link?: string;
}

export default function CTASection({
    heading = "Ready to Live Life Your Way?",
    subheading = "Let's have a friendly chat about your goals. No pressure, just genuine help.",
    button1Text = "Start Free Consultation",
    button1Link = "/contact",
    button2Text = "Call 03 7303 7203",
    button2Link = "tel:0373037203",
}: CTASectionProps) {
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4C43A0 0%, #60439F 50%, #026189 100%)' }}>
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-white/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-white leading-tight" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.2)' }}>
                    {heading}
                </h2>
                <p className="text-sm sm:text-base md:text-base text-white/95 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-2" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.15)' }}>
                    {subheading}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                    <Link
                        href={button1Link}
                        className="group inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-bold rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-white/30 text-white"
                        style={{
                            background: 'linear-gradient(135deg, #0F897D 0%, #087173 100%)',
                            boxShadow: '0 8px 32px rgba(15, 137, 125, 0.4)'
                        }}
                    >
                        {button1Text}
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                    <Link
                        href={button2Link}
                        className="group inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-bold bg-white rounded-xl shadow-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-white/50"
                        style={{ color: '#026189' }}
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {button2Text}
                    </Link>
                </div>
            </div>
        </section>
    );
}
