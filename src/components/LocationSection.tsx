"use client";

import { motion } from "framer-motion";

export default function LocationSection() {
  return (
    <section className="py-20 px-6 bg-sandalwood/20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <h2 className="font-serif text-4xl text-maroon mb-6">Getting There</h2>
          <p className="font-sans text-maroon-dark/80 mb-8 leading-relaxed">
            The wedding ceremony will take place at the Guruvayur Temple, followed by a grand reception at the Taj Malabar Resort &amp; Spa in Kochi. We have arranged transport for guests staying at the designated hotels.
          </p>
          
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-gold text-white font-sans uppercase tracking-widest text-sm rounded-full transition-all hover:bg-maroon hover:shadow-lg"
          >
            Get Directions
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full h-[350px] bg-cream rounded-lg overflow-hidden border-4 border-white shadow-xl relative"
        >
          {/* Using a placeholder map for aesthetics */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.340058564032!2d76.2570077!3d9.9678125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0872a95c9359e1%3A0x6b4afb060f607d73!2sTaj%20Malabar%20Resort%20%26%20Spa%2C%20Cochin!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "grayscale(30%) sepia(20%) hue-rotate(340deg)" }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Location Map"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
