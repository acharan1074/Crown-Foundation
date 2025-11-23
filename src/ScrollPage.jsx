import Navbar from './components/Navbar';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';
import Hero from './components/Hero';
import {
  Calendar,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  Users,
  Briefcase,
} from 'lucide-react';

export default function ScrollPage() {
  // Appointment form moved into `src/components/AppointmentForm.jsx`.
  // The form state and handlers live inside that component to keep this page file tidy.

  return (
    <main className="w-full min-h-screen bg-white font-sans overflow-x-hidden max-w-full pt-20">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="services" className="py-24 relative overflow-x-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none max-w-full overflow-hidden">
          <div className="absolute top-20 right-4 md:right-10 w-64 md:w-96 h-64 md:h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
        </div>

        <section className="relative z-10 bg-gradient-to-b from-blue-50 via-white to-white pb-10 md:pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-xl font-semibold mb-6">
              <CheckCircle size={18} />
              <span>What We Offer</span>
            </div>
            <h1 className="text-3xl md:text-7xl font-extrabold text-blue-900 mb-6 text-balance bg-gradient-to-r from-blue-900 via-teal-700 to-blue-900 bg-clip-text text-transparent">
              Our Specialized Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our specialized services provide comprehensive support for childrens with neuro-developmental disorders. We offer specialized therapies, education, and rehabilitation services designed to help each child achieve their full potential.
            </p>
            <div className="mt-8 flex justify-center gap-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-75"></div>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-teal-300/50 transform hover:scale-[1.01] transition duration-500 ease-in-out">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UIsx4TRiPMgSKaJtQAHySRJ5wyoyn5.png"
                    alt="Early Intervention Services"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-2">FOUNDATION PHASE</p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">EARLY INTERVENTION SERVICES</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Specialized early intervention services for infants and young children focusing on developmental screening and timely therapeutic support.
                </p>
                <div className="space-y-4">
                  {[
                    'Developmental Screening and Assessment',
                    'Timely therapy plans for infants and young children',
                    'Occupational Therapy',
                    'Speech Therapy',
                    'Physiotherapy',
                    'Behavioral Therapy',
                    'Parents Counseling and Training',
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-teal-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-medium text-base">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50 mx-auto max-w-7xl"></div>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div>
                <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-2">EDUCATIONAL EXCELLENCE</p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">SPECIAL SCHOOL FOR NEURO - DEVELOPMENTAL DISORDERS</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Full-spectrum special education and therapeutic services tailored for children with various developmental challenges.
                </p>
                <div className="space-y-4">
                  {[
                    'Day School',
                    'Special Needs Education tailored to individual requirements',
                    'Individualized Education Programme',
                    'Activities for Daily Living',
                    'Remedial Therapy',
                    'Speech Therapy',
                    'Occupational Therapy',
                    'Behavioral Therapy',
                    'Physiotherapy',
                    'Art and Craft',
                    'Recreational & Sports Activities',
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-teal-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-medium text-base">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-yellow-300/50 transform hover:scale-[1.01] transition duration-500 ease-in-out">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DIaN22nrZKDWrxExeC0M6roaGdb6Fd.png"
                    alt="Special School Services"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50 mx-auto max-w-7xl"></div>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-purple-300/50 transform hover:scale-[1.01] transition duration-500 ease-in-out">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zPfxxLH8uhKWil4SSIvfYo4m4ux0Ce.png"
                    alt="Rehabilitation Services"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                {/* <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-2">SKILL DEVELOPMENT</p> */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">REHABILITATION SERVICES</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Comprehensive rehabilitation support focused on developing independence, communication skills, and life functioning abilities.
                </p>
                <div className="space-y-4">
                  {[
                    'Occupational Therapy - Fine motor and independence skills',
                    'Speech Therapy - Communication enhancement',
                    'Physiotherapy - Mobility and strength development',
                    'Behavioral Therapy - Adaptive skills development',
                    'Remedial Therapy - Academic support',
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-teal-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-medium text-base">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section id="about" className="bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-x-hidden py-24">
        <div className="absolute inset-0 opacity-5 pointer-events-none max-w-full overflow-hidden">
          <div className="absolute top-10 left-4 md:left-10 w-64 md:w-96 h-64 md:h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-4 md:right-10 w-64 md:w-96 h-64 md:h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
        </div>

        <section className="relative z-10 bg-gradient-to-b from-white via-blue-50/50 to-white pb-10 md:pb-12 pt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <Users size={16} />
              <span>Who We Are</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 mb-6 text-balance bg-gradient-to-r from-blue-900 via-teal-700 to-blue-900 bg-clip-text text-transparent">
              About CROWN FOUNDATION
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Established 2022 in Hyderabad. A leading center of excellence dedicated to helping children with neuro-developmental disorders bloom and reach their full potential.
            </p>
          </div>
        </section>

        <section className="relative z-10 pt-4 md:pt-6 pb-0 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
              <div className="group bg-gradient-to-br from-white to-teal-50/30 p-8 md:p-10 rounded-3xl shadow-xl border-2 border-teal-200 transform hover:translate-y-[-8px] hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <BookOpen size={32} className="text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Vision</h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    To be a leading centre of excellence in providing comprehensive and individualized rehabilitation services for children with neuro-developmental disorders.
                  </p>
                </div>
              </div>
              <div className="group bg-gradient-to-br from-white to-yellow-50/30 p-8 md:p-10 rounded-3xl shadow-xl border-2 border-yellow-200 transform hover:translate-y-[-8px] hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <CheckCircle size={32} className="text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Mission</h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    To deliver compassionate, high-quality care and therapeutic interventions that help children achieve independence and reach their full potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 pt-12 md:pt-16 pb-0 bg-gradient-to-b from-blue-50/70 via-white to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4">Our Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Dedicated professionals committed to your child's growth and development
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {[
                {
                  role: 'Governing Body',
                  members: 'President, Vice President, Secretary, Treasurer',
                  icon: Users,
                  bgColor: 'from-teal-50 to-teal-100',
                  borderColor: 'border-teal-400',
                  iconBg: 'bg-teal-500',
                },
                {
                  role: 'Professional Team',
                  members: 'Special Educators, Occupational Therapists, Speech Therapists, Physiotherapists',
                  icon: Briefcase,
                  bgColor: 'from-blue-50 to-blue-100',
                  borderColor: 'border-blue-400',
                  iconBg: 'bg-blue-500',
                },
                {
                  role: 'Advisors',
                  members: 'Experienced professionals in healthcare and rehabilitation',
                  icon: BookOpen,
                  bgColor: 'from-yellow-50 to-yellow-100',
                  borderColor: 'border-yellow-400',
                  iconBg: 'bg-yellow-500',
                },
              ].map((team, i) => {
                const IconComponent = team.icon;
                return (
                  <div
                    key={i}
                    className={`group bg-gradient-to-br ${team.bgColor} p-8 rounded-3xl shadow-xl border-2 ${team.borderColor} transform transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className={`w-16 h-16 ${team.iconBg} rounded-2xl flex items-center justify-center mb-4 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                        <IconComponent size={32} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-3">{team.role}</h3>
                      <p className="text-gray-700 leading-relaxed">{team.members}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </section>

      <section id="contact" className="bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-x-hidden py-24">
        <div className="absolute inset-0 opacity-5 pointer-events-none max-w-full overflow-hidden">
          <div className="absolute top-20 left-4 md:left-20 w-64 md:w-96 h-64 md:h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-4 md:right-20 w-64 md:w-96 h-64 md:h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>

        <section className="relative z-10 bg-gradient-to-b from-white via-blue-50/50 to-blue-50/30 pb-10 md:pb-12 pt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <Calendar size={16} />
              <span>Get Started</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 mb-6 bg-gradient-to-r from-blue-900 via-teal-700 to-blue-900 bg-clip-text text-transparent">
              Book Your Appointment
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our team to discuss your child's needs and schedule an initial consultation.
            </p>
          </div>
        </section>

        <section className="relative z-10 pt-4 md:pt-6 pb-0 bg-gradient-to-b from-blue-50/70 via-white to-white">
            <AppointmentForm />

            <div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white shadow-xl rounded-2xl border-t-4 border-blue-400 transform hover:shadow-2xl transition duration-300">
                <Phone size={36} className="text-blue-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-blue-900 mb-3">Phone</h3>
                <p className="text-gray-600 text-base">+91 9676825576</p>
                <p className="text-gray-600 text-base">+91 9390211804</p>
              </div>
              <div className="text-center p-8 bg-white shadow-xl rounded-2xl border-t-4 border-teal-400 transform hover:shadow-2xl transition duration-300">
                <Mail size={36} className="text-teal-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-blue-900 mb-3">Email</h3>
                <p className="text-gray-600 text-base">crownfoundation2022@gmail.com</p>
              </div>
              <div className="text-center p-8 bg-white shadow-xl rounded-2xl border-t-4 border-yellow-400 transform hover:shadow-2xl transition duration-300">
                <MapPin size={36} className="text-yellow-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-blue-900 mb-3">Location</h3>
                <p className="text-gray-600 text-base">L.B. Nagar, Hyderabad, India</p>
              </div>
            </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}

