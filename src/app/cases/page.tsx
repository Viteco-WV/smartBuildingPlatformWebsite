"use client"
import React, { useState, useEffect } from "react";
import { RouterLink } from "@/components/Router";
import { Linkedin, Youtube, ArrowLeft, ChevronRight } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
            <span className="text-emerald-600 font-semibold">Cases</span>
          </div>
        </div>
      </div>
      {/* Filter & Grid */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Cases</h1>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {MODULES.map(m => (
            <button
              key={m.key}
              onClick={() => toggleModule(m.key)}
              className={`px-4 py-2 rounded-full font-medium border transition-colors ${selectedModules.includes(m.key) ? `${m.color} text-white border-transparent` : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"}`}
            >
              {m.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredBuildings.map(b => (
            <div key={b.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
              <img src={b.image} alt={b.name} className="w-full h-40 object-cover" />
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold mb-1">{b.name}</h2>
                <div className="text-gray-500 text-sm mb-2">{b.address}</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-1 rounded bg-gray-200 text-gray-700 font-semibold">Label {b.energielabel}</span>
                  {b.modules.map(mKey => {
                    const m = MODULES.find(x => x.key === mKey);
                    return m ? (
                      <span key={mKey} className={`text-xs px-2 py-1 rounded font-semibold ${m.color} text-white`}>{m.label}</span>
                    ) : null;
                  })}
                </div>
                <div className="text-gray-700 text-sm mt-auto">{b.result}</div>
              </div>
            </div>
          ))}
        </div>
        {filteredBuildings.length === 0 && (
          <div className="text-center text-gray-500 mt-12">Geen gebouwen gevonden met deze modules.</div>
        )}
      </main>
      <Footer />
    </div>
  );
} 