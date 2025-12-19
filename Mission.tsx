import React from "react";
import { Target, Eye, ShieldCheck } from "lucide-react";

const Mission: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Missão",
      desc: "Nossa missão é conectar indústrias que produzem malhas e tecidos com confecções que buscam alta qualidade e inovação, superando as expectativas dos clientes.",
    },
    {
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      title: "Visão",
      desc: "Ser excelente em qualidade para os nossos clientes, entregando sempre o melhor do mercado.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Valores",
      desc: "Valorizamos a confiança, priorizamos a qualidade e estamos em constante busca de inovação.",
    },
  ];

  return (
    <section id="missao" className="py-24 bg-white border-b border-gray-100 reveal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 reveal-delay-1">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-[0.4em] mb-4">
              Entrelaçando Soluções
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-blue-950 leading-tight mb-8">
              Tradição que impulsiona o <span className="text-blue-700">futuro da moda</span>.
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              A Glar Representações nasceu em Jaraguá do Sul com o propósito de elevar o padrão do mercado B2B. Atuamos como curadores de excelência, selecionando apenas as melhores malhas e tecidos para quem não aceita menos que o extraordinário.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <div key={i} className="flex flex-col">
                  <div className="mb-4">{v.icon}</div>
                  <h4 className="font-bold text-blue-900 mb-2">{v.title}</h4>
                  <p className="text-sm text-gray-500 leading-snug">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative reveal-delay-2">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop"
                alt="High end fabrics"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Design elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-950 -z-10 hidden md:block"></div>
            <div className="absolute top-12 -left-12 p-8 bg-white shadow-2xl max-w-xs hidden md:block border-l-4 border-blue-600">
              <p className="text-3xl font-bold text-blue-900 mb-2">+2</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">
                Anos de experiência no setor têxtil
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
