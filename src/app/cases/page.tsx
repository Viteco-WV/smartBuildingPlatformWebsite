"use client"
import React, { useState, useEffect } from "react";
import { RouterLink } from "@/components/Router";
import { Linkedin, Youtube, ArrowLeft, ChevronRight } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

const MODULES = [
  { key: "energy", label: "Energie Manager", color: "bg-emerald-400" },
  { key: "comfort", label: "Comfort Manager", color: "bg-teal-400" },
  { key: "hvac", label: "HVAC Manager", color: "bg-green-400" },
  { key: "control", label: "Control Manager", color: "bg-cyan-400" },
];

const ENERGIELABELS = ["A++", "A+", "A", "B", "C", "D", "E"];

type Building = {
  id: number;
  name: string;
  address: string;
  energielabel: string;
  modules: string[];
  result: string;
  image: string;
};

export default function CasesPage() {
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);

  useEffect(() => {
function getRandom(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}
    const newBuildings = Array.from({ length: 40 }, (_, i) => {
  const activeModules = MODULES.filter(() => Math.random() > 0.4).map(m => m.key);
  if (activeModules.length === 0) activeModules.push(getRandom(MODULES).key);
  return {
    id: i + 1,
    name: `Gebouw ${i + 1}`,
    address: `Straat ${i + 1}, ${1000 + i} AB Plaats`,
    energielabel: getRandom(ENERGIELABELS),
    modules: activeModules,
    result: `Bespaarde energie: ${Math.floor(Math.random() * 30) + 10}% en comfortscore +${Math.floor(Math.random() * 3) + 1}`,
    image: `https://source.unsplash.com/collection/483251/400x300?sig=${i + 1}`,
  };
});
    setBuildings(newBuildings);
  }, []);

  const filteredBuildings = selectedModules.length === 0
    ? buildings
    : buildings.filter(b => selectedModules.every(m => b.modules.includes(m)));

  const toggleModule = (key: string) => {
    setSelectedModules(mods =>
      mods.includes(key) ? mods.filter(m => m !== key) : [...mods, key]
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
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
            <span className="text-[#00e886] font-semibold">Cases</span>
          </div>
        </div>
      </div>
      <main className="flex-1 flex flex-col items-center justify-center py-24">
        <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">Komt er spoedig aan!</h1>
      </main>
      {/* Brochure download component */}
      {/* Vervang hieronder door het juiste component als die bestaat, anders placeholder */}
      <div className="max-w-2xl mx-auto w-full px-4 mb-12">
        {/* <BrochureDownload /> */}
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
} 