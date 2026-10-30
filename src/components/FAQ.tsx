import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2444] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#4B5B72]">
            Everything you need to know about our bespoke tailoring process, fittings, payments, and deliveries.
          </p>
        </div>

        {/* Numbered Accordion List */}
        <div className="divide-y divide-slate-100 border-t border-b border-slate-100">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.number} className="py-4 sm:py-5">
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full min-h-[44px] flex items-center justify-between text-left group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6 pr-4">
                    <span className="font-serif-luxury text-lg sm:text-xl font-bold text-[#C5A059] tabular-nums shrink-0">
                      {faq.number}.
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-[#0F2444] group-hover:text-[#C5A059] transition-colors">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#0F2444] text-[#C5A059] rotate-180 border-[#0F2444]' : 'text-slate-500'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Smooth Expand/Collapse Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-64 opacity-100 pt-3 pb-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-xs sm:text-sm text-[#4B5B72] leading-relaxed pl-8 sm:pl-12 pr-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ask Sarah Directly Banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD0]">
          <h4 className="font-serif-luxury text-xl font-bold text-[#0F2444] mb-1">
            Have a question not listed here?
          </h4>
          <p className="text-xs sm:text-sm text-[#4B5B72] mb-4">
            Sarah is readily available on WhatsApp to answer questions or review your design ideas.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              'Hello Sarah, I have a quick question about ordering an outfit from Sarahskye FashionHub!'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#0F2444] hover:bg-[#183B70] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#C5A059]" />
            <span>Chat Directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
