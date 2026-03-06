import React from 'react';
import { Wave } from './ui/Wave';

export const FinalCTA: React.FC = () => {
  const openWhatsApp = () => {
    window.open('https://pedido.anota.ai/loja/bolos-sil-sil-americana?f=ms', '_blank');
  };

  return (
    <section id="final-cta" className="relative py-32 overflow-hidden flex items-center justify-center text-center">
      <div className="absolute top-0 w-full text-white z-20">
        <Wave color="#FFFCF5" />
      </div>

      {/* Background Image - Static */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Coffee Table Background Image */}
        <img 
          src="https://i.postimg.cc/W1NHWWSr/Sem-ti-tulo-2093.jpg" 
          alt="Mesa de café da tarde com bolo" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-chocolate-900/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/90 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-white max-w-4xl pt-10">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
          Esta é a sua melhor chance de transformar pausas simples do dia a dia em momentos deliciosos.
        </h2>

        <button 
          onClick={openWhatsApp}
          className="bg-yellow-400 hover:bg-yellow-500 text-chocolate-900 text-lg md:text-xl px-12 py-5 rounded-full font-bold shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:shadow-[0_0_50px_rgba(251,191,36,0.6)] transform hover:-translate-y-1 transition-all mb-12"
        >
          Faça agora seu pedido!
        </button>

        <div className="flex flex-col items-center gap-4">
          <p className="text-amber-100/80">Ainda tem alguma dúvida? Nos chame no Whatsapp</p>
          <a 
            href="https://api.whatsapp.com/send/?phone=5519997264036&text=Ol%C3%A1%21+Tenho+interesse+em+saber+mais+informa%C3%A7%C3%B5es+sobre+o+Clube+do+Bolo+da+Sil+%26+Sil&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] border border-white/20 px-6 py-3 rounded-full text-white transition-all backdrop-blur-md group shadow-lg"
          >
            <svg 
               xmlns="http://www.w3.org/2000/svg" 
               width="20" 
               height="20" 
               viewBox="0 0 24 24" 
               fill="currentColor" 
               className="group-hover:rotate-12 transition-transform"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="font-medium uppercase tracking-wide text-sm">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};