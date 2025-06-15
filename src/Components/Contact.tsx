import { useState } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const initialState = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setForm(initialState);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 to-rose-50 py-8 px-2">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left: Contact Info */}
        <div className="md:w-1/2 relative bg-rose-900 flex flex-col justify-between p-8">
          <div className="absolute inset-0 bg-rose-900 bg-opacity-70 rounded-3xl md:rounded-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Support</h2>
            <p className="text-white mb-6">Get in touch with me on social media & screen now on website</p>
            <div className="mb-6">
              <h3 className="text-white font-semibold">Our 24x7 Customer Service</h3>
              <p className="text-white text-sm">(+91) 96252 36254</p>
              
            </div>
            <div className="mb-6">
              <h3 className="text-white font-semibold">Write us at</h3>
              <p className="text-white text-sm">aajoolive@gmail.com</p>
              
            </div>
            <div className="mb-6">
              <h3 className="text-white font-semibold">Visit our website for more information.</h3>
              <p className="text-white text-sm">aajoolive@gmail.com</p>
            
            </div>
          </div>
          <div className="relative z-10 flex gap-4 mt-8">
            <a href="#" className="bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 transition"><FaInstagram size={22} /></a>
            <a href="#" className="bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 transition"><FaFacebookF size={22} /></a>
            <a href="#" className="bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 transition"><FaTwitter size={22} /></a>
           
          </div>
        </div>
        {/* Right: Contact Form */}
        <div className="md:w-1/2 bg-gradient-to-b from-white to-yellow-50 p-8">
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Name *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-yellow-200'}`}
                required
              />
              {errors.name && <span className="text-red-700 text-xs">{errors.name}</span>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Email *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-yellow-200'}`}
                required
              />
              {errors.email && <span className="text-red-700 text-xs">{errors.email}</span>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Subject *</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.subject ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-yellow-200'}`}
                required
              />
              {errors.subject && <span className="text-red-700 text-xs">{errors.subject}</span>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Message *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.message ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-yellow-200'}`}
                required
              />
              {errors.message && <span className="text-red-700 text-xs">{errors.message}</span>}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-rose-900 text-white rounded-lg font-semibold shadow-lg hover:bg-rose-700 transition-all duration-300"
            >
              Submit
            </button>
            {submitted && (
              <div className="text-green-600 text-center font-semibold mt-2">
                Thank you! Your message has been sent.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
