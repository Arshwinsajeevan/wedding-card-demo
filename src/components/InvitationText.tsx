"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function InvitationText() {
  return (
    <section className="py-24 px-6 md:px-12 bg-cream text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto flex flex-col items-center"
      >
        <Image 
          src="/motif.png" 
          alt="Divider Motif" 
          width={80} 
          height={80} 
          className="mb-8 opacity-80"
          style={{ filter: "brightness(0) saturate(100%) invert(13%) sepia(50%) saturate(4645%) hue-rotate(346deg) brightness(85%) contrast(99%)" }}
        />
        
        <h2 className="font-serif text-3xl md:text-4xl text-maroon mb-8">
          With the blessings of God &amp; our parents
        </h2>
        
        <p className="font-sans text-maroon-dark/80 text-lg md:text-xl leading-relaxed mb-8 font-light">
          We joyfully invite you to share in our happiness as we exchange our wedding vows. 
          Your presence and blessings will make our special day complete.
        </p>

        <div className="flex items-center justify-center w-full max-w-xs mx-auto gap-4 mt-8">
          <div className="h-[1px] flex-1 bg-gold" />
          <div className="w-2 h-2 rounded-full bg-gold" />
          <div className="h-[1px] flex-1 bg-gold" />
        </div>
      </motion.div>
    </section>
  );
}
