"use client"
import React, { useState } from 'react';
import { Zap, Thermometer, Wind, Brain, Building2, ChevronRight, TrendingUp, Linkedin, Youtube, ArrowLeft } from 'lucide-react';
import { RouterLink } from '@/components/Router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmartBuildingCta from '@/components/SmartBuildingCta';
import CaseStudiesGallery, { CaseStudy } from '@/components/CaseStudiesGallery';
import { useSearchParams } from 'next/navigation';

const PlatformPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchParams = useSearchParams();
  const initialTab = searchParams?.get('module') || 'energy';
  const [activeTab, setActiveTab] = useState(initialTab);

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

  const caseStudies: CaseStudy[] = [
    {
      id: 'zorginstelling-amsterdam',
      title: 'Zorginstelling Amsterdam',
      description: 'Een grote zorginstelling in Amsterdam die met ons platform het binnenklimaat optimaliseerde voor patiënten en personeel, terwijl de energiekosten daalden.',
      results: [
        '28% lagere energiekosten',
        'Verbeterde luchtkwaliteit (CO2 reductie van 45%)',
        'Minder ziekteverzuim onder personeel',
        'Automatische ventilatie optimalisatie'
      ],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80'
    },
    {
      id: 'onderwijsgebouw-utrecht',
      title: 'Onderwijsgebouw Utrecht',
      description: 'Een onderwijsgebouw in Utrecht dat met onze oplossing het energieverbruik optimaliseerde en het comfort voor studenten en docenten verbeterde.',
      results: [
        '42% energiebesparing',
        'Optimaal binnenklimaat in alle ruimtes',
        'Voorspellend onderhoud leidde tot 60% minder storingen',
        'Real-time monitoring van alle installaties'
      ],
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80'
    },
    {
      id: 'hotel-den-haag',
      title: 'Hotel Den Haag',
      description: 'Een groot hotel in Den Haag dat met Infinity\'s platform het energieverbruik per kamer inzichtelijk maakte en het comfort voor gasten optimaliseerde.',
      results: [
        '30% minder energieverbruik per kamer',
        'Gasttevredenheid steeg naar 9.1',
        'Realtime storingsmeldingen voor technische dienst',
        'Snellere responstijd bij klachten'
      ],
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gemeentehuis-groningen',
      title: 'Gemeentehuis Groningen',
      description: 'Het gemeentehuis van Groningen realiseerde met Infinity een duurzame renovatie en een volledig geautomatiseerd binnenklimaat.',
      results: [
        '50% minder energieverbruik na renovatie',
        'Volledig geautomatiseerde klimaatregeling',
        'Duurzaamheidslabel A behaald',
        'Tevredenheid medewerkers +30%'
      ],
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

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
            <span className="text-emerald-600 font-semibold">Platform</span>
          </div>
        </div>
      </div>

      {/* Rest of Platform Page Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Software voor het eenvoudig <span className="text-emerald-400">managen</span> van<br />
              jouw <span className="text-emerald-400">gebouw prestaties</span>
            </h1>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Het Infinity platform is gericht op het geven van transparantie en controle door eenvoud. Simpele dashboards en rapportages geven je het benodigde inzicht om in control te zijn. Geautomatiseerde analyses houden prestaties in de gaten en maken jou - indien nodig - hier op alert.
            </p>
          </div>
        </div>
      </section>
      {/* 4 praktische modules */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">4 praktische modules</h2>
            <p className="text-center text-gray-600 mb-12">
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
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="hidden sm:inline">{module.title}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className={`p-8 lg:p-12 bg-gradient-to-r ${currentModule.color} text-white`}>
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-4 bg-white bg-opacity-20 rounded-xl">
                  <currentModule.icon className="h-12 w-12" />
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
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Belangrijkste Features</h4>
                  <ul className="space-y-4">
                    {currentModule.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Voordelen</h4>
                  <div className="space-y-4">
                    {currentModule.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                        <TrendingUp className="h-6 w-6 text-emerald-600" />
                        <span className="font-semibold text-gray-900">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SmartBuildingCta />
      <CaseStudiesGallery caseStudies={caseStudies} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      {/* SkySpark Section */}
      <section className="py-12 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-emerald-700 mb-4">Powered by SkySpark&reg; van SkyFoundry</h2>
          <p className="text-lg text-emerald-900 mb-2">
            Ons platform maakt gebruik van <strong>SkySpark&reg;</strong> van SkyFoundry als onderliggende software. SkySpark is wereldwijd toonaangevend op het gebied van data-analyse en gebouwbeheer. Dankzij deze technologie kunnen wij geavanceerde analyses, foutdetectie en optimalisatie van gebouwprestaties bieden.
          </p>
          <p className="text-emerald-900">
            Door de kracht van SkySpark te combineren met onze eigen expertise, bieden wij een flexibel, schaalbaar en toekomstbestendig smart building platform voor elk type gebouw.
          </p>
        </div>
      </section>
      {/* Implementatie Tijdlijn */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-600 mb-2">Implementatie</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">In vijf stappen naar een slim gebouw</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We helpen eindgebruikers, installateurs, regeltechnische partijen en adviseurs bij het creëren van slimme gebouwen met een gezond binnenklimaat en substantiële kostenreductie op energieverbruik en onderhoud.
            </p>
          </div>
          <div className="relative">
            {/* Verticale lijn */}
            <div className="absolute left-6 top-0 w-1 h-full bg-emerald-100 z-0" />
            <ul className="space-y-8 ml-12">
              {/* Stap 1 */}
              <li className="relative flex items-start group">
                <span className="flex items-center justify-center w-6 h-6 bg-emerald-500 text-white text-base font-bold rounded-full absolute -left-9 top-4 z-10 shadow-md border-2 border-white group-hover:bg-emerald-600 transition-colors">1</span>
                <div className="flex w-full items-center">
                  <div className="bg-white rounded-lg shadow p-4 w-2/3 max-w-md transition-all duration-200 group-hover:bg-emerald-50 group-hover:shadow-lg">
                    <h4 className="text-black text-lg font-bold mb-1">Dataverzameling</h4>
                    <p className="text-gray-700 text-sm">Ieder gebouw produceert data. Die verzamelen we. Of het nu gaat om de directe data van de installatie, een slimme meter, historische data of data uit externe applicaties: onze software accepteert alle vormen van data. Die data brengen we bij elkaar.</p>
                  </div>
                  <div className="w-1/3 flex justify-center items-center pl-4">
                    <img src="/images/implementatie-stap1.svg" alt="Dataverzameling" className="w-24 h-24 object-contain" />
                  </div>
                </div>
              </li>
              {/* Stap 2 */}
              <li className="relative flex items-start group">
                <span className="flex items-center justify-center w-6 h-6 bg-emerald-500 text-white text-base font-bold rounded-full absolute -left-9 top-4 z-10 shadow-md border-2 border-white group-hover:bg-emerald-600 transition-colors">2</span>
                <div className="flex w-full items-center">
                  <div className="bg-white rounded-lg shadow p-4 w-2/3 max-w-md transition-all duration-200 group-hover:bg-emerald-50 group-hover:shadow-lg">
                    <h4 className="text-black text-lg font-bold mb-1">Data-labelling</h4>
                    <p className="text-gray-700 text-sm">Om de eendimensionale ruwe data uit verschillende bronnen betekenis te geven committeren wij ons aan de <a href="https://project-haystack.org/" target="_blank" className="text-emerald-500 underline">Project Haystack</a> Conventie, waardoor we eenduidig de data labelen. Alle data die afkomstig is van componenten, software en applicaties wordt gerangschikt en gecategoriseerd. Meetgegevens krijgen hierdoor betekenis.</p>
                  </div>
                  <div className="w-1/3 flex justify-center items-center pl-4">
                    <img src="/images/implementatie-stap2.svg" alt="Data-labelling" className="w-24 h-24 object-contain" />
                  </div>
                </div>
              </li>
              {/* Stap 3 */}
              <li className="relative flex items-start group">
                <span className="flex items-center justify-center w-6 h-6 bg-emerald-500 text-white text-base font-bold rounded-full absolute -left-9 top-4 z-10 shadow-md border-2 border-white group-hover:bg-emerald-600 transition-colors">3</span>
                <div className="flex w-full items-center">
                  <div className="bg-white rounded-lg shadow p-4 w-2/3 max-w-md transition-all duration-200 group-hover:bg-emerald-50 group-hover:shadow-lg">
                    <h4 className="text-black text-lg font-bold mb-1">Monitoring en data-analyse</h4>
                    <p className="text-gray-700 text-sm">Als de data gelabeld is, weten we om wat voor data het gaat en kunnen we het geheel inzichtelijk maken. We doen dit met <a href="https://skyfoundry.com/skyspark/" target="_blank" className="text-emerald-500 underline">SkySpark</a>, een monitoring- en analytics-tool die het mogelijk maakt om de installatie zelfstandig te analyseren, maar ook geautomatiseerd voor je op zoek gaat naar correlaties, afwijkingen en verbeterpunten.</p>
                  </div>
                  <div className="w-1/3 flex justify-center items-center pl-4">
                    <img src="/images/implementatie-stap3.svg" alt="Monitoring en data-analyse" className="w-24 h-24 object-contain" />
                  </div>
                </div>
              </li>
              {/* Stap 4 */}
              <li className="relative flex items-start group">
                <span className="flex items-center justify-center w-6 h-6 bg-emerald-500 text-white text-base font-bold rounded-full absolute -left-9 top-4 z-10 shadow-md border-2 border-white group-hover:bg-emerald-600 transition-colors">4</span>
                <div className="flex w-full items-center">
                  <div className="bg-white rounded-lg shadow p-4 w-2/3 max-w-md transition-all duration-200 group-hover:bg-emerald-50 group-hover:shadow-lg">
                    <h4 className="text-black text-lg font-bold mb-1">Toegankelijke dashboards</h4>
                    <p className="text-gray-700 text-sm">Naast monitoring en analyse met behulp van SkySpark, kunnen de resultaten van de eerste drie stappen ook bij elkaar worden gebracht in gebruiksvriendelijke en overzichtelijke dashboards en rapportagetools. Deze dashboards geven beheerders en onderhoudspartijen inzicht in de meest relevante informatie over de werking van de gebouwinstallaties.</p>
                  </div>
                  <div className="w-1/3 flex justify-center items-center pl-4">
                    <img src="/images/implementatie-stap4.svg" alt="Toegankelijke dashboards" className="w-24 h-24 object-contain" />
                  </div>
                </div>
              </li>
              {/* Stap 5 */}
              <li className="relative flex items-start group">
                <span className="flex items-center justify-center w-6 h-6 bg-emerald-500 text-white text-base font-bold rounded-full absolute -left-9 top-4 z-10 shadow-md border-2 border-white group-hover:bg-emerald-600 transition-colors">5</span>
                <div className="flex w-full items-center">
                  <div className="bg-white rounded-lg shadow p-4 w-2/3 max-w-md transition-all duration-200 group-hover:bg-emerald-50 group-hover:shadow-lg">
                    <h4 className="text-black text-lg font-bold mb-1">Slim gebouwmanagement</h4>
                    <p className="text-gray-700 text-sm">Naast het monitoren, analyseren en handmatig optimaliseren van jouw gebouwinstallatie is het systeem ook zelfstandig in staat om data terug te sturen naar de installatie. Hierdoor kunnen ingestelde instellingen worden aangepast aan de gewenste waarden. En dan is jouw slimme gebouw een feit.</p>
                  </div>
                  <div className="w-1/3 flex justify-center items-center pl-4">
                    <img src="/images/implementatie-stap5.svg" alt="Slim gebouwmanagement" className="w-24 h-24 object-contain" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PlatformPage;
