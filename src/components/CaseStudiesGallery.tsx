import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { RouterLink } from '@/components/Router';

export type CaseStudy = {
  id: string;
  title: string;
  description: string;
  results: string[];
  image: string;
};

interface CaseStudiesGalleryProps {
  caseStudies: CaseStudy[];
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
}

const CaseStudiesGallery: React.FC<CaseStudiesGalleryProps> = ({ caseStudies, currentSlide, setCurrentSlide }) => (
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
                        
                        <span className="text-gray-900 font-semibold">Resultaten:</span>
                      </div>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full mt-2 bg-black" />
                            <span className="text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <RouterLink
                      href={`/cases/${study.id}`}
                      className="inline-flex items-center font-semibold transition-colors text-logo-green hover:text-logo-green-hover"
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
          onClick={() => setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : caseStudies.length - 1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
        <button
          onClick={() => setCurrentSlide(currentSlide < caseStudies.length - 1 ? currentSlide + 1 : 0)}
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
                currentSlide === index ? 'bg-logo-green' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ga naar slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CaseStudiesGallery; 