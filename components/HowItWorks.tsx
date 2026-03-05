
import React, { useState, useEffect } from 'react';
import { Wave } from './ui/Wave';
import { ChevronLeft, ChevronRight } from './ui/Icons';

export const HowItWorks: React.FC = () => {
  const images = [
    "https://i.postimg.cc/4xMNX9Y6/Sem-ti-tulo-2252.jpg",
    "https://i.postimg.cc/sDH3Jh4z/Sem-ti-tulo-2242.jpg",
    "https://i.postimg.cc/bJPPvHp7/Sem-ti-tulo-2218.jpg",
    "https://i.postimg.cc/5yvkQDg4/Sem-ti-tulo-2487.jpg",
    "https://i.postimg.cc/7ZqQbs20/Sem-ti-tulo-2003.jpg",
    "https://i.postimg.cc/6Q3jf8zJ/Sem-ti-tulo-2049.jpg",
    "https://i.postimg.cc/MKS9rPtY/Sem-ti-tulo-2327.jpg",
    "https://i.postimg.cc/d0pBR4Lm/Sem-ti-tulo-2129.jpg",
    "https://i.postimg.cc/bN9mXxB2/Sem-ti-tulo-2109.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const getPrevIndex = () => (currentIndex - 1 + images.length) % images.length;
  const getNextIndex = () => (currentIndex + 1) % images.length;

  const openWhatsApp = () => {
    window.open('https://pedido.anota.ai/', '_blank');
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/50 -skew-x-12 translate-x-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Side (Now Left) */}
          <div className="space-y-10 order-2 lg:order-1">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-chocolate-900 leading-tight mb-4">
                Receba em sua casa ou venha nos visitar!
              </h2>
              <p className="text-xl text-amber-700 italic">
                Feita para quem acredita que a vida fica mais leve com um toque de sabor.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-chocolate-800 border-l-4 border-yellow-400 pl-4">
              O seu momento doce em 3 passos simples.
            </h3>

            <div className="space-y-8">
              <Step 
                number="1"
                title="Escolha sua delícia"
                text="Explore nosso cardápio diário com opções que variam de sabores simples a recheios gourmet."
              />
              <Step 
                number="2"
                title="Faça seu pedido"
                text="Reserve seu favorito diretamente pelo nosso WhatsApp para garantir que ele esteja te esperando."
              />
              <Step 
                number="3"
                title="Retire ou receba em casa, e aproveite"
                text="Venha nos visitar na Avenida Brasil e transforme sua pausa em um momento delicioso."
              />
            </div>

            <div className="pt-4">
              <button 
                onClick={openWhatsApp}
                className="bg-yellow-400 hover:bg-yellow-500 text-chocolate-900 px-10 py-4 rounded-full font-bold shadow-lg transition-transform hover:scale-105"
              >
                Faça seu pedido agora
              </button>
            </div>
          </div>

          {/* Carousel Side (Now Right) */}
          <div className="relative flex justify-center lg:justify-start order-1 lg:order-2">
            <div 
              className="relative w-full max-w-[500px] lg:max-w-3xl h-[350px] sm:h-[400px] lg:h-[600px] flex items-center justify-center perspective-1000 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
               {/* Previous Slide Preview */}
               <div 
                 className="absolute left-0 sm:left-4 lg:left-0 w-48 sm:w-64 lg:w-96 aspect-square rounded-2xl overflow-hidden opacity-40 blur-[2px] scale-75 z-10 transition-all duration-700 ease-out transform -translate-x-1/4 sm:-translate-x-0 lg:-translate-x-12 cursor-pointer"
                 onClick={prevSlide}
               >
                 <img 
                   src={images[getPrevIndex()]} 
                   alt="Anterior" 
                   className="w-full h-full object-cover grayscale-[30%]" 
                 />
                 <div className="absolute inset-0 bg-white/20"></div>
               </div>

               {/* Next Slide Preview */}
               <div 
                 className="absolute right-0 sm:right-4 lg:right-0 w-48 sm:w-64 lg:w-96 aspect-square rounded-2xl overflow-hidden opacity-40 blur-[2px] scale-75 z-10 transition-all duration-700 ease-out transform translate-x-1/4 sm:translate-x-0 lg:translate-x-12 cursor-pointer"
                 onClick={nextSlide}
               >
                 <img 
                   src={images[getNextIndex()]} 
                   alt="Próximo" 
                   className="w-full h-full object-cover grayscale-[30%]" 
                 />
                 <div className="absolute inset-0 bg-white/20"></div>
               </div>

               {/* Main Slide */}
               <div className="relative w-72 sm:w-80 lg:w-[28rem] aspect-square z-30 transition-all duration-700 ease-out transform scale-100">
                  <div className="w-full h-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(93,64,55,0.3)] border-4 border-white bg-chocolate-50 relative">
                    <img 
                      src={images[currentIndex]}
                      alt={`Bolo Sil & Sil Destaque`}
                      className="w-full h-full object-cover"
                    />
                    {/* Glossy Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50 pointer-events-none" />
                  </div>
               </div>

               {/* Navigation Buttons */}
               <button 
                 onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                 className="absolute left-2 sm:left-8 lg:left-0 top-1/2 -translate-y-1/2 z-40 bg-white/80 hover:bg-white text-chocolate-900 p-3 lg:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                 aria-label="Anterior"
               >
                 <ChevronLeft size={24} className="lg:w-8 lg:h-8" />
               </button>
               
               <button 
                 onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                 className="absolute right-2 sm:right-8 lg:right-0 top-1/2 -translate-y-1/2 z-40 bg-white/80 hover:bg-white text-chocolate-900 p-3 lg:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                 aria-label="Próximo"
               >
                 <ChevronRight size={24} className="lg:w-8 lg:h-8" />
               </button>

               {/* Indicators */}
               <div className="absolute -bottom-8 lg:bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                 {images.map((_, idx) => (
                   <div 
                     key={idx}
                     className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-yellow-400' : 'w-2 bg-chocolate-200'}`}
                   />
                 ))}
               </div>
            </div>
            
            {/* Decorative blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-100/50 blur-3xl rounded-full" />
          </div>

        </div>
      </div>
      <Wave className="text-[#FFF1E6]" inverted />
    </section>
  );
};

const Step: React.FC<{number: string, title: string, text: string}> = ({ number, title, text }) => (
  <div className="flex gap-6 group">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-400 text-chocolate-900 font-sans font-bold text-2xl flex items-center justify-center shadow-md border-2 border-white cursor-default">
      {number}
    </div>
    <div>
      <h4 className="text-xl font-bold text-chocolate-900 mb-2">{title}</h4>
      <p className="text-chocolate-800/70">{text}</p>
    </div>
  </div>
);
