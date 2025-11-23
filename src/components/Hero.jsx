import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Heart, Target } from 'lucide-react';

export default function Hero() {
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => setImageVisible(true), []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 80;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top, behavior: 'smooth' });
  };

  const serviceBoxes = [
    {
      title: 'CROWN N BLOOM',
      subtitle: 'EARLY INTERVENTION CENTER',
      icon: Sparkles,
      gradient: 'from-blue-500 via-blue-600 to-teal-600',
      section: 'services',
    },
    {
      title: 'CROWN N BLOOM',
      subtitle: 'SPECIAL SCHOOL FOR NEURO DEVELOPMENT DISORDER',
      icon: Target,
      gradient: 'from-teal-500 via-teal-600 to-cyan-600',
      section: 'services',
    },
    {
      title: 'CROWN N BLOOM',
      subtitle: 'REHABILITATION SERVICES',
      icon: Heart,
      gradient: 'from-cyan-500 via-blue-600 to-indigo-600',
      center: true,
      section: 'services',
    },
  ];

  return (
    <section
      id="home-hero"
      className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 md:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-24 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-100 text-teal-700 rounded-full text-xl font-semibold">
              <Sparkles size={18} />
              <span>CROWN N BLOOM CENTER</span>
            </div>

            <p className="text-gray-600 font-medium text-sm md:text-base">
              Established 2022 • Hyderabad, India
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight tracking-tight">
              Helping Children <br />
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Bloom Through Early Support
              </span>
            </h1>

            <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-xl">
              Crown N Bloom provides comprehensive rehabilitation and specialized education services for children with neuro-developmental disorders. We are committed to helping every child achieve their fullest potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-10 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Book Free Consultation</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </button>

              <button
                onClick={() => scrollToSection('services')}
                className="px-10 py-4 bg-white border-2 border-teal-500 text-teal-600 font-bold rounded-xl hover:bg-teal-50 transition-all duration-300"
              >
                Our Services
              </button>
            </div>
          </div>

          {imageVisible && (
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V3O4FD2gHnbx6rdMa2IAsH0UizbbI8.png"
                  alt="Child Development Illustration"
                  width={480}
                  height={480}
                  loading="eager"
                  className="relative w-full max-w-sm md:max-w-lg rounded-3xl shadow-2xl object-contain transform hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-24">
          {serviceBoxes.map((box, index) => {
            const Icon = box.icon;
            return (
              <button
                key={index}
                onClick={() => scrollToSection(box.section)}
                className={`group relative bg-gradient-to-br ${box.gradient} rounded-3xl p-10 md:p-12 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 min-h-48 overflow-hidden flex flex-col ${
                  box.center ? 'text-center items-center' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                <div className="relative z-10">
                  <Icon size={36} className="mb-4 group-hover:scale-110 transition" />
                  <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-yellow-200">{box.title}</h3>
                  <p className="text-xl md:text-2xl font-semibold text-gray-100 group-hover:text-yellow-100 leading-relaxed">
                    {box.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

