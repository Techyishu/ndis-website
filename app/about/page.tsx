import Link from "next/link";

export const metadata = {
  title: "About Us | Our Story | EverCare Community Support",
  description: "Learn about EverCare Community Support, a nurse-led NDIS provider in Victoria. Founded by a Registered Nurse with 5 years of experience.",
};

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              Our Story: Support with Heart and Expertise
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
              Welcome to EverCare Community Support (ECS). We're here to do things differently.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              EverCare Community Support (ECS) was founded on a simple but powerful belief: that
              everyone deserves to be supported with genuine compassion, dignity, and a deep level
              of understanding.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              We know the NDIS world can be complex. We know that finding the right provider can feel
              overwhelming. Too often, people feel like just a number in a system, and their NDIS journey
              feels anything but simple.
            </p>
            <p className="text-base sm:text-lg text-gray-900 leading-relaxed mb-4 sm:mb-6 font-semibold">
              ECS was created to be the answer to that.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              We are a Melbourne-based provider with a fresh perspective and a clear mission: to be your
              partner, not just your provider. We are here to listen, to understand your unique story, and to
              make your NDIS journey as "easy as" it should be. We serve participants across all of
              Victoria, bringing a new standard of care to our community.
            </p>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              A Message from Our Director
            </h2>
          </div>
          <div className="bg-gray-50 p-6 sm:p-8 md:p-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-200 transform hover:-translate-y-1 animate-fade-in-up animation-delay-200">
            <div className="mb-4 sm:mb-6">
              <p className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                "Hello, I'm Nav, the founder of EverCare Community Support.
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                My journey to creating ECS wasn't a typical business decision; it was a deeply personal one.
                As a Registered Nurse, I've spent the last five years working on the front lines of the health
                and disability sectors. I've had the immense privilege of supporting incredible people from all
                walks of life. I've shared in their struggles and celebrated their victories.
              </p>
              <p>
                But in that time, I also saw the gaps.
              </p>
              <p>
                I saw families struggling to find providers who could manage more complex health needs
                with confidence. I saw participants feeling misunderstood by support workers who didn't
                share their cultural background or values. And I saw so many people frustrated by a 'one-
                size-fits-all' approach.
              </p>
              <p>
                Coming from a culturally diverse background myself, I know how important it is to feel seen
                and understood. I know that 'good care' isn't just about ticking boxes—it's about building
                trust, showing respect, and having real, human compassion.
              </p>
              <p>
                I started EverCare Community Support to be the kind of provider I was always searching
                for. A provider that leads with clinical excellence thanks to a nursing foundation, and leads
                with heart thanks to a team built on empathy.
              </p>
              <p className="font-semibold">
                We are here to listen to you, to honour your choices, and to provide a level of support that
                gives you and your family true peace of mind. We look forward to getting to know you."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
              Our Mission & Vision
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Our Mission",
                description: "To empower NDIS participants across Victoria by delivering person-centred support that is compassionate, clinically-informed, culturally responsive, and \"easy as\" to access.",
                icon: "target",
                color: "emerald",
              },
              {
                title: "Our Vision",
                description: "To be Victoria's most trusted NDIS provider, setting a new standard for excellence where genuine compassion and professional health expertise come together to help every participant live their best life.",
                icon: "eye",
                color: "teal",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s`, opacity: 0 }}
              >
                <div className="w-16 h-16 mb-4 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-600 group-hover:scale-110 transition-all duration-300">
                  {item.icon === "target" && (
                    <svg className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )}
                  {item.icon === "eye" && (
                    <svg className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
              ECS Values
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8 sm:mb-12"></div>
            <p className="text-base sm:text-lg text-gray-700 text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
              Our values are not just words on a website; they are the principles we live by every single
              day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 hover:text-emerald-600 transition-colors duration-300">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The ECS Difference */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              The EverCare Difference
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 font-semibold text-center animate-fade-in-up animation-delay-200">
              What does "Nurse-Led" really mean for you? It means we're able to support you with a
              higher level of expertise.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {[
                {
                  title: "Peace of Mind",
                  description: "You can be confident that your support is guided by professional health knowledge.",
                  icon: "shield",
                },
                {
                  title: "Complex Needs Management",
                  description: "We have the skills to confidently support participants with more complex health requirements.",
                  icon: "heart",
                },
                {
                  title: "Better Coordination",
                  description: "We speak the language of doctors, specialists, and therapists, allowing us to be a more effective advocate for you.",
                  icon: "network",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-300 transform hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 2) * 0.15}s`, opacity: 0 }}
                >
                  <div className="w-12 h-12 mb-4 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 group-hover:scale-110 transition-all duration-300">
                    {benefit.icon === "shield" && (
                      <svg className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {benefit.icon === "heart" && (
                      <svg className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )}
                    {benefit.icon === "network" && (
                      <svg className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-200 transform hover:-translate-y-1 animate-fade-in-up animation-delay-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Team</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our team is the heart of ECS. We are a growing group of dedicated support
                workers, coordinators, and allied health professionals who share our company's values. Every
                person who joins our team is chosen not just for their skills, but for their empathy, their
                professionalism, and their genuine passion for helping others.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are based in Melbourne, but our commitment extends across all of Victoria. We are here
                to be your partner, ready to support you today and grow with you tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-scale-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Get Started?</h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-emerald-50 max-w-2xl mx-auto">
              Contact our friendly team for a free, no-obligation chat. We'd love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-emerald-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
