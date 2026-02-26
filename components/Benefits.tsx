import React from 'react';
import { ChefHat, Cake, Store } from './ui/Icons';

export const Benefits: React.FC = () => {
  const openWhatsApp = () => {
     window.open('https://api.whatsapp.com/send/?phone=5519997264036&text=Ol%C3%A1%21+Gostaria+de+fazer+um+pedido', '_blank');
  };

  return (
    <section id="beneficios" className="py-24 bg-sprinkles relative overflow-hidden border-t-4 border-amber-500/20">
      
      {/* Dark overlay to ensure sprinkle pattern is subtle */}
      <div className="absolute inset-0 bg-chocolate-900/90 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-amber-50 mb-6 drop-shadow-md">
            Todo mundo merece um momento doce no meio da correria
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <BenefitCard 
            icon={<ChefHat className="w-8 h-8 text-chocolate-900" />}
            title="Receitas com História"
            text='Nossos bolos são feitos com processos manuais e ingredientes selecionados para garantir aquele gostinho de "casa de vó".'
            delay="0"
          />
          <BenefitCard 
            icon={<Cake className="w-8 h-8 text-chocolate-900" />}
            title="Variedade Diária"
            text="Dos clássicos caseirinhos para o café da tarde aos bolos vulcão e opções de festa para celebrar suas conquistas."
            delay="100"
          />
          <BenefitCard 
            icon={<Store className="w-8 h-8 text-chocolate-900" />}
            title="Experiência na Loja"
            text="Um espaço aconchegante na Avenida Brasil pensado para você retirar seu bolo com praticidade e ser atendido com um sorriso."
            delay="200"
          />
        </div>

        <div className="text-center">
          <button 
            onClick={openWhatsApp}
            className="bg-amber-500 hover:bg-amber-400 text-chocolate-900 px-12 py-5 rounded-full font-bold shadow-lg shadow-amber-900/50 transition-all hover:scale-105 hover:shadow-xl text-lg border border-amber-300/50"
          >
            Faça seu pedido agora
          </button>
        </div>
      </div>
    </section>
  );
};

const BenefitCard: React.FC<{icon: React.ReactNode, title: string, text: React.ReactNode, delay: string}> = ({ icon, title, text, delay }) => (
  <div 
    className="group bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/10 hover:bg-white/10 hover:border-amber-400/30"
  >
    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-500 flex items-center justify-center shadow-lg mb-6 rotate-3 group-hover:rotate-6 transition-transform">
      {icon}
    </div>
    <h3 className="font-serif text-2xl font-bold text-amber-50 mb-4">{title}</h3>
    <p className="text-amber-100/70 leading-relaxed font-light">
      {text}
    </p>
  </div>
);