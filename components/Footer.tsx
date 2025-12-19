
import React from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'partners' | 'mission' | 'portfolio') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const logoOfficial = "https://i.postimg.cc/MG0fMyhT/glarlogogrande.png";

  return (
    <footer className="bg-blue-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className="flex justify-center mb-8 cursor-pointer" onClick={() => onNavigate('home')}>
          <img src={logoOfficial} alt="Glar" className="h-32 brightness-0 invert" />
        </div>
        <p className="text-gray-400 max-w-lg mx-auto mb-12 text-sm leading-relaxed">
          Excelência têxtil de Jaraguá do Sul para todo o Brasil. O elo estratégico entre a indústria e o seu sucesso.
        </p>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
          <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
            © 2024 Glar Representações. Todos os direitos reservados.
          </button>
          <div className="flex space-x-8">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Políticas de Privacidade</button>
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Termos de Uso</button>
          </div>
          <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors italic">
            Excellence in Textiles
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
