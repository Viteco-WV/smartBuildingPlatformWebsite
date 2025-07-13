"use client"
import React from "react";
import { RouterLink } from "@/components/Router";
import { Phone, Mail, MapPin, Linkedin, Youtube, ArrowLeft, ChevronRight, GraduationCap, Wifi, BarChart3, Settings } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmartBuildingCta from '@/components/SmartBuildingCta';
import CaseStudiesGallery from '@/components/CaseStudiesGallery';
import { caseStudiesData } from '../../caseStudiesData';
import CaseStudiesSectionHeader from '@/components/CaseStudiesSectionHeader';
import ContactSection from '@/components/ContactSection';

const caseStudies = caseStudiesData;

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);
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
            <span className="text-[#00e886] font-semibold">Services</span>
          </div>
        </div>
      </div>
      {/* Services Content */}
      <main className="bg-white text-gray-900">
        <section className="max-w-4xl mx-auto pt-16 pb-8 px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
            Services ter <span style={{ color: '#00e886' }}>ondersteuning</span> in technisch gebouw management
          </h1>
          <p className="text-center text-lg text-gray-600 mb-12">
            Onze specialisten staan klaar om mee te kijken in jouw uitdagingen en te ontzorgen in het management van beheer & onderhoud omtrent uw energie & HVAC systemen. Onze data gedreven manier van werken zorgt voor een efficiënt proces waarbij onnodige onderhoudsacties tot de verleden tijd behoren.
          </p>
        </section>
        <section className="max-w-6xl mx-auto px-4 pb-16">
          {/* Desktop tijdlijn */}
          <div className="relative py-16 hidden lg:flex">
            {/* Verticale groene lijn */}
            <div className="absolute left-1/2 top-0 h-full w-1 bg-[#00e886] rounded-full -translate-x-1/2 z-0" />
            <div className="flex flex-col gap-16 relative z-10 w-full">
              {/* Blok 1 */}
              <div className="flex md:justify-start justify-center items-center w-full relative min-h-[180px]">
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center">
                    <GraduationCap className="h-10 w-10 text-[#00e886]" />
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-8 shadow-lg w-full max-w-md md:mr-auto md:ml-0 ml-auto flex flex-col items-start relative z-20">
                  <div className="md:hidden mb-4">
                    <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto">
                      <GraduationCap className="h-8 w-8 text-[#00e886]" />
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-900 text-left w-full">Training en ondersteuning</h2>
                  <p className="text-gray-600">Het is niet moeilijk om met onze applicaties te werken, maar met een goede introductie haal je alles eruit. Na een korte inleiding in het gebruik van de software en dashboards kan je er zelfstandig mee aan de slag. Daarnaast zijn we op afroep beschikbaar voor vragen en ondersteuning.</p>
                </div>
              </div>
              {/* Blok 2 */}
              <div className="flex md:justify-end justify-center items-center w-full relative min-h-[180px]">
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center">
                    <Wifi className="h-10 w-10 text-[#00e886]" />
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-8 shadow-lg w-full max-w-md md:ml-auto md:mr-0 mr-auto flex flex-col items-start relative z-20">
                  <div className="md:hidden mb-4">
                    <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto">
                      <Wifi className="h-8 w-8 text-[#00e886]" />
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-900 text-left w-full">Remote beheer</h2>
                  <p className="text-gray-600">Wij ondersteunen structureel in het technisch facility management omtrent jouw energie en HVAC installaties. Wanneer er <RouterLink href="#" className="text-emerald-400 underline">opmerkelijkheden worden geïdentificeerd</RouterLink> door het platform nemen wij een leidinggevende rol in de communicatie met technische partners en managen het proces van het <RouterLink href="#" className="text-emerald-400 underline">doorvoeren</RouterLink> van technische verbetermaatregelen.</p>
                </div>
              </div>
              {/* Blok 3 */}
              <div className="flex md:justify-start justify-center items-center w-full relative min-h-[180px]">
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center">
                    <BarChart3 className="h-10 w-10 text-[#00e886]" />
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-8 shadow-lg w-full max-w-md md:mr-auto md:ml-0 ml-auto flex flex-col items-start relative z-20">
                  <div className="md:hidden mb-4">
                    <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto">
                      <BarChart3 className="h-8 w-8 text-[#00e886]" />
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-900 text-left w-full">Energie prestatie advies</h2>
                  <p className="text-gray-600">Data van energiemeters zijn er in overvloed. Het effectief analyseren van deze data laat vaak nog te wensen over. Wil je <RouterLink href="#" className="text-emerald-400 underline">onafhankelijk</RouterLink> over jouw energieprestaties op basis van metadata? Dan kunnen wij je helpen met een kort <RouterLink href="#" className="text-emerald-400 underline">traject</RouterLink> van inzicht en tips om het verbruik te <RouterLink href="#" className="text-emerald-400 underline">optimaliseren</RouterLink>. Je kan zelf al beginnen middels onze energievrepsiller check.</p>
                </div>
              </div>
              {/* Blok 4 */}
              <div className="flex md:justify-end justify-center items-center w-full relative min-h-[180px]">
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center">
                    <Settings className="h-10 w-10 text-[#00e886]" />
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-8 shadow-lg w-full max-w-md md:ml-auto md:mr-0 mr-auto flex flex-col items-start relative z-20">
                  <div className="md:hidden mb-4">
                    <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto">
                      <Settings className="h-8 w-8 text-[#00e886]" />
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-900 text-left w-full">Meet- & regeltechniek advies</h2>
                  <p className="text-gray-600">Voor zowel bestaande als nieuw te bouwen installaties bieden wij onafhankelijk advies over de meet- en regel <RouterLink href="#" className="text-emerald-400 underline">hardware en software</RouterLink>. Hier kijken wij onder andere naar de opzet van regelkringen, hardware keuzes en de software programmering. Daarnaast bieden wij een 1-daagse opname of u voldoet aan de <RouterLink href="#" className="text-emerald-400 underline">GACS wetgeving</RouterLink>.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile stacked blocks */}
          <div className="flex flex-col gap-8 lg:hidden relative pt-8 pb-8">
            {/* Centrale groene lijn achter de blokken */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#00e886] -translate-x-1/2 z-0" />
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg w-full max-w-md mx-auto flex flex-col items-center text-center relative z-10">
              <div className="mb-4">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto">
                  <GraduationCap className="h-8 w-8 text-[#00e886]" />
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900">Training en ondersteuning</h2>
              <p className="text-gray-600">Het is niet moeilijk om met onze applicaties te werken, maar met een goede introductie haal je alles eruit. Na een korte inleiding in het gebruik van de software en dashboards kan je er zelfstandig mee aan de slag. Daarnaast zijn we op afroep beschikbaar voor vragen en ondersteuning.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg w-full max-w-md mx-auto flex flex-col items-center text-center relative z-10">
              <div className="mb-4">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto">
                  <Wifi className="h-8 w-8 text-[#00e886]" />
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900">Remote beheer</h2>
              <p className="text-gray-600">Wij ondersteunen structureel in het technisch facility management omtrent jouw energie en HVAC installaties. Wanneer er <RouterLink href="#" className="text-emerald-400 underline">opmerkelijkheden worden geïdentificeerd</RouterLink> door het platform nemen wij een leidinggevende rol in de communicatie met technische partners en managen het proces van het <RouterLink href="#" className="text-emerald-400 underline">doorvoeren</RouterLink> van technische verbetermaatregelen.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg w-full max-w-md mx-auto flex flex-col items-center text-center relative z-10">
              <div className="mb-4">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto">
                  <BarChart3 className="h-8 w-8 text-[#00e886]" />
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900">Energie prestatie advies</h2>
              <p className="text-gray-600">Data van energiemeters zijn er in overvloed. Het effectief analyseren van deze data laat vaak nog te wensen over. Wil je <RouterLink href="#" className="text-emerald-400 underline">onafhankelijk</RouterLink> over jouw energieprestaties op basis van metadata? Dan kunnen wij je helpen met een kort <RouterLink href="#" className="text-emerald-400 underline">traject</RouterLink> van inzicht en tips om het verbruik te <RouterLink href="#" className="text-emerald-400 underline">optimaliseren</RouterLink>. Je kan zelf al beginnen middels onze energievrepsiller check.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg w-full max-w-md mx-auto flex flex-col items-center text-center relative z-10">
              <div className="mb-4">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto">
                  <Settings className="h-8 w-8 text-[#00e886]" />
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900">Meet- & regeltechniek advies</h2>
              <p className="text-gray-600">Voor zowel bestaande als nieuw te bouwen installaties bieden wij onafhankelijk advies over de meet- en regel <RouterLink href="#" className="text-emerald-400 underline">hardware en software</RouterLink>. Hier kijken wij onder andere naar de opzet van regelkringen, hardware keuzes en de software programmering. Daarnaast bieden wij een 1-daagse opname of u voldoet aan de <RouterLink href="#" className="text-emerald-400 underline">GACS wetgeving</RouterLink>.</p>
            </div>
          </div>
        </section>
      </main>
      <SmartBuildingCta />
      <CaseStudiesGallery caseStudies={caseStudies} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      <ContactSection />
      <Footer />
    </div>
  );
} 