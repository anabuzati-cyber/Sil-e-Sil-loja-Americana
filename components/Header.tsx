import React, { useState, useEffect } from 'react';
import { Menu, X } from './ui/Icons';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send/?phone=5519997264036&text=Ol%C3%A1%21+Gostaria+de+fazer+um+pedido', '_blank');
  };

  const navItems = [
    { label: 'Benefícios', id: 'beneficios' },
    { label: 'Bolos', id: 'galeria' },
    { label: 'Localização', id: 'localizacao' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <div className="relative h-14 w-44 md:h-16 md:w-56 transition-all duration-300">
             <img 
               src="https://i.postimg.cc/Hx9Mh26v/Sil-e-sil-Logotipo-horizontal-1024x419.png" 
               alt="Sil & Sil Bolos Caseiros" 
               className="h-full w-full object-contain"
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
                 e.currentTarget.parentElement!.innerHTML = '<span class="font-serif text-2xl font-bold text-chocolate-900">Sil & Sil</span>';
               }}
             />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="font-medium text-chocolate-900 hover:text-amber-600 transition-colors font-sans text-sm tracking-wide"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={openWhatsApp}
            className="bg-yellow-400 hover:bg-yellow-500 text-chocolate-900 px-6 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            Fazer Pedido
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-chocolate-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FFF8E1] shadow-xl border-t border-amber-200 md:hidden flex flex-col p-6 gap-4 animate-fade-in-down">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="text-left text-chocolate-800 font-medium py-3 border-b border-amber-100"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={openWhatsApp}
            className="bg-yellow-400 text-chocolate-900 w-full py-4 rounded-lg font-bold mt-2 shadow-md"
          >
            Fazer Pedido
          </button>
        </div>
      )}
    </header>
  );
};