
import React from 'react';
import { Wave } from './ui/Wave';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-sprinkles relative overflow-hidden">
      {/* Dark overlay to ensure sprinkle pattern is subtle and text is readable */}
      <div className="absolute inset-0 bg-chocolate-900/90 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-amber-50 drop-shadow-md">
            Quem assina ama (e recomenda!)
          </h2>
          <p className="text-amber-100/70 mt-4 text-lg">
            Veja o que dizem nossos clientes
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center pb-10">
          
          {/* Reviews Column (Left) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <ReviewCard 
              name="Miriam Zanichelli"
              role="Psicoterapeuta"
              text="Sou muito exigente com doces, e os bolos da Sil e Sil são simplesmente incríveis! Parecem aqueles bolos caseiros que minha avó fazia, cheios de sabor e carinho. Desde que assinei o Clube do Bolo, eu e meu marido sempre esperamos ansiosos pela entrega da semana. É um mimo que virou tradição em casa!"
            />
            <ReviewCard 
              name="Fernanda Maia"
              role="Advogada"
              text="Adoro receber amigos em casa, mas nem sempre tenho tempo para cozinhar. Com o Clube do Bolo toda semana recebo um bolo fresquinho em casa. Minhas visitas sempre elogiam, e eu fico tranquila sabendo que posso contar com a Sil e Sil para me ajudar a receber bem!"
            />
            <ReviewCard 
              name="Camila Pinheiro"
              role="Empreendedora"
              text="Amo a sensação de receber uma surpresa deliciosa toda semana! Os bolos do Clube do Bolo são sempre uma novidade, e eu adoro experimentar sabores diferentes. Além disso, me sinto super especial por ser uma das primeiras a provar as novidades. Recomendo para todas que como eu, adoram docinho diferente toda semana"
            />
          </div>

          {/* Video Column (Right) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 bg-chocolate-800 rotate-2 hover:rotate-0 transition-transform duration-500">
               <video 
                 src="https://i.imgur.com/Kf8CpUk.mp4" 
                 className="w-full h-[600px] object-cover"
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/40 to-transparent pointer-events-none" />
            </div>
            {/* Decorative elements behind video */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500 rounded-full blur-[80px] opacity-20 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500 rounded-full blur-[80px] opacity-20 pointer-events-none" />
          </div>

        </div>
      </div>
      
      {/* Wave transition to next section (FAQ is #FFFCF5) */}
      <Wave className="text-[#FFFCF5]" inverted />
    </section>
  );
};

const ReviewCard: React.FC<{name: string, role: string, text: string}> = ({ name, role, text }) => (
  <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10 flex flex-col text-center md:text-left hover:bg-white/10 transition-colors duration-300">
    <div>
      <p className="text-amber-50/90 italic mb-6 leading-relaxed font-light text-sm md:text-base">"{text}"</p>
      <div>
        <h4 className="font-bold text-amber-100 text-lg">{name}</h4>
        <span className="text-sm text-amber-200/60 uppercase tracking-wide font-medium">{role}</span>
      </div>
    </div>
  </div>
);
