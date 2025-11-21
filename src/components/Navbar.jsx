import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed left-0 top-0 w-full z-50 bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 group">
            <img
              src="/images/logo.jpg"
              alt="Crown Foundation Logo"
              width={52}
              height={52}
              className="rounded-full shadow-sm group-hover:shadow-md transition object-cover"
            />
            <span className="hidden sm:inline text-xl font-extrabold text-blue-900 tracking-wide">
              CROWN FOUNDATION
            </span>
          </button>

          <div className="hidden md:flex items-center gap-10">
            {['home', 'services', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-blue-700 font-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:inline-block px-6 py-2.5 rounded-xl font-semibold text-blue-900 bg-gradient-to-r from-yellow-400 to-orange-400 shadow-sm hover:shadow-lg hover:brightness-110 transition-all"
          >
            Get Help
          </button>

          <button className="md:hidden p-2 rounded-md hover:bg-gray-100 transition" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-3 border-t pt-4">
            {['home', 'services', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="py-2 text-left text-gray-700 font-medium hover:text-blue-700 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}

            <button
              onClick={() => scrollToSection('contact')}
              className="mt-2 px-4 py-2.5 bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-900 font-bold rounded-lg text-center shadow-sm hover:shadow-lg hover:brightness-110 transition"
            >
              Get Help
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

