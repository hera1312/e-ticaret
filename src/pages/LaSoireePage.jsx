import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button.jsx';
import lafemmeImage from '../assets/lafemme.png';
import lhommeImage from '../assets/lhomme.png';

function LaSoireePage() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-stone-100 pt-32 pb-20 px-8 md:px-16 flex flex-col justify-center relative overflow-hidden selection:bg-amber-600/30">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(41,37,36,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto flex flex-col h-full justify-between gap-12">
        
        <div className="text-center">
          <span className="font-(--font-luxury-sans) text-[10px] tracking-[0.5em] uppercase text-amber-600 block mb-3">
            HAUTE COUTURE DUO
          </span>
          <h1 className="font-(--font-luxury-serif) text-3xl md:text-5xl tracking-widest uppercase text-stone-100">
            La Soirée Salonu
          </h1>
          <div className="w-12 h-px bg-stone-800 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 lg:gap-4 items-center relative">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 group flex flex-col"
          >
            <div className="relative aspect-3/4 w-full bg-stone-900 border border-stone-800/40 overflow-hidden flex items-center justify-center">
              <span className="absolute z-10 text-[10px] tracking-[0.3em] text-stone-600 uppercase text-center px-4 group-hover:text-amber-500/70 transition-colors">
              </span>
              <img src={lafemmeImage} alt="La Soirée Femme" className="w-full h-full object-cover opacity-80 group-hover:scale-102 transition-transform duration-700" />
              <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <span className="font-(--font-luxury-serif) text-[18px] tracking-widest uppercase text-stone-300 mt-4 text-left pl-1">
              Femme Collection
            </span>
          </motion.div>

          <div className="lg:col-span-3 flex flex-col items-center justify-center py-8 lg:py-0 z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center space-y-6"
            >
              <span className="text-amber-600/40 text-2xl hidden lg:block">⚜</span>
              
              <Button 
                text="Randevu Oluştur" 
                onClick={() => window.location.href = "/booking"} 
              />
              <p className="font-(--font-luxury-sans) text-[10px] text-stone-500 tracking-widest max-w-45 mx-auto leading-relaxed hidden lg:block">
                İki kutup, tek bir kusursuz ölçü. Çiftlerimiz için özel. Prova salonu için yerinizi ayırtın.
              </p>
            </motion.div>
          </div>

          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 group flex flex-col"
          >
            <div className="relative aspect-3/4 w-full bg-stone-900 border border-stone-800/40 overflow-hidden flex items-center justify-center">
              <img src={lhommeImage} alt="La Soirée Homme" className="w-full h-full object-cover opacity-80 group-hover:scale-102 transition-transform duration-700" /> 
              <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <span className="font-(--font-luxury-serif) text-[18px] tracking-widest uppercase text-stone-300 mt-4 text-right pr-1">
              Homme Collection
            </span>
          </motion.div>

        </div>

        <div className="text-center">
          <span className="font-(--font-luxury-sans) text-[9px] tracking-[0.4em] uppercase text-stone-600">
            MAISON DE COURSEY • SAINT DENIS HAUTE COUTURE 1899
          </span>
        </div>

      </div>
    </div>
  );
}

export default LaSoireePage;