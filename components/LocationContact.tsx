import React from 'react';
import { MapPin, Clock, Instagram } from './ui/Icons';

export const LocationContact: React.FC = () => {
  const hours = [
    { day: 'Terça-feira', time: '07:00 – 18:00' },
    { day: 'Quarta-feira', time: '07:00 – 18:00' },
    { day: 'Quinta-feira', time: '07:00 – 18:00' },
    { day: 'Sexta-feira', time: '07:00 – 18:00' },
    { day: 'Sábado', time: '07:00 – 18:00' },
    { day: 'Domingo', time: 'Fechado', closed: true },
    { day: 'Segunda-feira', time: 'Fechado', closed: true },
  ];

  return (
    <section id="localizacao" className="py-24 bg-[#FFFCF5] relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Information Column (Left) */}
          <div className="space-y-12 order-2 lg:order-1">
            <div>
              <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Venha nos visitar</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-chocolate-900 mb-6">
                Onde encontrar essas delícias?
              </h2>
              <p className="text-lg text-chocolate-800/80 leading-relaxed max-w-md">
                Estamos esperando por você com bolos fresquinhos e aquele cheirinho de café passado na hora.
              </p>
            </div>

            <div className="space-y-10">
              {/* Address */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center text-chocolate-900 shadow-[4px_4px_0px_rgba(93,64,55,1)] border-2 border-chocolate-900 transition-transform group-hover:-translate-y-1">
                  <MapPin size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-2xl text-chocolate-900 mb-2">Localização</h3>
                  <p className="text-chocolate-800 text-lg leading-relaxed">
                    Av. Brasil, 1750 - Santo Antonio<br/>
                    Americana - SP, 13465-770
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center text-chocolate-900 shadow-[4px_4px_0px_rgba(93,64,55,1)] border-2 border-chocolate-900 transition-transform group-hover:-translate-y-1">
                  <Clock size={28} strokeWidth={2.5} />
                </div>
                <div className="w-full max-w-md">
                  <div className="mb-4">
                    <h3 className="font-serif font-bold text-2xl text-chocolate-900 leading-none">Horário de Funcionamento</h3>
                    <span className="text-sm font-medium text-chocolate-800/60 block mt-1">loja de Americana - SP</span>
                  </div>
                  <ul className="space-y-2">
                    {hours.map((item) => (
                      <li key={item.day} className={`flex justify-between items-center text-base border-b border-chocolate-900/10 pb-1 ${item.closed ? 'opacity-60' : 'text-chocolate-800'}`}>
                        <span className="font-medium">{item.day}</span>
                        <span className={item.closed ? 'font-medium' : 'font-bold text-chocolate-900'}>{item.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contacts Buttons */}
              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://api.whatsapp.com/send/?phone=5519997264036&text=Ol%C3%A1%21+Tenho+interesse+em+saber+mais+informa%C3%A7%C3%B5es+sobre+o+Clube+do+Bolo+da+Sil+%26+Sil&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-chocolate-900 px-6 py-4 rounded-xl transition-all shadow-md font-bold text-lg border-2 border-transparent hover:border-chocolate-900/10"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>

                <a 
                  href="https://www.instagram.com/bolos_silesil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-chocolate-900 px-6 py-4 rounded-xl transition-all shadow-md font-bold text-lg border-2 border-transparent hover:border-chocolate-900/10"
                >
                  <Instagram size={24} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map Column (Right) */}
          <div className="order-1 lg:order-2 h-[400px] lg:h-[700px] w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-[8px] border-white relative z-10 rotate-1 lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.355557037758!2d-47.345974299999995!3d-22.7521825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89bcbbc434993%3A0xb85189fce07da1c5!2sSil%20%26%20Sil%20Bolos%20e%20Doces!5e0!3m2!1spt-BR!2sbr!4v1764687044179!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="Localização Sil & Sil Bolos"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};