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
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600">
                        Common questions about our services and the NDIS.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                            <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                                <span className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
