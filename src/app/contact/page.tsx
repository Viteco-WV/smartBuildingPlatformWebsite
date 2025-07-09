"use client"
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, Youtube, ArrowLeft, ChevronRight } from 'lucide-react';
import { RouterLink } from '@/components/Router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier zou de form submission logica komen
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <RouterLink href="/" className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Home
            </RouterLink>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-[#00e886] font-semibold">Contact</span>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Neem <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">Contact</span> Op
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Heeft u vragen over ons smart building platform? Onze experts helpen u graag verder.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Telefoon</h3>
                    <p className="text-gray-600">+31 (0)85 303 3054</p>
                    <p className="text-sm text-gray-500 mt-1">Maandag t/m Vrijdag, 9:00 - 17:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@infinity-analysis.com</p>
                    <p className="text-sm text-gray-500 mt-1">We streven ernaar binnen 24 uur te reageren</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Locatie</h3>
                    <p className="text-gray-600">Nederland</p>
                    <p className="text-sm text-gray-500 mt-1">Beschikbaar voor projecten in heel Nederland</p>
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Volg Ons</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/company/infinity-monitoring" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-100 p-3 rounded-lg hover:bg-emerald-100 transition-colors"
                    >
                      <Linkedin className="h-6 w-6 text-emerald-600" />
                    </a>
                    <a 
                      href="https://youtube.com/@infinitymonitoring" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-100 p-3 rounded-lg hover:bg-emerald-100 transition-colors"
                    >
                      <Youtube className="h-6 w-6 text-emerald-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Naam
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Uw naam"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="uw.email@bedrijf.nl"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Organisatie
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Uw organisatie"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Vertel ons over uw project..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-400 to-green-500 text-white px-6 py-3 rounded-lg hover:from-emerald-500 hover:to-green-600 transition-all font-semibold"
                >
                  Verstuur Bericht
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage; 