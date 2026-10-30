import React, { useEffect, useRef, useState } from 'react';
import { Scissors, Sparkles, Clock, Award, Truck, ShieldCheck, Mail, MessageSquare, MapPin, Heart } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const About: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({ outfits: 0, years: 0, satisfaction: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1600;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);

            setCounts({
              outfits: Math.floor(ease * 40),
              years: Math.floor(ease * 2),
              satisfaction: Math.floor(ease * 100),
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts({ outfits: 40, years: 2, satisfaction: 100 });
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="about" ref={sectionRef} className="py-20 sm:py-28 bg-white overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#0F2444]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Meet The Designer</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2444] mb-3">
            About Sarah Skye
          </h2>
          <p className="text-sm sm:text-base text-[#4B5B72]">
            The creative visionary and master artisan behind Sarahskye Collection, crafting bespoke elegance
            from Delta State, Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Sarah's Exact Real Photo with Decorative Accents */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none group">
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-[#FAF7F2] border-2 border-[#C5A059]/40 transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 -z-10" />

              {/* Exact Photo Container */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100">
                <img
                  src="/images/sarah.jpg"
                  alt="Sarah, Lead Designer and Founder of Sarahskye Collection"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-103"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2444]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-[11px] uppercase tracking-widest text-[#C5A059] font-semibold">
                    Creative Director & Founder
                  </p>
                  <p className="font-serif-luxury text-2xl sm:text-3xl font-bold">Sarah Skye</p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-200 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Delta State, Nigeria</span>
                  </div>
                </div>
              </div>

              {/* Verified Artisan Badge */}
              <div className="absolute -bottom-5 -right-2 sm:right-4 bg-white rounded-2xl p-3.5 shadow-xl border border-[#E8DFD0] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0F2444] text-[#C5A059] flex items-center justify-center shadow-xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-[#7A899E] uppercase tracking-wider font-semibold">Bespoke Atelier</p>
                  <p className="text-xs sm:text-sm font-bold text-[#0F2444]">Delta State · NG Delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dialogue Floating Box */}
          <div className="lg:col-span-7">
            {/* The Dialogue Floating Box */}
            <div className="relative bg-white rounded-3xl p-7 sm:p-9 shadow-xl border-2 border-[#E8DFD0] transition-all duration-300 hover:shadow-2xl">
              {/* Dialogue Box Speech Pointer (Desktop) */}
              <div className="hidden lg:block absolute -left-3.5 top-14 w-7 h-7 bg-white border-l-2 border-b-2 border-[#E8DFD0] rotate-45 transform" />

              {/* Dialogue Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#C5A059] shadow-xs shrink-0">
                    <img
                      src="/images/sarah.jpg"
                      alt="Sarah avatar"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif-luxury text-xl font-bold text-[#0F2444]">
                      A Message from Sarah
                    </h3>
                    <p className="text-[11px] text-[#7A899E]">Lead Designer · Delta State Atelier</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Online & Crafting</span>
                </div>
              </div>

              {/* Dialogue Content */}
              <div className="space-y-4 text-sm sm:text-base text-[#4B5B72] leading-relaxed font-light">
                <p>
                  "Hello and welcome! I am <strong className="font-semibold text-[#0F2444]">Sarah</strong>, the
                  creative mind and hand behind every piece at <strong className="font-semibold text-[#0F2444]">Sarahskye Collection</strong>.
                </p>

                <p>
                  Over the past <strong className="text-[#0F2444] font-semibold">2+ years</strong>, I have had the privilege
                  of designing and sewing over <strong className="text-[#0F2444] font-semibold">40+ custom bespoke outfits</strong> for
                  clients who value clean tailoring, rich African textiles, and a flattering personal fit.
                </p>

                <p>
                  We are proudly based in <strong className="text-[#0F2444] font-semibold">Delta State, Nigeria</strong>.
                  We operate as a pure online bespoke atelier without a walk-in storefront, which keeps our prices
                  accessible and transparent—starting from just ₦5,500 for kids, ₦10,000 for casual chic, and ₦14,000 for traditional Ankara.
                  We provide direct, prompt delivery across Delta State and to major cities nationwide.
                </p>

                <p className="text-xs sm:text-sm text-[#0F2444] font-medium italic pt-1">
                  Whether you need a casual set, executive corporate wear, or a showstopping traditional lace gown,
                  I work with you directly via WhatsApp to ensure your measurements sit like a glove."
                </p>
              </div>

              {/* 3 Animated Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 mt-6 border-t border-slate-100">
                <div className="text-center p-3 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD0]/60">
                  <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#0F2444] tabular-nums">
                    {counts.years}+
                  </div>
                  <div className="text-[11px] text-[#7A899E] mt-0.5 font-medium">Years in Fashion</div>
                </div>

                <div className="text-center p-3 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD0]/60">
                  <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#0F2444] tabular-nums">
                    {counts.outfits}+
                  </div>
                  <div className="text-[11px] text-[#7A899E] mt-0.5 font-medium">Outfits Tailored</div>
                </div>

                <div className="text-center p-3 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD0]/60">
                  <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#C5A059] tabular-nums">
                    {counts.satisfaction}%
                  </div>
                  <div className="text-[11px] text-[#7A899E] mt-0.5 font-medium">Client Delight</div>
                </div>
              </div>

              {/* Dialogue Box Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                    "Hello Sarah, I read your note on Sarahskye Collection and I would like to order a bespoke outfit!"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat with Sarah on WhatsApp</span>
                </a>

                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent('Bespoke Inquiry: Sarahskye Collection')}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0F2444] hover:bg-[#183B70] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
                >
                  <Mail className="w-4 h-4 text-[#C5A059]" />
                  <span>Email Sarah Directly</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
