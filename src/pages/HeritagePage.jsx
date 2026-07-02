import React from 'react';
import { motion } from 'framer-motion';

function HeritagePage() {
  const timelineData = [
    {
      year: "1879",
      title: "Paris'te İlk Çıraklık",
      description: "Charles, lüksün kalbi Paris salonlarında ipek dokuma ve Fransız kesim tekniklerinin sırlarını üstatlarından öğrendi."
    },
    {
      year: "1886",
      title: "Saint Denis'ye İlk Adım",
      description: "Yeni Dünyanın en kozmopolit şehrine göç ederek, bataklığın ve zenginliğin tam ortasında ilk gizli atölyesini kurdu."
    },
    {
      year: "1893",
      title: "Belediye Başkanı Daveti",
      description: "Şehir elitlerinin vazgeçilmezi haline gelen Maison de Coursey, valilik ve belediye balolarının resmi terzisi ilan edildi."
    },
    {
      year: "1899",
      title: "La Soirée Lansmanı",
      description: "Charles, silahların gölgesindeki bu vahşi coğrafyaya ipek ve kadifeyle yazılmış en radikal gece koleksiyonunu sundu."
    }
  ];

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-8 md:px-24 py-32 overflow-hidden selection:bg-amber-600/30 bg-neutral-950">
    
      <div 
        className="absolute inset-0 bg-stone-950 bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{ 
          backgroundImage: `url('/src/assets/local.png')`, 
          opacity: 0.35 
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-neutral-950/90 via-neutral-950/70 to-neutral-950/90 z-0 pointer-events-none" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(156,140,185,0.05)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        
        <div className="lg:col-span-7 text-left space-y-12">
          
          <div className="mb-16">
            <span className="font-(--font-luxury-sans) text-[10px] tracking-[0.5em] uppercase text-amber-600 block mb-3">
              MİRAS VE ASALET
            </span>
            <h1 className="font-(--font-luxury-serif) text-4xl md:text-5xl tracking-wide uppercase text-stone-100">
              Charles de Coursey’nin Hikayesi
            </h1>
            <div className="w-16 h-px bg-stone-800 mt-6" />
          </div>

          
          <div className="space-y-10 border-l border-stone-900 pl-6 ml-2">
            {timelineData.map((item, index) => (
              <motion.article 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                className="relative group"
              >
                
                <div className="absolute -left-7.75 top-1 bg-neutral-950 text-[10px] text-stone-600 group-hover:text-amber-500 transition-colors duration-300 pr-1">
                  ⚜
                </div>

                
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-(--font-luxury-serif) text-xl tracking-wider text-amber-600/90">
                    {item.year}
                  </span>
                  <h3 className="font-(--font-luxury-serif) text-[18px] tracking-wide text-stone-200 uppercase">
                    — {item.title}
                  </h3>
                </div>

                
                <p className="font-(--font-luxury-sans) text-[15px] text-stone-400 tracking-wide leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>

        </div>

        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="lg:col-span-5 w-full flex flex-col items-center lg:items-end"
        >

          <div className="relative aspect-3/4 w-full bg-stone-900 border border-stone-800/40 overflow-hidden flex items-center justify-center group shadow-2xl">
              <img src="/src/assets/cdc.png"
                alt="Charles de Coursey"
                className="w-full h-full object-cover opacity-80 group-hover:scale-102 transition-transform duration-700"
              />
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-amber-600/20" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-amber-600/20" />
            <div className="absolute inset-0 bg-neutral-950/10 pointer-events-none" />
          </div>

          
          <span className="font-(--font-luxury-sans) text-[9px] tracking-[0.4em] uppercase text-white mt-4 block text-right w-full pr-1">
            Charles de Coursey, Saint Denis (1899)
          </span>
        </motion.div>

      </div>

    </div>
  );
}

export default HeritagePage;