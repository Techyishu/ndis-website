import { Metadata } from 'next';
import Section from '../components/Section';
import Accordion from '../components/Accordion';
import Button from '../components/Button';
import { supabase } from '@/lib/supabase';

export const metadata: Metadata = {
    title: 'FAQ | NDIS Questions Answered | EverCare Community',
    description: 'Find answers to common NDIS questions. Learn about eligibility, funding, and how EverCare Community can support your journey.',
};

const fallbackFaqs = [
    { id: 'what-is-ndis', question: 'What is the NDIS and am I eligible?', answer: 'The National Disability Insurance Scheme (NDIS) provides support to Australians with permanent and significant disability. You may be eligible if you are under 65, an Australian citizen or permanent resident, live in Australia, and have a permanent and significant disability.' },
    { id: 'how-to-start', question: 'How do I get started with EverCare?', answer: 'Contact us via phone (03 7303 7203), email, or our online contact form. We will schedule a free consultation to discuss your needs and NDIS plan, then create a personalized service agreement and begin services.' },
    { id: 'service-areas', question: 'What areas do you service?', answer: 'EverCare Community provides services across Melbourne and greater Victoria, including metro Melbourne and regional areas. Contact us to confirm we service your specific location.' },
];

export default async function FAQ() {
    const { data } = await supabase
        .from('faq_items')
        .select('id, question, answer, display_order')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

    const faqs = data && data.length > 0 ? data : fallbackFaqs;

    const accordionItems = faqs.map((faq) => ({
        id: faq.id,
        title: faq.question,
        content: (
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{faq.answer}</p>
        ),
    }));

    return (
        <>
            <Section
                title="Frequently Asked Questions"
                description="Find answers to common questions about EverCare's NDIS support services"
                variant="warm"
            >
                <div className="max-w-4xl mx-auto">
                    <Accordion items={accordionItems} allowMultiple />

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
