import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 px-8 md:px-16 transition-all duration-500 ease-in-out flex justify-between items-center ${
        isScrolled 
          ? 'bg-neutral-950/95 shadow-lg border-b border-stone-900/50 py-4' 
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <Link 
        to="/" 
        className="font-(--font-luxury-serif) text-l tracking-[0.3em] uppercase text-stone-100 hover:text-amber-500 transition-colors duration-300"
      >
        Charles de Coursey
      </Link>

      <ul className="flex items-center gap-8 md:gap-12">
        <li>
          <Link 
            to="/la-soiree" 
            className="font-(--font-luxury-sans) text-[11px] tracking-[0.25em] uppercase text-stone-400 hover:text-stone-100 transition-colors duration-300"
          >
            La Soirée
          </Link>
        </li>
        <li>
          <Link 
            to="/atelier" 
            className="font-(--font-luxury-sans) text-[11px] tracking-[0.25em] uppercase text-stone-400 hover:text-stone-100 transition-colors duration-300"
          >
            Atelier
          </Link>
        </li>
        <li>
          <Link 
            to="/heritage" 
            className="font-(--font-luxury-sans) text-[11px] tracking-[0.25em] uppercase text-stone-400 hover:text-stone-100 transition-colors duration-300"
          >
            Heritage
          </Link>
        </li>
        <li>
          <Link 
            to="/booking" 
            className="font-(--font-luxury-sans) text-[11px] tracking-[0.25em] uppercase text-stone-400 hover:text-stone-100 transition-colors duration-300"
          >
            Booking
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;