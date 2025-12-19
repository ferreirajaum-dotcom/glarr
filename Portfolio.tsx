
import React from 'react';

const Portfolio: React.FC = () => {
  const images = [
    { 
      url: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=800&auto=format&fit=crop", 
      title: "Piquet Premium" 
    },
    { 
      url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop", 
      title: "Jersey Algodão" 
    },
    { 
      url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop", 
      title: "Moletom Luxo" 
    },
    { 
      url: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=800&auto=format&fit=crop", 
      title: "Linho Misto" 
    },
    { 
      url: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800&auto=format&fit=crop", 
      title: "Viscose Eco" 
    },
    { 
      url: "https://images.unsplash.com/photo-1584281722572-6804597b0492?q=80&w=800&auto=format&fit=crop", 
      title: "Fibras Recicladas" 
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white reveal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl reveal-delay-1">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-[0.4em] mb-4 text-center md:text-left">Portfólio de Materiais</h2>
            <h3 className="text-4xl font-bold text-blue-950 text-center md:text-left">A estética da qualidade em cada fibra</h3>
          </div>
          <p className="text-gray-500 md:text-right max-w-sm text-center md:text-left reveal-delay-2">
            Nossa seleção foca na textura, toque e durabilidade, garantindo o caimento perfeito para sua confecção.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className={`group relative aspect-[4/5] overflow-hidden bg-gray-100 shadow-sm reveal-delay-${(i % 3) + 1}`}>
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <span className="text-white text-[10px] font-bold uppercase tracking-widest mb-2 border-l-2 border-blue-400 pl-3">
                  Qualidade Glar
                </span>
                <h4 className="text-white text-2xl font-bold font-montserrat">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
