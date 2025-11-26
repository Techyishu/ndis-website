import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Accessibility | EverCare Community Support",
    description: "Our commitment to ensuring our website is accessible to everyone, including people with disabilities.",
};

export default function AccessibilityPage() {
    return (
        <div className="bg-white py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Accessibility</h1>
                <div className="space-y-8 text-gray-600">
                    <p className="text-lg leading-relaxed">
                        EverCare Community Support is committed to ensuring that our website is accessible to everyone, including people with disabilities. We strive to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Accessibility Features</h2>
                        <p className="text-lg leading-relaxed mb-4">
                            We have implemented the following features to improve accessibility:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                            <li>Clear and consistent navigation</li>
                            <li>Descriptive text alternatives for images (alt text)</li>
                            <li>Sufficient color contrast for text readability</li>
                            <li>Keyboard navigation support</li>
                            <li>Scalable text sizes</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Feedback</h2>
                        <p className="text-lg leading-relaxed mb-4">
                            We welcome your feedback on the accessibility of our website. If you encounter any barriers or have suggestions for improvement, please contact us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                            <li>Email: hello@evercare.com.au</li>
                            <li>Phone: 1300 000 000</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
