"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrideGroomSection() {
  return (
    <section className="py-20 px-6 bg-sandalwood/20 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-8 justify-center">
        
        {/* Groom */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          whileHover={{ y: -10, boxShadow: "0 20px 40px -15px rgba(90,24,27,0.3)" }}
          className="flex-1 flex flex-col items-center text-center bg-cream p-8 rounded-t-full rounded-b-lg shadow-[0_10px_40px_-15px_rgba(90,24,27,0.15)] border border-gold/20 transition-all duration-300 group"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 rounded-full overflow-hidden border-4 border-gold/30 shadow-inner group-hover:border-gold transition-colors duration-500">
            <motion.div 
              className="w-full h-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image 
                src="/groom.png" 
                alt="Groom" 
                fill 
                className="object-cover"
              />
            </motion.div>
          </div>
          <h3 className="font-serif text-3xl text-maroon mb-2 group-hover:text-gold transition-colors">Rahul Varma</h3>
          <p className="font-sans text-sm text-gold tracking-widest uppercase mb-4">The Groom</p>
          <div className="w-12 h-[1px] bg-gold/50 mb-4" />
          <p className="font-sans text-maroon-dark/70 text-sm leading-relaxed">
            Son of Mr. R. Varma &amp; Mrs. S. Varma<br/>
            Kochi, Kerala
          </p>
        </motion.div>

        {/* Center Divider / Ampersand */}
        <div className="hidden md:flex items-center justify-center -mx-4 z-10">
          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 rounded-full bg-gold text-cream flex items-center justify-center font-serif text-3xl shadow-[0_0_20px_rgba(197,160,89,0.5)] border-4 border-cream"
          >
            &amp;
          </motion.div>
        </div>

        {/* Bride */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          whileHover={{ y: -10, boxShadow: "0 20px 40px -15px rgba(90,24,27,0.3)" }}
          className="flex-1 flex flex-col items-center text-center bg-cream p-8 rounded-t-full rounded-b-lg shadow-[0_10px_40px_-15px_rgba(90,24,27,0.15)] border border-gold/20 transition-all duration-300 group"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 rounded-full overflow-hidden border-4 border-gold/30 shadow-inner group-hover:border-gold transition-colors duration-500">
            <motion.div 
              className="w-full h-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image 
                src="/bride.png" 
                alt="Bride" 
                fill 
                className="object-cover"
              />
            </motion.div>
          </div>
          <h3 className="font-serif text-3xl text-maroon mb-2 group-hover:text-gold transition-colors">Anjali Menon</h3>
          <p className="font-sans text-sm text-gold tracking-widest uppercase mb-4">The Bride</p>
          <div className="w-12 h-[1px] bg-gold/50 mb-4" />
          <p className="font-sans text-maroon-dark/70 text-sm leading-relaxed">
            Daughter of Mr. K. Menon &amp; Mrs. L. Menon<br/>
            Trivandrum, Kerala
          </p>
        </motion.div>

      </div>
    </section>
  );
}
