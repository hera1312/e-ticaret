import React from 'react';
import { Link } from 'react-router-dom';

export default function AtelierProductCard({ product, index }) {
  return (
    <div className="flex flex-col text-left group">
      
      <div className="relative aspect-3/4 w-full bg-stone-900 border border-stone-800/40 overflow-hidden flex items-center justify-center mb-6">
        <img 
          src={`/images/${product.images[0]}`} 
          alt={product.name} 
          className="w-full h-full object-cover opacity-80 group-hover:scale-102 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-neutral-950/10 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="font-(--font-luxury-serif) text-lg tracking-wide text-stone-200 uppercase">
          {product.name}
        </h3>
        <span className="font-(--font-luxury-sans) text-xs text-amber-600/80 tracking-wider">
          {product.price}
        </span>
      </div>

      <p className="font-(--font-luxury-sans) text-[13px] text-stone-500 tracking-wide leading-relaxed mb-6 min-h-10">
        {product.description}
      </p>

      <div className="mt-auto pt-2">
        <Link
          to="/booking"
          className="font-(--font-luxury-sans) text-[10px] tracking-[0.2em] uppercase text-stone-400 border-b border-stone-800 pb-1 hover:text-amber-500 hover:border-amber-500 transition-all duration-300 inline-block"
        >
          Bu Parça İçin Prova Ayarla →
        </Link>
      </div>
    </div>
  );
}