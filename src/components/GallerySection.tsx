"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/gallery_1.png",
  "/gallery_2.png",
  "/gallery_3.png",
  "/gallery_4.png",
];

export default function GallerySection() {
  return (
    <section className="py-24 px-4 md:px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-maroon mb-4">Moments</h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-4" />
          <p className="font-sans text-maroon-dark/70 tracking-widest uppercase text-sm">Glimpses of our journey</p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {}
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 50 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } }
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative rounded-xl overflow-hidden border border-gold/20 shadow-lg group cursor-pointer ${
                index === 0 || index === 3 ? "col-span-2 md:col-span-2 row-span-2 aspect-square md:aspect-[4/3]" : "col-span-1 md:col-span-1 aspect-square"
              }`}
            >
              <Image 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                fill 
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.15]"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/60 via-maroon-dark/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                <div className="w-12 h-12 rounded-full border-2 border-gold/80 flex items-center justify-center bg-maroon/40 backdrop-blur-sm">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
