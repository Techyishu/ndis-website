import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | EverCare Community Support",
    description: "Terms and conditions for using the EverCare Community Support website.",
};

export default function TermsPage() {
    return (
        <div className="bg-white py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
                <div className="space-y-8 text-gray-600">
                    <p className="text-lg">Last updated: November 2025</p>
                    <p className="text-lg leading-relaxed">
                        Welcome to the EverCare Community Support website. By accessing or using our website, you agree to comply with and be bound by these Terms of Service.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Use of Website</h2>
                        <p className="text-lg leading-relaxed">
                            The content on this website is for general information purposes only. It is subject to change without notice. We do not provide medical advice via this website.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Intellectual Property</h2>
                        <p className="text-lg leading-relaxed">
                            This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Limitation of Liability</h2>
                        <p className="text-lg leading-relaxed">
                            Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Governing Law</h2>
                        <p className="text-lg leading-relaxed">
                            Your use of this website and any dispute arising out of such use of the website is subject to the laws of Victoria, Australia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
