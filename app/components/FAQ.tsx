"use client";

import { useState } from "react";

export default function FAQ() {
    const faqs = [
        {
            question: "How do I get started with EverCare?",
            answer: "Getting started is easy! Simply contact us via our website form or give us a call. We'll arrange a free consultation to discuss your needs, review your NDIS plan, and explain how we can support you. Once you're happy, we'll set up a service agreement and start your support.",
        },
        {
            question: "Do you charge for travel?",
            answer: "We follow the NDIS Pricing Arrangements and Price Limits. We are transparent about any travel charges and will discuss them with you before commencing services. Generally, travel is charged when a support worker travels to you or accompanies you in the community.",
        },
        {
            question: "Can I choose my support worker?",
            answer: "Absolutely. We believe the relationship between you and your support worker is crucial. We try our best to match you with someone who shares your interests and understands your needs. If you're not happy with a match, we'll work to find someone else.",
        },
        {
            question: "What areas do you service?",
            answer: "We currently provide services across the greater Melbourne area and select regional locations in Victoria. Please contact us to check if we have support workers available in your specific suburb.",
        },
        {
            question: "Are you a registered NDIS provider?",
            answer: "Yes, EverCare Community Support is a registered NDIS provider. This means we meet strict government quality and safety standards, giving you peace of mind about the care you receive.",
        },
        {
            question: "What is your complaint and feedback process?",
            answer: "We take all feedback seriously. You can submit complaints via our website, phone, or email. We follow the NDIS Practice Standards and will acknowledge your complaint within 24 hours and work to resolve it within 28 days. All complaints are handled confidentially and in accordance with the NDIS Code of Conduct.",
        },
        {
            question: "How do you ensure participant safety?",
            answer: "All our staff undergo comprehensive background checks, including Working with Children Checks and NDIS Worker Screening. We follow strict safety protocols, conduct regular risk assessments, and maintain detailed incident reporting in line with NDIS Practice Standards. Your safety is our top priority.",
        },
        {
            question: "Can I use my NDIS plan funding with you?",
            answer: "Yes, as a registered NDIS provider, we can work with all types of NDIS plan funding including plan-managed, agency-managed, and self-managed plans. We'll help you understand your funding and ensure services align with your plan goals.",
        },
        {
            question: "What happens if I'm not satisfied with a service?",
            answer: "Your satisfaction is important to us. If you're not happy with a service, please contact us immediately. We'll work with you to address concerns, make improvements, or find alternative solutions. You can also contact the NDIS Quality and Safeguards Commission if needed.",
        },
        {
            question: "How do you protect my privacy and personal information?",
            answer: "We comply with the Privacy Act 1988 (Cth) and NDIS Practice Standards. All personal information is stored securely, accessed only by authorized staff, and used solely for providing your support services. You can access our full Privacy Policy on our website or request a copy at any time.",
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-muted to-white" aria-labelledby="faq-heading">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <h2 id="faq-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-700 font-medium">
                        Common questions about our services, the NDIS, and compliance.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md border-2 border-gray-100 hover:border-primary/30 overflow-hidden transition-all duration-300">
                            <button
                                className="w-full px-6 sm:px-8 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-4 focus:ring-primary/20 hover:bg-gray-50 transition-colors"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                                id={`faq-question-${index}`}
                            >
                                <span className="text-lg sm:text-xl font-bold text-gray-900 pr-4">{faq.question}</span>
                                <span className={`flex-shrink-0 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} aria-hidden="true">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                id={`faq-answer-${index}`}
                                role="region"
                                aria-labelledby={`faq-question-${index}`}
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-gray-700 leading-relaxed text-base sm:text-lg">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Compliance Information */}
                <div className="mt-12 sm:mt-16 bg-primary/5 rounded-2xl p-6 sm:p-8 border-2 border-primary/20">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance & Quality Assurance</h3>
                    <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg">
                        EverCare Community Support is a registered NDIS provider committed to the highest standards of quality and safety. We comply with:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-base sm:text-lg">
                        <li>NDIS Practice Standards and Quality Indicators</li>
                        <li>NDIS Code of Conduct</li>
                        <li>Privacy Act 1988 (Cth)</li>
                        <li>NDIS Worker Screening requirements</li>
                        <li>Work Health and Safety legislation</li>
                    </ul>
                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        <a href="/privacy" className="text-primary font-bold hover:underline text-base sm:text-lg">
                            View Privacy Policy →
                        </a>
                        <a href="/terms" className="text-primary font-bold hover:underline text-base sm:text-lg">
                            View Terms of Service →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
