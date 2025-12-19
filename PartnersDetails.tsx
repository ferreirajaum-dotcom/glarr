
import React from 'react';
import { ArrowLeft, CheckCircle2, Factory, Globe, ShieldCheck, Award, Droplets, Users, Leaf, Recycle } from 'lucide-react';

interface PartnersDetailsProps {
  onBack: () => void;
}

const PartnersDetails: React.FC<PartnersDetailsProps> = ({ onBack }) => {
  // Nova URL de logo oficial fornecida pelo usuário
  const malweeLogoUrl = "https://i.postimg.cc/762HJDC4/LOGOMALWEE.png";
  const fibravivaLogoUrl = "https://i.postimg.cc/X7hsQbX4/logofibra-removebg-preview.png";

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
        <h1 className="text-4xl md:text-6xl font-bold text-blue-950 mb-6">
          Nossas <span className="text-blue-600">Representadas</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-3xl leading-relaxed font-sans">
          Conectamos sua marca à excelência produtiva das maiores indústrias têxteis brasileiras, garantindo inovação e sustentabilidade real em cada etapa.
        </p>
      </div>

      {/* Grupo Malwee Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-blue-600"></div>
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Desde 1968 | Moda para Durar</span>
              </div>
              <h2 className="text-4xl font-bold text-blue-950 mb-6">Grupo Malwee</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-sans mb-10">
                <p>
                  O <strong>Grupo Malwee</strong> é uma das principais empresas de moda do Brasil e uma das mais sustentáveis do mundo. Com a filosofia de produzir uma "Moda do Bem", o grupo é pioneiro em práticas de baixo impacto ambiental, sendo a primeira empresa de moda brasileira a assumir o compromisso de se tornar Carbono Neutro até 2050.
                </p>
                <p>
                  Representamos toda a tecnologia e qualidade que tornam o grupo referência em ESG, oferecendo malhas que unem o conforto do algodão certificado à durabilidade extrema que o mercado B2B exige.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <Droplets className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                  <p className="text-gray-700 text-sm font-sans"><span className="font-bold">Tecnologia H2O:</span> Processos que utilizam menos água, preservando recursos naturais.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Recycle className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                  <p className="text-gray-700 text-sm font-sans"><span className="font-bold">Economia Circular:</span> Fibras recicladas e processos que respeitam o ciclo de vida do produto.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {['Malwee', 'Enfim', 'Malwee Kids', 'Carinhoso'].map((brand) => (
                  <span key={brand} className="px-5 py-2 bg-white border border-gray-100 text-blue-900 text-xs font-bold uppercase tracking-widest shadow-sm">
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative group">
                <div className="aspect-[4/3] bg-white flex flex-col items-center justify-center p-12 shadow-2xl overflow-hidden border border-gray-100 rounded-sm">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src={malweeLogoUrl} 
                      alt="Logo Grupo Malwee" 
                      className="max-w-full max-h-full object-contain transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-950 text-white p-8 hidden md:block z-10">
                  <p className="text-xs font-light uppercase tracking-[0.3em] mb-1 text-blue-400">Moda Sustentável</p>
                  <p className="text-2xl font-bold tracking-tight">Referência Global</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fibraviva Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="aspect-[16/10] flex items-center justify-center p-16 shadow-2xl rounded-sm bg-gray-50 border border-gray-100">
                  <img 
                    src={fibravivaLogoUrl} 
                    alt="Fibraviva Inovação" 
                    className="max-w-full max-h-full object-contain transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -top-8 -right-8 bg-blue-600 text-white p-8 hidden md:block">
                  <p className="text-3xl font-bold mb-1">Puro</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-blue-100">Fibras Naturais</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-blue-600"></div>
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Essência e Conforto</span>
              </div>
              <h2 className="text-4xl font-bold text-blue-950 mb-8">Fibraviva</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed font-sans">
                A <strong>Fibraviva</strong> é movida pela paixão por fibras nobres e naturais. Com o propósito de oferecer artigos diferenciados, a marca foca em matérias-primas como algodão, linho e cânhamo, entregando produtos com estética orgânica e toque inigualável.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed font-sans">
                Seus processos de tingimento sustentável e o uso de fibras ecológicas garantem uma moda consciente que respeita o tempo da natureza, ideal para marcas que buscam sofisticação e responsabilidade ambiental.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950 mb-1">Fibras Biodegradáveis</h4>
                    <p className="text-gray-500 text-sm font-sans">Compromisso com o meio ambiente através de materiais que se decompõem naturalmente.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950 mb-1">Tingimento Eco-Friendly</h4>
                    <p className="text-gray-500 text-sm font-sans">Redução drástica de resíduos químicos e otimização de energia na produção.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Interessado em nossas soluções?</h2>
          <p className="text-blue-200 text-lg mb-12 font-sans">
            Fale agora com nosso time comercial para conhecer o catálogo completo do Grupo Malwee e Fibraviva.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://wa.me/5547998880011"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-white text-blue-950 font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all shadow-xl flex items-center justify-center"
            >
              Consultoria via WhatsApp
            </a>
            <button 
              onClick={onBack}
              className="px-12 py-5 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              Voltar ao Início
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersDetails;
