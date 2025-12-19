
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Partners from './components/Partners';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PartnersDetails from './components/PartnersDetails';
import MissionDetails from './components/MissionDetails';
import PortfolioDetails from './components/PortfolioDetails';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'partners' | 'mission' | 'portfolio'>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, [currentPage]);

  const navigateTo = (page: 'home' | 'partners' | 'mission' | 'portfolio') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar scrolled={scrolled} onNavigate={navigateTo} isHome={currentPage === 'home'} />
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={navigateTo} />
            <Mission />
            <Partners onNavigate={navigateTo} />
            <Features />
            <Portfolio />
            <Testimonials />
            <Contact />
          </>
        )}
        {currentPage === 'partners' && (
          <PartnersDetails onBack={() => navigateTo('home')} />
        )}
        {currentPage === 'mission' && (
          <MissionDetails onBack={() => navigateTo('home')} />
        )}
        {currentPage === 'portfolio' && (
          <PortfolioDetails onBack={() => navigateTo('home')} />
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
