
import React from 'react';
import { ArrowLeft, Target, ShieldCheck, Zap, Award, Users, TrendingUp } from 'lucide-react';

interface MissionDetailsProps {
  onBack: () => void;
}

const MissionDetails: React.FC<MissionDetailsProps> = ({ onBack }) => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24 font-montserrat">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <button 
          onClick={onBack}
          className="flex items-center text-blue-900 font-bold uppercase tracking-widest text-sm hover:text-blue-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar para Home
        </button>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-950 mb-8 leading-tight">
              Nosso Propósito e <br />
              <span className="text-blue-600 italic font-light">Compromisso Têxtil</span>
            </h1>
            <div className="h-1 w-24 bg-blue-600 mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed font-sans max-w-xl">
              Na Glar Representações, acreditamos que cada tecido carrega uma story de inovação e cada parceria é um degrau rumo à excelência do mercado de moda brasileiro.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video overflow-hidden shadow-2xl rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1558226701-f87d822303b6?q=80&w=1200&auto=format&fit=crop" 
                alt="Textile Industry Excellence" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-950 text-white p-8 hidden md:block">
              <p className="text-sm font-light uppercase tracking-widest">Excelência em Cada Ponto</p>
            </div>
          </div>
        </div>
      </div>

      {/* Missão Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-20 h-20 bg-blue-900 text-white flex items-center justify-center rounded-full mb-6 shadow-xl">
                <Target className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold text-blue-950 uppercase tracking-widest">Nossa Missão</h2>
            </div>
            <div className="md:w-2/3">
              <p className="text-2xl md:text-3xl font-light text-blue-900 leading-relaxed italic mb-8 border-l-4 border-blue-600 pl-8">
                "Nossa missão é conectar indústrias que produzem malhas e tecidos com confecções que buscam alta qualidade e inovação, superando as expectativas dos clientes."
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-sans">
                Para concretizar esse propósito, atuamos como um braço estratégico para as confecções, filtrando as melhores oportunidades do polo têxtil de Jaraguá do Sul e região. Nosso foco é garantir que o fornecimento não seja apenas uma transação, mas um diferencial competitivo que impulsiona o crescimento de nossos parceiros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.4em] mb-4">Princípios Fundamentais</h2>
            <h3 className="text-4xl font-bold text-blue-950">Nossos Valores</h3>
            <p className="mt-6 text-xl font-medium text-gray-500 max-w-3xl mx-auto italic">
              "Valorizamos a confiança, priorizamos a qualidade e estamos em constante busca de inovação."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 bg-gray-50 hover:bg-blue-950 hover:text-white transition-all duration-500 group border border-gray-100 shadow-sm">
              <ShieldCheck className="w-12 h-12 text-blue-600 group-hover:text-blue-400 mb-8 transition-colors" />
              <h4 className="text-2xl font-bold mb-6">Confiança</h4>
              <p className="text-gray-500 group-hover:text-blue-100 font-sans leading-relaxed">
                Baseamos nossas relações na transparência e integridade. Ser um parceiro de confiança significa entregar compromissos e construir laços duradouros entre indústria e confecção.
              </p>
            </div>
            <div className="p-10 bg-gray-50 hover:bg-blue-950 hover:text-white transition-all duration-500 group border border-gray-100 shadow-sm">
              <Award className="w-12 h-12 text-blue-600 group-hover:text-blue-400 mb-8 transition-colors" />
              <h4 className="text-2xl font-bold mb-6">Qualidade</h4>
              <p className="text-gray-500 group-hover:text-blue-100 font-sans leading-relaxed">
                Não aceitamos o comum. Cada artigo representado passa por nossa curadoria técnica, garantindo que o produto final de nossos clientes reflita o mais alto padrão têxtil.
              </p>
            </div>
            <div className="p-10 bg-gray-50 hover:bg-blue-950 hover:text-white transition-all duration-500 group border border-gray-100 shadow-sm">
              <Zap className="w-12 h-12 text-blue-600 group-hover:text-blue-400 mb-8 transition-colors" />
              <h4 className="text-2xl font-bold mb-6">Inovação</h4>
              <p className="text-gray-500 group-hover:text-blue-100 font-sans leading-relaxed">
                O mercado da moda não para. Por isso, buscamos constantemente novas tecnologias, processos sustentáveis e tendências que antecipam as necessidades do futuro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compromisso Section */}
      <section className="py-24 bg-blue-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Um compromisso com o <span className="text-blue-400">Sucesso Mútuo</span></h2>
              <p className="text-blue-100 text-lg font-sans leading-relaxed mb-8">
                Nossa atuação vai além da representação; somos consultores estratégicos. Entendemos que o sucesso de uma confecção depende de insumos confiáveis e de uma logística eficiente. Por isso, investimos nosso tempo no monitoramento das tendências globais para trazer soluções locais de impacto.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-bold text-blue-400 mb-2">+100</p>
                  <p className="text-xs uppercase tracking-widest font-bold">Confecções Parceiras</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue-400 mb-2">100%</p>
                  <p className="text-xs uppercase tracking-widest font-bold">Qualidade Certificada</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="p-12 border border-white/10 bg-white/5 backdrop-blur-sm text-center max-w-md">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                <p className="text-xl font-light italic leading-relaxed mb-8">
                  "Acompanhe nossas atualizações para conhecer mais sobre nossos produtos e valores."
                </p>
                <a 
                  href="https://wa.me/5547998880011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-blue-950 font-bold uppercase tracking-widest hover:bg-blue-400 hover:text-white transition-all w-full inline-block"
                >
                  Falar com Consultor B2B
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/20 -skew-x-12 translate-x-1/2"></div>
      </section>
    </div>
  );
};

export default MissionDetails;
