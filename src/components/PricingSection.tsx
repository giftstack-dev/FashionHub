import React from 'react';
import { Sparkles, Check, ArrowRight, Ruler, HelpCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface PricingSectionProps {
  onOpenMeasurementGuide: () => void;
  onSelectCategoryForBooking: (categoryName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenMeasurementGuide,
  onSelectCategoryForBooking,
}) => {
  return (
    <section id="pricing" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2444] mb-3">
            Tailoring & Starting Rates
          </h2>
          <p className="text-sm sm:text-base text-[#4B5B72]">
            Every outfit is handcrafted to your exact specifications. Below are baseline starting rates
            in Nigerian Naira ({siteConfig.currency.symbol}) for tailoring and custom design.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {siteConfig.pricingGuide.map((item, index) => {
            const isHighlighted = item.category.includes('Traditional') || item.category.includes('Bridal');

            return (
              <div
                key={index}
                className={`rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between ${
                  isHighlighted
                    ? 'bg-[#FAF7F2] border-2 border-[#C5A059]/60 shadow-md relative'
                    : 'bg-white border border-[#E2E8F0] shadow-xs hover:shadow-md'
                }`}
              >
                {isHighlighted && (
                  <span className="absolute -top-3 right-6 px-3 py-1 bg-[#0F2444] text-[#C5A059] text-[11px] font-semibold uppercase tracking-wider rounded-full shadow-xs">
                    Popular Bespoke Choice
                  </span>
                )}

                <div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#0F2444] mb-1">
                    {item.category}
                  </h3>
                  <p className="text-xs text-[#7A899E] mb-4">{item.popularFor}</p>

                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-xs text-[#7A899E] uppercase font-medium">From</span>
                    <span className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#0F2444] tabular-nums">
                      {siteConfig.currency.symbol}
                      {item.startingPrice.toLocaleString()}
                    </span>
                  </div>

                  <p className="text-xs text-[#4B5B72] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-[#E8E2D9] mb-6">
                    {item.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2 text-xs text-[#0F2444]">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-2 text-[11px] text-[#7A899E] pt-1">
                      <span>Standard Turnaround: {item.turnaroundTime}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onSelectCategoryForBooking(item.category)}
                  className={`w-full py-2.5 px-4 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5 ${
                    isHighlighted
                      ? 'bg-[#0F2444] text-white hover:bg-[#183B70]'
                      : 'bg-white text-[#0F2444] hover:bg-slate-50 border border-[#0F2444]'
                  }`}
                >
                  <span>Order This Category</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Pricing Note & Measurement Guide Banner */}
        <div className="bg-[#FAF7F2] border border-[#E8DFD0] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white text-[#C5A059] flex items-center justify-center shrink-0 border border-[#E8DFD0] shadow-xs">
              <Ruler className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-xl font-bold text-[#0F2444] mb-1">
                Ordering from Anywhere in Nigeria or Abroad?
              </h4>
              <p className="text-xs sm:text-sm text-[#4B5B72] max-w-xl">
                We are based in Delta State, Nigeria and serve clients nationwide and overseas! Use our interactive
                measurement chart with clear guidance for measuring your bust, waist, hips, and length.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenMeasurementGuide}
              className="w-full md:w-auto min-h-[44px] px-6 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-[#0F2444] border border-[#0F2444] text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
            >
              View Measurement Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
