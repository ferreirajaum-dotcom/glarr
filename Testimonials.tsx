
import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  "A transparência e o compromisso da Glar com os prazos de entrega elevaram drasticamente a eficiência da nossa linha de produção têxtil em todas as coleções.",
  "A curadoria técnica na escolha das malhas é impecável. Sentimos a diferença na aceitação final das nossas peças premium junto aos clientes mais exigentes.",
  "Parceiro estratégico fundamental. O acesso direto às inovações das grandes indústrias de Jaraguá do Sul nos deu uma vantagem competitiva real e imediata.",
  "Excelente suporte consultivo. A Glar entende a essência da nossa marca e sugere a estrutura têxtil ideal para cada modelo, otimizando nossos custos e resultados.",
  "A agilidade no atendimento e o conhecimento profundo das fibras naturais da Fibraviva transformaram nossa percepção sobre sustentabilidade na moda.",
  "O Grupo Malwee, através da representação da Glar, trouxe para nossa confecção uma qualidade de acabamento que antes só encontrávamos no mercado internacional."
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimate, setIsAnimate] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setIsAnimate(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimate(true);
    }, 400);
  };

  const handlePrev = () => {
    setIsAnimate(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimate(true);
    }, 400);
  };

  return (
    <section className="py-24 bg-blue-950 relative overflow-hidden reveal">
      {/* Decorative Circles with Pulse */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px] animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.5em] mb-4">Relatos de Sucesso</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center font-montserrat">Confiança que Conecta</h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[350px] md:min-h-[300px] flex flex-col items-center justify-center">
            {/* Quote Icon */}
            <div className={`transition-all duration-700 ${isAnimate ? 'opacity-10 scale-100' : 'opacity-0 scale-110'} absolute -top-16 left-0`}>
              <Quote className="w-32 h-32 text-white" />
            </div>
            
            <div 
              className={`transition-all duration-700 transform text-center px-4 md:px-12 ${
                isAnimate ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-4 blur-sm scale-95'
              }`}
            >
              <p className="text-xl md:text-2xl lg:text-3xl text-blue-50 font-light italic leading-relaxed mb-12 font-sans">
                "{testimonials[currentIndex]}"
              </p>
              
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-blue-500/50"></div>
                <span className="text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Indústria de Confecção Parceira</span>
                <div className="h-px w-12 bg-blue-500/50"></div>
              </div>
            </div>

            {/* Nav Controls */}
            <div className="hidden sm:flex absolute inset-y-0 -left-16 lg:-left-24 items-center">
               <button onClick={handlePrev} className="p-4 text-white/30 hover:text-blue-400 transition-colors group">
                 <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
               </button>
            </div>
            <div className="hidden sm:flex absolute inset-y-0 -right-16 lg:-right-24 items-center">
               <button onClick={handleNext} className="p-4 text-white/30 hover:text-blue-400 transition-colors group">
                 <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>

          {/* Indicators with Loading Bar effect */}
          <div className="flex justify-center gap-4 mt-20">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (currentIndex === i) return;
                  setIsAnimate(false);
                  setTimeout(() => {
                    setCurrentIndex(i);
                    setIsAnimate(true);
                  }, 400);
                }}
                className="relative h-1 bg-white/10 overflow-hidden transition-all duration-500 rounded-full"
                style={{ width: currentIndex === i ? '60px' : '15px' }}
                aria-label={`Depoimento ${i + 1}`}
              >
                {currentIndex === i && (
                  <div className="absolute inset-0 bg-blue-500 animate-[marquee_8s_linear_infinite]" style={{ width: '200%' }}></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
