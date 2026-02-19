"use client";

import { useState, useEffect } from "react";
import { FaqItem } from "@/lib/types";

export default function FAQ() {
    const [faqs, setFaqs] = useState<FaqItem[]>([]);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        fetch("/api/faq")
            .then((res) => (res.ok ? res.json() : []))
            .then((data) => setFaqs(data))
            .catch(() => setFaqs([]));
    }, []);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-muted to-white" aria-labelledby="faq-heading">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <h2 id="faq-heading" className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base sm:text-base md:text-base text-gray-700 font-medium">
                        Common questions about our services, the NDIS, and compliance.
                    </p>
                </div>

                {faqs.length > 0 && (
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={faq.id || index} className="bg-white rounded-xl shadow-md border-2 border-gray-100 hover:border-primary/30 overflow-hidden transition-all duration-300">
                                <button
                                    className="w-full px-6 sm:px-8 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-4 focus:ring-primary/20 hover:bg-gray-50 transition-colors"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={openIndex === index}
                                    aria-controls={`faq-answer-${index}`}
                                    id={`faq-question-${index}`}
                                >
                                    <span className="text-base sm:text-base md:text-lg font-bold text-gray-900 pr-4">{faq.question}</span>
                                    <span className={`flex-shrink-0 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} aria-hidden="true">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-gray-700 leading-relaxed text-sm sm:text-base">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Compliance Information */}
                <div className="mt-12 sm:mt-16 bg-primary/5 rounded-2xl p-6 sm:p-8 border-2 border-primary/20">
                    <h3 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">Compliance & Quality Assurance</h3>
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                        EverCare Community is a registered NDIS provider committed to the highest standards of quality and safety. We comply with:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm sm:text-base">
                        <li>NDIS Practice Standards and Quality Indicators</li>
                        <li>NDIS Code of Conduct</li>
                        <li>Privacy Act 1988 (Cth)</li>
                        <li>NDIS Worker Screening requirements</li>
                        <li>Work Health and Safety legislation</li>
                    </ul>
                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        <a href="/privacy" className="text-primary font-bold hover:underline text-sm sm:text-base">
                            View Privacy Policy →
                        </a>
                        <a href="/terms" className="text-primary font-bold hover:underline text-sm sm:text-base">
                            View Terms of Service →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
