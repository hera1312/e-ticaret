import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import lamourImage from '../assets/lamour.png';

function Booking() {
  return (
    <section className="relative w-full h-150 md:h-175 overflow-hidden bg-neutral-950">
      
      <img 
        src={lamourImage} 
        alt="Charles de Coursey Atelier" 
        className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/80 backdrop-blur-[1px]" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
        <span className="font-(--font-luxury-sans) text-[10px] md:text-[11px] tracking-[0.4em] uppercase text-amber-500/80 mb-4 block">
          Haute Couture Experience
        </span>
        <h2 className="font-(--font-luxury-serif) text-3xl md:text-5xl text-stone-100 tracking-[0.15em] uppercase max-w-3xl leading-relaxed mb-6">
          L'AMOUR. 
        </h2>
        <p className="font-(--font-luxury-sans) text-xs md:text-sm text-stone-400 tracking-[0.2em] max-w-xl leading-loose mb-10">
          Ruhlarınızın uyumunu sizin için tasarlıyoruz. Atölyemizdeki koleksiyonlara bir göz atın. 
        </p>
        <motion.div
          whileHover={{ backgroundColor: "rgb(245, 245, 244)" }}
          transition={{ duration: 0.3 }}
          className="border border-stone-100/30 rounded-none overflow-hidden"
        >
          <Link
            to="/atelier" 
            className="inline-block font-(--font-luxury-sans) text-[11px] uppercase px-10 py-4 text-stone-100 hover:text-neutral-950 transition-all duration-300 tracking-[0.3em] hover:tracking-normal"
          >
            Atelier
          </Link>
        </motion.div>

      </div>

      
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-stone-800/50 to-transparent" />
      
    </section>
  );
}

export default Booking;