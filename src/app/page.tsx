"use client"
import React, { useState, useEffect } from 'react';
import { Building2, Zap, Thermometer, Settings, TrendingUp, Shield, Users, Phone, Mail, MapPin, ChevronRight, BarChart3, Gauge, Wind, Brain, Linkedin, Youtube, ChevronLeft, ArrowLeft } from 'lucide-react';
import { RouterLink } from '@/components/Router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SmartBuildingHomepage = () => {
  const [activeModule, setActiveModule] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
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
      description: 'Ontsluiten, analyseren en rapporteren van comfort data',
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
      description: 'Aansturen op basis van voorspellende algoritmes',
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

  const caseStudies = [
    {
      id: 'kantoorgebouw-rotterdam',
      title: 'Kantoorgebouw Rotterdam',
      description: 'Een modern kantoorgebouw in Rotterdam dat met behulp van ons platform een energiebesparing van 35% realiseerde en het comfort voor de gebruikers significant verbeterde.',
      results: [
        '35% energiebesparing op jaarbasis',
        'Comfortscore verbeterd van 6.5 naar 8.8',
        'ROI behaald binnen 1.5 jaar',
        'Proactieve storingsdetectie leidde tot 40% minder storingen'
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                Gericht op <span className="text-emerald-400">slimme gebouwen</span> en{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                  moderne HVAC
                </span>{' '}
                oplossingen, je gaat simpelweg{' '}
                <span className="text-yellow-400">betere prestaties</span> leveren
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
                Infinity is een volledig geïntegreerd platform dat je helpt focussen op 
                gebouwoptimalisatie en werkt via geavanceerde data-analyse om een snelle, 
                efficiënte en veerkrachtige gebouwervaring te leveren. Mensen gaan dol zijn op het gebruiken van jouw gebouw.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="border-2 border-emerald-400 text-emerald-400 px-6 lg:px-8 py-3 lg:py-4 rounded-lg text-base lg:text-lg font-semibold hover:bg-emerald-400 hover:text-gray-900 transition-all">
                  Lees de Documentatie
                </button>
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg text-base lg:text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all">
                  Start Nu
                </button>
              </div>
            </div>
            <div className={`w-full mt-8 lg:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 rounded-2xl blur-lg opacity-20"></div>
                <div className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-2xl p-1">
                  <div className="bg-gray-800 rounded-xl p-4 lg:p-6">
                    <div className="font-mono text-xs lg:text-sm overflow-x-auto">
                      <div className="text-blue-400">export async function <span className="text-yellow-400">energyLoader</span>{'({'} </div>
                      <div className="text-gray-400 ml-4">request </div>
                      <div className="text-blue-400">{'}) {'}</div>
                      <div className="text-gray-400 ml-4">return <span className="text-green-400">getEnergyData</span>();</div>
                      <div className="text-blue-400">{'}'}</div>
                      <br />
                      <div className="text-blue-400">export async function <span className="text-yellow-400">hvacAction</span>({'{ '}</div>
                      <div className="text-gray-400 ml-4">request</div>
                      <div className="text-blue-400">{'}) {'}</div>
                      <div className="text-gray-400 ml-4">const data = await request.<span className="text-green-400">formData</span>();</div>
                      <div className="text-gray-400 ml-4">return <span className="text-green-400">optimizeHVAC</span>({'{ title: data.<span className="text-green-400">get</span>("temp") });'}</div>
                      <div className="text-blue-400">{'}'}</div>
                      <br />
                      <div className="text-blue-400">export default function <span className="text-yellow-400">Dashboard</span>() {'{'}</div>
                      <div className="text-gray-400 ml-4">const sensors = <span className="text-green-400">useSensorData</span>();</div>
                      <div className="text-gray-400 ml-4">const {'{ state }'} = <span className="text-green-400">useNavigation</span>();</div>
                      <div className="text-gray-400 ml-4">const busy = state === <span className="text-orange-400">"submitting"</span>;</div>
                      <br />
                      <div className="text-gray-400 ml-4">return (</div>
                      <div className="text-gray-400 ml-8">{'<div>'}</div>
                      <div className="text-gray-400 ml-12">{'<EnergyChart data={sensors} />'}</div>
                      <div className="text-gray-400 ml-12">{'<HVACControls'}</div>
                      <div className="text-gray-400 ml-16">disabled={'{'}<span className="text-orange-400">busy</span>{'}'}</div>
                      <div className="text-gray-400 ml-12">/></div>
                      <div className="text-gray-400 ml-8">{'</div>'}</div>
                      <div className="text-gray-400 ml-4">);</div>
                      <div className="text-blue-400">{'}'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vier krachtige modules</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ons platform bestaat uit geïntegreerde modules die samen zorgen voor compleet inzicht en controle over uw gebouwprestaties.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {modules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <div
                  key={module.id}
                  className={`group cursor-pointer transition-all duration-300 rounded-2xl ${
                    activeModule === index 
                      ? 'bg-gray-800 border-2 border-emerald-400 shadow-xl scale-105' 
                      : 'bg-gray-700 border-2 border-gray-600 hover:bg-gray-750 hover:border-emerald-500 hover:shadow-lg hover:scale-102'
                  }`}
                  style={{ width: '22rem', maxWidth: '100%' }}
                  onClick={() => setActiveModule(index)}
                  onMouseEnter={() => setActiveModule(index)}
                >
                  <div className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${module.color} text-white shadow-lg mb-4 mx-auto flex justify-center`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{module.title}</h3>
                      <div className="min-h-[120px] flex flex-col justify-center w-full">
                        <p className="text-gray-300 mb-4 w-full">{module.description}</p>
                        <p className="text-sm text-gray-400 w-full">{module.details}</p>
                      </div>
                      <RouterLink href={`/platform?module=${module.id}`} className="mt-4 flex items-center justify-center text-emerald-400 font-semibold hover:text-emerald-300 transition-colors">
                        Meer informatie <ChevronRight className="h-4 w-4 ml-1" />
                      </RouterLink>
                    </div>
                  </div>
                </div>
              );
            })}
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
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-xl w-fit mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Logo slider & klantreacties */}
      <section className="py-16 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-center mb-6">Bedrijven die vertrouwen op Infinity</h3>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-10 items-center py-4 min-w-[700px] animate-scroll-x">
                {/* Dummy logo's, vervang door echte logo's indien beschikbaar */}
                {[1,2,3,4,5,6,7,8].map(i => (
                  <img key={i} src={`https://dummyimage.com/120x48/eee/333&text=Logo+${i}`} alt={`Logo ${i}`} className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300" />
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Wat zeggen onze klanten?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Dummy klantreacties */}
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-emerald-600">A</span>
                </div>
                <p className="text-gray-700 mb-4 italic">"Dankzij Infinity besparen we jaarlijks duizenden euro's en is het comfort in ons gebouw enorm verbeterd."</p>
                <div className="font-semibold text-gray-900">Alex de Groot</div>
                <div className="text-gray-500 text-sm">Facility Manager, Bedrijf X</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-emerald-600">B</span>
                </div>
                <p className="text-gray-700 mb-4 italic">"De rapportages en analyses zijn super inzichtelijk. We kunnen nu echt sturen op data."</p>
                <div className="font-semibold text-gray-900">Brenda van Leeuwen</div>
                <div className="text-gray-500 text-sm">Directeur, Zorginstelling Y</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-emerald-600">C</span>
                </div>
                <p className="text-gray-700 mb-4 italic">"Infinity denkt mee, ontzorgt en levert altijd snel support. Echt een aanrader!"</p>
                <div className="font-semibold text-gray-900">Chris Jansen</div>
                <div className="text-gray-500 text-sm">Technisch Beheerder, Vastgoedbedrijf Z</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Klaar om uw gebouw slimmer te maken?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ontdek hoe ons platform uw energiekosten verlaagt, comfort verhoogt en onderhoud optimaliseert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Gratis Demo Plannen
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ontdek onze klant casussen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bekijk hoe we andere organisaties hebben geholpen hun gebouwen slimmer en efficiënter te maken.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex gap-6 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {caseStudies.map((study, index) => (
                  <div key={index} className="min-w-full flex-shrink-0">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="relative w-full md:w-[420px] h-[320px] rounded-2xl overflow-hidden flex-shrink-0">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                      </div>
                      <div className="flex-1 space-y-6 w-full max-w-xl break-words">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                          <p className="text-gray-600">{study.description}</p>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                            <span className="text-gray-900 font-semibold">Resultaten:</span>
                          </div>
                          <ul className="space-y-2">
                            {study.results.map((result, i) => (
                              <li key={i} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2" />
                                <span className="text-gray-600">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <RouterLink
                          href={`/cases/${study.id}`}
                          className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                        >
                          Lees het volledige verhaal
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </RouterLink>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentSlide(prev => (prev > 0 ? prev - 1 : caseStudies.length - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={() => setCurrentSlide(prev => (prev < caseStudies.length - 1 ? prev + 1 : 0))}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center space-x-2 mt-8">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-emerald-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ga naar slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-gray-900" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Telefoon</div>
                    <div className="text-gray-600">+31 (0)85 303 3054</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-gray-900" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">info@infinity-analysis.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-gray-900" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Locatie</div>
                    <div className="text-gray-600">Nederland</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Naam</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" 
                    placeholder="Uw naam"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" 
                    placeholder="uw.email@bedrijf.nl"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organisatie</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" 
                    placeholder="Uw organisatie"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bericht</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" 
                    placeholder="Vertel ons over uw project..."
                  ></textarea>
                </div>
                
                <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                  Bericht Versturen
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmartBuildingHomepage;