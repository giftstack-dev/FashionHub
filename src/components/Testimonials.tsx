import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Testimonials: React.FC = () => {
  const [mobileIndex, setMobileIndex] = useState(0);
  const reviews = siteConfig.testimonials;

  const nextReview = () => {
    setMobileIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setMobileIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 sm:py-24 bg-[#FAF7F2] border-t border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Praise</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2444] mb-3">
            Stories of Elegance
          </h2>
          <p className="text-sm sm:text-base text-[#4B5B72]">
            Read what our esteemed clients have to say about their custom outfits, fittings, and experience
            with Sarah.
          </p>
        </div>

        {/* Desktop 3-column Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-7 border border-[#E2E8F0] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#C5A059]/30 mb-2" />

                <p className="text-sm text-[#0E1A2B] leading-relaxed mb-6 italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="font-serif-luxury text-base font-bold text-[#0F2444]">{rev.name}</p>
                <p className="text-xs text-[#7A899E]">{rev.role} · {rev.location}</p>
                <p className="text-[11px] font-medium text-[#C5A059] mt-1.5 line-clamp-1">
                  Outfit: {rev.outfit}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm mb-6 min-h-[300px] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(reviews[mobileIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                ))}
              </div>

              <p className="text-sm text-[#0E1A2B] leading-relaxed mb-4 italic">
                "{reviews[mobileIndex].quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <p className="font-serif-luxury text-base font-bold text-[#0F2444]">
                {reviews[mobileIndex].name}
              </p>
              <p className="text-xs text-[#7A899E]">
                {reviews[mobileIndex].role} · {reviews[mobileIndex].location}
              </p>
              <p className="text-[11px] font-medium text-[#C5A059] mt-1">
                Outfit: {reviews[mobileIndex].outfit}
              </p>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between px-2">
            <button
              onClick={prevReview}
              className="min-h-[44px] min-w-[44px] p-2 rounded-full bg-white border border-[#E2E8F0] text-[#0F2444] shadow-xs flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    mobileIndex === i ? 'w-6 bg-[#0F2444]' : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Jump to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="min-h-[44px] min-w-[44px] p-2 rounded-full bg-white border border-[#E2E8F0] text-[#0F2444] shadow-xs flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
