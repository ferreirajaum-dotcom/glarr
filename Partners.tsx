
import React from 'react';

interface PartnersProps {
  onNavigate?: (page: 'home' | 'partners') => void;
}

const Partners: React.FC<PartnersProps> = ({ onNavigate }) => {
  const brands = [
    {
      name: "Grupo Malwee",
      desc: "Referência global em moda sustentável e tecnologia têxtil de Jaraguá do Sul.",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop",
      logo: "https://i.postimg.cc/762HJDC4/LOGOMALWEE.png"
    },
    {
      name: "Fibraviva",
      desc: "Inovação em fibras naturais e processos de tingimento ecológico certificado.",
      image: "https://i.postimg.cc/X7hsQbX4/logofibra-removebg-preview.png",
      logo: "https://i.postimg.cc/X7hsQbX4/logofibra-removebg-preview.png"
    }
  ];

  const scrollingLogos = [
    "TEXTIL SUL",
    "Innova.",
    "PRIMO",
    "VERSA",
    "K-TEX",
    "GLAR PREMIUM",
    "TEX STYLE",
    "SUL MALHAS"
  ];

  return (
    <section id="parceiros" className="py-24 bg-gray-50 reveal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-900 uppercase tracking-[0.4em] mb-4">Nossas Representadas</h2>
          <h3 className="text-4xl font-bold text-blue-950">Credibilidade que gera resultados</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {brands.map((brand, i) => (
            <div 
              key={i} 
              className={`group bg-white overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer reveal-delay-${i+1}`}
              onClick={() => onNavigate && onNavigate('partners')}
            >
              <div className="relative h-72 overflow-hidden flex items-center justify-center bg-gray-100">
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className={`transition-all duration-1000 ${brand.name === 'Fibraviva' ? 'max-h-[60%] w-auto object-contain p-8' : 'w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110'}`}
                />
                {brand.name !== 'Fibraviva' && <div className="absolute inset-0 bg-blue-950/40 group-hover:bg-blue-950/10 transition-colors"></div>}
                
                {/* Logo Overlay logic */}
                {brand.logo && brand.name !== 'Fibraviva' && (
                  <div className="absolute top-4 right-4 bg-white/90 p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <img src={brand.logo} alt={`Logo ${brand.name}`} className="h-8 w-auto object-contain" />
                  </div>
                )}
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-blue-950 mb-3">{brand.name}</h4>
                <p className="text-gray-500 mb-6 leading-relaxed text-sm font-sans">{brand.desc}</p>
                <div className="flex items-center text-blue-600 font-bold text-xs uppercase tracking-widest">
                  Ver detalhes da representada
                  <div className="ml-2 h-px w-8 bg-blue-600 group-hover:w-16 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Horizontal Scrolling Marquee */}
        <div className="mt-16 pt-12 border-t border-gray-200 reveal">
          <div className="marquee-container relative overflow-hidden py-4">
            <div className="animate-marquee flex items-center space-x-24">
              {scrollingLogos.map((logo, i) => (
                <span 
                  key={`logo-1-${i}`} 
                  className="text-2xl font-bold font-montserrat tracking-tighter text-blue-900 opacity-20 hover:opacity-100 transition-opacity cursor-default whitespace-nowrap"
                >
                  {logo}
                </span>
              ))}
              {scrollingLogos.map((logo, i) => (
                <span 
                  key={`logo-2-${i}`} 
                  className="text-2xl font-bold font-montserrat tracking-tighter text-blue-900 opacity-20 hover:opacity-100 transition-opacity cursor-default whitespace-nowrap"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
