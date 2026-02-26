
import React from 'react';
import { Check, Star, ArrowRight } from './ui/Icons';

export const Hero: React.FC = () => {
  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send/?phone=5519997264036&text=Ol%C3%A1%21+Gostaria+de+fazer+um+pedido', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1a120b] pt-28 pb-[22rem] md:pt-48 md:pb-40">
      {/* Background Composition */}
      <div className="absolute inset-0 z-0">
        {/* --- MOBILE BACKGROUND IMAGE --- */}
        <img 
          src="https://i.postimg.cc/bwMNqtZ0/Sem-ti-tulo-2274.jpg" 
          alt="Bolo Sil & Sil Mobile" 
          className="block md:hidden absolute inset-0 w-full h-full object-cover object-center transform scale-100 transition-transform duration-1000"
        />

        {/* --- DESKTOP BACKGROUND IMAGE --- */}
        <img 
          src="https://i.postimg.cc/bwMNqtZ0/Sem-ti-tulo-2274.jpg" 
          alt="Bolo Sil & Sil Desktop" 
          className="hidden md:block absolute inset-0 w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
        />
        
        {/* Gradient Overlay - Reduced opacity for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a120b]/90 via-[#1a120b]/40 via-50% to-transparent md:bg-gradient-to-r md:from-[#1a120b]/90 md:via-[#1a120b]/30 md:via-50% md:to-transparent z-10" />
        
        {/* Golden Bokeh & Shimmer Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none">
           {/* Large ambient glows */}
           <div className="absolute top-10 left-1/4 w-64 h-64 bg-amber-500/20 rounded-full blur-[100px] animate-pulse"></div>
           <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-yellow-600/10 rounded-full blur-[120px]"></div>
           
           {/* Shimmering particles (Twinkling lights) */}
           <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-yellow-200 rounded-full blur-[1px] animate-pulse opacity-80"></div>
           <div className="absolute top-1/3 left-1/2 w-1.5 h-1.5 bg-amber-300 rounded-full blur-[1px] animate-pulse delay-75 opacity-60"></div>
           <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-yellow-100 rounded-full blur-[2px] animate-pulse delay-150 opacity-40"></div>
           <div className="absolute top-20 right-1/4 w-2 h-2 bg-amber-200 rounded-full blur-[1px] animate-pulse delay-300 opacity-70"></div>
           
           {/* Floating bokeh circles */}
           <div className="absolute top-[15%] right-[20%] w-4 h-4 bg-amber-400/30 rounded-full blur-[2px] animate-float"></div>
           <div className="absolute bottom-[30%] right-[10%] w-6 h-6 bg-yellow-500/20 rounded-full blur-[4px] animate-float delay-1000"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-start md:justify-center">
        
        {/* Content - Left Aligned */}
        <div className="max-w-3xl space-y-4 md:space-y-8 animate-fade-in-up">
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] drop-shadow-lg">
            O sabor que abraça, agora no coração de Americana.
          </h1>
          
          <div className="border-l-4 border-yellow-500 pl-6 space-y-2 md:space-y-3">
            <p className="font-sans text-lg md:text-xl text-gray-100 leading-relaxed max-w-lg">
              Há mais de 10 anos, transformamos receitas de família em momentos inesquecíveis. Bolos artesanais, fresquinhos e feitos com o carinho que você merece.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-6 items-start sm:items-center pt-2 md:pt-8">
            <button 
              onClick={openWhatsApp}
              className="group relative bg-yellow-500 hover:bg-yellow-400 text-chocolate-900 text-base md:text-lg px-8 py-4 md:px-10 md:py-5 rounded-full font-bold shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] hover:-translate-y-1 transition-all w-auto overflow-hidden flex items-center justify-center gap-3"
            >
              <span>Faça seu pedido agora</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex flex-col gap-1 pl-2">
               <div className="flex items-center gap-1">
                 {[1,2,3,4,5].map(i => <Star key={i} size={18} className="text-yellow-400 fill-yellow-400 drop-shadow-sm" />)}
                 <span className="text-sm font-bold text-white ml-2">5.0/5.0</span>
               </div>
               <span className="text-sm text-gray-300 font-medium">Sabor inesquecível e qualidade garantida</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-4 pt-2 md:pt-8">
            {['+10 anos de tradição', 'Produção artesanal', 'Entrega em Americana e região'].map((badge) => (
              <span key={badge} className="flex items-center gap-2 text-xs md:text-lg font-bold text-amber-100/90 bg-black/40 px-3 py-2 md:px-5 md:py-3 rounded-xl border border-white/20 backdrop-blur-md shadow-sm hover:bg-black/50 transition-colors cursor-default">
                <Check size={16} className="text-yellow-400 md:w-5 md:h-5" /> {badge}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};