import React from 'react';
import { ArrowDown, Phone, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-[#09172B]"
    >
      {/* Background Image with Layered Blue & Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_fashion_studio_1793372122485.jpg"
          alt="Sarahskye Atelier haute couture studio with royal blue and gold embroidered garments"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
        />
        {/* Deep navy-to-charcoal gradient overlay for immaculate contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09172B] via-[#0F2444]/80 to-[#0F2444]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-10">
        {/* Subtle Brand Kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A059]/40 text-[#C5A059] text-xs font-semibold tracking-widest uppercase mb-6 animate-fade-in-up">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Bespoke Online Atelier · Nationwide Delivery</span>
        </div>

        {/* Main Serif Headline */}
        <h1
          className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-tight drop-shadow-md animate-fade-in-up"
          style={{ animationDelay: '150ms' }}
        >
          {siteConfig.tagline}
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-sm animate-fade-in-up"
          style={{ animationDelay: '300ms' }}
        >
          {siteConfig.subtitle} Every cut, drape, and stitch tailored to celebrate your authentic elegance.
        </p>

        {/* Action Buttons (Stacked on Mobile, Side-by-side on Tablet+) */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-8 animate-fade-in-up"
          style={{ animationDelay: '450ms' }}
        >
          <button
            onClick={() => scrollTo('collection')}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold tracking-wide uppercase text-[#0F2444] bg-[#C5A059] hover:bg-[#A8843D] rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 active:scale-98"
          >
            View Collection
          </button>
          <button
            onClick={() => scrollTo('booking')}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold tracking-wide uppercase text-white hover:text-[#C5A059] bg-white/10 hover:bg-white/20 border border-white/40 hover:border-[#C5A059] rounded-lg backdrop-blur-sm transition-all duration-200 active:scale-98"
          >
            Book a Fitting
          </button>
        </div>

        {/* Click to Call link */}
        <div
          className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-300 animate-fade-in-up"
          style={{ animationDelay: '600ms' }}
        >
          <span>Need quick questions answered?</span>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-1.5 text-[#C5A059] hover:text-white font-medium underline underline-offset-4 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="tabular-nums">Call {siteConfig.phone}</span>
          </a>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors cursor-pointer">
        <button
          onClick={() => scrollTo('collection')}
          className="flex flex-col items-center gap-1 text-xs tracking-widest uppercase focus:outline-none"
          aria-label="Scroll to collection section"
        >
          <span className="text-[10px] text-slate-300">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#C5A059]" />
        </button>
      </div>
    </section>
  );
};
