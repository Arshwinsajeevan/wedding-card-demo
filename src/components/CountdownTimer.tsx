"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CountdownTimer() {
  const targetDate = new Date("2026-06-01T10:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="py-16 px-6 bg-maroon text-cream text-center border-y border-gold/30">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="font-sans tracking-[0.2em] uppercase text-sm text-gold-light mb-8">Waiting for the big day</h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-cream text-maroon rounded-lg flex items-center justify-center text-3xl md:text-4xl font-serif shadow-inner border-2 border-gold/40 mb-3">
                {item.value.toString().padStart(2, "0")}
              </div>
              <span className="font-sans text-xs uppercase tracking-widest text-gold-light">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
