import { Metadata } from 'next';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

export const metadata: Metadata = {
    title: 'Compliance & Standards | Quality Assurance | EverCare',
    description: 'Our commitment to NDIS Practice Standards, safety, and quality. Learn about our feedback processes and participant rights.',
};

export default function Compliance() {
    return (
        <>
            <Section
                title="Compliance & Standards"
                description="Our commitment to quality, safety, and continuous improvement"
                variant="warm"
            >
                <div className="max-w-5xl mx-auto space-y-8">
                    {/* NDIS Quality & Safeguards */}
                    <Card variant="warm" className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-3">NDIS Quality & Safeguards Compliance</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    EverCare Community is a registered NDIS provider, fully committed to meeting the{' '}
                                    <a href="https://www.ndiscommission.gov.au/providers/registered-ndis-providers/provider-obligations-and-requirements/ndis-practice-standards" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark underline">
                                        NDIS Practice Standards
                                    </a>{' '}
                                    and the{' '}
                                    <a href="https://www.ndiscommission.gov.au/about/ndis-code-conduct" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark underline">
                                        NDIS Code of Conduct
                                    </a>.
                                </p>

                                <h3 className="text-lg font-semibold mb-2">Our Commitments:</h3>
                                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                                    <li><strong>Rights & Respect:</strong> We uphold your rights to dignity, privacy, choice, and control</li>
                                    <li><strong>Person-Centered Care:</strong> Services are tailored to your individual goals and preferences</li>
                                    <li><strong>Safety & Wellbeing:</strong> Zero tolerance for violence, abuse, neglect, exploitation, and discrimination</li>
                                    <li><strong>Workforce Screening:</strong> All workers hold valid NDIS Worker Screening Checks and relevant qualifications</li>
                                    <li><strong>Continuous Improvement:</strong> Regular audits, training, and feedback-driven service enhancement</li>
                                    <li><strong>Transparent Communication:</strong> Clear information about services, costs, and your rights</li>
                                </ul>

                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    We undergo regular independent audits to maintain our NDIS registration and ensure we meet all quality and safeguarding requirements.
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* Accessibility Statement */}
                    <Card variant="warm" className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-3">Accessibility Statement</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    EverCare Community is committed to ensuring our services and digital presence are accessible to everyone, including people with disabilities.
                                </p>

                                <h3 className="text-lg font-semibold mb-2">Website Accessibility:</h3>
                                <p className="text-muted-foreground leading-relaxed mb-3">
                                    Our website is designed to meet{' '}
                                    <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark underline">
                                        Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
                                    </a>{' '}
                                    standards. This includes:
                                </p>
                                <ul className="list-disc ml-6 space-y-2 text-muted-foreground mb-4">
                                    <li>Keyboard navigation support for all interactive elements</li>
                                    <li>Screen reader compatibility with proper semantic HTML and ARIA labels</li>
                                    <li>Sufficient color contrast ratios (minimum 4.5:1 for normal text)</li>
                                    <li>Descriptive alternative text for images</li>
                                    <li>Clear, readable typography and consistent layout</li>
                                    <li>Support for browser zoom and text resizing</li>
                                    <li>Respect for user preferences (e.g., reduced motion)</li>
                                </ul>

                                <h3 className="text-lg font-semibold mb-2">Service Accessibility:</h3>
                                <p className="text-muted-foreground leading-relaxed mb-3">
                                    We strive to make our services accessible to all NDIS participants:
                                </p>
                                <ul className="list-disc ml-6 space-y-2 text-muted-foreground mb-4">
                                    <li>Flexible communication methods (phone, email, in-person, video)</li>
                                    <li>Culturally sensitive and inclusive practices</li>
                                    <li>Physical accessibility considerations for in-person meetings</li>
                                    <li>Plain language in all communications</li>
                                    <li>Interpreters and translators available upon request</li>
                                </ul>

                                <h3 className="text-lg font-semibold mb-2">Feedback on Accessibility:</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    If you experience any accessibility barriers or have suggestions for improvement, please contact us:
                                </p>
                                <div className="mt-3 space-y-1 text-muted-foreground">
                                    <p><strong>Email:</strong> <a href="mailto:support@evercarecommunity.com.au" className="text-primary hover:text-primary-dark underline">support@evercarecommunity.com.au</a></p>
                                    <p><strong>Phone:</strong> <a href="tel:0373037203" className="text-primary hover:text-primary-dark underline">03 7303 7203</a></p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Feedback & Complaints */}
                    <Card variant="warm" className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-3">Feedback & Complaints Process</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Your feedback is valuable and helps us improve our services. We welcome compliments, suggestions, and complaints - all feedback is taken seriously.
                                </p>

                                <h3 className="text-lg font-semibold mb-2">How to Provide Feedback:</h3>
                                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <div>
                                            <p className="font-semibold">Phone</p>
                                            <a href="tel:0373037203" className="text-primary hover:text-primary-dark">03 7303 7203</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <div>
                                            <p className="font-semibold">Email</p>
                                            <a href="mailto:support@evercarecommunity.com.au" className="text-primary hover:text-primary-dark break-all">support@evercarecommunity.com.au</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <div>
                                            <p className="font-semibold">In Person</p>
                                            <p className="text-muted-foreground text-sm">Speak with your support coordinator</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <div>
                                            <p className="font-semibold">Written</p>
                                            <p className="text-muted-foreground text-sm">Mail to our Melbourne office</p>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold mb-2">Our Complaints Process:</h3>
                                <ol className="list-decimal ml-6 space-y-2 text-muted-foreground mb-4">
                                    <li><strong>Acknowledgment:</strong> We'll acknowledge your complaint within 2 business days</li>
                                    <li><strong>Investigation:</strong> We'll investigate thoroughly and promptly</li>
                                    <li><strong>Resolution:</strong> We'll work with you to resolve the issue</li>
                                    <li><strong>Response:</strong> You'll receive a written response within 30 days</li>
                                    <li><strong>Follow-up:</strong> We'll check that you're satisfied with the outcome</li>
                                </ol>

                                <div className="bg-info/10 border-l-4 border-info rounded-r-lg p-4">
                                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                        </svg>
                                        External Complaints
                                    </h4>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        If you're not satisfied with how we handle your complaint, you can contact:
                                    </p>
                                    <p className="text-sm">
                                        <strong>NDIS Quality and Safeguards Commission</strong><br />
                                        <a href="tel:1800035544" className="text-primary hover:text-primary-dark">1800 035 544</a><br />
                                        <a href="https://www.ndiscommission.gov.au/about/complaints" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark underline">
                                            www.ndiscommission.gov.au/about/complaints
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* CTA */}
                    <div className="text-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 sm:p-10 border border-primary/20">
                        <h3 className="text-2xl font-bold mb-4">Questions about our standards?</h3>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                            We're transparent about our compliance and always happy to discuss how we maintain quality and safety.
                        </p>
                        <Button href="/contact" variant="accent" size="lg">
                            Get in Touch
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
