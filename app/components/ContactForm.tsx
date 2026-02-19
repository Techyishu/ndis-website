"use client";

import { useState, useEffect } from "react";
import { InquiryType } from "@/lib/types";

export default function ContactForm() {
    const [inquiryTypes, setInquiryTypes] = useState<InquiryType[]>([]);

    useEffect(() => {
        fetch("/api/inquiry-types")
            .then((res) => (res.ok ? res.json() : []))
            .then((data) => setInquiryTypes(data))
            .catch(() => setInquiryTypes([]));
    }, []);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const [submitting, setSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    inquiryType: "",
                    message: "",
                });
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-primary to-primary-dark px-6 sm:px-8 py-6 sm:py-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Get in Touch</h3>
                <p className="text-white/90 text-sm sm:text-base">
                    Fill out the form below and we'll get back to you within 24 hours
                </p>
            </div>

            {/* Card Content */}
            <div className="p-6 sm:p-8">
                {submitStatus === "success" && (
                    <div className="mb-6 flex items-start gap-3 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                            <p className="font-semibold">Success!</p>
                            <p className="text-sm">Thank you for your message! We'll get back to you soon.</p>
                        </div>
                    </div>
                )}
                {submitStatus === "error" && (
                    <div className="mb-6 flex items-start gap-3 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <div>
                            <p className="font-semibold">Error!</p>
                            <p className="text-sm">There was an error submitting your form. Please try again.</p>
                        </div>
                    </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Full Name */}
                        <div className="space-y-2">
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-900">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-900 placeholder:text-gray-400 text-base"
                                    placeholder="John Doe"
                                    aria-required="true"
                                    aria-label="Full name"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-900 placeholder:text-gray-400 text-base"
                                    placeholder="john@example.com"
                                    aria-required="true"
                                    aria-label="Email address"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Phone */}
                        <div className="space-y-2">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-900 placeholder:text-gray-400 text-base"
                                placeholder="04XX XXX XXX"
                                aria-required="true"
                                aria-label="Phone number"
                            />
                        </div>

                        {/* Inquiry Type */}
                        <div className="space-y-2">
                            <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-900">
                                I am a... <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="inquiryType"
                                name="inquiryType"
                                required
                                value={formData.inquiryType}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white text-gray-900 text-base"
                                aria-required="true"
                                aria-label="Inquiry type"
                            >
                                <option value="">Please select...</option>
                                {inquiryTypes.length > 0 ? (
                                    inquiryTypes.map((type) => (
                                        <option key={type.id} value={type.value}>{type.label}</option>
                                    ))
                                ) : (
                                    <>
                                        <option value="participant">NDIS Participant</option>
                                        <option value="family">Family Member</option>
                                        <option value="support-coordinator">Support Coordinator</option>
                                        <option value="other">Other</option>
                                    </>
                                )}
                            </select>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                            Your Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none text-gray-900 placeholder:text-gray-400 text-base"
                            placeholder="Tell us how we can help you..."
                            aria-required="true"
                            aria-label="Your message"
                        />
                        <p className="text-xs text-gray-500">Minimum 10 characters required</p>
                    </div>

                    {/* Submit Button - Enhanced CTA */}
                    <button
                        type="submit"
                        disabled={submitting}
                        className="w-full btn btn-accent text-white text-lg sm:text-xl md:text-2xl py-5 sm:py-6 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 font-extrabold min-h-[64px]"
                        aria-label={submitting ? "Submitting your message" : "Submit contact form"}
                    >
                        {submitting ? (
                            <>
                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                            </>
                        ) : (
                            <>
                                Send Message
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </>
                        )}
                    </button>
                </form>
            </div>

            {/* Card Footer */}
            <div className="bg-gray-50 px-6 sm:px-8 py-4 border-t border-gray-200">
                <p className="text-xs sm:text-sm text-gray-600 text-center">
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> and{" "}
                    <a href="/terms" className="text-primary hover:underline">Terms of Service</a>
                </p>
            </div>
        </div>
    );
}
