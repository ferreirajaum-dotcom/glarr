
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
  onNavigate: (page: 'home' | 'partners' | 'mission' | 'portfolio') => void;
  isHome: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, onNavigate, isHome }) => {
  const [isOpen, setIsOpen] = useState(false);
  const logoOfficial = "https://i.postimg.cc/MG0fMyhT/glarlogogrande.png"; 

  const navLinks = [
    { name: 'Início', href: '#home', type: 'home' },
    { name: 'Missão', href: '#missao', type: 'mission' },
    { name: 'Representadas', href: '#parceiros', type: 'partners' },
    { name: 'Portfólio', href: '#portfolio', type: 'portfolio' },
    { name: 'Contato', href: 'https://wa.me/5547998880011', type: 'whatsapp' },
  ];

  const handleLinkClick = (e: React.MouseEvent, type: string, href: string) => {
    if (type === 'whatsapp') {
      e.preventDefault();
      window.open(href, '_blank');
      setIsOpen(false);
      return;
    }
    
    if (type === 'mission') {
      e.preventDefault();
      onNavigate('mission');
    } else if (type === 'partners') {
      e.preventDefault();
      onNavigate('partners');
    } else if (type === 'portfolio') {
      e.preventDefault();
      onNavigate('portfolio');
    } else if (!isHome) {
      e.preventDefault();
      onNavigate('home');
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || !isHome ? 'bg-white shadow-lg py-0' : 'bg-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-20 md:h-24">
        <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
          <img 
            src={logoOfficial} 
            alt="Glar" 
            className={`transition-all duration-500 object-contain ${scrolled || !isHome ? 'h-20 md:h-24' : 'h-24 md:h-32'}`}
            style={{ filter: scrolled || !isHome ? 'none' : 'brightness(0) invert(1)' }}
          />
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.type, link.href)}
              className={`text-xs font-bold uppercase tracking-widest hover:text-blue-500 transition-colors ${scrolled || !isHome ? 'text-blue-950' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled || !isHome ? 'text-blue-900' : 'text-white'} size={28} /> : <Menu className={scrolled || !isHome ? 'text-blue-900' : 'text-white'} size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl p-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-blue-950 font-bold uppercase tracking-widest text-sm" onClick={(e) => handleLinkClick(e, link.type, link.href)}>{link.name}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
