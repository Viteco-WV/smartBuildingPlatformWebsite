"use client"
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Vacature1 = () => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<{ name: string; email: string; phone: string; motivation: string; file: File | null }>({ name: '', email: '', phone: '', motivation: '', file: null });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as any;
    setForm(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    if (!form.file || form.file.type !== 'application/pdf') {
      setError('Upload een geldig PDF-bestand.');
      setLoading(false);
      return;
    }
    try {
      const data = new FormData();
      data.append('name', form.name);
      data.append('email', form.email);
      data.append('phone', form.phone);
      data.append('motivation', form.motivation);
      data.append('file', form.file);
      const res = await fetch('/api/solliciteer', {
        method: 'POST',
        body: data,
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: '', email: '', phone: '', motivation: '', file: null });
        setShowModal(false);
      } else {
        setError('Er is iets misgegaan. Probeer het later opnieuw.');
      }
    } catch {
      setError('Er is iets misgegaan. Probeer het later opnieuw.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center">
              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
              Home
            </a>
            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
            <a href="/carriere" className="text-gray-600 hover:text-emerald-600 transition-colors">Carriere</a>
            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
            <span className="text-[#00e886] font-semibold">Data Consultant & Rapportagespecialist</span>
          </div>
        </div>
      </div>
      <main className="flex-1 max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Vacature: Data Consultant & Rapportagespecialist</h1>
        <div className="mb-2 text-gray-600">Locatie: Beverwijk | Dienstverband: Minimaal 32 uur</div>
        <div className="mb-2 text-gray-600">Bedrijf: Infinity Analysis & Consultancy</div>
        <h2 className="text-xl font-bold mt-8 mb-2">Over Infinity Analysis & Consultancy</h2>
        <p className="mb-4">Bij Infinity Analysis & Consultancy zetten we data om in inzichten en inzichten om in actie. Wij meten de werking van gebouwinstallaties en vertalen de vrijgekomen data naar begrijpelijke informatie. Het resultaat: intelligent en onafhankelijk beheer van gebouwen en het continu optimaliseren van klimaatbeheersing op basis van meetgegevens. Onze ambitie is om via data-analyse en machine learning bij te dragen aan slimme gebouwen en energiebesparing.</p>
        <h2 className="text-xl font-bold mt-8 mb-2">Jouw rol</h2>
        <p className="mb-4">Als Data Consultant & Rapportagespecialist ben jij een essentiële schakel binnen ons team. Je stelt heldere, diepgaande rapportages op voor onze consultancyprojecten en ondersteunt bij uiteenlopende data-gerelateerde werkzaamheden binnen ons kantoor. Daarnaast communiceer je de rapporten richting onze klanten en geef je, waar nodig, aanvullende toelichting om ervoor te zorgen dat zij volledig inzicht hebben in de analyses en adviezen.</p>
        <h2 className="text-xl font-bold mt-8 mb-2">Taken en verantwoordelijkheden</h2>
        <ul className="list-disc ml-6 mb-4 text-gray-800">
          <li>Opstellen en structureren van consultancyrapporten en adviezen.</li>
          <li>Communiceren van rapportages naar klanten en geven van aanvullende toelichting indien nodig.</li>
          <li>Ondersteunen bij dataverwerking, analyse en rapportagewerkzaamheden.</li>
          <li>Signaleren van trends, afwijkingen en kansen op basis van data.</li>
          <li>Meedenken over verbeteringen in onze interne rapportageprocessen.</li>
        </ul>
        <h2 className="text-xl font-bold mt-8 mb-2">Jouw profiel</h2>
        <ul className="list-disc ml-6 mb-4 text-gray-800">
          <li>Interesse in techniek.</li>
          <li>Bij voorkeur ervaring met het werken met data en het opstellen van rapportages.</li>
          <li>Interesse in het opsporen van verbeteringen.</li>
          <li>Autodidactisch ingesteld: je hebt een natuurlijke nieuwsgierigheid en het vermogen om zelfstandig nieuwe tools, methodieken en technieken eigen te maken.</li>
          <li>Vaardig, of bereid om vaardig te worden, in het gebruik van datatools.</li>
          <li>Sterke analytische en schriftelijke vaardigheden.</li>
          <li>Proactieve, zelfstandige en klantgerichte werkhouding.</li>
        </ul>
        <h2 className="text-xl font-bold mt-8 mb-2">Wat wij bieden</h2>
        <ul className="list-disc ml-6 mb-4 text-gray-800">
          <li>Een dynamische en groeiende organisatie met ruimte voor eigen initiatief. Je maakt deel uit van een hecht team waar jouw inzet zichtbaar is en gewaardeerd wordt.</li>
          <li>Een betekenisvolle functie waarin je directe impact hebt op projecten en klantresultaten.</li>
          <li>Marktconform salaris en goede secundaire arbeidsvoorwaarden.</li>
          <li>Een prettige werkomgeving met een open sfeer en een veilige, ondersteunende werkplek.</li>
        </ul>
        <h2 className="text-xl font-bold mt-8 mb-2">Solliciteren</h2>
        <p className="mb-4">Ben jij de zelfstandige en leergierige specialist die wij zoeken?</p>
        <p className="mb-8">Stuur dan je cv en motivatie naar Jacky de Bie via <a href="mailto:j.debie@infinity-monitoring.com" className="text-logo-green underline">j.debie@infinity-monitoring.com</a>, of druk op de knop!</p>
        <button onClick={() => setShowModal(true)} className="bg-[#00e886] text-white px-8 py-3 rounded font-semibold shadow hover:bg-[#00d676] transition mb-8">Solliciteer direct</button>
        {success && <div className="text-green-600 font-semibold mt-2">Bedankt voor je sollicitatie! We nemen zo snel mogelijk contact op.</div>}
        {error && <div className="text-red-600 font-semibold mt-2">{error}</div>}
        {showModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
              <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
              <h3 className="text-2xl font-bold mb-4 text-center">Solliciteer direct</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-1">Naam</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">E-mail</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Telefoon</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Korte motivatie</label>
                  <textarea name="motivation" value={form.motivation} onChange={handleChange} className="w-full px-4 py-2 border rounded" rows={3} required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Upload je CV (PDF)</label>
                  <input type="file" name="file" accept="application/pdf" onChange={handleChange} className="w-full" required />
                </div>
                <button type="submit" className="w-full bg-[#00e886] text-white py-3 rounded font-semibold hover:bg-[#00d676] transition" disabled={loading}>
                  {loading ? 'Versturen...' : 'Verstuur sollicitatie'}
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Vacature1; 