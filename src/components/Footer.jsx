import { Phone, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 text-white relative overflow-x-hidden">
      <div className="absolute inset-0 opacity-10 overflow-hidden max-w-full">
        <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Heart size={24} className="text-teal-400" />
              CROWN FOUNDATION
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Dedicated to helping children with neuro-developmental disorders reach their full potential through comprehensive rehabilitation and specialized education services.
            </p>
            <p className="text-teal-300 text-sm font-semibold">Established 2022 • Hyderabad, India</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-teal-400 transition duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <Phone size={18} className="text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+919951427524" className="text-gray-300 hover:text-teal-400 transition">
                    +91 9951427524
                  </a>
                  <br />
                  <a href="tel:+919390211804" className="text-gray-300 hover:text-teal-400 transition">
                    +91 9390211804
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail size={18} className="text-teal-400 mt-1 flex-shrink-0" />
                <a href="mailto:crownfoundation2022@gmail.com" className="text-gray-300 hover:text-teal-400 transition break-all">
                  crownfoundation2022@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-teal-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  L.B. Nagar
                  <br />
                  Hyderabad, India
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Early Intervention</li>
              <li className="text-gray-300">Special School</li>
              <li className="text-gray-300">Rehabilitation</li>
              <li className="text-gray-300">Occupational Therapy</li>
              <li className="text-gray-300">Speech Therapy</li>
              <li className="text-gray-300">Physiotherapy</li>
            </ul>
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-4 px-6 py-2.5 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-xl transition-all duration-300 text-sm"
            >
              Book Appointment
            </button>
          </div>
        </div>

        <div className="border-t border-white/20 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Crown Foundation. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Made with <Heart size={14} className="text-teal-400 animate-pulse" /> for children
          </p>
        </div>
      </div>
    </footer>
  );
}

