'use client';

import React, { useState } from "react";
import Link from "next/link";
import { FileText, BarChart3, Settings } from 'lucide-react';
import gacsCaseStudiesData from './gacsCaseStudies.json';

export default function GacsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", message: "" });
  const [addressSuggestions, setAddressSuggestions] = useState<string[]>([]);
  const [showAddressSuggestions, setShowAddressSuggestions] = useState(false);
  const [addresses, setAddresses] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddressChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm({ ...form, address: value });
    
    console.log('Address change:', value, 'length:', value.length);
    
    if (value.length > 1) {
      try {
        console.log('Fetching suggestions for:', value);
        const response = await fetch(`/api/address-suggestions?q=${encodeURIComponent(value)}`);
        console.log('Response status:', response.status);
        
        if (response.ok) {
          const data = await response.json();
          console.log('Suggestions received:', data.suggestions);
          setAddressSuggestions(data.suggestions);
          setShowAddressSuggestions(true);
        } else {
          console.log('Response not ok:', response.status);
          setAddressSuggestions([]);
          setShowAddressSuggestions(false);
        }
      } catch (error) {
        console.error('Error fetching address suggestions:', error);
        setAddressSuggestions([]);
        setShowAddressSuggestions(false);
      }
    } else {
      console.log('Value too short, clearing suggestions');
      setAddressSuggestions([]);
      setShowAddressSuggestions(false);
    }
  };

  const selectAddress = (address: string) => {
    setForm({ ...form, address });
    setShowAddressSuggestions(false);
  };

  const addAddress = () => {
    if (form.address.trim()) {
      setAddresses([...addresses, form.address.trim()]);
      setForm({ ...form, address: "" });
      setShowAddressSuggestions(false);
    }
  };

  const removeAddress = (index: number) => {
    setAddresses(addresses.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("/api/gacs-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name: form.name, 
          email: form.email, 
          phone: form.phone,
          addresses: addresses.length > 0 ? addresses : (form.address ? [form.address] : []),
          message: form.message
        }),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", address: "", message: "" });
        setAddresses([]);
      } else {
        const data = await res.json();
        setError(data.error || "Er is iets misgegaan. Probeer het later opnieuw.");
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setError("Er is iets misgegaan. Probeer het later opnieuw.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-4xl mx-auto px-4 py-12 text-black">
        <div className="flex justify-center mb-6">
          <img src="/Infinity Logo RGB Black.svg" alt="Infinity Logo" className="h-12 w-auto" />
        </div>
        <div className="flex justify-center mb-6">
          <div className="h-1 w-32 rounded-full bg-gradient-to-r from-[#00e886] via-[#00e88688] to-transparent" />
        </div>
        <h1 className="text-5xl font-extrabold mb-2 text-center text-black">WHAT THE GACS?!</h1>
        <p className="text-lg text-gray-600 font-semibold text-center mb-4">GACS verplicht vanaf 2026: Infinity ontzorgd middels onafhankelijk advies</p>
        <p className="mb-6 text-lg text-center text-black">
          Vanaf <strong>1 januari 2026</strong> is een Gebouwautomatisering- en controlesysteem (GACS) verplicht voor gebouwen met een verwarmings- of airco-installatie vanaf 290 kW nominaal vermogen. Infinity helpt u eenvoudig te voldoen aan deze wettelijke eis én haalt direct meer uit uw gebouw!
        </p>
        <section className="mb-8 bg-gray-50 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-2 text-black">Wat is GACS?</h2>
          <p className="text-black">
            GACS staat voor Gebouwautomatisering- en controlesysteem. Hiermee wordt het energieverbruik, binnenklimaat en HVAC prestaties van uw gebouw continu gemonitord, geanalyseerd en geoptimaliseerd. Dit is niet alleen verplicht, maar biedt ook kansen voor kostenbesparing en verduurzaming.
          </p>
        </section>
        <section className="mb-8 bg-gray-50 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-2 text-black">Wat is GACS niet?</h2>
          <p className="text-black">
            GACS is <b>geen</b> traditioneel gebouwbeheersysteem (GBS) of enkel een datalogger. Het draait om actieve monitoring, analyse en optimalisatie van energie, comfort en prestaties – niet alleen om het verzamelen van data. GACS gaat verder dan alleen inzicht: het is gericht op structurele verbetering en slimme sturing.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-8 text-center text-black">Stappenplan: zo wordt uw gebouw GACS compliant</h2>
          <div className="relative max-w-4xl mx-auto px-4">
            {/* Verticale groene lijn */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-[#00e886] z-0" />
            <ul className="space-y-16 relative z-10">
              {/* Stap 1 */}
              <li className="relative flex items-center group">
                <div className="flex-1 flex justify-end pr-8">
                  <div className="bg-white rounded-xl shadow-lg p-6 max-w-xl w-full text-left mx-auto">
                    <div className="text-sm text-gray-500 mb-1 font-semibold">Stap 1</div>
                    <div className="text-lg font-bold mb-2 text-black">1-daagse GACS Audit</div>
                    <ul className="list-disc pl-6 text-left text-sm text-gray-700 mb-2">
                      <li className="pl-2"><span className="inline-block align-top">Snelle scan van uw gebouw en installaties</span></li>
                      <li className="pl-2"><span className="inline-block align-top">Uitlezen van de hoofdmeter(s) en analyse van het energieprofiel</span></li>
                      <li className="pl-2"><span className="inline-block align-top">Toetsing aan de wettelijke GACS-eisen</span></li>
                      <li className="pl-2"><span className="inline-block align-top">Heldere rapportage met concrete verbeterpunten</span></li>
                      <li className="pl-2"><span className="inline-block align-top">Uitkomst: een concrete business case voor het direct doorvoeren van verbeteringen</span></li>
                    </ul>
                  </div>
                </div>
                <div className="flex-none flex flex-col items-center z-10">
                  <div className="w-8 h-8" />
                  <div className="bg-black rounded-full shadow-lg flex items-center justify-center w-20 h-20">
                    <FileText className="h-10 w-10 text-[#00e886]" />
                  </div>
                </div>
                <div className="flex-1" />
              </li>
              {/* Stap 2 */}
              <li className="relative flex items-center group">
                <div className="flex-1" />
                <div className="flex-none flex flex-col items-center z-10">
                  <div className="w-8 h-8" />
                  <div className="bg-black rounded-full shadow-lg flex items-center justify-center w-20 h-20">
                    <BarChart3 className="h-10 w-10 text-[#00e886]" />
                  </div>
                </div>
                <div className="flex-1 flex justify-start pl-8">
                  <div className="bg-white rounded-xl shadow-lg p-6 max-w-xl w-full text-left mx-auto">
                    <div className="text-sm text-gray-500 mb-1 font-semibold">Stap 2</div>
                    <div className="text-lg font-bold mb-2 text-black">Implementatie SkySpark EMS</div>
                    <ul className="list-disc pl-6 text-left text-sm text-gray-700 mb-2">
                      <li className="pl-2"><span className="inline-block align-top">Inrichten van SkySpark EMS voor monitoring en rapportage</span></li>
                      <li className="pl-2"><span className="inline-block align-top">Automatische foutdetectie en diagnose (FDD) voor prestatieborging</span></li>
                      <li className="pl-2"><span className="inline-block align-top">Alle verbeteringen worden na implementatie geborgd en gemonitord via het platform</span></li>
                    </ul>
                  </div>
                </div>
              </li>
              {/* Stap 3 */}
              <li className="relative flex items-center group">
                <div className="flex-1 flex justify-end pr-8">
                  <div className="bg-white rounded-xl shadow-lg p-6 max-w-xl w-full text-left mx-auto">
                    <div className="text-sm text-gray-500 mb-1 font-semibold">Stap 3</div>
                    <div className="text-lg font-bold mb-2 text-black">Hardwarematige GACS implementatiebegeleiding</div>
                    <ul className="list-disc pl-6 text-left text-sm text-gray-700 mb-2">
                      <li className="pl-2"><span className="inline-block align-top">Offerte uitvragen bij leveranciers</span></li>
                      <li className="pl-2"><span className="inline-block align-top">Projectbegeleiding tijdens de implementatie</span></li>
                      <li className="pl-2"><span className="inline-block align-top">Kwaliteitstoetsing van de opgeleverde GACS hardware</span></li>
                    </ul>
                  </div>
                </div>
                <div className="flex-none flex flex-col items-center z-10">
                  <div className="w-8 h-8" />
                  <div className="bg-black rounded-full shadow-lg flex items-center justify-center w-20 h-20">
                    <Settings className="h-10 w-10 text-[#00e886]" />
                  </div>
                </div>
                <div className="flex-1" />
              </li>
            </ul>
          </div>
        </section>
        <section className="mb-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-2 text-black">Volledige ontzorging: SkySpark EMS &amp; Backoffice</h2>
          <ul className="list-disc pl-6 mb-2 text-black">
            <li>Doorlopende monitoring en optimalisatie van uw gebouwprestaties</li>
            <li>SkySpark EMS software voor inzicht en rapportage</li>
            <li>Proactieve opvolging en beheer door onze ervaren backoffice</li>
          </ul>
          <p className="text-black">
            Zo blijft u niet alleen compliant, maar haalt u ook maximaal rendement uit uw gebouw!
          </p>
        </section>
        {/* Nieuwe sectie over SkySpark EMS modules en klassen */}
        <section className="mb-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 text-black">SkySpark EMS modules &amp; GACS klassen</h2>
          <p className="mb-4 text-black">
            Het SkySpark EMS platform bestaat uit verschillende modules voor energiebeheer, comfort, HVAC en sturing. Binnen de GACS-wetgeving worden technische gebouwmanagementsystemen ingedeeld in klassen A, B, C en D:
          </p>
          <ul className="list-disc pl-6 text-left text-sm text-gray-700 mb-2">
            <li className="pl-2"><span className="inline-block align-top"><b>Klasse A:</b> Basale monitoring, handmatige uitlezing en beperkte functionaliteit.</span></li>
            <li className="pl-2"><span className="inline-block align-top"><b>Klasse B:</b> Geautomatiseerde uitlezing, basisrapportages en eenvoudige optimalisatie.</span></li>
            <li className="pl-2"><span className="inline-block align-top"><b>Klasse C:</b> Geavanceerde monitoring, automatische analyses, foutdetectie en prestatieborging (zoals met SkySpark EMS).</span></li>
            <li className="pl-2"><span className="inline-block align-top"><b>Klasse D:</b> Volledige integratie, zelflerende systemen en geautomatiseerde sturing van gebouwinstallaties.</span></li>
          </ul>
          <p className="mt-4 text-sm text-gray-700">
            Met SkySpark EMS voldoet u minimaal aan klasse C en bent u voorbereid op de strengste eisen voor gebouwbeheer en optimalisatie.
          </p>
        </section>

        {/* Nieuwe sectie: GACS compliant gebouwen */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-black">Deze gebouwen zijn GACS compliant</h2>
          <div className="relative overflow-x-auto">
            <div className="flex gap-6 py-4 min-w-max" style={{scrollbarWidth: 'thin'}}>
              {gacsCaseStudiesData.slice(0, 10).map((gebouw: any) => (
                <div key={gebouw.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col min-w-[260px] max-w-xs w-full">
                  <div className="h-48 w-full overflow-hidden">
                    <img src={gebouw.image} alt={gebouw.title} className="object-cover w-full h-full" />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-black">{gebouw.title}</h3>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      <div>{gebouw.address}</div>
                      <div>{gebouw.area} &middot; Energielabel {gebouw.energyLabel}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="text-center mt-10">
          <button
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow"
            onClick={() => setModalOpen(true)}
          >
            Vraag direct een GACS-audit aan
          </button>
        </div>

        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-4xl relative animate-fadeIn max-h-[90vh] overflow-y-auto">
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
                onClick={() => { setModalOpen(false); setSuccess(false); setError(""); }}
                aria-label="Sluit"
              >
                &times;
              </button>
              {!success ? (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-36 overflow-hidden flex items-center justify-center">
                      <img src="/InfinityLogo.svg" alt="Infinity Logo" className="h-12 w-auto object-contain" />
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="h-1 w-32 rounded-full bg-gradient-to-r from-gray-300 via-gray-200 to-transparent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-center text-black">Aanvraag GACS-audit</h3>
                  <p className="text-gray-600 text-center mb-6">Vraag vrijblijvend een offerte aan voor het uitvoeren van een GACS-audit. Om ons goed te kunnen voorbereiden kunt u alvast de gebouwadressen invoeren waar u over in gesprek wilt.</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Naam <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-black"
                          placeholder="Uw naam"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">E-mail <span className="text-red-500">*</span></label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-black"
                          placeholder="uw.email@bedrijf.nl"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Telefoon (optioneel)</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-black"
                          placeholder="06-12345678"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Gebouwadressen (optioneel)</label>
                        <div className="relative">
                          <input
                            type="text"
                            name="address"
                            value={form.address}
                            onChange={handleAddressChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-black"
                            placeholder="Voer uw gebouwadres in (postcode,huisnummer)"
                          />
                          {showAddressSuggestions && addressSuggestions.length > 0 && (
                            <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                              <div className="p-2 text-xs text-gray-500 border-b border-gray-200">
                                {addressSuggestions.length} suggestie(s) gevonden
                              </div>
                              {addressSuggestions.map((suggestion, index) => (
                                <button
                                  key={index}
                                  type="button"
                                  className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none border-b border-gray-100 last:border-b-0"
                                  onClick={() => selectAddress(suggestion)}
                                >
                                  {suggestion}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2 mt-2">
                          <button
                            type="button"
                            onClick={addAddress}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors"
                          >
                            Voeg adres toe
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bericht (optioneel)</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-black resize-none"
                          placeholder="Voeg hier eventuele aanvullende informatie toe..."
                          rows={4}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Toegevoegde gebouwen</label>
                      {addresses.length > 0 ? (
                        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                          <table className="w-full">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gebouwadres</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actie</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {addresses.map((address, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                  <td className="px-4 py-3 text-sm text-gray-900">{index + 1}</td>
                                  <td className="px-4 py-3 text-sm text-gray-900 max-w-xs truncate" title={address}>
                                    {address}
                                  </td>
                                  <td className="px-4 py-3 text-sm">
                                    <button
                                      type="button"
                                      onClick={() => removeAddress(index)}
                                      className="text-red-500 hover:text-red-700 text-sm font-medium"
                                    >
                                      Verwijder
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                          <p className="text-sm text-gray-500">Nog geen gebouwen toegevoegd</p>
                          <p className="text-xs text-gray-400 mt-1">Voeg een adres toe om te beginnen</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-60"
                    disabled={loading}
                  >
                    {loading ? 'Versturen...' : 'Aanvraag versturen'}
                  </button>
                  {error && <div className="text-red-600 font-semibold mt-2">{error}</div>}
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-8">
                  <svg className="h-16 w-16 text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="text-2xl font-bold text-green-600 mb-2 text-center">Aanvraag verstuurd</div>
                  <div className="text-gray-700 text-center">Wij nemen binnen 24 uur contact met u op voor een afspraak.</div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 