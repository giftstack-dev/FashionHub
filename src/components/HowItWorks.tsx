import React from 'react';
import { MessageSquareText, Ruler, Sparkles, PackageCheck, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: MessageSquareText,
      title: 'Consultation',
      description: 'Discuss your event, personal style preferences, color mood, and fabric choices directly with Sarah.',
    },
    {
      step: '02',
      icon: Ruler,
      title: 'Measurements',
      description: 'Submit your measurements easily using our guided measurement chart or review them directly with Sarah on WhatsApp.',
    },
    {
      step: '03',
      icon: Sparkles,
      title: 'Tailoring & Craft',
      description: 'Your garment is drafted, cut, and sewn with precision tailoring, featuring generous seam allowances for a perfect drape.',
    },
    {
      step: '04',
      icon: PackageCheck,
      title: 'Direct Delivery',
      description: 'Receive your steamed, pristine outfit in our protective garment bag anywhere in Delta State or nationwide.',
    },
  ];

  return (
    <section className="py-20 bg-[#FAF7F2] border-t border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
            <span>Seamless Bespoke Process</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2444] mb-3">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-[#4B5B72]">
            From your first message to the final stitch, we make ordering custom-fitted elegance effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                {/* Step Number pill */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#0F2444] text-[#C5A059] flex items-center justify-center font-bold shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-serif-luxury text-2xl font-bold text-[#C5A059]/70 tabular-nums">
                    {item.step}.
                  </span>
                </div>

                <div>
                  <h3 className="font-serif-luxury text-xl font-bold text-[#0F2444] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5B72] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Desktop connector arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#C5A059]">
                    <ArrowRight className="w-5 h-5 bg-white rounded-full p-0.5 border border-[#E8DFD0] shadow-xs" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
