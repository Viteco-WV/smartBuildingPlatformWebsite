"use client"
import React, { useState, useEffect } from 'react';
import { Building2, Zap, Thermometer, Settings, TrendingUp, Shield, Users, Phone, Mail, MapPin, ChevronRight, BarChart3, Gauge, Wind, Brain, Linkedin, Youtube, ChevronLeft, ArrowLeft } from 'lucide-react';
import { RouterLink } from '@/components/Router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CaseStudiesSectionHeader from '@/components/CaseStudiesSectionHeader';
import SmartBuildingCta from '@/components/SmartBuildingCta';
import CaseStudiesGallery from '@/components/CaseStudiesGallery';
import { caseStudiesData } from '../caseStudiesData';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';

const SmartBuildingHomepage = () => {
  const [activeModule, setActiveModule] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [logoFiles, setLogoFiles] = useState<string[]>([]);

  useEffect(() => {
    setIsVisible(true);
    fetch('/api/company-logos')
      .then(res => res.json())
      .then(setLogoFiles)
      .catch(() => setLogoFiles([]));
  }, []);

  const modules = [
    {
      id: 'energy',
      title: 'Energie Manager',
      icon: Zap,
      description: 'Ontsluiten, analyseren en rapporteren van hoofdmeters en submeters energie',
      details: 'Volledig inzicht in gas, elektra, warmte en water verbruik met geavanceerde analytics.',
      color: 'from-emerald-400 to-green-500',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-300'
    },
    {
      id: 'comfort',
      title: 'Comfort Manager',
      icon: Thermometer,
      description: 'Ontsluiten, analyseren en rapporteren over binnenclimaat condities',
      details: 'Monitoring van binnenklimaat: temperatuur, luchtkwaliteit, vochtigheid en fijnstof.',
      color: 'from-teal-400 to-emerald-500',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-300'
    },
    {
      id: 'hvac',
      title: 'HVAC Manager',
      icon: Wind,
      description: 'Ontsluiten, analyseren en rapporteren van HVAC prestaties',
      details: 'Geautomatiseerde FDD analyses voor vroege storingsdetectie en optimalisatie.',
      color: 'from-green-400 to-teal-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-300'
    },
    {
      id: 'control',
      title: 'Control Manager',
      icon: Brain,
      description: 'Aansturen op basis van machine learning algoritmes i.c.m. jaren ervaring',
      details: 'Intelligente sturing voor optimale energie flexibiliteit en comfort.',
      color: 'from-cyan-400 to-emerald-500',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-300'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Minder kosten',
      description: 'Substantiële kostenreductie op energieverbruik en onderhoud'
    },
    {
      icon: Shield,
      title: 'Proactief beheer',
      description: 'Vroege storingsdetectie en voorspelbaar onderhoud'
    },
    {
      icon: Users,
      title: 'Optimaal comfort',
      description: 'Gezond binnenklimaat voor productieve gebruikers'
    }
  ];

  const caseStudies = caseStudiesData;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section - aangepast naar voorbeeld */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Tekst links */}
            <div className="flex-1">
              <h1 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight text-left">
                Slimme gebouwen op het gebied van <span className="text-[#00e886]">energie-efficiëntie</span> <span className="text-black">en</span> <span className="text-[#00e886]">comfort</span>
              </h1>
              <p className="text-lg text-gray-900 mb-8">
                Wij maken energie en HVAC-installaties intelligent middels geautomatiseerde fout detectie en diagnose in combinatie met voorspellend aansturen. Vanuit diepgaande kennis in meet- & regeltechniek, energie en HVAC ondersteunen wij onze klanten data gedreven in het dagelijks beheer van hun assets.
              </p>
              <div className="flex gap-4">
                <RouterLink href="/demo" className="bg-[#00e886] text-white px-6 py-3 rounded font-semibold shadow transition hover:bg-[#00d676] hover:shadow-[0_4px_16px_0_#00e88644] flex items-center justify-center">Boek je demo</RouterLink>
                <RouterLink href="/services" className="bg-gray-200 text-gray-900 px-6 py-3 rounded font-semibold transition hover:bg-gray-300 hover:shadow-[0_4px_16px_0_#00e88644]">Onze service</RouterLink>
              </div>
            </div>
            {/* Grijs vlak rechts */}
            <div className="flex-1 justify-center items-center hidden md:flex">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Skyline kantoren"
                className="w-full h-[320px] lg:w-[420px] lg:h-[420px] object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vier krachtige modules</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Het platform bestaat uit geïntegreerde modules die samen zorgen voor compleet inzicht en controle over uw gebouwprestaties. Hiermee bent u direct GACS complaint.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:flex lg:flex-row gap-8 mb-12 justify-center items-stretch">
            {modules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <div
                  key={module.id}
                  className={"group cursor-pointer transition-all duration-300 rounded-2xl bg-[#111111] border-2 border-gray-200 shadow-xl scale-100 hover:scale-105 hover:shadow-[0_8px_32px_0_#00e886b3] flex flex-col h-full min-h-[420px] w-full max-w-md mx-auto lg:w-[22rem] lg:mx-0"}
                  onClick={() => setActiveModule(index)}
                  onMouseEnter={() => setActiveModule(index)}
                >
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex flex-col items-center text-center flex-1">
                      <div className="p-3 rounded-xl bg-[#00e886] text-white shadow-lg mb-4 mx-auto flex justify-center">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{module.title}</h3>
                      <p className="text-gray-300 mb-2 w-full">{module.description}</p>
                      <p className="text-sm text-gray-400 w-full mb-4">{module.details}</p>
                      <div className="flex-1" />
                      <div className="mb-4">
                        <RouterLink href={`/platform?module=${module.id}`} className="flex items-center justify-center text-[#00e886] font-semibold hover:text-[#00c86a] transition-colors">
                          Meer informatie <ChevronRight className="h-4 w-4 ml-1" />
                        </RouterLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Jouw gebouw sectie */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold text-black mt-2 mb-4">We werken voor je gebouw en voor de mensen die erin zitten</h2>
            <p className="text-gray-600 max-w-4xl mb-10 mx-auto">
              Er zijn veel argumenten om de prestaties van het gebouw inzichtelijk te maken: duurzaam beheer; het voorspelbaar maken van onderhoud; de wens van overheden om Europa klimaatvriendelijker te maken. Al die motieven onderschrijven we. Maar onder de streep werken we voor jou en voor de gebruikers van jouw gebouw.
            </p>
            <div className="flex justify-center mb-12">
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
                alt="Gebruikers in gebouw"
                className="rounded-lg shadow-lg w-full max-w-2xl object-cover"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-2">Blije gebruikers</h3>
                <p className="text-gray-700">Een gezond binnenklimaat zorgt voor gezonde en productieve gebruikers. We streven naar een vermindering van het ziekteverzuim als gevolg van gebrekkig functionerende installaties. In een gezond gebouw werken blije mensen!</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Minder kosten</h3>
                <p className="text-gray-700">Als alle onderdelen in een installatie goed hun werk doen, kan dit zorgen voor een substantiële kostenreductie op energieverbruik en onderhoud. En natuurlijk heeft een goed werkende installatie een langere levensduur.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Echte verbeteringen</h3>
                <p className="text-gray-700">We controleren alle ruimtes in een gebouw; van de lucht- en watertemperatuur, klepstanden en ventilatiepunten tot het gedrag van de gebruikers. Dat leidt tot inzichten die zorgen voor echte verbetering.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom kiezen voor Infinity? */}
      <section id="voordelen" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Waarom kiezen voor Infinity?</h2>
            <p className="text-xl text-gray-600">Meetbare voordelen voor uw gebouw en organisatie</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-black p-8 rounded-2xl shadow-2xl hover:shadow-xl transition-shadow flex flex-col items-center text-center w-full max-w-md mx-auto">
                  <div className="bg-[#00e886] p-4 rounded-xl w-fit mb-6 flex items-center justify-center mx-auto">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-white/80">{benefit.description}</p>
                </div>
              );
            })}
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-center mb-6">Bedrijven die vertrouwen op Infinity</h3>
            <div className="relative overflow-hidden">
              <div className="flex gap-12 items-center py-4 animate-company-logos whitespace-nowrap" style={{ animation: 'company-logos-scroll 30s linear infinite' }}>
                {logoFiles.map((file, idx) => (
                  <Image key={file} src={`/company-logos/${file}`} alt={`Bedrijfslogo ${idx+1}`} width={120} height={48} className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 inline-block" />
                ))}
              </div>
          </div>
        </div>
        </div>
      </section>
      
      {/* Logo slider & klantreacties */}
      <section className="py-16 bg-gray-50 border-b border-gray-100 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 italic">Wat zeggen onze klanten?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Dummy klantreacties */}
              <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-emerald-600">A</span>
                </div>
                <p className="text-gray-700 mb-4 italic">"Sinds de samenwerking met Infinity zijn de energiekosten gedaald en is het comfort in onze gebouwen verbeterd."</p>
                <div className="font-semibold text-gray-900">Marco Beekhuizen</div>
                <div className="text-gray-500 text-sm">Facility Manager, ROC Mondriaan</div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-emerald-600">B</span>
                </div>
                <p className="text-gray-700 mb-4 italic">"De SkySpark technische support van Infinity helpt ons enorm bij het data gedreven servicen van onze klanten"</p>
                <div className="font-semibold text-gray-900">Mike de Groot</div>
                <div className="text-gray-500 text-sm">Directeur, Schouten Techniek</div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-emerald-600">C</span>
                </div>
                <p className="text-gray-700 mb-4 italic">"Infinity denkt mee, ontzorgt en levert altijd snel support. Middels de software wordt prestatie management veel eenvoudiger."</p>
                <div className="font-semibold text-gray-900">Wie of Wie?</div>
                <div className="text-gray-500 text-sm">Technisch Beheerder, Rijksmuseum</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SmartBuildingCta />
      <CaseStudiesGallery caseStudies={caseStudies} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      
      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  );
};

export default SmartBuildingHomepage;