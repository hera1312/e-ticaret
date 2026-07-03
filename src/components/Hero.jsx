import React, { useState } from 'react';
import arthurBg from '../assets/background.png'; 

function Hero() {

  const slides = [
    {
      image: arthurBg,
      title: "La Soirée",
      subtitle: "Saint Denis Haute Couture '1899",
      description: "Gelecek parti için kontenjanda yerinizi alın, özel dikimle akşam şıklığınızı konuşturun."
    }
  ];

  const [current, setCurrent] = useState(0);

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden bg-neutral-950">
      
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/20 to-neutral-950/40 z-10" />
            <img
              src={slide.image}
              alt="C. De Coursey Campaign"
              className="h-full w-full object-cover object-[20px_center] opacity-80"
            />

            <div className="absolute bottom-20 left-12 z-20 max-w-md text-stone-200">
              <span className="font-(--font-luxury-sans) text-[10px] tracking-[0.3em] uppercase block mb-3 text-stone-400">
                {slide.subtitle}
              </span>
              <h1 className="font-(--font-luxury-serif) text-3xl md:text-4xl tracking-wide uppercase mb-4 leading-tight text-stone-100">
                {slide.title}
              </h1>
              <p className="font-(--font-luxury-sans)cking-wider text-stone-400 font-light leading-relaxed">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <div className="absolute bottom-10 right-12 z-20 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-0.5 transition-all duration-500 ${
                idx === current ? 'w-8 bg-stone-100' : 'w-3 bg-stone-600'
              }`}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default Hero;