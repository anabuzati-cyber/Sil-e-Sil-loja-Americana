import React from 'react';
import { Check } from './ui/Icons';

export const Plans: React.FC = () => {
  return (
    <section id="planos" className="py-24 bg-[#FFF1E6] relative">
      {/* Decorative background shapes */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Nossas Assinaturas</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-chocolate-900 mt-3 mb-4">
            Assine hoje e receba seu primeiro bolo fresquinho ainda esta semana!
          </h2>
          <p className="text-xl text-chocolate-800/80">
            Escolha seu plano e deixe seus dias mais gostosos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {/* Card 1 */}
          <PlanCard 
            title="Plano Prata"
            price="45,90"
            link="https://pagamento.pagbank.com.br/pagamento?code=c07383cb-db17-4337-af5a-b5f77ffe2358&t=3b55ee41-d9f6-4b7b-8c10-d7c1ec5a4b36"
            items={[
              "2 Bolos Simples no mês",
              "Entrega na Quarta ou Sexta"
            ]}
            flavors="Milho com cream cheese, Cenoura com ganache, Laranja com limão, Maçã com nozes, Iogurte com coco, Fubá cremoso, Banana com canela, Fubá, Laranja, Iogurte, Fubá com erva doce, Fubá com goiabada, Maçã com canela, Formigueiro, Chocolate e muitos outros."
          />

          {/* Card 2 (Highlight) */}
          <PlanCard 
            title="Plano Gold"
            price="89,90"
            link="https://pagamento.pagbank.com.br/pagamento?code=925d3f09-7913-4351-8446-c795ce40e12f&t=26ad02ef-7d69-4003-ba5a-425b16bea447"
            highlight="Mais Pedido"
            items={[
              "4 Bolos Simples no mês",
              "Entrega na Quarta ou Sexta"
            ]}
            flavors="Milho com cream cheese, Cenoura com ganache, Laranja com limão, Maçã com nozes, Iogurte com coco, Fubá cremoso, Banana com canela, Fubá, Laranja, Iogurte, Fubá com erva doce, Fubá com goiabada, Maçã com canela, Formigueiro, Chocolate e muitos outros."
            isFeatured
          />

          {/* Card 3 */}
          <PlanCard 
            title="Plano Platina"
            price="125,90"
            link="https://pagamento.pagbank.com.br/pagamento?code=7c0b473e-0e9f-4992-897e-4de4fe35c34d&t=48c7fd29-79b4-492e-b6e4-9d3a7d40bf02xx"
            items={[
              "3 Bolos Simples + 1 Bolo Recheado no mês",
              "Entrega na Quarta ou Sexta"
            ]}
            flavors="Milho com cream cheese, Cenoura com ganache, Laranja com limão, Maçã com nozes, Iogurte com coco, Fubá cremoso, Banana com canela, Fubá, Laranja, Iogurte, Fubá com erva doce, Fubá com goiabada, Maçã com canela, Formigueiro, Chocolate, Prestígio, Brigadeiro, Ninho, Ninho com morango, Red Velvet, Bem-casado, Charge e muitos outros."
          />
        </div>
      </div>
    </section>
  );
};

interface PlanCardProps {
  title: string;
  price: string;
  items: string[];
  flavors: string;
  link: string;
  isFeatured?: boolean;
  highlight?: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ title, price, items, flavors, link, isFeatured, highlight }) => {
  // Split flavors string into list
  const flavorList = flavors.split(',').map(f => f.trim()).filter(f => f.length > 0);

  return (
    <div className={`relative bg-white rounded-3xl p-8 border ${isFeatured ? 'border-yellow-400 shadow-2xl scale-100 md:scale-105 z-10' : 'border-amber-100 shadow-xl'} flex flex-col h-full`}>
      
      {isFeatured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-chocolate-900 font-bold px-4 py-1 rounded-full text-sm shadow-md whitespace-nowrap">
          {highlight}
        </div>
      )}

      <div className="mb-6 border-b border-amber-50 pb-6">
        <h3 className="font-serif text-2xl font-bold text-chocolate-900">{title}</h3>
        <div className="flex items-end mt-4">
          <span className="text-sm text-chocolate-800 mb-1 font-medium">R$</span>
          <span className="text-4xl font-bold text-chocolate-900 leading-none mx-1">{price}</span>
          <span className="text-sm text-chocolate-800/60 mb-1">/mês</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-chocolate-800">
            <div className="bg-green-100 rounded-full p-1 mt-0.5">
              <Check size={14} className="text-green-600" />
            </div>
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </ul>

      <div className="bg-amber-50 rounded-xl p-5 mb-8 flex-grow flex flex-col min-h-[180px]">
        <p className="text-xs font-bold text-amber-700 mb-3 uppercase tracking-wide">Sabores Inclusos:</p>
        <ul className="text-xs text-chocolate-800/80 leading-5 max-h-48 overflow-y-auto scrollbar-thin pr-2 space-y-2">
          {flavorList.map((flavor, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check size={12} className="text-chocolate-600 mt-0.5 flex-shrink-0" />
              <span>{flavor}</span>
            </li>
          ))}
        </ul>
      </div>

      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-4 rounded-xl font-bold text-center transition-all mt-auto ${
          isFeatured 
            ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-chocolate-900 hover:shadow-lg hover:brightness-105' 
            : 'bg-chocolate-800 text-white hover:bg-chocolate-900'
        }`}
      >
        Assine Agora!
      </a>
    </div>
  );
};