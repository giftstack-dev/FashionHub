import React, { useEffect, useRef, useState } from 'react';
import { Scissors, Sparkles, Clock, Award, Truck, ShieldCheck, Mail, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const About: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({ outfits: 0, years: 0, statesDelivered: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);

            setCounts({
              outfits: Math.floor(ease * 300),
              years: Math.floor(ease * 6),
              statesDelivered: Math.floor(ease * 36),
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts({ outfits: 300, years: 6, statesDelivered: 36 });
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const highlights = [
    {
      icon: Scissors,
      title: 'Precision Made-to-Measure',
      description: 'Every seam, dart, and collar sculpted specifically to your unique anatomical measurements.',
    },
    {
      icon: Truck,
      title: 'Nationwide & Global Delivery',
      description: 'We deliver directly to your doorstep in all 36 Nigerian states & international destinations via tracked DHL.',
    },
    {
      icon: Award,
      title: 'Heritage Fabrics & Craft',
      description: 'Authentic African Ankara prints, French cord laces, Duchess satins, and rich brocades with durable finish.',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 sm:py-28 bg-white overflow-hidden relative">
      {/* Subtle background decorative circular gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#0F2444]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Sarah Designer Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none group">
              {/* Decorative Frame Border */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-[#0F2444]/5 border-2 border-[#C5A059]/30 transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 -z-10" />

              {/* Main Image Container */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100">
                <img
                  src="/src/assets/images/sarah_designer_real_1793374873862.jpg"
                  alt="Sarah, Lead Designer & Creative Director of Sarahskye FashionHub"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2444]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-[11px] uppercase tracking-widest text-[#C5A059] font-semibold">
                    Creative Director & Founder
                  </p>
                  <p className="font-serif-luxury text-2xl font-bold">Sarah Skye</p>
                  <p className="text-xs text-slate-200 mt-0.5">Bespoke Designer · Made-to-Measure Artisan</p>
                </div>
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-4 bg-white rounded-xl p-4 shadow-xl border border-[#E8DFD0] flex items-center gap-3 animate-fade-in-up">
                <div className="w-11 h-11 rounded-full bg-[#FAF7F2] text-[#C5A059] flex items-center justify-center border border-[#E8DFD0] shadow-xs">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-[#7A899E] uppercase tracking-wider font-semibold">Online Atelier</p>
                  <p className="text-sm font-bold text-[#0F2444]">Nationwide Delivery</p>
                  <p className="text-[11px] text-[#C5A059] font-medium">All 36 Nigerian States</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Counters */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Meet Your Designer</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2444] mb-6 leading-tight">
              Crafting Personalized Elegance for Every Special Moment
            </h2>

            <p className="text-base sm:text-lg text-[#4B5B72] leading-relaxed mb-5 font-light">
              Welcome to <strong className="font-semibold text-[#0F2444]">{siteConfig.brandName}</strong>.
              I am Sarah, founder and lead designer. We operate as a dedicated online bespoke atelier, creating
              exquisite custom outfits, made-to-measure corporate staples, festive owambe attire, and bridal
              ceremony wear tailored to celebrate your personality.
            </p>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD0] mb-8 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0F2444]">
                <Truck className="w-4 h-4 text-[#C5A059]" />
                <span>Purely Online Studio with Direct Nationwide Delivery</span>
              </div>
              <p className="text-xs text-[#4B5B72] leading-relaxed">
                You don’t need to spend hours in Lagos traffic or visit a physical shop. Whether you live in
                Lagos, Abuja, Port Harcourt, Ibadan, Kaduna, or overseas, you provide your measurements using
                our visual guide, and we handcraft your garment with precision seam margins and ship directly to you.
              </p>
            </div>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#FAF7F2] text-[#C5A059] flex items-center justify-center mb-3 shadow-xs border border-[#E8DFD0]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-[#0F2444] mb-1">{h.title}</h3>
                    <p className="text-xs text-[#4B5B72] leading-normal">{h.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Live Count-up Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100">
              <div className="text-center sm:text-left">
                <div className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#0F2444] tabular-nums">
                  {counts.outfits}+
                </div>
                <div className="text-xs text-[#7A899E] mt-1 font-medium">Bespoke Outfits Made</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#0F2444] tabular-nums">
                  {counts.years}+
                </div>
                <div className="text-xs text-[#7A899E] mt-1 font-medium">Years in Fashion Craft</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#C5A059] tabular-nums">
                  {counts.statesDelivered}
                </div>
                <div className="text-xs text-[#7A899E] mt-1 font-medium">States Delivered Across NG</div>
              </div>
            </div>

            {/* Quick Contact Line with Sarah's email */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-1.5 text-[#0F2444] hover:text-[#C5A059] font-medium transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{siteConfig.email}</span>
              </a>
              <span className="text-slate-300">·</span>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Sarah, I loved your designs on Sarahskye FashionHub and would love to consult with you!'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Chat Directly with Sarah</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
