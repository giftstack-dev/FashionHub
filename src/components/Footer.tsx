import React from 'react';
import { ArrowUp, Instagram, Phone, Mail, Truck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { FancyLogo } from './FancyLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Collection', href: '#collection' },
    { label: 'About Sarah', href: '#about' },
    { label: 'Pricing Guide', href: '#pricing' },
    { label: 'Book Appointment', href: '#booking' },
    { label: 'Contact & Delivery', href: '#contact' },
  ];

  return (
    <footer className="bg-[#09172B] text-white pt-16 pb-12 border-t border-[#183B70] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info with Fancy Logo */}
          <div className="lg:col-span-5 space-y-4">
            <FancyLogo variant="light" size="lg" />

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm font-light pt-1">
              {siteConfig.tagline} Bespoke made-to-measure African traditional wear, corporate power dressing,
              and bridal ceremony elegance. Purely online atelier with prompt nationwide delivery.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#09172B] transition-colors flex items-center justify-center text-slate-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                aria-label="Phone"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#09172B] transition-colors flex items-center justify-center text-slate-200"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#09172B] transition-colors flex items-center justify-center text-slate-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
              Explore Atelier
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Delivery & Direct Inquiries */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
              Nationwide Delivery & Contact
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <Truck className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Nationwide delivery across all 36 Nigerian states & international courier</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="tabular-nums">{siteConfig.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{siteConfig.email}</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 pt-2">
              Studio Hours: {siteConfig.workingHours.display}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {siteConfig.brandWordmark}. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C5A059]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
