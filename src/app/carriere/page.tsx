import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { BarChart3, Brain, Wind } from 'lucide-react';

const vacatures = [
  {
    title: 'Data Consultant & Rapportagespecialist',
    description: 'Je helpt onze klanten met het vertalen van gebouwdata naar heldere rapportages en adviezen. Je werkt op het snijvlak van techniek, data en klantcontact.',
    url: '/carriere/vacature-1',
    icon: BarChart3,
  },
  {
    title: 'Werkstudent Data Science / AI',
    description: 'Werk mee aan de ontwikkeling van slimme algoritmes voor gebouwoptimalisatie. Ideaal voor studenten met een passie voor data, Python en machine learning.',
    url: '/carriere/vacature-2',
    icon: Brain,
  },
  {
    title: 'Werkstudent Sustainable Energy Technology',
    description: 'Draag bij aan duurzame energieprojecten en de energietransitie in de gebouwde omgeving. Combineer je studie met praktijkervaring bij Infinity.',
    url: '/carriere/vacature-3',
    icon: Wind,
  },
];

export default function CarrierePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center">
              {/* Use lucide-react ArrowLeft icon */}
              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
              Home
            </Link>
            {/* Use lucide-react ChevronRight icon */}
            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
            <span className="text-[#00e886] font-semibold">Carriere</span>
          </div>
        </div>
      </div>
      <main className="flex-1 max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Werken bij Infinity</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">Wil jij bijdragen aan slimme, duurzame gebouwen? Bekijk onze vacatures en solliciteer direct!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {vacatures.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="bg-black rounded-2xl shadow-lg p-8 flex flex-col items-center justify-between h-full text-center min-h-[420px]">
                <div>
                  <div className="bg-[#00e886] p-4 rounded-xl w-fit mb-4 flex items-center justify-center mx-auto">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">{v.title}</h2>
                  <p className="text-white/80 mb-6">{v.description}</p>
                </div>
                <Link
                  href={v.url}
                  className="inline-block bg-[#00e886] text-white px-6 py-3 rounded font-semibold shadow hover:bg-[#00d676] transition text-center w-full"
                  style={{ color: 'white' }}
                >
                  Bekijk vacature
                </Link>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
} 