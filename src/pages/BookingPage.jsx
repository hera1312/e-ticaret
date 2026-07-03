import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import lamourImage from '../assets/lamour.png';

function BookingPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    serviceType: 'Couture', // Couture, Bespoke, Fitting
    interestedProduct: 'General',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName && formData.email) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-6 py-40 overflow-hidden bg-neutral-950">
        <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{
          backgroundImage: `url(${lamourImage})`,
          opacity: 0.15
        }}
        
        />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(156,140,185,0.07)_0%,transparent_60%)] pointer-events-none" />
    
      <div className="absolute bottom-12 right-12 font-(--font-luxury-serif) text-[6rem] md:text-[10rem] text-stone-900/20 select-none pointer-events-none tracking-tighter z-0">
        1899
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            
            <motion.div
              key="booking-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-neutral-950/60 border border-stone-900/80 p-8 md:p-12 backdrop-blur-xl shadow-2xl relative text-left"
            >
             
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-stone-800/40" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-stone-800/40" />

              <div className="text-center mb-10">
                <span className="font-(--font-luxury-sans) text-[9px] tracking-[0.5em] uppercase text-amber-600 block mb-3">
                  ATELIER DE COURSEY • ATÖLYE RANDEVUSU
                </span>
                <h1 className="font-(--font-luxury-serif) text-3xl md:text-4xl tracking-widest text-stone-100 uppercase mb-4">
                  Ölçü & Sipariş Formu
                </h1>
                <div className="w-12 h-px bg-stone-800 mx-auto mb-4" />
                <p className="font-(--font-luxury-sans) text-xs text-stone-400 tracking-wide leading-relaxed max-w-md mx-auto">
                  Kişisel ölçüm, özel prova veya hazır giyim sipariş takip işlemleriniz için terzihanemizden bir oturum talep edin.
                </p>
              </div>

              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="flex flex-col gap-2">
                  <label className="font-(--font-luxury-sans) text-[10px] tracking-[0.2em] uppercase text-stone-400">
                    Müşteri Unvanı / Adı
                  </label>
                  <input 
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    placeholder="Örn: Bay Arthur Morgan"
                    className="bg-neutral-900/30 border border-stone-900 px-4 py-3 font-(--font-luxury-sans) text-xs tracking-wider text-stone-200 outline-none focus:border-stone-700 transition-colors placeholder-stone-700 rounded-none w-full"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-(--font-luxury-sans) text-[10px] tracking-[0.2em] uppercase text-stone-400">
                    Mühürlü Mektup Adresi (E-posta)
                  </label>
                  <input 
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="isim@adres.com"
                    className="bg-neutral-900/30 border border-stone-900 px-4 py-3 font-(--font-luxury-sans) text-xs tracking-wider text-stone-200 outline-none focus:border-stone-700 transition-colors placeholder-stone-700 rounded-none w-full"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div className="flex flex-col gap-2">
                    <label className="font-(--font-luxury-sans) text-[10px] tracking-[0.2em] uppercase text-stone-400">
                      Oturum Türü
                    </label>
                    <select 
                      value={formData.serviceType}
                      onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                      className="bg-neutral-900/30 border border-stone-900 px-4 py-3 font-(--font-luxury-sans) text-xs tracking-wider text-stone-200 outline-none focus:border-stone-700 transition-colors cursor-pointer appearance-none rounded-none w-full"
                    >
                      <option value="Couture">Özel Dikim (Haute Couture)</option>
                      <option value="Bespoke">Bespoke Ölçü Alımı</option>
                      <option value="Fitting">Katalog Siparişi & Prova</option>
                    </select>
                  </div>

                  
                  <div className="flex flex-col gap-2">
                    <label className="font-(--font-luxury-sans) text-[10px] tracking-[0.2em] uppercase text-stone-400">
                      İlgilenilen Seri / Parça
                    </label>
                    <select 
                      value={formData.interestedProduct}
                      onChange={(e) => setFormData({...formData, interestedProduct: e.target.value})}
                      className="bg-neutral-900/30 border border-stone-900 px-4 py-3 font-(--font-luxury-sans) text-xs tracking-wider text-stone-200 outline-none focus:border-stone-700 transition-colors cursor-pointer appearance-none rounded-none w-full"
                    >
                      <option value="General">Genel Gardırop Seçkisi</option>
                      <option value="Rhodes">The Rhodes Blazer</option>
                      <option value="Valentine">The Valentine Tweed</option>
                      <option value="Meridian">The Meridian Trouser</option>
                    </select>
                  </div>
                </div>

                
                <div className="flex flex-col gap-2">
                  <label className="font-(--font-luxury-sans) text-[10px] tracking-[0.2em] uppercase text-stone-400">
                    Özel Talepleriniz & Kumaş Notları
                  </label>
                  <textarea 
                    rows="4"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    placeholder="Varsa özel astar, düğme tercihleriniz veya ceket ölçülerinizi buraya yazabilirsiniz..."
                    className="bg-neutral-900/30 border border-stone-900 px-4 py-3 font-(--font-luxury-sans) text-xs tracking-wider text-stone-200 outline-none focus:border-stone-700 transition-colors placeholder-stone-800 rounded-none w-full resize-none"
                  />
                </div>

                
                <div className="pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-stone-100 hover:bg-stone-200 text-neutral-950 font-(--font-luxury-sans) text-[11px] tracking-[0.3em] uppercase py-4 transition-colors duration-300 rounded-none cursor-pointer"
                  >
                    Randevu İstasyonu Kilidini Aç
                  </motion.button>
                </div>
              </form>
            </motion.div>
          ) : (
            
           
            <motion.div
              key="booking-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="border border-stone-800 bg-neutral-950 p-10 text-center shadow-2xl relative"
            >
              <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-stone-800/40" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-stone-800/40" />
              
              <span className="text-amber-600 text-xl block mb-4">⚜</span>
              <h3 className="font-(--font-luxury-serif) text-2xl tracking-widest text-stone-100 uppercase mb-4">
                Mektubunuz Mühürlendi
              </h3>
              <p className="font-(--font-luxury-sans) text-xs text-stone-400 tracking-wider leading-relaxed mb-8 max-w-sm mx-auto">
                Sayın **{formData.fullName}**, atölye talebiniz işleme alınmıştır. Terzihanemizin uygunluk saatleri ve onay evrakı **{formData.email}** adresinize en kısa sürede ulaştırılacaktır.
              </p>
              
              <div className="border-t border-stone-900 pt-6">
                <span className="font-(--font-luxury-sans) text-[9px] tracking-[0.6em] uppercase text-stone-500">
                  MAISON DE COURSEY • SAINT DENIS
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}

export default BookingPage;