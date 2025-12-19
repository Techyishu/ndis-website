import { Metadata } from 'next';
import Section from '../components/Section';
import Accordion from '../components/Accordion';
import Button from '../components/Button';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions | EverCare Community Support',
    description: 'Find answers to common questions about our NDIS services, eligibility, pricing, service areas, and how to get started with EverCare Community Support.',
};

const faqData = [
    {
        id: 'what-is-ndis',
        title: 'What is the NDIS and am I eligible?',
        content: (
            <>
                <p>The National Disability Insurance Scheme (NDIS) provides support to Australians with permanent and significant disability. You may be eligible if you:</p>
                <ul className="list-disc ml-6 mt-3 space-y-2">
                    <li>Are under 65 years old</li>
                    <li>Are an Australian citizen, permanent resident, or hold a Protected Special Category Visa</li>
                    <li>Live in Australia</li>
                    <li>Have a permanent and significant disability that affects your ability to take part in everyday activities</li>
                </ul>
                <p className="mt-3">
                    For detailed eligibility criteria, visit the{' '}
                    <a href="https://www.ndis.gov.au/understanding/am-i-eligible" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark underline">
                        official NDIS website
                    </a>.
                </p>
            </>
        ),
    },
    {
        id: 'how-to-start',
        title: 'How do I get started with EverCare?',
        content: (
            <>
                <p>Getting started is simple:</p>
                <ol className="list-decimal ml-6 mt-3 space-y-2">
                    <li><strong>Contact us</strong> via phone (03 7303 7203), email, or our online contact form</li>
                    <li><strong>Free consultation</strong> - We'll discuss your needs, goals, and NDIS plan</li>
                    <li><strong>Service agreement</strong> - We'll create a personalized support plan</li>
                    <li><strong>Start support</strong> - We'll match you with qualified support workers and begin services</li>
                </ol>
                <p className="mt-3">You don't need a formal referral - simply reach out and we'll guide you through the process.</p>
            </>
        ),
    },
    {
        id: 'service-areas',
        title: 'What areas do you service?',
        content: (
            <p>
                EverCare Community Support provides services across Melbourne and greater Victoria.
                We work with participants in metro Melbourne, regional Victoria, and surrounding areas.
                Contact us to confirm we service your specific location.
            </p>
        ),
    },
    {
        id: 'pricing',
        title: 'How much do your services cost?',
        content: (
            <>
                <p>
                    Our services are charged according to the NDIS Price Guide and Support Catalogue.
                    Pricing depends on:
                </p>
                <ul className="list-disc ml-6 mt-3 space-y-2">
                    <li>The type of support required</li>
                    <li>Time of day (weekday, evening, weekend, public holiday)</li>
                    <li>Whether supports are center-based or in-home</li>
                    <li>Your individual NDIS plan budget</li>
                </ul>
                <p className="mt-3">
                    We'll provide transparent pricing during your consultation and ensure all costs align with your NDIS plan.
                </p>
            </>
        ),
    },
    {
        id: 'ndis-plan-required',
        title: 'Do I need an NDIS plan to use your services?',
        content: (
            <p>
                Yes, you'll need an approved NDIS plan to access our funded services. If you don't have a plan yet,
                we can guide you through the application process. We can also assist with plan reviews and
                support coordination to help you make the most of your funding.
            </p>
        ),
    },
    {
        id: 'services-offered',
        title: 'What types of services do you provide?',
        content: (
            <>
                <p>We offer a comprehensive range of NDIS supports, including:</p>
                <ul className="list-disc ml-6 mt-3 space-y-2">
                    <li><strong>Core Supports:</strong> Daily living assistance, household tasks, community access, transport</li>
                    <li><strong>Capacity Building:</strong> Skill development, support coordination, health and wellbeing support</li>
                    <li><strong>Nursing Care:</strong> Professional nurse-led health support and medication management</li>
                    <li><strong>Social & Community Participation:</strong> Group activities, community engagement, skill-building programs</li>
                </ul>
                <p className="mt-3">Visit our <a href="/services" className="text-primary hover:text-primary-dark underline">Services page</a> for detailed information.</p>
            </>
        ),
    },
    {
        id: 'cancellation-policy',
        title: 'What is your cancellation policy?',
        content: (
            <>
                <p>We understand that circumstances change. Our cancellation policy:</p>
                <ul className="list-disc ml-6 mt-3 space-y-2">
                    <li><strong>More than 7 days notice:</strong> No cancellation fee</li>
                    <li><strong>2-7 days notice:</strong> May incur a small cancellation fee as per NDIS guidelines</li>
                    <li><strong>Less than 2 days notice:</strong> Standard short notice cancellation fees apply</li>
                    <li><strong>Emergency situations:</strong> Handled case-by-case with compassion and flexibility</li>
                </ul>
                <p className="mt-3">Full details will be provided in your service agreement.</p>
            </>
        ),
    },
    {
        id: 'support-workers',
        title: 'How are your support workers selected and trained?',
        content: (
            <>
                <p>All EverCare support workers undergo rigorous selection and training:</p>
                <ul className="list-disc ml-6 mt-3 space-y-2">
                    <li>NDIS Worker Screening Check clearance</li>
                    <li>Working with Children Check (where applicable)</li>
                    <li>First Aid and CPR certification</li>
                    <li>Disability awareness and person-centered care training</li>
                    <li>Ongoing professional development and supervision</li>
                </ul>
                <p className="mt-3">We carefully match support workers to your needs, preferences, and personality.</p>
            </>
        ),
    },
    {
        id: 'feedback-complaints',
        title: 'How can I provide feedback or make a complaint?',
        content: (
            <>
                <p>Your feedback helps us improve. You can:</p>
                <ul className="list-disc ml-6 mt-3 space-y-2">
                    <li><strong>Phone:</strong> 03 7303 7203</li>
                    <li><strong>Email:</strong> support@evercarecommunity.com.au</li>
                    <li><strong>In writing:</strong> Mail to our Melbourne office</li>
                    <li><strong>In person:</strong> Speak with your support coordinator</li>
                </ul>
                <p className="mt-3">
                    All complaints are taken seriously, investigated promptly, and handled confidentially.
                    If you're not satisfied with our response, you can contact the{' '}
                    <a href="https://www.ndiscommission.gov.au/about/complaints" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark underline">
                        NDIS Quality and Safeguards Commission
                    </a>.
                </p>
                <p className="mt-3">
                    Learn more on our <a href="/compliance" className="text-primary hover:text-primary-dark underline">Compliance & Standards page</a>.
                </p>
            </>
        ),
    },
    {
        id: 'privacy-confidentiality',
        title: 'How is my privacy and confidentiality protected?',
        content: (
            <p>
                We take privacy seriously and comply with the Privacy Act 1988 and NDIS Practice Standards.
                Your personal information is stored securely,  only shared with your consent (or as legally required),
                and used solely to provide quality support services.
                Read our <a href="/privacy" className="text-primary hover:text-primary-dark underline">Privacy Policy</a> for full details.
            </p>
        ),
    },
];

export default function FAQ() {
    return (
        <>
            <Section
                title="Frequently Asked Questions"
                description="Find answers to common questions about EverCare's NDIS support services"
                variant="warm"
            >
                <div className="max-w-4xl mx-auto">
                    <Accordion items={faqData} allowMultiple />

                    <div className="mt-12 text-center bg-white rounded-2xl p-8 sm:p-10 shadow-md border border-border">
                        <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Our friendly team is here to help. Get in touch and we'll answer any questions you might have.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="/contact" variant="accent" size="lg">
                                Contact Us
                            </Button>
                            <Button href="tel:0373037203" variant="outline" size="lg">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call 03 7303 7203
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
