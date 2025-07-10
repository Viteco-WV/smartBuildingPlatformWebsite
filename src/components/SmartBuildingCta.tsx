import React from 'react';
import { RouterLink } from '@/components/Router';

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
  subtitle = 'Ontdek hoe onze combinatie van platform en consultancy uw energiekosten verlaagt, comfort verhoogt en onderhoud optimaliseert.',
  primaryLabel = 'Demo plannen',
  primaryOnClick,
  secondaryLabel = 'Download brochure',
  secondaryOnClick,
}) => (
  <section className="py-20 bg-[#111111]">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      <p className="text-lg text-gray-200 mb-10">{subtitle}</p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <RouterLink
          href="/demo"
          className="bg-[#00e886] text-white font-semibold px-8 py-3 rounded shadow hover:bg-[#00d676] transition text-center min-w-[220px]"
        >
          {primaryLabel}
        </RouterLink>
        <a
          href="/infinity-brochure.pdf"
          download
          className="inline-block bg-[#ff2e00] text-white px-6 py-3 rounded font-semibold shadow hover:bg-[#d62600] transition min-w-[220px]"
        >
          Download brochure
        </a>
      </div>
    </div>
  </section>
);

export default SmartBuildingCta; 