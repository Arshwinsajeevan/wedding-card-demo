"use client";

import { useState } from "react";
import OpeningScreen from "@/components/OpeningScreen";
import HeroSection from "@/components/HeroSection";
import InvitationText from "@/components/InvitationText";
import CountdownTimer from "@/components/CountdownTimer";
import BrideGroomSection from "@/components/BrideGroomSection";
import EventsSection from "@/components/EventsSection";
import LocationSection from "@/components/LocationSection";
import GallerySection from "@/components/GallerySection";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import LiveBackground from "@/components/LiveBackground";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <main className="min-h-screen relative">
      <OpeningScreen onOpen={() => setIsOpened(true)} />
      
      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="relative z-10"
          >
            <LiveBackground />
            <HeroSection />
            <CountdownTimer />
            <InvitationText />
            <BrideGroomSection />
            <EventsSection />
            <LocationSection />
            <GallerySection />
            <RSVPSection />
            <Footer />
            <FloatingButtons />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
