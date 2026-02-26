import React, { useState } from 'react';
import { ChevronDown, Phone } from './ui/Icons';

export const FAQ: React.FC = () => {
  return (
    <section id="duvidas" className="py-24 bg-[#FFFCF5] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#3E2723 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-chocolate-900">
            Perguntas Frequentes
          </h2>
          <p className="text-chocolate-800/60 mt-4">Tire suas dúvidas e venha fazer parte do clube</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            <AccordionItem 
              question="E se eu não gostar de algum sabor?"
              answer="Sem problema! Basta nos chamar no WhatsApp pra gente tirar esse bolo das suas entregas."
              isOpenDefault={true}
            />
            <AccordionItem 
              question="Os bolos são frescos?"
              answer="Sim, todos os bolos são feitos artesanalmente e entregues fresquinhos."
            />
            <AccordionItem 
              question="Caso eu não esteja em casa na hora da entrega?"
              answer={
                <>
                  Sem problema, você pode fazer sua retirada direto em uma de nossas lojas físicas!
                  <br/><br/>
                  <strong className="text-chocolate-900">Unidade de Americana - SP:</strong> Av. Brasil, 1750 - Santo Antonio, Americana - SP, 13465-770
                  <br/>
                  <strong className="text-chocolate-900">Unidade de Santa Bárbara D'Oeste - SP:</strong> R. Gabriel Pereira de Brito, 46 - Jardim Dona Regina, Santa Bárbara d'Oeste - SP, 13455-703
                </>
              }
            />
            <AccordionItem 
              question="E se eu quiser cancelar?"
              answer="Basta nos enviar uma mensagem no WhatsApp. Sem burocracia!"
            />
          </div>

          {/* Right Column: Visual/Support */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-chocolate-900 w-full max-w-[500px] aspect-square">
              <img 
                src="https://i.postimg.cc/4xMNX9Y6/Sem-ti-tulo-2252.jpg" 
                alt="Bolo Sil & Sil"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle gradient overlay to match aesthetic */}
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/20 to-transparent pointer-events-none" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full z-[-1] opacity-50 blur-xl animate-pulse" />
          </div>

        </div>
      </div>
    </section>
  );
};

const AccordionItem: React.FC<{question: string, answer: React.ReactNode, isOpenDefault?: boolean}> = ({ question, answer, isOpenDefault = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className={`rounded-xl transition-all duration-300 border ${isOpen ? 'bg-white shadow-lg border-amber-300' : 'bg-white border-amber-200 hover:border-amber-300'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-chocolate-900' : 'text-chocolate-800'}`}>{question}</span>
        <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-amber-100 text-chocolate-900' : 'bg-amber-50 text-chocolate-400'}`}>
          <ChevronDown 
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            size={20}
          />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 pt-0 text-chocolate-800/80 leading-relaxed border-t border-amber-50/50 mt-2">
          {answer}
        </div>
      </div>
    </div>
  );
};