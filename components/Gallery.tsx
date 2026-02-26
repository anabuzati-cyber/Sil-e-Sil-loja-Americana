
import React from 'react';

export const Gallery: React.FC = () => {
  // Row 1 Images
  const mediaItems = [
    { type: 'image', src: "https://i.postimg.cc/4xMNX9Y6/Sem-ti-tulo-2252.jpg", label: "Bolo 2" },
    { type: 'image', src: "https://i.postimg.cc/sDH3Jh4z/Sem-ti-tulo-2242.jpg", label: "Bolo 3" },
    { type: 'image', src: "https://i.postimg.cc/bJPPvHp7/Sem-ti-tulo-2218.jpg", label: "Bolo 4" },
    { type: 'image', src: "https://i.postimg.cc/5yvkQDg4/Sem-ti-tulo-2487.jpg", label: "Bolo 6" },
  ];

  // Row 2 Images
  const mediaItems2 = [
    { type: 'image', src: "https://i.postimg.cc/7ZqQbs20/Sem-ti-tulo-2003.jpg", label: "Bolo 7" },
    { type: 'image', src: "https://i.postimg.cc/6Q3jf8zJ/Sem-ti-tulo-2049.jpg", label: "Bolo 8" },
    { type: 'image', src: "https://i.postimg.cc/MKS9rPtY/Sem-ti-tulo-2327.jpg", label: "Bolo 9" },
    { type: 'image', src: "https://i.postimg.cc/d0pBR4Lm/Sem-ti-tulo-2129.jpg", label: "Bolo 10" },
    { type: 'image', src: "https://i.postimg.cc/bN9mXxB2/Sem-ti-tulo-2109.jpg", label: "Bolo 11" }
  ];

  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send/?phone=5519997264036&text=Ol%C3%A1%21+Gostaria+de+fazer+um+pedido', '_blank');
  };

  return (
    <section id="galeria" className="py-24 bg-orange-50 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-chocolate-900 mb-4">
            Bolos fofinhos, cheirosos e que derretem na boca!
          </h2>
          <p className="text-xl text-chocolate-800 font-light max-w-2xl mx-auto">
            Veja um pouquinho da nossa produção!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Vertical Video Placeholder */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
             <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-chocolate-100 mx-auto">
               <video 
                 src="https://i.imgur.com/WipIMrE.mp4" 
                 className="absolute inset-0 w-full h-full object-cover"
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
               />
               <div className="absolute inset-0 bg-black/10 pointer-events-none" />
             </div>
          </div>

          {/* Right Side: Marquees */}
          <div className="lg:col-span-8 overflow-hidden">
            <div className="space-y-6">
              {/* Row 1 */}
              <div className="flex gap-4 md:gap-6 w-max animate-slide hover:pause-animation">
                {mediaItems.concat(mediaItems).map((item, idx) => (
                  <GalleryItem key={`r1-${idx}`} item={item} />
                ))}
              </div>

              {/* Row 2 */}
              <div className="flex gap-4 md:gap-6 w-max animate-slide-reverse hover:pause-animation">
                {mediaItems2.concat(mediaItems2).map((item, idx) => (
                  <GalleryItem key={`r2-${idx}`} item={item} />
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="text-center mt-16">
          <button 
            onClick={openWhatsApp}
            className="bg-yellow-400 hover:bg-yellow-500 text-chocolate-900 px-12 py-5 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2 mx-auto text-lg"
          >
            Peça seu bolo fresquinho
          </button>
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-orange-300 rounded-full blur-3xl opacity-30 pointer-events-none" />
    </section>
  );
};

interface MediaItem {
  type: string;
  src: string;
  label: string;
}

const GalleryItem: React.FC<{item: MediaItem}> = ({ item }) => (
  <div className="relative group rounded-2xl overflow-hidden shadow-lg h-48 w-48 md:h-64 md:w-64 flex-shrink-0 cursor-pointer border-2 border-white">
    {item.type === 'video' ? (
      <video 
        src={item.src} 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    ) : (
      <img 
        src={item.src} 
        alt={item.label} 
        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
      />
    )}
    
    {item.type === 'video' && (
      <div className="absolute top-4 right-4 w-6 h-6 bg-white/30 backdrop-blur rounded-full flex items-center justify-center">
        <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent ml-0.5" />
      </div>
    )}
  </div>
);