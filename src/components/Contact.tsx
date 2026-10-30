import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Mail, Instagram, Truck, Copy, Check, Clock, Sparkles, MapPinOff } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const currentDay = now.getDay();
      const currentHour = now.getHours();

      const isWorkDay = siteConfig.workingHours.workDays.includes(currentDay);
      const isWorkHours =
        currentHour >= siteConfig.workingHours.openHour &&
        currentHour < siteConfig.workingHours.closeHour;

      setIsOpenNow(isWorkDay && isWorkHours);
    };

    checkOpenStatus();
    const timer = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyNumber = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const contactCards = [
    {
      icon: Phone,
      title: 'Call Direct',
      value: siteConfig.phone,
      actionText: 'Call Sarah',
      href: `tel:${siteConfig.phoneRaw}`,
      highlight: true,
      hasCopy: true,
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Chat',
      value: siteConfig.phone,
      actionText: 'Chat on WhatsApp',
      href: `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
        'Hello Sarah, I would like to order a bespoke outfit from Sarahskye FashionHub!'
      )}`,
      external: true,
      highlight: true,
    },
    {
      icon: Mail,
      title: 'Direct Email',
      value: siteConfig.email,
      actionText: 'Send Email',
      href: `mailto:${siteConfig.email}?subject=${encodeURIComponent('Inquiry: Sarahskye FashionHub Bespoke Order')}`,
    },
    {
      icon: Instagram,
      title: 'Instagram Feed',
      value: siteConfig.instagramHandle,
      actionText: 'Follow @sarahskye',
      href: siteConfig.instagramUrl,
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect & Order</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2444] mb-3">
            Contact Sarahskye
          </h2>
          <p className="text-sm sm:text-base text-[#4B5B72]">
            We operate as an online bespoke studio with fast, tracked nationwide delivery to every state in
            Nigeria. Reach out to consult directly on WhatsApp or email.
          </p>
        </div>

        {/* Real-Time Live Consultation Status */}
        <div className="max-w-xl mx-auto mb-12 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD0] flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white border border-[#E8DFD0] flex items-center justify-center text-[#0F2444] shadow-xs">
              <Clock className="w-4 h-4 text-[#C5A059]" />
            </div>
            <div>
              <p className="text-[10px] text-[#7A899E] uppercase font-semibold">Consultation Hours</p>
              <p className="text-xs sm:text-sm font-bold text-[#0F2444]">
                Mon – Sat: 9:00 AM – 5:00 PM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                isOpenNow ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                }`}
              />
              <span>{isOpenNow ? 'Online & Taking Orders' : 'After Hours (Messages Welcome)'}</span>
            </span>
          </div>
        </div>

        {/* 4 Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] text-[#0F2444] border border-[#E8DFD0] flex items-center justify-center mb-4 shadow-xs">
                    <Icon className="w-6 h-6 text-[#C5A059]" />
                  </div>
                  <h3 className="font-serif-luxury text-xl font-bold text-[#0F2444] mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#4B5B72] font-medium break-all mb-4 tabular-nums">
                    {card.value}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <a
                    href={card.href}
                    target={card.external ? '_blank' : undefined}
                    rel={card.external ? 'noopener noreferrer' : undefined}
                    className="w-full min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0F2444] hover:bg-[#183B70] rounded-xl transition-all shadow-xs active:scale-98"
                  >
                    <span>{card.actionText}</span>
                  </a>

                  {card.hasCopy && (
                    <button
                      type="button"
                      onClick={handleCopyNumber}
                      className="w-full min-h-[40px] inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-[#4B5B72] hover:text-[#0F2444] bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">Number Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#C5A059]" />
                          <span>Copy Phone Number</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Delivery & Studio Policy Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Nationwide Delivery Card */}
          <div className="lg:col-span-6 bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#E8DFD0] flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
                <Truck className="w-4 h-4" />
                <span>Doorstep Delivery Policy</span>
              </div>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#0F2444] mb-3">
                Nationwide Delivery To All 36 States
              </h3>
              <p className="text-sm text-[#4B5B72] leading-relaxed mb-6 font-light">
                We do not operate a physical walk-in shop at this time. All creations are handcrafted to your
                exact measurements in our private Lagos studio and securely packaged in garment bags for direct
                delivery.
              </p>

              <div className="space-y-3 p-4 bg-white rounded-xl border border-[#E8DFD0] text-xs">
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-[#0F2444]">Lagos & Interstate Delivery:</strong>
                    <p className="text-[#4B5B72] mt-0.5">GIG Logistics, DHL Express & Interstate Waybills (24 – 72 hrs)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-[#0F2444]">Worldwide Shipping:</strong>
                    <p className="text-[#4B5B72] mt-0.5">UK, USA, Canada & Europe via tracked international courier (3 – 7 days)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Sarah, I would like to inquire about delivery times and rates to my state/city!'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F2444] hover:text-[#C5A059] underline underline-offset-4"
              >
                <span>Ask Sarah About Delivery to Your City →</span>
              </a>
            </div>
          </div>

          {/* Operating Hours Table */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#0F2444] mb-3">
                Operating & Consultation Hours
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5B72] mb-6">
                Sarah is actively available for online consultations, fabric choices, and measurement reviews:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-[#7A899E] uppercase tracking-wider text-[11px]">
                      <th className="py-2.5 px-3 font-semibold">Days</th>
                      <th className="py-2.5 px-3 font-semibold">Hours</th>
                      <th className="py-2.5 px-3 font-semibold text-right">Consultations</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {siteConfig.workingHours.schedule.map((row, idx) => {
                      const isClosed = row.hours === 'Closed';
                      return (
                        <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-3 px-3 font-semibold text-[#0F2444]">{row.days}</td>
                          <td className="py-3 px-3 text-[#4B5B72] tabular-nums">{row.hours}</td>
                          <td className="py-3 px-3 text-right">
                            <span
                              className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                                isClosed
                                  ? 'bg-slate-100 text-[#7A899E]'
                                  : 'bg-emerald-50 text-emerald-700'
                              }`}
                            >
                              {isClosed ? 'By prior appointment' : 'Online & Taking Orders'}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-[11px] text-[#7A899E] pt-4 mt-2 border-t border-slate-100 italic">
              *Direct inquiries to <strong className="text-[#0F2444]">{siteConfig.email}</strong> or WhatsApp anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
