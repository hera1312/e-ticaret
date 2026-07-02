import React from 'react';

export default function Button({ text, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative inline-block overflow-hidden rounded-xs bg-transparent border border-button-border/30 cursor-pointer group transition-all duration-500 hover:border-transparent ${className}`}
    >
      <div className="absolute top-0 right-0 h-0.5 w-full bg-linear-to-r from-transparent via-line-pearl to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-star-top" />
      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-transparent via-line-violet to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-star-bottom" />
      <div className="relative font-(--font-luxury) text-[12px] tracking-[0.3em] uppercase text-stone-200 bg-transparent px-7 py-3 transition-colors duration-300 group-hover:text-amber-500 whitespace-nowrap text-center">
        {text}
      </div>
    </button>
  );
}