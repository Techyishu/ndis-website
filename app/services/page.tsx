import ImagePlaceholder from "../components/ImagePlaceholder";
import Link from "next/link";

export const metadata = {
  title: "Our NDIS Services & Supports | EverCare Community Support",
  description: "Comprehensive NDIS services including Core Supports, Capacity Building, and Capital Supports. Nurse-led care across Victoria.",
};

export default function Services() {
  const coreSupports = [
    {
      title: "Participate Community",
      description: "Supporting you to join a local club, attend a class (like art or music), go to the gym, visit the library, see a movie, or simply catch up with friends and family.",
      image: "/images/Gemini_Generated_Image_h5tr0yh5tr0yh5tr.png",
    },
    {
      title: "Household Tasks",
      description: "Support with household tasks like meal planning and preparation, cooking, cleaning, laundry, and light gardening.",
      image: "/images/Gemini_Generated_Image_pmdnl2pmdnl2pmdn.png",
    },
    {
      title: "Daily Tasks Shared Living",
      description: "Help with your morning routine, showering, dressing, and personal hygiene to live as independently as possible.",
      image: "/images/Gemini_Generated_Image_pmdnl2pmdnl2pmdn.png",
    },
    {
      title: "Assist Travel Transport",
      description: "We can drive you to medical appointments, therapy sessions, community activities, your workplace, social events, or to do your regular shopping.",
      image: "/images/Gemini_Generated_Image_osstyposstyposst.png",
    },
    {
      title: "Assist Personal Activities",
      description: "Personal care support including assistance with daily living activities and personal hygiene.",
      image: "/images/Gemini_Generated_Image_1y0aeb1y0aeb1y0a.png",
    },
    {
      title: "Group Centre Activities",
      description: "Participate in group activities and center-based programs that build social connections and skills.",
      image: "/images/Gemini_Generated_Image_h5tr0yh5tr0yh5tr.png",
    },
  ];

  const capacityBuilding = [
    {
      title: "Support Coordination",
      description: "We help you understand every part of your plan, connect you with the best services, manage your budget, solve any problems that arise, and prepare for your plan reviews.",
      image: "/images/Gemini_Generated_Image_5g2lzs5g2lzs5g2l.png",
    },
    {
      title: "Development Life Skills",
      description: "We can work with you on cooking and nutrition, managing your household, learning to create and stick to a budget, using public transport confidently, and building positive routines.",
      image: "/images/Gemini_Generated_Image_pmdnl2pmdnl2pmdn.png",
    },
    {
      title: "Assist Access Maintain Employment",
      description: "This can include help with writing your resume, practicing for interviews, or providing on-the-job support as you settle into your new role.",
      image: "/images/Gemini_Generated_Image_grfs82grfs82grfs.png",
    },
    {
      title: "Assist Life Stage Transition",
      description: "Support during major life transitions, helping you navigate changes and build the skills needed for your next chapter.",
      image: "/images/Gemini_Generated_Image_apjsb7apjsb7apjs.png",
    },
    {
      title: "Home Modifications",
      description: "We can coordinate the installation of grab rails in the bathroom, non-slip flooring, or a simple ramp to help you access your home.",
      image: "/images/Gemini_Generated_Image_1y0aeb1y0aeb1y0a.png",
    },
    {
      title: "Accommodation",
      description: "We are currently in the advanced stages of the registration process to provide a full range of accommodation services, including Supported Independent Living (SIL) and Specialist Disability Accommodation (SDA).",
      image: "/images/Gemini_Generated_Image_grfs82grfs82grfs.png",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Our NDIS Services & Supports
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
              At EverCare Community Support (ECS), we provide a comprehensive suite of NDIS services designed to meet your individual goals. Our mission is to make your NDIS journey as "easy as" possible.
            </p>
          </div>
        </div>
      </section>

      {/* Core Supports Section */}
      <section id="core" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Core Supports
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-12"></div>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto text-center">
              Core Supports help you with your everyday activities, your personal goals, and your life at home. We are flexible, reliable, and always put your needs first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreSupports.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-2 border-gray-100 hover:border-emerald-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <ImagePlaceholder
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity Building Section */}
      <section id="capacity" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Capacity Building
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-12"></div>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto text-center">
              This is where we focus on your long-term goals. These supports are designed to build your skills, confidence, and independence for the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capacityBuilding.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-2 border-gray-100 hover:border-emerald-300 animate-fade-in-up"
                style={{ animationDelay: `${(index + 6) * 0.1}s`, opacity: 0 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <ImagePlaceholder
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capital Supports Section */}
      <section id="capital" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Capital Supports
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-12"></div>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto text-center">
              Capital Supports cover the purchase of assistive technology or modifications to your home to help you live more safely and independently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Assistive Technology (AT)",
                description: "This is any equipment or technology that helps you do something you couldn't otherwise, or makes it easier. We help you source, set up, and learn to use everything from simple aids (like kitchen gadgets or shower chairs) to more complex technology like communication devices.",
                image: "/images/Gemini_Generated_Image_1y0aeb1y0aeb1y0a.png",
              },
              {
                title: "Home Modifications",
                description: "We can help you arrange minor changes to your home environment to make it safer and more accessible. We can coordinate the installation of grab rails in the bathroom, non-slip flooring, or a simple ramp to help you access your home.",
                image: "/images/Gemini_Generated_Image_pmdnl2pmdnl2pmdn.png",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-2 border-gray-100 hover:border-emerald-300 animate-fade-in-up"
                style={{ animationDelay: `${(index + 12) * 0.1}s`, opacity: 0 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <ImagePlaceholder
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future: Accommodation & Housing Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-emerald-50 rounded-xl p-8 md:p-12 shadow-lg border-2 border-emerald-200 animate-fade-in-up">
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Future: Accommodation & Housing
                </h2>
                <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
                <span className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  Coming Soon
                </span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                EvereCare Community Support is committed to growing with our participants. We are currently in the advanced stages of the registration process to provide a full range of accommodation services, including Supported Independent Living (SIL) and Specialist Disability Accommodation (SDA).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                While this service is not active just yet, our expert Support Coordinators are ready today to help you navigate your housing goals. We can help you explore your options, connect with accommodation providers, and plan for your future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-scale-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Plan is Unique. Your Support Should Be Too.
            </h2>
            <p className="text-lg mb-8 text-emerald-50 max-w-2xl mx-auto">
              Don't see something on this list? Is your plan confusing? Contact our friendly team. We'll listen to your needs and show you just how "easy as" your NDIS journey can be.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
