import Link from "next/link";
import ImagePlaceholder from "./components/ImagePlaceholder";
import DynamicHero from "./components/DynamicHero";
import ReviewForm from "./components/ReviewForm";
import ReviewsList from "./components/ReviewsList";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section - Dynamic */}
      <DynamicHero />

      {/* It's All About You Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              It's all about you and your goals
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Whatever you want out of life, right now and in the future, we're here to support you and empower you at every stage.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At EverCare Community Support, there's nothing we love more than helping our clients to shine.
            </p>
            <Link
              href="/about"
              className="inline-block text-emerald-600 font-semibold hover:text-emerald-700 text-lg transition-all duration-300 hover:translate-x-2"
            >
              LEARN MORE →
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Support",
                description: "Our disability support services are available round the clock.",
                icon: "clock",
              },
              {
                title: "Inclusive",
                description: "We support everyone, including the CALD community.",
                icon: "people",
              },
              {
                title: "Your Choice",
                description: "We work with you, your family and friends to tailor a plan that's just right for you.",
                icon: "choice",
              },
              {
                title: "Life Skills",
                description: "Empowering independence is at the heart of our approach.",
                icon: "skills",
              },
              {
                title: "Nurse-Led Team",
                description: "Everyone at ECS has years of disability sector experience and training.",
                icon: "team",
              },
              {
                title: "Job Support",
                description: "Workplace-assistance and employment support is our specialty.",
                icon: "job",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-600 group-hover:scale-110 transition-all duration-300">
                  {feature.icon === "clock" && (
                    <svg className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {feature.icon === "people" && (
                    <svg className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )}
                  {feature.icon === "choice" && (
                    <svg className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {feature.icon === "skills" && (
                    <svg className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  )}
                  {feature.icon === "team" && (
                    <svg className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {feature.icon === "job" && (
                    <svg className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-emerald-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Services We Provide
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Core Supports",
                image: "/images/Gemini_Generated_Image_pmdnl2pmdnl2pmdn.png",
                link: "/services#core",
              },
              {
                title: "Capacity Building",
                image: "/images/Gemini_Generated_Image_5g2lzs5g2lzs5g2l.png",
                link: "/services#capacity",
              },
              {
                title: "Support Coordination",
                image: "/images/Gemini_Generated_Image_grfs82grfs82grfs.png",
                link: "/services#coordination",
              },
            ].map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <ImagePlaceholder
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors duration-300 flex items-center">
                    Learn More
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ECS Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ECS Values
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Inclusiveness",
                description: "We're passionate about delivering accessible support for all.",
              },
              {
                title: "Respect",
                description: "For you. Your abilities. Your goals and aspirations.",
              },
              {
                title: "Flexibility",
                description: "Support that is able to change and grow as you do.",
              },
              {
                title: "Authenticity",
                description: "We're honest and transparent in our relationships and conduct.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-all duration-300 border-2 border-transparent hover:border-emerald-200 transform hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-emerald-600 transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in-up animation-delay-400">
            <Link
              href="/about"
              className="inline-block text-emerald-600 font-semibold hover:text-emerald-700 text-lg transition-all duration-300 hover:translate-x-2"
            >
              MORE ABOUT US →
            </Link>
          </div>
        </div>
      </section>

      {/* CALD Community Support */}
      <section className="py-16 lg:py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We love to support the CALD community.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                ECS offers translation services and culturally-sensitive support to participants across Greater Melbourne to ensure our services are fully accessible.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                GET STARTED
              </Link>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <ImagePlaceholder
                  src="/images/Gemini_Generated_Image_g8fkl3g8fkl3g8fk.png"
                  alt="CALD community support"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Commitment and Guarantee
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </div>
          <div className="animate-fade-in-up animation-delay-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At ECS, your well-being and rights are our top priorities. We proudly adhere to the NDIS Code of Conduct, ensuring that our services are held to the highest ethical and professional standards. Safety isn't just a buzzword for us—it's integral to how we operate.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Whether you're at home, out in the community or participating in one of our programs, we take active steps to make sure you feel secure and respected. With ECS, you're not just a participant; you're a valued member of a community that cares.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <span className="inline-block bg-gray-100 px-6 py-3 rounded-lg text-gray-700 font-semibold text-center hover:bg-emerald-100 hover:text-emerald-700 transition-all duration-300 transform hover:scale-105">
                NDIS CODE OF CONDUCT
              </span>
              <span className="inline-block bg-gray-100 px-6 py-3 rounded-lg text-gray-700 font-semibold text-center hover:bg-emerald-100 hover:text-emerald-700 transition-all duration-300 transform hover:scale-105">
                NDIS PARTICIPANT RIGHTS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Read reviews from our participants and families, or share your own experience.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="animate-fade-in-up">
              <ReviewsList />
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <ReviewForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-scale-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your supportive community awaits
            </h2>
            <p className="text-xl mb-8 text-emerald-50">
              EverCare Community Support delivers inclusive NDIS disability support to people of all backgrounds, faiths, cultures and abilities throughout Victoria
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                REFER SOMEONE
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-800 transition-all duration-300 border-2 border-white shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
