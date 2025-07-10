"use client";
export const dynamic = "force-dynamic";
import React, { useState } from 'react';
import { Zap, Thermometer, Wind, Brain, Building2, ChevronRight, TrendingUp, Linkedin, Youtube, ArrowLeft, Database, Tag, BarChart3, LayoutDashboard, Settings } from 'lucide-react';
import { RouterLink } from '@/components/Router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmartBuildingCta from '@/components/SmartBuildingCta';
import CaseStudiesGallery from '@/components/CaseStudiesGallery';
import { caseStudiesData } from '../../caseStudiesData';
import { useSearchParams } from 'next/navigation';
import CaseStudiesSectionHeader from '@/components/CaseStudiesSectionHeader';
import { Suspense } from 'react';
import ContactSection from '@/components/ContactSection';

const PlatformPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('energy');
  React.useEffect(() => {
    const moduleParam = searchParams?.get('module');
    if (moduleParam) setActiveTab(moduleParam);
  }, [searchParams]);

  const modules = [
    {
      id: 'energy',
      title: 'Energie Manager',
      icon: Zap,
      description: 'Ontsluiten, analyseren en rapporteren van hoofdmeters en submeters energie',
      longDescription: 'De Energie Manager module biedt volledig inzicht in het energieverbruik van uw gebouw. Van hoofdmeters tot submeters, van gas en elektra tot warmte en water - alles wordt real-time gemonitoreerd en geanalyseerd.',
      features: [
        'Real-time monitoring van alle energiestromen',
        'Automatische detectie van afwijkingen en lekken',
        'Gedetailleerde rapportage per ruimte en installatie',
        'Benchmark vergelijkingen met vergelijkbare gebouwen',
        'Voorspellende analyses voor energieverbruik',
        'Integration met smart meters en IoT sensoren'
      ],
      benefits: [
        'Tot 30% energiebesparing',
        'Vroege detectie van problemen',
        'Compliance met energienormen',
        'Lagere operationele kosten'
      ],
      color: 'from-emerald-400 to-green-500'
    },
    {
      id: 'comfort',
      title: 'Comfort Manager',
      icon: Thermometer,
      description: 'Ontsluiten, analyseren en rapporteren van comfort data',
      longDescription: 'De Comfort Manager zorgt voor optimaal binnenklimaat door continue monitoring van temperatuur, luchtkwaliteit, vochtigheid en fijnstof. Voor gezonde en productieve gebouwgebruikers.',
      features: [
        'Multi-parameter comfort monitoring',
        'CO2, VOC en fijnstof metingen',
        'Temperatuur en vochtigheidscontrole',
        'Automatische ventilatie optimalisatie',
        'Gebruikersfeedback integratie',
        'Gezondheidsimpact analyses'
      ],
      benefits: [
        'Verhoogde productiviteit gebruikers',
        'Minder ziekteverzuim',
        'Verbeterde luchtkwaliteit',
        'Optimaal werkklimaat'
      ],
      color: 'from-teal-400 to-emerald-500'
    },
    {
      id: 'hvac',
      title: 'HVAC Manager',
      icon: Wind,
      description: 'Ontsluiten, analyseren en rapporteren van HVAC prestaties',
      longDescription: 'De HVAC Manager gebruikt geavanceerde FDD (Fault Detection & Diagnostics) analyses om de prestaties van uw installaties te optimaliseren en storingen vroegtijdig te detecteren.',
      features: [
        'Geautomatiseerde FDD analyses',
        'Prestatie monitoring van alle HVAC componenten',
        'Voorspellend onderhoud scheduling',
        'Efficiency optimalisatie algoritmes',
        'Storingen detectie en diagnose',
        'Maintenance planning en tracking'
      ],
      benefits: [
        '25% minder storingen',
        'Verlengde levensduur installaties',
        'Optimale HVAC efficiency',
        'Proactief onderhoud'
      ],
      color: 'from-green-400 to-teal-500'
    },
    {
      id: 'control',
      title: 'Control Manager',
      icon: Brain,
      description: 'Aansturen op basis van voorspellende algoritmes',
      longDescription: 'De Control Manager combineert AI en machine learning voor intelligente gebouwsturing. Energie en comfort worden geoptimaliseerd door voorspellende algoritmes en real-time aanpassingen.',
      features: [
        'AI-gedreven voorspellende sturing',
        'Energie flexibiliteit management',
        'Grid balancing en demand response',
        'Machine learning optimalisatie',
        'Scenario-based control strategies',
        'Integration met externe systemen'
      ],
      benefits: [
        'Intelligente energie flexibiliteit',
        'Optimale comfort/energie balans',
        'Automatische grid balancing',
        'Zelflerend systeem'
      ],
      color: 'from-cyan-400 to-emerald-500'
    }
  ];

  const currentModule = modules.find(m => m.id === activeTab) || modules[0];

  const caseStudies = caseStudiesData;

  const [currentSlide, setCurrentSlide] = useState(0);

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
            <span className="text-[#00e886] font-semibold">Platform</span>
          </div>
        </div>
      </div>
      {/* Rest of Platform Page Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Software voor het eenvoudig <span className="text-logo-green">managen</span> van<br />
              jouw <span className="text-logo-green">gebouw prestaties</span>
            </h1>
            <p className="text-base md:text-lg text-black max-w-4xl mx-auto">
              Het SkySpark platform van Infinity is gericht op het geven van transparantie en controle door eenvoud. Simpele dashboards en rapportages geven je het benodigde inzicht om in control te zijn. Geautomatiseerde analyses houden prestaties in de gaten en maken jou - indien nodig - hier op alert.
            </p>
          </div>
        </div>
      </section>
      {/* 4 praktische modules */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black text-center mb-4">4 praktische modules</h2>
            <p className="text-center text-black mb-12">
              Onze standaard modules zijn ontworpen om de efficiëntie te maximaliseren en voldoen aan de meeste gebruikerswensen. Heeft u specifieke wensen? Wij kunnen modules aanpassen op het gebied van dashboards, rapportages en analyses zodat het platform perfect aansluit op uw organisatie.
            </p>
          </div>
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {modules.map((module) => {
              const IconComponent = module.icon;
              return (
                <button
                  key={module.id}
                  onClick={() => setActiveTab(module.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === module.id
                      ? 'bg-[#00e886] text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-[#e6fcf4] hover:text-[#00e886]'
                  }`}
                >
                  <IconComponent className={`h-5 w-5 ${activeTab === module.id ? 'text-white' : 'text-gray-600 group-hover:text-[#00e886]'} `} />
                  <span className="hidden sm:inline">{module.title}</span>
                </button>
              );
            })}
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-4">
            <div className="p-8 lg:p-12" style={{background: '#111111', color: 'white'}}>
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-4 bg-[#00e886] rounded-xl flex items-center justify-center">
                  <currentModule.icon className="h-12 w-12 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{currentModule.title}</h3>
                  <p className="text-xl opacity-90">{currentModule.description}</p>
                </div>
              </div>
              <p className="text-lg opacity-90 leading-relaxed">{currentModule.longDescription}</p>
            </div>
            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-bold text-black mb-6">Belangrijkste Features</h4>
                  <ul className="space-y-4">
                    {currentModule.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-[#e6fcf4] rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-[#00e886] rounded-full"></div>
                        </div>
                        <span className="text-black">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-black mb-6">Voordelen</h4>
                  <div className="space-y-4">
                    {currentModule.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                        <TrendingUp className="h-6 w-6 text-[#00e886]" />
                        <span className="font-semibold text-black">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SkySpark Section */}
      <section className="pt-4 pb-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-black mb-4">Powered by SkySpark&reg; van SkyFoundry</h2>
          <p className="text-lg text-black mb-2">
            Ons platform maakt gebruik van <strong>SkySpark&reg;</strong> van SkyFoundry als onderliggende software. SkySpark is wereldwijd toonaangevend op het gebied van data-analyse en gebouwbeheer. Dankzij deze technologie kunnen wij geavanceerde analyses, foutdetectie en optimalisatie van gebouwprestaties bieden.
          </p>
          <p className="text-lg text-black">
            Door de kracht van SkySpark te combineren met onze eigen expertise, bieden wij een flexibel, schaalbaar en toekomstbestendig smart building platform voor elk type gebouw.
          </p>
        </div>
      </section>
      {/* Implementatie Tijdlijn */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#00e886] mb-2">Implementatie</h2>
            <h3 className="text-4xl font-bold text-black mb-4">In vijf stappen naar een slim gebouw</h3>
            <p className="text-lg text-black max-w-3xl mx-auto">
              We helpen eindgebruikers, installateurs, regeltechnische partijen en adviseurs bij het creëren van slimme gebouwen met een gezond binnenklimaat en substantiële kostenreductie op energieverbruik en onderhoud.
            </p>
          </div>
          <div className="relative">
            {/* Verticale lijn */}
            <div className="absolute left-6 top-0 w-1 h-full bg-gray-200 z-0" />
            <ul className="space-y-8 ml-12">
              {/* Stap 1 */}
              <li className="relative flex items-start group">
                <span className="flex items-center justify-center w-6 h-6 bg-[#00e886] text-white text-base font-bold rounded-full absolute -left-9 top-4 z-10 shadow-md border-2 border-white group-hover:bg-[#00c86a] transition-colors">1</span>
                <div className="flex w-full items-center">
                  <div className="bg-white rounded-lg shadow p-4 w-2/3 max-w-md transition-all duration-200 group-hover:bg-[#e6fcf4] group-hover:shadow-lg">
                    <h4 className="text-black text-lg font-bold mb-1">Dataverzameling</h4>
                    <p className="text-black text-sm">Ieder gebouw produceert data. Die verzamelen we. Of het nu gaat om de directe data van de installatie, een slimme meter, historische data of data uit externe applicaties: onze software accepteert alle vormen van data. Die data brengen we bij elkaar.</p>
                  </div>
                  <div className="w-1/3 flex justify-center items-center pl-4">
                    <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center">
                      <Database className="h-12 w-12 text-logo-green" />
                    </div>
                  </div>
                </div>
              </li>
              {/* Stap 2 */}
              <li className="relative flex items-start group">
                <span className="flex items-center justify-center w-6 h-6 bg-[#00e886] text-white text-base font-bold rounded-full absolute -left-9 top-4 z-10 shadow-md border-2 border-white group-hover:bg-[#00c86a] transition-colors">2</span>
                <div className="flex w-full items-center">
                  <div className="bg-white rounded-lg shadow p-4 w-2/3 max-w-md transition-all duration-200 group-hover:bg-[#e6fcf4] group-hover:shadow-lg">
                    <h4 className="text-black text-lg font-bold mb-1">Data-labelling</h4>
                    <p className="text-black text-sm">Om de eendimensionale ruwe data uit verschillende bronnen betekenis te geven committeren wij ons aan de <a href="https://project-haystack.org/" target="_blank" className="text-[#00e886] underline">Project Haystack</a> Conventie, waardoor we eenduidig de data labelen. Alle data die afkomstig is van componenten, software en applicaties wordt gerangschikt en gecategoriseerd. Meetgegevens krijgen hierdoor betekenis.</p>
                  </div>
                  <div className="w-1/3 flex justify-center items-center pl-4">
                    <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center">
                      <Tag className="h-12 w-12 text-logo-green" />
                    </div>
                  </div>
                </div>
              </li>
              {/* Stap 3 */}
              <li className="relative flex items-start group">
                <span className="flex items-center justify-center w-6 h-6 bg-[#00e886] text-white text-base font-bold rounded-full absolute -left-9 top-4 z-10 shadow-md border-2 border-white group-hover:bg-[#00c86a] transition-colors">3</span>
                <div className="flex w-full items-center">
                  <div className="bg-white rounded-lg shadow p-4 w-2/3 max-w-md transition-all duration-200 group-hover:bg-[#e6fcf4] group-hover:shadow-lg">
                    <h4 className="text-black text-lg font-bold mb-1">Monitoring en data-analyse</h4>
                    <p className="text-black text-sm">Als de data gelabeld is, weten we om wat voor data het gaat en kunnen we het geheel inzichtelijk maken. We doen dit met <a href="https://skyfoundry.com/skyspark/" target="_blank" className="text-[#00e886] underline">SkySpark</a>, een monitoring- en analytics-tool die het mogelijk maakt om de installatie zelfstandig te analyseren, maar ook geautomatiseerd voor je op zoek gaat naar correlaties, afwijkingen en verbeterpunten.</p>
                  </div>
                  <div className="w-1/3 flex justify-center items-center pl-4">
                    <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center">
                      <BarChart3 className="h-12 w-12 text-logo-green" />
                    </div>
                  </div>
                </div>
              </li>
              {/* Stap 4 */}
              <li className="relative flex items-start group">
                <span className="flex items-center justify-center w-6 h-6 bg-[#00e886] text-white text-base font-bold rounded-full absolute -left-9 top-4 z-10 shadow-md border-2 border-white group-hover:bg-[#00c86a] transition-colors">4</span>
                <div className="flex w-full items-center">
                  <div className="bg-white rounded-lg shadow p-4 w-2/3 max-w-md transition-all duration-200 group-hover:bg-[#e6fcf4] group-hover:shadow-lg">
                    <h4 className="text-black text-lg font-bold mb-1">Toegankelijke dashboards</h4>
                    <p className="text-black text-sm">Naast monitoring en analyse met behulp van SkySpark, kunnen de resultaten van de eerste drie stappen ook bij elkaar worden gebracht in gebruiksvriendelijke en overzichtelijke dashboards en rapportagetools. Deze dashboards geven beheerders en onderhoudspartijen inzicht in de meest relevante informatie over de werking van de gebouwinstallaties.</p>
                  </div>
                  <div className="w-1/3 flex justify-center items-center pl-4">
                    <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center">
                      <LayoutDashboard className="h-12 w-12 text-logo-green" />
                    </div>
                  </div>
                </div>
              </li>
              {/* Stap 5 */}
              <li className="relative flex items-start group">
                <span className="flex items-center justify-center w-6 h-6 bg-[#00e886] text-white text-base font-bold rounded-full absolute -left-9 top-4 z-10 shadow-md border-2 border-white group-hover:bg-[#00c86a] transition-colors">5</span>
                <div className="flex w-full items-center">
                  <div className="bg-white rounded-lg shadow p-4 w-2/3 max-w-md transition-all duration-200 group-hover:bg-[#e6fcf4] group-hover:shadow-lg">
                    <h4 className="text-black text-lg font-bold mb-1">Slim gebouwmanagement</h4>
                    <p className="text-black text-sm">Naast het monitoren, analyseren en handmatig optimaliseren van jouw gebouwinstallatie is het systeem ook zelfstandig in staat om data terug te sturen naar de installatie. Hierdoor kunnen ingestelde instellingen worden aangepast aan de gewenste waarden. En dan is jouw slimme gebouw een feit.</p>
                  </div>
                  <div className="w-1/3 flex justify-center items-center pl-4">
                    <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center">
                      <Settings className="h-12 w-12 text-logo-green" />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <SmartBuildingCta />
      <CaseStudiesGallery caseStudies={caseStudies} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      <ContactSection />
      <Footer />
    </div>
  );
};

const PlatformPageWithSuspense = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PlatformPage />
  </Suspense>
);

export default PlatformPageWithSuspense;
