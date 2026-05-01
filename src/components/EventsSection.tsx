"use client";

import { motion } from "framer-motion";

const events = [
  {
    name: "Haldi & Mehendi",
    date: "May 31, 2026",
    time: "10:00 AM - 2:00 PM",
    venue: "Varma Residence, Kochi",
    description: "Join us for vibrant colors, music, and traditional blessings.",
  },
  {
    name: "Wedding Ceremony (Muhurtham)",
    date: "June 1, 2026",
    time: "09:30 AM - 11:30 AM",
    venue: "Guruvayur Temple, Kerala",
    description: "The traditional Kerala Hindu wedding ceremony.",
  },
  {
    name: "Grand Reception",
    date: "June 1, 2026",
    time: "07:00 PM Onwards",
    venue: "Taj Malabar Resort & Spa, Kochi",
    description: "An evening of celebration, dinner, and dancing.",
  }
];

export default function EventsSection() {
  return (
    <section className="py-24 px-6 bg-cream relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-maroon mb-4">Wedding Events</h2>
          <div className="w-24 h-[2px] bg-gold mx-auto mb-4" />
          <p className="font-sans text-maroon-dark/70 tracking-widest uppercase text-sm">Join us in our celebrations</p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
            hidden: {}
          }}
          className="space-y-8"
        >
          {events.map((event, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } }
              }}
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px -10px rgba(197,160,89,0.3)", y: -5 }}
              className="bg-white p-8 md:p-10 rounded-lg border border-gold/30 shadow-[0_4px_20px_rgba(197,160,89,0.1)] relative overflow-hidden group cursor-default transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-gold-light via-gold to-maroon transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/20 transition-colors duration-700" />
              
              <h3 className="font-serif text-2xl md:text-3xl text-maroon mb-2 relative z-10 group-hover:text-gold transition-colors">{event.name}</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-4 text-sm font-sans font-medium text-gold-dark relative z-10">
                <span className="flex items-center gap-2 text-gold group-hover:text-maroon transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {event.date}
                </span>
                <span className="flex items-center gap-2 text-gold group-hover:text-maroon transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {event.time}
                </span>
              </div>
              
              <div className="mb-4 flex items-start gap-2 text-maroon-dark/80 relative z-10">
                <svg className="w-5 h-5 mt-0.5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="font-sans group-hover:font-medium transition-all">{event.venue}</p>
              </div>
              
              <p className="font-sans text-maroon-dark/60 italic border-t border-gold/10 pt-4 mt-4 relative z-10 group-hover:text-maroon-dark transition-colors">
                {event.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
