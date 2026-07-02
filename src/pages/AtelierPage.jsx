import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Link yapısını buraya enjekte ettik
import AtelierProductCard from '../components/AtelierCard'; 

function AtelierPage() {
  const products = [
    { id: 1, name: "The Rhodes Blazer", price: "$45.00", description: "Güneye özgü hafif keten dokusuyla, günlük liman yürüyüşleri için ideal ceket.", images: ["jacket.png"] },
    { id: 2, name: "The Valentine Tweed", price: "$32.50", description: "Serin dağ havasına dayanıklı, İskoç tüvit kumaşından üretilmiş zamansız yelek.", images: ["tweed.png"] },
    { id: 3, name: "The Meridian Trouser", price: "$28.00", description: "İtalyan kesim düz paça, yüksek kaliteli pamuklu kumaşıyla asalet sunan pantolon.", images: ["trousers.png"] },
    { id: 4, name: "Braithwaite Hat", price: "$65.00", description: "Köklü aile olan Braithwaite koleksiyonuna bir göz atın. Sadece Saint Denis'ye özel şubemizde.", images: ["bhat.png"] },
    { id: 5, name: "The Lemoyne Silk Shirt", price: "$22.00", description: "Saf Fransız ipeğinden üretilmiş, manşetleri sedef düğmeli günlük lüks gömlek.", images: ["ftweed.png"] },
    { id: 6, name: "The Emerald Combine", price: "$30.00", description: "Kombininizi siz oluşturun, de Coursey atölyesinde zarafetle dikelim.", images: ["kombin.png"] }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-stone-100 pt-40 pb-32 px-16 md:px-24 relative selection:bg-amber-600/30">
      
      <div className="absolute top-20 right-12 font-(--font-luxury-serif) text-[12rem] md:text-[20rem] text-stone-900/15 select-none pointer-events-none tracking-tighter z-0">
        1899
      </div>

      <div className="max-w-7xl mx-auto border-b border-stone-900/60 pb-12 mb-24 text-left flex flex-col md:flex-row md:items-end md:justify-between gap-8 relative z-10">
        <div>
          <span className="font-(--font-luxury-sans) text-[10px] tracking-[0.5em] uppercase  block mb-3">
            PRÊT-À-PORTER / GÜNLÜK SERİ
          </span>
          <h1 className="font-(--font-luxury-serif) text-4xl md:text-6xl tracking-wide uppercase text-stone-100">
            Atelier De Coursey
          </h1>
        </div>
        <p className="font-(--font-luxury-sans) text-xs text-stone-500 tracking-widest uppercase max-w-sm md:text-right leading-relaxed">
          Saint Denis sokaklarının aristokrat ritmine uyum sağlayan, el işçiliği günlük gardırop seçkisi.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24 max-w-7xl mx-auto relative z-10">
        {products.map((product, index) => (
          <AtelierProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      <div className="w-full flex justify-center mt-32 relative z-10">
        <div className="w-full max-w-7xl border-t border-stone-900/80 pt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-left">
          <div>
            <h4 className="font-(--font-luxury-serif) text-xl text-stone-200 uppercase mb-2">Aksesuar & Şapka Reyonu</h4>
            <p className="font-(--font-luxury-sans) text-xs text-stone-500 max-w-md tracking-wide">Fötr şapkalar ve köstekli saatler ana dükkandadır. Satış danışmanıyla görüşün.</p>
          </div>
          
          
          <Link
            to="/booking" 
            className="font-(--font-luxury-sans) text-[11px] tracking-[0.2em] uppercase text-stone-300 border-b border-stone-500 pb-1 hover:text-amber-500 hover:border-amber-500 transition-colors inline-block"
          >
            Özel Atölye Randevusu Ayarla
          </Link>
        </div>
      </div>

    </div>
  );
}

export default AtelierPage;