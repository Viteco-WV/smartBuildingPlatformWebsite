import React from 'react';

interface SmartBuildingCtaProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryOnClick?: () => void;
  secondaryLabel?: string;
  secondaryOnClick?: () => void;
}

const SmartBuildingCta: React.FC<SmartBuildingCtaProps> = ({
  title = 'Klaar om uw gebouw slimmer te maken?',
  subtitle = 'Ontdek hoe ons platform uw energiekosten verlaagt, comfort verhoogt en onderhoud optimaliseert.',
  primaryLabel = 'Gratis Demo Plannen',
  primaryOnClick,
  secondaryLabel = 'Download Brochure',
  secondaryOnClick,
}) => (
  <section className="py-24 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">{subtitle}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          onClick={primaryOnClick}
        >
          {primaryLabel}
        </button>
        <button
          className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
          onClick={secondaryOnClick}
        >
          {secondaryLabel}
        </button>
      </div>
    </div>
  </section>
);

export default SmartBuildingCta; 