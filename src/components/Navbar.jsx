import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: 'La Soirée', path: '/la-soiree' },
    { name: 'Atelier', path: '/atelier' },
    { name: 'Heritage', path: '/heritage' },
    { name: 'Booking', path: '/booking' }
  ];


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
      className={`fixed top-0 left-0 w-full z-50 px-4 md:px-16 transition-all duration-500 ease-in-out flex justify-between items-center ${
        isScrolled || isOpen
          ? 'bg-neutral-950/98 shadow-lg border-b border-stone-900/50 py-4' 
          : 'bg-neutral-950/40 backdrop-blur-xs border-b border-stone-900/20 py-5'
      }`}
    >
      

      <div className="flex md:hidden items-center justify-start w-16">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-stone-300 hover:text-amber-500 transition-colors text-lg focus:outline-none"
        >
          {isOpen ? '×' : '☰'}
        </button>
      </div>


      <div className="flex-1 md:flex-none text-center md:text-left">
        <Link 
          to="/" 
          onClick={() => setIsOpen(false)}
          className="font-(--font-luxury-serif) text-[12px] sm:text-sm md:text-l tracking-[0.3em] uppercase text-stone-100 hover:text-amber-500 transition-colors duration-300"
        >
          Charles de Coursey
        </Link>
      </div>


      <div className="w-16 md:hidden" />

      <ul className="hidden md:flex items-center gap-8 md:gap-12">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link 
              to={link.path} 
              className="font-(--font-luxury-sans) text-[11px] tracking-[0.25em] uppercase text-stone-400 hover:text-stone-100 transition-colors duration-300"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>


      <div className={`fixed inset-0 bg-neutral-950/98 transition-all duration-500 ease-in-out flex flex-col justify-center items-center gap-8 z-40 md:hidden ${
        isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <ul className="flex flex-col items-center gap-8 text-center">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                onClick={() => setIsOpen(false)} 
                className="font-(--font-luxury-serif) text-xl tracking-[0.3em] uppercase text-stone-400 hover:text-stone-100 transition-colors duration-300 block py-2"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;