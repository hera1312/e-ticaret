import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import partyImage from '../assets/arthurParty.png';

function Heritage() {
  return (
    <section id="heritage" className="py-32 px-16 md:px-24 bg-neutral-900 border-t border-stone-800/20 text-stone-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:col-span-7 flex flex-col items-start text-left"
        >
          <span className="font-(--font-luxury-sans) text-[11px] tracking-[0.4em] text-amber-600 mb-4">
            La Soirée: Parti Şıklığının Zirvesi
          </span>
          
          <h2 className="font-(--font-luxury-serif) text-3xl md:text-5xl tracking-wide text-stone-100 mb-8 leading-tight">
            Parti Özel Koleksiyonumuz İçin Randevu Alın
          </h2>
          
          <p className="font-(--font-luxury-sans) text-sm md:text-base text-stone-400 tracking-wider leading-relaxed mb-6">
           Henri Limieux'nün görkemli partisinde size özel La Soirée koleksiyonunu, modanın kalbi Paris'ten getirdiğimiz kumaşlarla sizin kalıbınıza göre yaratıyoruz. 
          </p>

          <p className="font-(--font-luxury-sans) text-xs md:text-sm text-stone-500 tracking-wider leading-relaxed mb-10 italic border-l border-stone-700 pl-4">
            "Moda satın aldığındır, stil ise onunla ne yaptığınızdır."
          </p>

          <Link
          to="/booking"
          className="font-(--font-luxury-sans) text-[10px] tracking-[0.2em] uppercase text-stone-400 border-b border-stone-800 pb-1 hover:text-amber-500 hover:border-amber-500 transition-all duration-300 inline-block"
          >
          Randevu Sayfamızı Ziyaret Edin →
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="md:col-span-5 w-full aspect-4/5 bg-neutral-950 border border-stone-800/40 relative overflow-hidden flex items-center justify-center group"
        >
          <span className="text-[10px] tracking-widest text-stone-600 uppercase group-hover:text-amber-600/70 transition-colors">
          </span>

          <img src={partyImage} alt="Atelier & Craftsmanship" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-stone-800" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-stone-800" />
        </motion.div>

      </div>
    </section>
  );
}

export default Heritage;