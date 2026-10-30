import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { FancyLogo } from './FancyLogo';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Collection', href: '#collection', id: 'collection' },
    { label: 'About Sarah', href: '#about', id: 'about' },
    { label: 'Pricing', href: '#pricing', id: 'pricing' },
    { label: 'Booking', href: '#booking', id: 'booking' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#E8DFD0] py-3'
          : 'bg-white/85 backdrop-blur-sm py-4 border-b border-slate-100/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-12">
          {/* Top Left: Fancy Sarah Skye Collection Haute Couture Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center group whitespace-nowrap shrink-0 focus:outline-none"
            aria-label="Sarah Skye Collection Home"
          >
            <FancyLogo variant="dark" size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative py-1.5 transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-[#C5A059] font-semibold'
                      : 'text-[#4B5B72] hover:text-[#0F2444]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059] rounded-full animate-fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Primary Action Button & Call */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              aria-label={`Call ${siteConfig.brandName}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#0F2444] hover:text-[#C5A059] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="tabular-nums">{siteConfig.phone}</span>
            </a>

            <a
              href="#booking"
              onClick={(e) => handleLinkClick(e, '#booking')}
              className="relative group overflow-hidden inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-[#0F2444] hover:bg-[#183B70] border border-[#0F2444] rounded-lg shadow-sm transition-all duration-300 active:scale-95"
            >
              {/* Shimmer overlay */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Book Fitting</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="#booking"
              onClick={(e) => handleLinkClick(e, '#booking')}
              className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0F2444] rounded-md"
            >
              Book
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#0F2444] hover:bg-slate-100 transition-colors focus:ring-2 focus:ring-[#C5A059]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-slate-200 shadow-lg ${
          mobileMenuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-5 pt-3 pb-6 space-y-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`flex items-center justify-between px-3.5 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-[#C5A059] bg-[#FBF7EE] font-semibold'
                    : 'text-[#0E1A2B] hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-[#C5A059]" />}
              </a>
            );
          })}
          <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-2 px-3 py-2 text-sm text-[#0F2444] font-medium"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span className="tabular-nums">Call: {siteConfig.phone}</span>
            </a>
            <a
              href="#booking"
              onClick={(e) => handleLinkClick(e, '#booking')}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#0F2444] rounded-lg shadow-sm"
            >
              <Calendar className="w-4 h-4 text-[#C5A059]" />
              Book Consultation & Fitting
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
