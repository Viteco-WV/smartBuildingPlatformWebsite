import React from 'react';
import SmartBuildingCta from '@/components/SmartBuildingCta';
import CaseStudiesGallery from '@/components/CaseStudiesGallery';
import { caseStudiesData } from '../../caseStudiesData';
import Footer from '@/components/Footer';

const caseStudies = caseStudiesData;

const ServicesPage = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Onze Diensten
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van advies tot implementatie en beheer: wij bieden complete oplossingen voor slimme gebouwen die energie besparen en comfort verbeteren.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Smart Building Advies
                </h3>
                <p className="text-gray-600 mb-6">
                  Wij analyseren uw gebouw en ontwikkelen een op maat gemaakt plan voor optimalisatie van energieverbruik en comfort.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Energie-audit en analyse
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Optimalisatieplan
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    ROI-berekening
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Implementatie
                </h3>
                <p className="text-gray-600 mb-6">
                  Onze experts implementeren het Infinity platform en integreren het naadloos met uw bestaande systemen.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Systeemintegratie
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Installatie en configuratie
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Gebruikerstraining
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Beheer & Onderhoud
                </h3>
                <p className="text-gray-600 mb-6">
                  Wij zorgen voor continue monitoring, onderhoud en optimalisatie van uw slimme gebouw.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    24/7 monitoring
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Preventief onderhoud
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Continue optimalisatie
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SmartBuildingCta />
      <CaseStudiesGallery caseStudies={caseStudies} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      <Footer />
    </div>
  );
};

export default ServicesPage; 