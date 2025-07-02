"use client"
import React, { useState } from 'react';
import { Building2, Users, Target, Award, TrendingUp, Shield, Heart, Linkedin, Youtube, Phone, Mail, MapPin, ArrowLeft, ChevronRight, Clock, Globe, Lightbulb, Zap } from 'lucide-react';
import { RouterLink } from '@/components/Router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BedrijfPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const teamMembers = [
    {
      name: "Jurriën Tourney",
      role: "Eigenaar & CEO",
      description: "Expert op het gebied van gebouwbeheer en data-analyse. Zorgt ervoor dat eigenaren en beheerders zelf de regie kunnen voeren over hun installaties.",
      image: "JT",
      expertise: ["Gebouwbeheer", "Data-analyse", "Strategische visie"]
    },
    {
      name: "Wesley van Doesburg", 
      role: "Software Developer",
      description: "Werkt op het snijvlak van installatietechniek en informatica om slimme gebouwen mogelijk te maken.",
      image: "WD",
      expertise: ["Software Development", "IoT Integratie", "Machine Learning"]
    },
    {
      name: "Jacky de Bie",
      role: "Team manager",
      description: "Stuurt het team aan en zorgt voor een optimale samenwerking tussen de verschillende disciplines.",
      image: "JB",
      expertise: ["Teamleiding", "Projectmanagement", "Communicatie"]
    },
    {
      name: "Jens Hollenberg",
      role: "Software Developer / Technisch specialist",
      description: "Gespecialiseerd in het optimaliseren van HVAC-installaties en energieprestaties binnen complexe gebouwen.",
      image: "JH",
      expertise: ["HVAC", "Energieoptimalisatie", "Installatietechniek"]
    },
    {
      name: "Gijs van Hesselingen",
      role: "Jr. developer / data analist",
      description: "Verantwoordelijk voor het analyseren van gebouwdata en het vertalen naar bruikbare inzichten voor klanten.",
      image: "GH",
      expertise: ["Data-analyse", "Rapportages", "Inzichten"]
    },
    {
      name: "Werner Vink",
      role: "Technisch specialist & Business Development",
      description: "Expert in HVAC-systemen en energieoptimalisatie. Richt zich op het realiseren van duurzame en efficiënte gebouwoplossingen.",
      image: "WV",
      expertise: ["HVAC", "Energiebeheer", "Duurzaamheid"]
    },
    {
      name: "Marcel Tourney",
      role: "Technisch specialist",
      description: "Verantwoordelijk voor technische implementaties en het oplossen van complexe vraagstukken binnen projecten.",
      image: "MT",
      expertise: ["Techniek", "Implementatie", "Probleemoplossing"]
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Onafhankelijk",
      description: "Wij hebben geen verplichtingen ten opzichte van andere partijen en richten ons uitsluitend op de feiten en uw belangen."
    },
    {
      icon: Shield,
      title: "Betrouwbaar",
      description: "Onze software draait 24/7 en staan telefonisch voor u klaar. U kunt altijd op ons rekenen voor ondersteuning en advies."
    },
    {
      icon: Lightbulb,
      title: "Innovatief",
      description: "We combineren installatietechniek met moderne IT om oplossingen te creëren die echt het verschil maken."
    },
    {
      icon: Heart,
      title: "Klantgericht",
      description: "We werken voor u en de gebruikers van uw gebouw. Blije gebruikers en lagere kosten zijn ons doel."
    }
  ];

  const milestones = [
    {
      year: "2010",
      title: "Start Infinity",
      description: "Oprichting van Infinity met focus op gebouwoptimalisatie"
    },
    {
      year: "2015",
      title: "Eerste AI Implementatie",
      description: "Introductie van machine learning in gebouwbeheer"
    },
    {
      year: "2020",
      title: "Smart Building Platform",
      description: "Lancering van ons geïntegreerde platform"
    },
    {
      year: "2025",
      title: "Marktleider",
      description: "Erkend als innovatieve leider in slimme gebouwen"
    }
  ];

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
            <span className="text-emerald-600 font-semibold">Bedrijf</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Over <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">Infinity</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Door de complexiteit van gebouwinstallaties en data-analyse combineren we twee disciplines 
              om slimme gebouwen mogelijk te maken die echt het verschil maken.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Onze missie</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <strong>Slimme gebouwen, optimale prestaties.</strong> De energieprestatie kan in nagenoeg 
                ieder gebouw verbeterd worden door beschikbare data te verzamelen en te analyseren. 
                Wanneer we vervolgens de vrijgekomen informatie gebruiken om de installatie bij te sturen, 
                kunnen we spreken van een slim gebouw.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dat is de ambitie van Infinity: door data-analyse en machine-learning bijdragen aan 
                slimme gebouwen en reductie van energieverbruik, terwijl we zorgen voor optimaal comfort 
                voor alle gebruikers.
              </p>
            </div>
            <div className="bg-emerald-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">15+</div>
                  <div className="text-gray-600">Jaar Ervaring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                  <div className="text-gray-600">Gebouwen Gemonitord</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">30%</div>
                  <div className="text-gray-600">Gem. Energiebesparing</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
                  <div className="text-gray-600">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Onze waarden</h2>
            <p className="text-xl text-gray-600">Wat ons uniek maakt in de markt</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                    <IconComponent className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ons Team</h2>
            <p className="text-xl text-gray-600">De experts achter Infinity</p>
          </div>

          {/* Custom grid: eerste rij 3 gecentreerd, tweede rij 4 */}
          <div className="flex flex-col gap-12 items-center">
            {/* Eerste rij: 3 personen gecentreerd */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full justify-center max-w-4xl mx-auto">
              {teamMembers.slice(0, 3).map((member, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-emerald-600 font-semibold mb-3">{member.role}</div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
            {/* Tweede rij: 4 personen */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-6xl mx-auto">
              {teamMembers.slice(3).map((member, index) => (
                <div key={index + 3} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-emerald-600 font-semibold mb-3">{member.role}</div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Onze Reis</h2>
            <p className="text-xl text-gray-600">Van startup tot marktleider</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-emerald-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <div className="text-emerald-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unique Approach Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wat ons uniek maakt</h2>
            <p className="text-xl text-gray-600">We hebben verstand van gebouwinstallaties én van data</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-emerald-100 flex items-center justify-center">
                <Building2 className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Installatietechniek</h3>
              <p className="text-gray-600">
                Diepgaande kennis van HVAC systemen, sensoren en gebouwinstallaties zorgt voor 
                praktische en implementeerbare oplossingen.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-emerald-100 flex items-center justify-center">
                <Globe className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data & Analytics</h3>
              <p className="text-gray-600">
                Moderne IT-kennis en machine learning algoritmes vertalen ruwe data naar 
                bruikbare inzichten en automatische optimalisaties.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-emerald-100 flex items-center justify-center">
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integratie</h3>
              <p className="text-gray-600">
                Door beide disciplines te combineren creëren we oplossingen die technisch 
                haalbaar en economisch aantrekkelijk zijn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Wilt u samenwerken met Infinity?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ontdek hoe onze expertise in installatietechniek en data-analyse uw gebouw kan transformeren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Neem Contact Op
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Bekijk Onze Cases
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BedrijfPage;