"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    attendance: "Yes"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your RSVP! We look forward to seeing you.");
    setFormData({ name: "", phone: "", attendance: "Yes" });
  };

  return (
    <section className="py-24 px-6 bg-sandalwood/30 border-y border-gold/20">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl text-maroon mb-2">RSVP</h2>
          <p className="font-sans text-maroon-dark/70 mb-8 uppercase tracking-widest text-xs">Kindly let us know by August 10th</p>
          
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl border border-gold/10 text-left space-y-6">
            <div>
              <label htmlFor="name" className="block font-sans text-sm font-medium text-maroon-dark mb-1">Full Name</label>
              <input 
                type="text" 
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-cream border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all font-sans"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block font-sans text-sm font-medium text-maroon-dark mb-1">Phone Number</label>
              <input 
                type="tel" 
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 bg-cream border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all font-sans"
                placeholder="Enter your phone number"
              />
            </div>
            
            <div>
              <label className="block font-sans text-sm font-medium text-maroon-dark mb-2">Will you attend?</label>
              <div className="flex gap-4">
                <label className="flex-1 cursor-pointer">
                  <input 
                    type="radio" 
                    name="attendance" 
                    value="Yes" 
                    checked={formData.attendance === "Yes"}
                    onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                    className="peer sr-only" 
                  />
                  <div className="text-center px-4 py-3 rounded-md border border-gold/30 bg-cream peer-checked:bg-gold peer-checked:text-white peer-checked:border-gold transition-all font-sans">
                    Joyfully Accept
                  </div>
                </label>
                <label className="flex-1 cursor-pointer">
                  <input 
                    type="radio" 
                    name="attendance" 
                    value="No" 
                    checked={formData.attendance === "No"}
                    onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                    className="peer sr-only" 
                  />
                  <div className="text-center px-4 py-3 rounded-md border border-gold/30 bg-cream peer-checked:bg-maroon peer-checked:text-white peer-checked:border-maroon transition-all font-sans">
                    Regretfully Decline
                  </div>
                </label>
              </div>
            </div>
            
            <button 
              type="submit"
              className="w-full py-4 bg-maroon text-cream font-sans uppercase tracking-widest text-sm rounded-md transition-all hover:bg-maroon-dark hover:shadow-lg mt-4"
            >
              Send RSVP
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
