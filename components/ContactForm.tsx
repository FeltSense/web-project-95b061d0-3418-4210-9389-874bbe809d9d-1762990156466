'use client';

import { useState } from 'react';
import { Send, CheckCircle, Mail, Phone, User, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          founder_id: 'FOUNDER_ID_PLACEHOLDER',
          project_id: 'PROJECT_ID_PLACEHOLDER'
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to find your dream property? Contact us today and let's start your journey together.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-blue-800 p-10 text-white">
                <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
                <p className="text-blue-100 mb-10 leading-relaxed">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-blue-100">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-blue-100">info@eliteproperties.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">Office Hours</p>
                      <p className="text-blue-100">Mon-Fri: 9AM - 6PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 p-10">
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="text-green-600" size={48} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
                    <p className="text-gray-600 text-lg">
                      We've received your message and will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                        <User size={20} />
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                        <Mail size={20} />
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                        <Phone size={20} />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                        <MessageSquare size={20} />
                        Message
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell us about your property needs..."
                      />
                    </div>

                    <input type="hidden" name="founder_id" value="FOUNDER_ID_PLACEHOLDER" />
                    <input type="hidden" name="project_id" value="PROJECT_ID_PLACEHOLDER" />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg text-lg font-bold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send size={20} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}