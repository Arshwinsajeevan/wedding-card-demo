"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function OpeningScreen({ onOpen }: { onOpen: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 1000); // Wait for fade out
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream overflow-hidden"
        >
          {/* Blurred Background Image with pulse/zoom */}
          <motion.div 
            className="absolute inset-0 z-0"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/hero.png"
              alt="Background"
              fill
              className="object-cover opacity-30 blur-sm"
              priority
            />
          </motion.div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="z-10 flex flex-col items-center text-center p-8 md:p-14 border-2 border-gold/40 rounded-xl bg-cream/95 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.2)] relative overflow-hidden max-w-[90vw]"
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[30deg]"
              animate={{ left: ["-100%", "200%"] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
            />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative z-10"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image 
                  src="/motif.png" 
                  alt="Motif" 
                  width={80} 
                  height={80} 
                  className="mb-8 mx-auto opacity-100 drop-shadow-md"
                  style={{ filter: "brightness(0) saturate(100%) invert(13%) sepia(50%) saturate(4645%) hue-rotate(346deg) brightness(85%) contrast(99%)" }}
                />
              </motion.div>
              <h2 className="font-serif text-maroon-dark text-3xl md:text-5xl tracking-[0.15em] uppercase mb-4 font-semibold drop-shadow-sm">
                You are invited
              </h2>
              <p className="font-sans text-maroon-dark/90 text-sm md:text-base mb-12 uppercase tracking-[0.25em] font-medium">
                To celebrate our wedding
              </p>
              
              <button
                onClick={handleOpen}
                className="group relative px-10 py-4 bg-gradient-to-r from-gold to-gold-light text-white font-sans uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <span className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 ease-out" />
                <span className="relative z-10 font-medium">Tap to Open</span>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
