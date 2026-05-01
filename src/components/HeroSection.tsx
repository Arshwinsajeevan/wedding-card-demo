"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-maroon-dark">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <Image
          src="/hero.png"
          alt="Couple"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark/60 via-maroon-dark/40 to-maroon-dark/90" />
      <div className="absolute inset-0 bg-black/20" /> {/* Extra darkening for readability */}

      <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="w-full"
        >
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.5, delay: 1 }}
            className="font-sans text-gold-light uppercase text-sm md:text-base mb-6 font-medium drop-shadow-md"
          >
            We are getting married
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] font-medium"
          >
            Rahul <motion.span 
              animate={{ color: ["#c5a059", "#dfc282", "#c5a059"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-gold inline-block mx-2 drop-shadow-[0_2px_5px_rgba(0,0,0,0.3)]"
            >&amp;</motion.span> Anjali
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="flex items-center justify-center gap-4 mt-8 drop-shadow-md"
          >
            <div className="h-[2px] w-12 md:w-24 bg-gradient-to-r from-transparent to-gold/90" />
            <p className="font-serif text-xl md:text-2xl text-cream tracking-[0.2em] font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              25 • 08 • 2026
            </p>
            <div className="h-[2px] w-12 md:w-24 bg-gradient-to-l from-transparent to-gold/90" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="mt-20 flex flex-col items-center justify-center"
          >
            <motion.span 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gold-light/80 text-xs uppercase tracking-widest mb-4"
            >
              Scroll Down
            </motion.span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-gold/50 via-gold to-transparent relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 w-full h-1/2 bg-white"
                animate={{ top: ["-50%", "150%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
