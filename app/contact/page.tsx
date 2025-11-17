"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Connect
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We're so glad you're here. Whether you are a participant or family member looking for
            support, a support coordinator with a referral, or someone passionate about a career in care,
            this is the right place.
          </p>
        </div>
      </section>

      {/* Acknowledgement of Country & Inclusion */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Commitment to Respect & Inclusion
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Acknowledgement of Country
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  EverCare Community Support (ECS) respectfully acknowledges the Traditional Custodians of the lands on which we work and live across Victoria. We pay our deepest respects to Elders past, present, and emerging. We extend this respect to all Aboriginal and Torres Strait Islander peoples and are committed to building a culturally safe service.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  A Welcoming Space for All
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  We are a safe, welcoming, and inclusive service for everyone. We proudly support participants from all cultural backgrounds, all faiths, all abilities, and all identities, including the LGBTQIA+ community. Our company was built on a foundation of cultural understanding and mutual respect.
                </p>
                <p className="text-gray-900 leading-relaxed mt-2 font-semibold">
                  You will be seen, heard, and supported here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              For Participants, Families & Support Coordinators
            </h2>
            <p className="text-lg text-gray-700">
              This is the first step. Contact our friendly team for a free, no-obligation chat.
            </p>
          </div>
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-md">
            {submitStatus === "success" && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                There was an error submitting your form. Please try again.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                  placeholder="04XX XXX XXX"
                />
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-900 mb-2">
                  I am a... <span className="text-red-500">*</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors bg-white"
                >
                  <option value="">Please select...</option>
                  <option value="participant">NDIS Participant</option>
                  <option value="family">Family Member</option>
                  <option value="support-coordinator">Support Coordinator</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Other Contact Methods */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Other Ways to Reach Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
              <a href="tel:1300000000" className="text-emerald-600 hover:text-emerald-700 font-semibold text-lg">
                1300 XXX XXX
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
              <a href="mailto:hello@everecare.com.au" className="text-emerald-600 hover:text-emerald-700 font-semibold text-lg">
                hello@everecare.com.au
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 p-8 md:p-12 rounded-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              For Career & Job Opportunities
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Are you a compassionate, reliable, and professional person who is passionate about
              empowering others?
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our team is the heart of EverCare Community Support. As a nurse-led company, we are
              building a team of the very best support workers, coordinators, and allied health
              professionals. We offer a supportive, respectful, and flexible work environment.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-semibold">
              If you share our values, we would love to hear from you.
            </p>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">How to Apply</h4>
              <p className="text-gray-700 mb-4">
                To express your interest in joining the ECS team, please email your resume
                and a short cover letter to:
              </p>
              <a
                href="mailto:careers@everecare.com.au"
                className="text-emerald-600 hover:text-emerald-700 font-semibold text-lg"
              >
                careers@everecare.com.au
              </a>
              <p className="text-sm text-gray-600 mt-4 italic">
                (Please note: This email address is for career enquiries only. All new participant and NDIS enquiries should use the form above.)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
