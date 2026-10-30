/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Collection } from './components/Collection';
import { About } from './components/About';
import { HowItWorks } from './components/HowItWorks';
import { PricingSection } from './components/PricingSection';
import { Booking } from './components/Booking';
import { Contact } from './components/Contact';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CookieBanner } from './components/CookieBanner';
import { MeasurementGuideModal } from './components/MeasurementGuideModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [prefilledStyle, setPrefilledStyle] = useState<string>('');
  const [isMeasurementGuideOpen, setIsMeasurementGuideOpen] = useState<boolean>(false);

  // Active section tracking with IntersectionObserver
  useEffect(() => {
    const sectionIds = ['home', 'collection', 'about', 'pricing', 'booking', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px', // Trigger when section occupies upper-middle area
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleSelectStyleForBooking = (styleTitle: string) => {
    setPrefilledStyle(styleTitle);
  };

  const handleClearPrefill = () => {
    setPrefilledStyle('');
  };

  const handleOpenMeasurementGuide = () => {
    setIsMeasurementGuideOpen(true);
  };

  const handleCloseMeasurementGuide = () => {
    setIsMeasurementGuideOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#0E1A2B] selection:bg-[#C5A059] selection:text-[#09172B]">
      {/* 1. Fixed Navigation Bar */}
      <Navbar activeSection={activeSection} />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Collection Gallery Section */}
        <Collection onSelectStyleForBooking={handleSelectStyleForBooking} />

        {/* 4. About Sarah Story Section */}
        <About />

        {/* 5. How It Works Section */}
        <HowItWorks />

        {/* 6. Pricing & Starting Rates Section */}
        <PricingSection
          onOpenMeasurementGuide={handleOpenMeasurementGuide}
          onSelectCategoryForBooking={(cat) => {
            handleSelectStyleForBooking(`Bespoke Order: ${cat}`);
            const bookingEl = document.getElementById('booking');
            if (bookingEl) bookingEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 7. Booking & Appointment Section */}
        <Booking
          prefilledStyle={prefilledStyle}
          onClearPrefill={handleClearPrefill}
          onOpenMeasurementGuide={handleOpenMeasurementGuide}
        />

        {/* 8. Contact & Working Hours Section */}
        <Contact />

        {/* 9. Client Testimonials Section */}
        <Testimonials />

        {/* 10. Frequently Asked Questions Section */}
        <FAQ />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Floating WhatsApp Fast Action */}
      <FloatingWhatsApp />

      {/* 13. Cookie Consent Banner */}
      <CookieBanner />

      {/* 14. Interactive Measurement Guide Modal */}
      <MeasurementGuideModal
        isOpen={isMeasurementGuideOpen}
        onClose={handleCloseMeasurementGuide}
      />
    </div>
  );
}
