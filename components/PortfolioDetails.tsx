
import React from 'react';
import { ArrowLeft, Box, Check, FileText, Info, Layers, MoveRight, Ruler } from 'lucide-react';

interface PortfolioDetailsProps {
  onBack: () => void;
}

const PortfolioDetails: React.FC<PortfolioDetailsProps> = ({ onBack }) => {
  const materials = [
    { 
      url: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1200&auto=format&fit=crop", 
      title: "Piquet Premium",
      subtitle: "Estrutura e Elegância",
      desc: "Desenvolvido com fios de algodão de fibra longa, nosso piquet oferece respirabilidade superior e durabilidade extrema. Ideal para polos e peças casuais de alto padrão.",
      specs: ["100% Algodão Penteado", "Gramatura: 220g/m²", "Acabamento Soft-Touch", "Alta Solidez de Cor"]
    },
    { 
      url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200&auto=format&fit=crop", 
      title: "Jersey Algodão",
      subtitle: "O Essencial Perfeito",
      desc: "Malha versátil com elasticidade natural e toque extremamente suave. Perfeita para t-shirts premium que exigem caimento impecável e conforto prolongado.",
      specs: ["Algodão Suedine", "Gramatura: 160g/m²", "Não deforma", "Tratamento anti-pilling"]
    },
    { 
      url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1200&auto=format&fit=crop", 
      title: "Moletom Luxo",
      subtitle: "Conforto Termoacústico",
      desc: "Nossa linha de moletom destaca-se pela felpa densa e estável. Proporciona isolamento térmico sem perder a leveza, sendo a escolha número um para o street wear de luxo.",
      specs: ["Misto Algodão/Poliéster", "Gramatura: 340g/m²", "Interior flanelado", "Resistente a lavagens industriais"]
    },
    { 
      url: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1200&auto=format&fit=crop", 
      title: "Linho Misto",
      subtitle: "Sofisticação Atemporal",
      desc: "A nobreza do linho aliada à praticidade das fibras tecnológicas. Menor amarrotamento e visual orgânico, essencial para coleções de alfaiataria moderna.",
      specs: ["55% Linho / 45% Viscose", "Estética rústica", "Toque fresco", "Cores naturais"]
    },
    { 
      url: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1200&auto=format&fit=crop", 
      title: "Viscose Eco",
      subtitle: "Fluidez e Brilho",
      desc: "Fibra de origem sustentável com caimento leve e toque gelado. Ideal para moda feminina fluida, oferecendo cores vibrantes e alto conforto térmico.",
      specs: ["Viscose Vortex", "Alta absorção", "Resistência à torção", "Certificação FSC"]
    },
    { 
      url: "https://images.unsplash.com/photo-1584281722572-6804597b0492?q=80&w=1200&auto=format&fit=crop", 
      title: "Fibras Recicladas",
      subtitle: "O Futuro Consciente",
      desc: "Malhas produzidas a partir de sobras têxteis e PET reciclado. Tecnologia que transforma resíduos em moda de alto desempenho e apelo comercial.",
      specs: ["Poliéster Reciclado", "Fio Global Recycled Standard", "Menor pegada de CO2", "Textura inovadora"]
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 font-montserrat">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <button 
          onClick={onBack}
          className="flex items-center text-blue-900 font-bold uppercase tracking-widest text-sm hover:text-blue-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar para Home
        </button>
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-950 mb-6 leading-tight">
            Portfólio de <br /><span className="text-blue-600 italic font-light">Materiais e Texturas</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed font-sans max-w-2xl">
            Uma curadoria rigorosa das melhores malhas e tecidos do mercado. Tecnologia de ponta e acabamentos premium para elevar o valor percebido de sua confecção.
          </p>
        </div>
      </div>

      {/* Materials Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {materials.map((m, i) => (
            <div key={i} className="group bg-gray-50 flex flex-col md:flex-row border border-gray-100 hover:shadow-2xl transition-all duration-700 overflow-hidden">
              <div className="md:w-1/2 overflow-hidden relative">
                <img 
                  src={m.url} 
                  alt={m.title} 
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute top-4 left-4 bg-blue-950/80 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  {m.subtitle}
                </div>
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-blue-950 mb-4">{m.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 font-sans">
                    {m.desc}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {m.specs.map((spec, si) => (
                      <li key={si} className="flex items-center text-[11px] font-bold text-blue-900 uppercase tracking-widest">
                        <Check className="w-3 h-3 text-blue-600 mr-2" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="flex items-center text-blue-600 font-bold text-xs uppercase tracking-widest group/btn">
                  Ver amostra técnica
                  <MoveRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Standards Section */}
      <section className="bg-blue-950 py-24 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-blue-400 font-bold uppercase tracking-[0.4em] text-sm mb-4">Padrões de Excelência</h2>
            <h3 className="text-3xl md:text-5xl font-bold">Especificações Rigorosas</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-8 bg-white/5 border border-white/10 text-center">
              <Ruler className="w-10 h-10 text-blue-400 mx-auto mb-6" />
              <h4 className="font-bold mb-3 uppercase tracking-widest text-sm">Estabilidade</h4>
              <p className="text-xs text-blue-100 leading-relaxed opacity-70">Controle rigoroso de encolhimento e torção após lavagem.</p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 text-center">
              <Layers className="w-10 h-10 text-blue-400 mx-auto mb-6" />
              <h4 className="font-bold mb-3 uppercase tracking-widest text-sm">Toque</h4>
              <p className="text-xs text-blue-100 leading-relaxed opacity-70">Acabamentos especiais que garantem conforto e maciez premium.</p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 text-center">
              <Box className="w-10 h-10 text-blue-400 mx-auto mb-6" />
              <h4 className="font-bold mb-3 uppercase tracking-widest text-sm">Solidez</h4>
              <p className="text-xs text-blue-100 leading-relaxed opacity-70">Cores intensas que não desbotam com o uso e lavagem.</p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 text-center">
              <Info className="w-10 h-10 text-blue-400 mx-auto mb-6" />
              <h4 className="font-bold mb-3 uppercase tracking-widest text-sm">Inovação</h4>
              <p className="text-xs text-blue-100 leading-relaxed opacity-70">Busca constante por novas construções de tecelagem.</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-blue-900 opacity-20 -skew-y-3 translate-y-20"></div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <FileText className="w-16 h-16 text-blue-600 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Solicite nosso Catálogo Técnico Completo</h2>
          <p className="text-gray-500 text-lg mb-10 font-sans leading-relaxed">
            Tenha acesso à ficha técnica de cada artigo e conheça as opções de cores exclusivas para a próxima estação.
          </p>
          <a 
            href="https://wa.me/5547998880011"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 bg-blue-950 text-white font-bold uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl inline-block"
          >
            Falar com Consultor via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetails;
