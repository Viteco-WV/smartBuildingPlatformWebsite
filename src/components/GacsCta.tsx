import React from 'react';

const GacsCta: React.FC = () => (
  <section className="py-16 bg-black">
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center px-4 text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Vanaf 1 januari 2026 treddt de nieuwe GACS wetgeving in treding.</h3>
      <p className="text-lg text-white/90 max-w-2xl mb-8">Lees op onze GACS pagina hoe wij u opweg kunnen helpen om op korte termijn GACS-complain te zijn.</p>
      <a
        href="http://localhost:3000/gacs"
        className="inline-block bg-[#00e886] hover:bg-[#00c46c] text-black font-bold py-3 px-8 rounded-lg text-lg shadow transition-colors"
      >
        Ontdek onze aanpak!
      </a>
    </div>
  </section>
);

export default GacsCta; 