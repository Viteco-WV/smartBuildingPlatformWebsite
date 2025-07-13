"use client"
import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, ChevronRight } from 'lucide-react';
import { RouterLink } from '@/components/Router';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Preference {
  date: Date | null;
  time: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  comments: string;
  preferences: Preference[];
}

export default function DemoRequestPage() {
  // Zet de hele pagina op een witte achtergrond
  return (
    <div className="min-h-screen bg-white">
      {/* rest van de pagina */}
      <MainDemoContent />
    </div>
  );
}

function MainDemoContent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: '',
    preferences: [
      { date: null as Date | string | null, time: '' },
      { date: null as Date | string | null, time: '' },
      { date: null as Date | string | null, time: '' }
    ]
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const timeSlots = [
    '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date: Date | null, index: number) => {
    setFormData(prev => ({
      ...prev,
      preferences: prev.preferences.map((pref, i) =>
        i === index ? { ...pref, date: date ? date.toISOString().split('T')[0] : null } : pref
      )
    }));
  };

  const handleTimeChange = (time: string, index: number) => {
    setFormData(prev => ({
      ...prev,
      preferences: prev.preferences.map((pref, i) =>
        i === index ? { ...pref, time } : pref
      )
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');
    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          preferences: formData.preferences.map(p => ({
            date: p.date || null,
            time: p.time
          }))
        })
      });
      if (res.ok) {
        setSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          comments: '',
          preferences: [
            { date: null, time: '' },
            { date: null, time: '' },
            { date: null, time: '' }
          ]
        });
      } else {
        const data = await res.json();
        setError(data.error || 'Er is iets misgegaan. Probeer het later opnieuw.');
      }
    } catch (err: any) {
      setError('Er is iets misgegaan. Probeer het later opnieuw.');
    } finally {
      setLoading(false);
    }
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
            <span className="text-[#00e886] font-semibold">Demo aanvragen</span>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
        <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-black mb-6">Aanvraag formulier</h1>
          <p className="text-gray-600 mb-8">
            Vul het formulier in voor het plannen van een gesprek om een demo te faciliteren. We nemen binnen 24 uur contact met u op om de details te bespreken.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  Voornaam *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-black"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Achternaam *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-black"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-mailadres *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-black"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefoonnummer (optioneel)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-black"
              />
            </div>

            <div>
              <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                Heeft u specifieke zaken waar u op in wilt gaan? (optioneel)
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-black"
                placeholder="Beschrijf hier waar u specifiek op in wilt gaan tijdens de demo..."
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Voorkeur voor datum en tijd  (optioneel)</h3>
              <p className="text-sm text-gray-600">Wij ontvangen graag drie agenda voorkeuren die u goed uitkomen.</p>
              
              {formData.preferences.map((pref, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Datum voorkeur {index + 1}
                    </label>
                    <div className="relative">
                      <DatePicker
                        selected={pref.date ? new Date(pref.date) : null}
                        onChange={(date: Date | null) => handleDateChange(date, index)}
                        minDate={new Date()}
                        dateFormat="dd/MM/yyyy"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-black"
                        placeholderText="Selecteer een datum"
                      />
                      <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tijdstip voorkeur {index + 1}
                    </label>
                    <select
                      value={pref.time}
                      onChange={(e) => handleTimeChange(e.target.value, index)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-black"
                    >
                      <option value="">Selecteer een tijdstip</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#00e886] text-white px-6 py-3 rounded-lg hover:bg-[#00d676] transition-all font-semibold disabled:opacity-60"
                disabled={loading}
              >
                {loading ? 'Versturen...' : 'Plan een kennismaking'}
              </button>
              {success && <div className="text-green-600 font-semibold mt-2">Bedankt voor je aanvraag! We nemen zo snel mogelijk contact op.</div>}
              {error && <div className="text-red-600 font-semibold mt-2">{error}</div>}
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}; 