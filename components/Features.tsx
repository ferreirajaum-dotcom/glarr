
import React from 'react';
import { Leaf, Truck, Zap, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  const diffs = [
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "Sustentabilidade",
      desc: "Representamos indústrias que utilizam reciclagem têxtil e processos de baixo impacto ambiental."
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Inovação Tecnológica",
      desc: "Acesso exclusivo às malhas com proteção UV e fibras inteligentes desenvolvidas em polos tecnológicos."
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Agilidade Logística",
      desc: "Situados em Jaraguá do Sul, garantimos prazos reduzidos e acompanhamento direto da produção."
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Consultoria B2B",
      desc: "Suporte estratégico na escolha da estrutura de tecido ideal para cada modelagem de sua coleção."
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-blue-950 text-white reveal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-delay-1">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.4em] mb-4">Por que a Glar?</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              A autoridade que sua <br />
              <span className="text-blue-300">marca merece.</span>
            </h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Conectamos sua confecção aos gigantes do setor com a agilidade de quem conhece o chão de fábrica em Jaraguá do Sul.
            </p>
            <button className="group px-10 py-5 bg-white text-blue-950 font-bold uppercase tracking-widest hover:bg-blue-400 hover:text-white transition-all flex items-center gap-3">
              Explorar Catálogo Técnico
              <div className="w-8 h-px bg-blue-950 group-hover:bg-white transition-colors"></div>
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 reveal-delay-2">
            {diffs.map((diff, i) => (
              <div key={i} className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                <div className="text-blue-400 mb-6">{diff.icon}</div>
                <h4 className="text-xl font-bold mb-4">{diff.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed font-sans">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
