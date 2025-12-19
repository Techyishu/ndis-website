import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | EverCare Community Support | NDIS Provider Melbourne Victoria",
    description: "EverCare Community Support privacy policy. Learn how we protect your personal information in accordance with the Privacy Act 1988 (Cth) and Australian Privacy Principles (APPs). NDIS registered provider in Melbourne and Victoria.",
};

export default function PrivacyPage() {
    return (
        <div className="bg-white py-16 sm:py-20 md:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        🛡️ Privacy Policy
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 mb-2">
                        <strong>Evercare Community Support (ECS)</strong>
                    </p>
                    <p className="text-base sm:text-lg text-gray-500">
                        Last updated: 29th May 2025
                    </p>
                </div>

                {/* Introduction */}
                <div className="bg-muted/50 rounded-xl p-6 sm:p-8 border-l-4 border-primary mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                    <p className="text-lg leading-relaxed">
                        Evercare Community Support (ECS) and its related entities (collectively referred to as <strong>ECS</strong>, <strong>we</strong>, <strong>us</strong>, and <strong>our</strong>) are committed to protecting your privacy and handling your personal information with care and respect. This Policy explains how we manage your information, aligning with our legal obligations under the <strong>Privacy Act 1988 (Cth)</strong>, specifically the <strong>Australian Privacy Principles (APPs)</strong>.
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                        This Policy is designed to be clear and easy to understand. By engaging with ECS, you agree to the collection, holding, use, and disclosure of your personal information as described in this document.
                    </p>
                </div>

                {/* Table of Contents - Optional but helpful */}
                <div className="bg-muted rounded-lg p-6 mb-12">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h3>
                    <ul className="space-y-2 text-base">
                        <li><a href="#scope" className="text-primary-dark hover:underline">1. Scope of this Policy</a></li>
                        <li><a href="#information-types" className="text-primary-dark hover:underline">2. What is Personal and Sensitive Information?</a></li>
                        <li><a href="#commitment" className="text-primary-dark hover:underline">3. Our Commitment to Dignity and Privacy</a></li>
                        <li><a href="#collection" className="text-primary-dark hover:underline">4. Collection of Personal Information</a></li>
                        <li><a href="#anonymity" className="text-primary-dark hover:underline">5. Anonymity</a></li>
                        <li><a href="#use-disclosure" className="text-primary-dark hover:underline">6. Use and Disclosure of Information</a></li>
                        <li><a href="#security-retention" className="text-primary-dark hover:underline">7. Data Security and Retention</a></li>
                        <li><a href="#access-correction" className="text-primary-dark hover:underline">8. Accessing, Correcting, and Cross-Border Disclosure</a></li>
                        <li><a href="#marketing" className="text-primary-dark hover:underline">9. Direct Marketing</a></li>
                        <li><a href="#website" className="text-primary-dark hover:underline">10. Our Website Data Management</a></li>
                        <li><a href="#contact" className="text-primary-dark hover:underline">11. Amendments and Contact</a></li>
                    </ul>
                </div>

                <div className="space-y-12 text-gray-700">
                    {/* Section 1: Scope */}
                    <section id="scope">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">1. Scope of this Policy</h2>
                        <p className="text-lg leading-relaxed mb-4">
                            This Policy applies to any individual who interacts with ECS, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                            <li>Our clients, customers, and their authorised representatives receiving care or support services.</li>
                            <li>Contractors, suppliers, and business partners engaged with ECS.</li>
                            <li>Visitors and users of our digital platforms, including our website at <a href="https://www.evercarecommunity.com.au" className="text-primary-dark hover:underline">www.evercarecommunity.com.au</a>.</li>
                            <li>Current and prospective employees or volunteers.</li>
                        </ul>
                    </section>

                    {/* Section 2: Information Types */}
                    <section id="information-types">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">2. What is Personal and Sensitive Information?</h2>

                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Personal Information</h3>
                            <p className="text-lg leading-relaxed">
                                Any information that can identify you. This includes basic details like your name, address, date of birth, contact numbers (phone and email), and profession or occupation.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Sensitive Information</h3>
                            <p className="text-lg leading-relaxed mb-4">
                                This is a subset of personal information that receives a higher level of protection due to its nature. For an organisation providing community support and care, this includes:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                                <li>Health and Medical Information (e.g., medical history, condition, treatment plans, and health service provider details).</li>
                                <li>Information about your racial or ethnic origin.</li>
                                <li>Information about your religious beliefs, political opinions, or sexual orientation/practices (where relevant to your care plan or legal requirements).</li>
                                <li>Criminal record and police checks (required for employment/contracting).</li>
                            </ul>
                        </div>

                        <p className="text-base italic bg-muted/50 p-4 rounded-lg">
                            When this Policy refers to personal information, it includes sensitive/health information.
                        </p>
                    </section>

                    {/* Section 3: Commitment */}
                    <section id="commitment">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">3. Our Commitment to Dignity and Privacy</h2>
                        <p className="text-lg leading-relaxed">
                            ECS procedures are established to uphold and promote dignity for all clients and staff. We are committed to ensuring that all personal and health information is kept private and that ECS representatives access information only as required by their professional or administrative role.
                        </p>
                    </section>

                    {/* Section 4: Collection */}
                    <section id="collection">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">4. Collection of Personal Information</h2>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">4.1 What We Collect</h3>
                            <p className="text-lg leading-relaxed mb-4">
                                The specific information we collect depends on the nature of your relationship with us, but commonly includes:
                            </p>

                            <div className="space-y-6">
                                <div className="bg-muted/30 p-5 rounded-lg">
                                    <h4 className="font-bold text-gray-900 mb-2">General Information</h4>
                                    <p className="text-base">Name, address (postal and email) and telephone numbers; gender, date of birth, marital status, occupation and next of kin.</p>
                                </div>

                                <div className="bg-muted/30 p-5 rounded-lg">
                                    <h4 className="font-bold text-gray-900 mb-2">Health and Care Information</h4>
                                    <p className="text-base">Your health and medical information, condition and treatment plan, contact details for medical practitioners and treatment providers, and information we collect in the course of providing our services.</p>
                                </div>

                                <div className="bg-muted/30 p-5 rounded-lg">
                                    <h4 className="font-bold text-gray-900 mb-2">Identity and Financial Information</h4>
                                    <p className="text-base">Financial information such as credit card details, health fund and health insurance cover details, Medicare details, NDIS details, concession card details, citizenship or residency details, driver's licence and passport details.</p>
                                </div>

                                <div className="bg-muted/30 p-5 rounded-lg">
                                    <h4 className="font-bold text-gray-900 mb-2">Service Records</h4>
                                    <p className="text-base">Information we create in the course of our relationship with you, such as details or evaluations of your interactions with us, including photographs and videos for clinical/care provision purposes.</p>
                                </div>

                                <div className="bg-muted/30 p-5 rounded-lg">
                                    <h4 className="font-bold text-gray-900 mb-2">Workforce Information (for Employees/Contractors)</h4>
                                    <p className="text-base">Information about your occupation, employment history, education and suitability for the role, including criminal history, social media profiles and whether you hold any licences/permits. This also includes emergency contacts, personal email address, car registration, and performance information.</p>
                                </div>

                                <div className="bg-muted/30 p-5 rounded-lg">
                                    <h4 className="font-bold text-gray-900 mb-2">Safety and Compliance Information</h4>
                                    <p className="text-base">Information for health and safety compliance, including recent personal health history (communicable diseases), recent overseas travel, and contact with COVID-19 cases/symptomatic persons.</p>
                                </div>

                                <div className="bg-muted/30 p-5 rounded-lg">
                                    <h4 className="font-bold text-gray-900 mb-2">Premises Monitoring</h4>
                                    <p className="text-base">CCTV footage from any of our premises.</p>
                                </div>

                                <div className="bg-muted/30 p-5 rounded-lg">
                                    <h4 className="font-bold text-gray-900 mb-2">Digital Health Records</h4>
                                    <p className="text-base">If you have opted-in to the eHealth record system, we may collect and use information in accordance with the My Health Records Act 2012 (Cth). We may also collect your Individual Healthcare Identifier (IHI).</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">4.2 How We Collect It</h3>
                            <p className="text-lg leading-relaxed mb-4">
                                We aim to collect information directly from you where it is reasonably practical, which typically occurs:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-lg ml-4 mb-6">
                                <li>Through access and use of our website.</li>
                                <li>When completing any documentation to receive a service.</li>
                                <li>When voluntarily providing us with personal information, in person or by telephone, email or other means.</li>
                                <li>By accessing your eHealth record.</li>
                            </ul>

                            <p className="text-lg leading-relaxed mb-4">
                                We may also collect information from third parties when necessary, including:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-lg ml-4 mb-6">
                                <li>Where the patient has a Medical Treatment Decision Maker or Support Person.</li>
                                <li>From an individual's health service provider including specialists.</li>
                                <li>From a health professional who has treated the individual.</li>
                                <li>From an individual's health insurer or other insurer, or family.</li>
                                <li>Australia's eHealth record system operated by the Commonwealth Department of Health.</li>
                                <li>To assess job applicants (e.g. Criminal History Checks, employment reference checks and Professional Bodies like AHPRA).</li>
                                <li>From publicly available sources.</li>
                            </ul>

                            <div className="bg-warning/10 border-l-4 border-warning p-5 rounded-lg">
                                <p className="text-base font-semibold">
                                    ⚠️ Important: If you provide us with personal information about another person (e.g., next of kin or representative), you must ensure you have their permission to do so, and that they are aware of this Privacy Policy.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Anonymity */}
                    <section id="anonymity">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">5. Anonymity</h2>
                        <p className="text-lg leading-relaxed mb-4">
                            Where it is lawful and practical, you may deal with ECS anonymously or using a pseudonym (e.g., when making a general enquiry about services). However, to provide effective, personalised care and to meet our funding or legal obligations, we require personal identifying information for service delivery and bookings.
                        </p>
                        <p className="text-lg leading-relaxed">
                            ECS staff will always explain the potential impact of choosing anonymity on our ability to provide services.
                        </p>
                    </section>

                    {/* Section 6: Use and Disclosure */}
                    <section id="use-disclosure">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">6. Use and Disclosure of Information</h2>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">6.1 Primary Purposes of Collection</h3>
                            <p className="text-lg leading-relaxed mb-4">
                                We collect, hold, use, and disclose your personal information to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                                <li>Verify your identity.</li>
                                <li>Provide our services to you, and communicate with you in relation to the products and services we provide.</li>
                                <li>Provide information to our related bodies, contractors, allied healthcare service providers or other third parties for us to provide care services to you.</li>
                                <li>Comply with applicable laws, regulations, rules, reporting requirements, regulator directions or in response to any lawful request for production of information.</li>
                                <li>Undertake accreditation, quality assurance or clinical audits.</li>
                                <li>Actively manage and respond to any complaints.</li>
                                <li>Undertake billing and debt recovery.</li>
                                <li>For the review and development of our products and services.</li>
                                <li>Contact individuals to respond to feedback and enquiries.</li>
                                <li>Assess suitability of potential employees or contractors and facilitate communication with them.</li>
                                <li>Manage and improve our website.</li>
                                <li>Communicate with individuals about our services or offers from our other integrated care providers.</li>
                            </ul>

                            <div className="bg-info/10 border-l-4 border-info p-5 rounded-lg mt-6">
                                <p className="text-base">
                                    <strong>CCTV footage</strong> specifically may be used for: Detecting and deterring unauthorised access and criminal behaviour; monitoring safety and security of customers, employees, contractors, suppliers and visitors; completing incident investigations; and reviewing the actions of our employees and contractors.
                                </p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">6.2 When We Disclose Information</h3>
                            <p className="text-lg leading-relaxed mb-4">
                                Subject to any consent exemptions you have given, we may disclose your personal information to third parties such as:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                                <li>Treating medical practitioners / general practitioners and related health services.</li>
                                <li>Allied health services including pathology, radiology etc.</li>
                                <li>Third party contractors who are performing services for us, or on our behalf.</li>
                                <li>Government regulator / funding bodies including regulator audits.</li>
                                <li>Health funds / Medicare for the purposes of accounting, invoicing, billing and associated reporting / audit requirements.</li>
                                <li>Our contractors or sub-contractors for the purpose of providing services to you, or who provide services to us in connection with your services.</li>
                                <li>To our related companies in connection with the purposes set out in this Policy.</li>
                                <li>Consultancy services, such as accountants, solicitors, business advisors and consultants.</li>
                                <li>Authorised third party external audit providers.</li>
                                <li>Employee/contractor email addresses may be utilised for the purpose of group communications (e.g. newsletters).</li>
                            </ul>

                            <div className="bg-muted/50 p-5 rounded-lg mt-6">
                                <p className="text-base leading-relaxed">
                                    We will only disclose information for a purpose other than the primary purposes (above) if:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-base ml-4 mt-3">
                                    <li>You have consented to or requested the disclosure; or</li>
                                    <li>You would reasonably expect us to use or disclose the information for the other purpose as it is directed related to the primary purpose of collection (i.e. provision of care services to you);</li>
                                    <li>We believe the disclosure is necessary to prevent or lessen a serious threat to the life, or health or safety of any individual or to public health or public safety; or</li>
                                    <li>The disclosure is required or permitted by law.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">6.3 Disclosures to Authorised Representatives</h3>
                            <p className="text-lg leading-relaxed">
                                We require written authority or evidence of legal authority before disclosing your personal information to anyone acting on your behalf.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">6.4 What Happens if You Don't Provide Information?</h3>
                            <p className="text-lg leading-relaxed mb-4">
                                If you choose not to provide us with your information, the following may occur:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                                <li>We may not be able to provide the requested products or services to you, including health/care services, either to the same standard or potentially at all.</li>
                                <li>We may not be able to provide you with information about the health/care services or products that you want.</li>
                                <li>If you are a job applicant, we may not be able to process your application for a position at ECS.</li>
                            </ul>
                            <p className="text-base italic bg-muted/50 p-4 rounded-lg mt-4">
                                Further information regarding the potential impact of choosing not to provide information can be obtained by discussing your concerns with the Privacy Officer.
                            </p>
                        </div>
                    </section>

                    {/* Section 7: Security and Retention */}
                    <section id="security-retention">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">7. Data Security and Retention</h2>
                        <p className="text-lg leading-relaxed mb-4">
                            ECS takes all reasonable steps to protect the personal information we hold from misuse, loss, and from unauthorised access, modification, or disclosure in accordance with applicable legal and regulatory requirements. We comply with the notifiable data breaches scheme.
                        </p>
                        <p className="text-lg leading-relaxed">
                            All private and health information (whether held in paper, electronic, film, video or audiotape format) will be protected. We retain information only for the period required for the purposes set out in this Policy, after which it is securely disposed of.
                        </p>
                    </section>

                    {/* Section 8: Access, Correction, Cross-Border */}
                    <section id="access-correction">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">8. Accessing, Correcting, and Cross-Border Disclosure</h2>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">8.1 Accessing or Correcting Your Information</h3>
                            <p className="text-lg leading-relaxed mb-4">
                                You have the right to request access to the personal information we hold about you by contacting our Privacy Officer.
                            </p>
                            <p className="text-lg leading-relaxed mb-4">
                                A request must be in writing and must provide sufficient information to identify you and the information sought. We may need to verify your identity. We may elect to charge you for our reasonable costs involved in providing access.
                            </p>
                            <p className="text-lg leading-relaxed">
                                We may refuse access or decline to make a correction if permitted or required by law (e.g., if providing access would pose a serious threat to life or health). If we refuse, we will provide a written notice stating the reasons and the complaint mechanism available.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">8.2 Cross-Border Disclosure</h3>
                            <p className="text-lg leading-relaxed mb-4">
                                As at the date of this Policy, we are only likely to disclose personal information to our related companies and third parties located in Australia. We will not otherwise disclose your personal information to anyone located overseas without first complying with the requirements of the Privacy Act.
                            </p>
                            <div className="bg-info/10 border-l-4 border-info p-5 rounded-lg">
                                <p className="text-base">
                                    For clients in <strong>Victoria</strong> or <strong>New South Wales</strong>, the disclosure of your health information outside the respective state is managed in accordance with the <strong>Health Records Act 2001 (Vic)</strong> and the <strong>Health Records and Information Privacy Act 2002 (NSW)</strong>, such as where you have given consent or the transfer is for your benefit.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 9: Direct Marketing */}
                    <section id="marketing">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">9. Direct Marketing</h2>
                        <p className="text-lg leading-relaxed mb-4">
                            You consent to receiving direct marketing communications from ECS via post, email, phone, or SMS to inform you about our services or complimentary ECS offerings. <strong>ECS will not provide your personal information to any third party for marketing purposes.</strong>
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            We will not use your sensitive information for direct marketing without your express consent. If you wish to stop receiving marketing communications, you can notify us by:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                            <li>Contacting your service delivery nominated contact or the Privacy Officer.</li>
                            <li>Submitting a request via the contact us function on our Sites.</li>
                            <li>Clicking the "Unsubscribe" function in any electronic communications.</li>
                        </ul>
                    </section>

                    {/* Section 10: Website Data */}
                    <section id="website">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">10. Our Website Data Management</h2>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">10.1 Automatic Collection</h3>
                            <p className="text-lg leading-relaxed">
                                Visitors to our website do not disclose personal information unless they provide it via the enquiry form. Non-personal information (e.g., browser type, pages viewed, access times) may be collected for the purpose of gauging visitor traffic and trends.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">10.2 Analytics Services and Cookies</h3>
                            <p className="text-lg leading-relaxed">
                                ECS may engage third parties (such as Google Display Network and Google Analytics) to perform functions on our behalf. We and these third parties use cookies (small files) to collect non-personally identifiable information. You can set your browser to notify you when you receive a cookie.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">10.3 Location-Based Tools</h3>
                            <p className="text-lg leading-relaxed">
                                We may collect the general geographic location of your computer or mobile device to improve location-based service information.
                            </p>
                        </div>
                    </section>

                    {/* Section 11: Amendments and Contact */}
                    <section id="contact">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">11. Amendments and Contact</h2>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">11.1 Amendments to this Policy</h3>
                            <p className="text-lg leading-relaxed">
                                This Policy was last amended on <strong>29th May 2025</strong>. We may update it periodically to reflect changes in laws, technology, or our business practices. The most current version is available at{" "}
                                <a href="https://www.evercarecommunity.com.au/privacy-policy/" className="text-primary-dark hover:underline font-medium">
                                    www.evercarecommunity.com.au/privacy-policy/
                                </a>
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">11.2 Contacting Us</h3>
                            <p className="text-lg leading-relaxed mb-4">
                                Please contact our Privacy Officer if you have any questions, feedback, or need to make a request or complaint:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-lg ml-4 mb-6">
                                <li>To ask questions or give feedback about privacy.</li>
                                <li>Request access or corrections to your information.</li>
                                <li>Seek more information about anything contained in this Policy.</li>
                                <li>Make a privacy related complaint.</li>
                            </ul>

                            {/* Contact Card */}
                            <div className="bg-primary/5 border-2 border-primary rounded-xl p-6 sm:p-8 mb-6">
                                <p className="text-xl font-bold text-gray-900 mb-4">Privacy Officer Contact Details</p>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <span className="font-semibold min-w-[120px]">Email:</span>
                                        <a href="mailto:support@evercarecommunity.com.au" className="text-primary-dark hover:underline">
                                            support@evercarecommunity.com.au
                                        </a>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="font-semibold min-w-[120px]">Telephone:</span>
                                        <a href="tel:0373037203" className="text-primary-dark hover:underline">
                                            03 7303 7203
                                        </a>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="font-semibold min-w-[120px]">Webform:</span>
                                        <a href="https://www.evercarecommunity.com.au/contact-us" className="text-primary-dark hover:underline">
                                            www.evercarecommunity.com.au/contact-us
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <p className="text-lg leading-relaxed mb-4">
                                We request that all privacy related complaints be made in writing. We will endeavour to respond to your complaint within <strong>30 days</strong>.
                            </p>

                            {/* OAIC Contact */}
                            <div className="bg-secondary/5 border-2 border-secondary rounded-xl p-6 sm:p-8">
                                <p className="text-lg font-bold text-gray-900 mb-3">
                                    If you are not satisfied with the outcome, you also have the right to make a complaint to the Privacy Commissioner via:
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <span className="font-semibold min-w-[100px]">Phone:</span>
                                        <a href="tel:1300363992" className="text-secondary-dark hover:underline">
                                            1300 363 992
                                        </a>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="font-semibold min-w-[100px]">Email:</span>
                                        <a href="mailto:enquiries@oaic.gov.au" className="text-secondary-dark hover:underline">
                                            enquiries@oaic.gov.au
                                        </a>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="font-semibold min-w-[100px]">Mail:</span>
                                        <span>Office of the Australian Information Commissioner, GPO Box 5218, Sydney, NSW 2001</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Footer Note */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <p className="text-center text-gray-600 italic">
                        This Privacy Policy is compliant with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
                    </p>
                </div>
            </div>
        </div>
    );
}
