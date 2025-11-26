import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | EverCare Community Support",
    description: "Our commitment to protecting your privacy and personal information in accordance with the NDIS Practice Standards.",
};

export default function PrivacyPage() {
    return (
        <div className="bg-white py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
                <div className="space-y-8 text-gray-600">
                    <p className="text-lg">Last updated: November 2025</p>
                    <p className="text-lg leading-relaxed">
                        At EverCare Community Support, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, and safeguard your data in accordance with the Privacy Act 1988 (Cth) and the NDIS Practice Standards.
                    </p>
                    
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                        <p className="text-lg leading-relaxed mb-4">
                        We collect personal information that is necessary to provide you with NDIS services. This may include:
                    </p>
                        <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                        <li>Name, contact details, and date of birth</li>
                        <li>NDIS number and plan details</li>
                        <li>Health information and disability support needs</li>
                        <li>Emergency contact details</li>
                    </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                        <p className="text-lg leading-relaxed mb-4">
                        We use your information to:
                    </p>
                        <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                        <li>Deliver safe and effective NDIS supports</li>
                        <li>Communicate with you and your support network</li>
                        <li>Meet our legal and reporting obligations</li>
                        <li>Improve our services</li>
                    </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
                        <p className="text-lg leading-relaxed">
                        We take reasonable steps to protect your personal information from misuse, loss, unauthorized access, modification, or disclosure. Your data is stored securely and only accessed by authorized staff.
                    </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Contact Us</h2>
                        <p className="text-lg leading-relaxed">
                        If you have any questions about our privacy practices or wish to access your personal information, please contact us at privacy@evercare.com.au.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
