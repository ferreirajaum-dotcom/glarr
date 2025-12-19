
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: 'home' | 'partners') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1558226701-f87d822303b6?q=80&w=2000&auto=format&fit=crop" 
          alt="" 
          className="w-full h-full object-cover grayscale opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 font-montserrat animate-fade-up">
            O Elo Estratégico <br />
            <span className="text-blue-400 font-light italic">entre a Indústria</span> <br />
            e o Seu Sucesso.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl font-light leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Qualidade, Inovação e Confiança. De Jaraguá do Sul para as maiores confecções de todo o Brasil.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="https://wa.me/5547998880011" 
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-blue-600 text-blue-950 hover:text-white px-8 py-5 font-bold uppercase tracking-widest transition-all flex items-center justify-center shadow-xl"
            >
              Fale com um Consultor
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={() => onNavigate('partners')}
              className="bg-transparent border border-white/30 hover:border-white text-white px-8 py-5 font-bold uppercase tracking-widest transition-all text-center"
            >
              Nossas Representadas
            </button>
          </div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-white/0 to-blue-500 hidden lg:block"></div>
    </section>
  );
};

export default Hero;
