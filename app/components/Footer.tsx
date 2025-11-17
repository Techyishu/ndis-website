import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">EverCare Community Support</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
              Making your NDIS journey simple. We're here to help you live your best life.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              Registered NDIS Provider
            </p>
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <a href="tel:1300000000" className="hover:text-white transition-colors break-all">
                  ☎ 1300 XXX XXX
                </a>
              </li>
              <li>
                <a href="mailto:hello@everecare.com.au" className="hover:text-white transition-colors break-all">
                  hello@everecare.com.au
                </a>
              </li>
              <li className="mt-3 sm:mt-4">
                <p className="text-xs sm:text-sm">Providing NDIS disability support services throughout Victoria</p>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Resources</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Referrals
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  NDIS Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Acknowledgement of Country */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800 mb-4 sm:mb-6">
          <p className="text-xs sm:text-sm text-gray-400 text-center">
            EverCare Community Support acknowledges the Traditional Custodians of country throughout Australia and their connections to land, sea and community. We pay our respect to their elders past and present and extend that respect to all Aboriginal and Torres Strait Islander peoples today.
          </p>
        </div>

        <div className="pt-4 sm:pt-6 border-t border-gray-800 text-center text-xs sm:text-sm text-gray-400">
          <p>All Rights Reserved {new Date().getFullYear()} | EverCare Community Support (ECS)</p>
          <p className="mt-1 sm:mt-2">EverCare Community Support recognises the traditional owners of country and the rights of persons with disabilities</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
