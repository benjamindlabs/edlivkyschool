
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import heroContactImage from '@/assets/hero-bg-contact.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      
      {/* Header Section */}
      <section 
        className="py-20 bg-gray-50 dark:bg-slate-800 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${heroContactImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ready to start your coding journey? Get in touch with our team and let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <Card className="bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-blue-400 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Main Campus</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          78 Ekewan Road, Opp. Stadium Road Junction<br />
                          Benin City, Edo State, Nigeria
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-green-400 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
                        <p className="text-gray-600 dark:text-gray-300">+234 (0) 123 456 7890</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-purple-400 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                        <p className="text-gray-600 dark:text-gray-300">info@edlivky.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-yellow-400 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Hours</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white resize-none"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your goals and how we can help you..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Find Us</h2>
            <p className="text-gray-600 dark:text-gray-300">Visit our main campus in Benin City</p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.6743822!2d5.6257!3d6.3350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjAnMTAuMCJOIDXCsDM3JzMyLjUiRQ!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Edlivky Academy Location"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Edlivky Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
