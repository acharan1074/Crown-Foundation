import { useState } from 'react';
import {
  Calendar,
  Clock,
  CheckCircle,
  Loader2,
  ChevronRight,
} from 'lucide-react';

export default function AppointmentForm() {
  const SHEETS_ENDPOINT = import.meta.env.VITE_SHEETS_ENDPOINT || '';

  const [formData, setFormData] = useState({
    childName: '',
    age: '',
    parentName: '',
    parentPhone1: '',
    parentPhone2: '',
    whatsappNumber: '',
    email: '',
    services: [],
    message: '',
    appointmentDate: '',
    appointmentSlot: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);

  const services = [
    'Early Intervention Services',
    'Special School',
    'Occupational Therapy',
    'Speech Therapy',
    'Psychology (Behavioral Therapy)',
    'PhysioTherapy',
    'Remedial Therapy',
  ];

  const generateTimeSlots = (date) => {
    if (!date) {
      setAvailableSlots([]);
      return;
    }
    const slots = [];
    for (let hour = 9; hour < 17; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
    }
    setAvailableSlots(slots);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'appointmentDate') {
      generateTimeSlots(value);
      setFormData((prev) => ({ ...prev, appointmentSlot: '' }));
    }
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    if (!SHEETS_ENDPOINT) {
      setErrorMessage('Submission endpoint is not configured. Please contact the site administrator.');
      setLoading(false);
      return;
    }

    // Build a normal HTML form and submit it to the endpoint using application/x-www-form-urlencoded
    // This avoids CORS preflight and matches Apps Script doPost(e) expectations.
    const iframeName = 'gsf-iframe-' + Date.now();
    const iframe = document.createElement('iframe');
    iframe.name = iframeName;
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = SHEETS_ENDPOINT;
    form.target = iframeName;
    form.enctype = 'application/x-www-form-urlencoded';
    form.style.display = 'none';

    // Populate inputs from formData. Arrays become comma-separated strings.
    Object.keys(formData).forEach((key) => {
      const value = Array.isArray(formData[key]) ? formData[key].join(', ') : formData[key] || '';
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = typeof value === 'string' ? value : String(value);
      form.appendChild(input);
    });

    document.body.appendChild(form);

    let completed = false;
    const cleanup = () => {
      try { document.body.removeChild(form); } catch (e) {}
      try { document.body.removeChild(iframe); } catch (e) {}
    };

    // Success is detected by iframe load. We cannot read cross-origin response, but load event signals completion.
    const onLoad = () => {
      if (completed) return;
      completed = true;
      cleanup();
      setLoading(false);
      setSubmitted(true);

      // reset the form state after a short delay so the success message is visible
      setTimeout(() => {
        setFormData({
          childName: '',
          age: '',
          parentName: '',
          parentPhone1: '',
          parentPhone2: '',
          whatsappNumber: '',
          email: '',
          services: [],
          message: '',
          appointmentDate: '',
          appointmentSlot: '',
        });
        setAvailableSlots([]);
        setSubmitted(false);
        setErrorMessage('');
      }, 3000);
    };

    const onErrorTimeout = () => {
      if (completed) return;
      completed = true;
      cleanup();
      setLoading(false);
      setErrorMessage('Submission timed out. Please try again or contact us directly.');
    };

    iframe.addEventListener('load', onLoad);

    // timeout after 12s
    const timeoutId = setTimeout(() => onErrorTimeout(), 12000);

    try {
      form.submit();
    } catch (err) {
      clearTimeout(timeoutId);
      cleanup();
      setLoading(false);
      setErrorMessage('Failed to submit the form. Please try again.');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {submitted && (
        <div className="mb-12 p-8 md:p-10 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 rounded-2xl text-green-800 text-center flex flex-col md:flex-row items-center justify-center gap-4 shadow-2xl animate-fade-in transform hover:scale-[1.02] transition-transform duration-300">
          <CheckCircle size={40} className="text-green-600 flex-shrink-0" />
          <div>
            <p className="text-2xl md:text-3xl font-bold mb-2">Thank you for reaching out!</p>
            <p className="text-lg text-green-700">Your request has been sent. We will contact you soon to confirm the appointment.</p>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
          <strong className="font-semibold">Submission error:</strong>
          <div className="mt-1 text-sm">{errorMessage}</div>
          <div className="mt-2 text-sm">If this persists, please email us at <a href="mailto:crownfoundation2022@gmail.com" className="underline">crownfoundation2022@gmail.com</a> or call +91 9951427524.</div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-10 bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-blue-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-100/20 to-blue-100/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-100/20 to-cyan-100/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 p-6 md:p-8 rounded-xl space-y-6 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-blue-800 flex items-center gap-2">1. Child Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Name of the Child *</label>
              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base transition duration-150"
                placeholder="Enter child's full name"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Age (in years) *</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                min="0"
                max="18"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base transition duration-150"
                placeholder="Enter age in years"
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 p-6 md:p-8 rounded-xl space-y-6 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-blue-800 flex items-center gap-2">2. Parent/Guardian Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Name of Parent/Guardian *</label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base transition duration-150"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Phone 1 * (Primary)</label>
              <input
                type="tel"
                name="parentPhone1"
                value={formData.parentPhone1}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base transition duration-150"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Phone 2 * (Secondary)</label>
              <input
                type="tel"
                name="parentPhone2"
                value={formData.parentPhone2}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base transition duration-150"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp Number *</label>
              <input
                type="tel"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base transition duration-150"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base transition duration-150"
              placeholder="Enter email address"
            />
          </div>
        </div>

        <div className="relative z-10 p-6 md:p-8 rounded-xl space-y-8 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-blue-800 flex items-center gap-2">3. Services Required</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <label
                key={i}
                className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition duration-200 ${
                  formData.services.includes(service)
                    ? 'border-teal-500 bg-teal-50 shadow-md ring-2 ring-teal-300'
                    : 'border-gray-300 bg-white hover:border-teal-400'
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.services.includes(service)}
                  onChange={() => handleServiceChange(service)}
                  className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                />
                <span className="text-gray-700 font-medium text-base">{service}</span>
              </label>
            ))}
          </div>
          <div className="mt-6">
            <label className="block text-sm font-bold text-gray-700 mb-2">Your Message / Concern (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base transition duration-150"
              placeholder="Tell us more about your child's needs or specific concerns..."
            />
          </div>
        </div>

        <div className="relative z-10 p-6 md:p-8 rounded-xl space-y-6">
          <h2 className="text-3xl font-bold text-blue-800 flex items-center gap-2">
            <Calendar size={28} className="text-blue-600" /> 4. Book Appointment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Date</label>
              <div className="relative">
                <input
                  type="date"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base transition duration-150"
                />
                <Calendar size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Time Slot</label>
              <div className="relative">
                <select
                  name="appointmentSlot"
                  value={formData.appointmentSlot}
                  onChange={handleChange}
                  disabled={!formData.appointmentDate || availableSlots.length === 0}
                  className={`w-full px-5 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base transition duration-150 ${
                    !formData.appointmentDate || availableSlots.length === 0 ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-800'
                  }`}
                >
                  <option value="">{formData.appointmentDate ? 'Select a time' : 'First select a date'}</option>
                  {availableSlots.map((slot, i) => (
                    <option key={i} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                <Clock size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-6 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 px-8 py-4 text-xl bg-gradient-to-r from-teal-500 to-blue-600 text-white font-extrabold rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.01] flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={24} /> Submitting...
              </>
            ) : (
              <>
                Confirm & Submit Request <ChevronRight size={20} />
              </>
            )}
          </button>
          <button
            type="reset"
            onClick={() => {
                setFormData({
                  childName: '',
                  age: '',
                  parentName: '',
                  parentPhone1: '',
                  parentPhone2: '',
                  whatsappNumber: '',
                  email: '',
                  services: [],
                  message: '',
                  appointmentDate: '',
                  appointmentSlot: '',
                });
                setAvailableSlots([]);
              }}
            className="sm:flex-none px-8 py-4 text-lg border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-100 transition duration-150"
          >
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
}
