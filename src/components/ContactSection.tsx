"use client"
import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, organization, message }),
      });
      if (res.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setOrganization('');
        setMessage('');
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
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Wij maken graag kennis</h2>
            <p className="text-xl text-gray-600 mb-8">
              Heeft u vragen over onze dienstverlening? Onze experts staan u graag te woord.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-logo-green p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Telefoon</div>
                  <div className="text-gray-600">085 210 4456</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-logo-green p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">info@infinity-monitoring.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-logo-green p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Locatie</div>
                  <div className="text-gray-600"><a href="https://maps.app.goo.gl/1zSjk2WhKqnXqRN5A" target="_blank" rel="noopener noreferrer">Wijkermeerweg 44U, Beverwijk</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl shadow-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Naam</label>
                <input 
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white" 
                  placeholder="Uw naam"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white" 
                  placeholder="uw.email@bedrijf.nl"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organisatie</label>
                <input 
                  type="text"
                  value={organization}
                  onChange={e => setOrganization(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white" 
                  placeholder="Uw organisatie"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bericht</label>
                <textarea 
                  rows={4}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white" 
                  placeholder="Vertel ons over uw project..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-logo-green text-white py-3 rounded-lg font-semibold hover:bg-[#00c46c] transition-colors disabled:opacity-60"
                disabled={loading}
              >
                {loading ? 'Versturen...' : 'Versturen'}
              </button>
              {success && <div className="text-green-600 font-semibold mt-2">Bedankt voor je bericht! We nemen zo snel mogelijk contact op.</div>}
              {error && <div className="text-red-600 font-semibold mt-2">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 