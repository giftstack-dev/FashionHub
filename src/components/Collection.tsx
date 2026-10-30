import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Calendar, Eye, Sparkles, Tag, Clock, Play, Video } from 'lucide-react';
import { collectionItems } from '../data/collection';
import { CategoryType, CollectionItem } from '../types';
import { siteConfig } from '../config/siteConfig';

interface CollectionProps {
  onSelectStyleForBooking: (styleTitle: string) => void;
}

const CATEGORIES: CategoryType[] = [
  'All',
  'Traditional',
  'Casual',
  'Corporate',
  'Bridal',
  'Kids',
];

export const Collection: React.FC<CollectionProps> = ({ onSelectStyleForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [activeLightboxItem, setActiveLightboxItem] = useState<CollectionItem | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Filter items based on active category
  const filteredItems = collectionItems.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const displayedItems = filteredItems.slice(0, visibleCount);

  // Handle category change
  const handleCategoryChange = (cat: CategoryType) => {
    setSelectedCategory(cat);
    setVisibleCount(12);
  };

  // Lightbox controls
  const openLightbox = (item: CollectionItem) => {
    setActiveLightboxItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setActiveLightboxItem(null);
    document.body.style.overflow = '';
  }, []);

  const nextLightboxItem = useCallback(() => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === activeLightboxItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveLightboxItem(filteredItems[nextIndex]);
  }, [activeLightboxItem, filteredItems]);

  const prevLightboxItem = useCallback(() => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === activeLightboxItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveLightboxItem(filteredItems[prevIndex]);
  }, [activeLightboxItem, filteredItems]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeLightboxItem) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxItem();
      if (e.key === 'ArrowLeft') prevLightboxItem();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxItem, closeLightbox, nextLightboxItem, prevLightboxItem]);

  const handleBookStyle = (styleTitle: string) => {
    closeLightbox();
    onSelectStyleForBooking(styleTitle);
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="collection" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-b border-[#E8DFD0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Tailored Portfolio</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2444] mb-4">
            Our Bespoke Creations
          </h2>
          <p className="text-sm sm:text-base text-[#4B5B72] leading-relaxed">
            Explore authentic pieces made by Sarah for clients across Nigeria and abroad. Each outfit is crafted
            to measurement with custom lead times and transparent prices in Nigerian Naira ({siteConfig.currency.symbol}).
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count =
              cat === 'All'
                ? collectionItems.length
                : collectionItems.filter((i) => i.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`min-h-[44px] px-5 py-2.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap shrink-0 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#0F2444] text-white shadow-md scale-102 font-semibold'
                    : 'bg-white text-[#4B5B72] hover:text-[#0F2444] hover:bg-slate-100/70 border border-[#E2E8F0]'
                }`}
                aria-pressed={isSelected}
              >
                <span>{cat}</span>
                <span
                  className={`text-[11px] tabular-nums px-2 py-0.5 rounded-full ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 text-[#7A899E]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedItems.map((item, index) => {
            const hasError = imageErrors[item.id];

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                style={{ animationDelay: `${(index % 4) * 100}ms` }}
              >
                {/* 3:4 Aspect Ratio Image */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
                  {hasError ? (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-100 to-[#F6F9FD]">
                      <div className="w-12 h-12 rounded-full bg-[#0F2444]/10 text-[#0F2444] flex items-center justify-center mb-2 font-serif-luxury text-xl font-bold">
                        S
                      </div>
                      <p className="text-xs font-semibold text-[#0F2444] line-clamp-1">{item.title}</p>
                      <p className="text-[11px] text-[#7A899E] mt-1">{item.category}</p>
                    </div>
                  ) : (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      loading="lazy"
                      onError={() => handleImageError(item.id)}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                  )}

                  {/* Desktop Hover Overlay */}
                  <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-[#0F2444]/95 via-[#0F2444]/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col justify-end p-5 text-white">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-[#C5A059] mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif-luxury text-lg font-bold leading-snug line-clamp-2">
                      {item.title}
                    </h3>

                    {item.price && (
                      <p className="text-base font-bold text-white mt-1 tabular-nums">
                        {siteConfig.currency.symbol}
                        {item.price.toLocaleString()}
                      </p>
                    )}

                    {item.leadTime && (
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-300 mt-1">
                        <Clock className="w-3 h-3 text-[#C5A059]" />
                        <span>Lead time: {item.leadTime}</span>
                      </div>
                    )}

                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-white/95 bg-white/20 hover:bg-white/30 backdrop-blur-xs px-3.5 py-1.5 rounded-lg w-fit transition-colors">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View & Order</span>
                    </div>
                  </div>
                </div>

                {/* Mobile Info & Card Base */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#7A899E] mb-1">
                      <span className="font-semibold text-[#C5A059] uppercase tracking-wider text-[11px]">
                        {item.category}
                      </span>
                      {item.price && (
                        <span className="font-bold text-[#0F2444] tabular-nums text-sm">
                          {siteConfig.currency.symbol}
                          {item.price.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif-luxury text-base font-bold text-[#0E1A2B] group-hover:text-[#0F2444] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#4B5B72] line-clamp-2 mt-1">
                      {item.description}
                    </p>
                  </div>

                  {item.leadTime && (
                    <div className="flex items-center gap-1 text-[11px] text-[#7A899E] mt-3 pt-2.5 border-t border-slate-100">
                      <Clock className="w-3 h-3 text-[#C5A059] shrink-0" />
                      <span className="truncate">Turnaround: {item.leadTime}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredItems.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="min-h-[46px] px-8 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0F2444] hover:text-white bg-white hover:bg-[#0F2444] border-2 border-[#0F2444] rounded-xl transition-all duration-300 shadow-sm active:scale-98"
            >
              Load More Outfits ({filteredItems.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxItem.title}
        >
          {/* Backdrop Click */}
          <div className="absolute inset-0" onClick={closeLightbox} />

          {/* Modal Card */}
          <div className="relative z-10 bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row overflow-hidden border border-slate-100">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 z-20 p-2.5 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-black transition-colors shadow-sm focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: Image or Video */}
            <div className="md:w-1/2 bg-slate-100 relative min-h-[380px] flex items-center justify-center">
              {activeLightboxItem.videoUrl ? (
                <video
                  src={activeLightboxItem.videoUrl}
                  controls
                  autoPlay
                  loop
                  className="w-full h-full object-cover max-h-[520px]"
                />
              ) : (
                <img
                  src={activeLightboxItem.imageUrl}
                  alt={activeLightboxItem.title}
                  className="w-full h-full object-cover max-h-[520px]"
                />
              )}

              {/* Prev / Next Controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevLightboxItem();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md transition-all active:scale-90"
                aria-label="Previous outfit"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextLightboxItem();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md transition-all active:scale-90"
                aria-label="Next outfit"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right Column: Garment Details */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C5A059] uppercase tracking-wider mb-2">
                  <Tag className="w-3.5 h-3.5" />
                  <span>{activeLightboxItem.category} Collection</span>
                </div>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#0F2444] mb-3 leading-snug">
                  {activeLightboxItem.title}
                </h3>

                {activeLightboxItem.price && (
                  <div className="text-2xl font-bold text-[#0F2444] mb-4 tabular-nums">
                    {siteConfig.currency.symbol}
                    {activeLightboxItem.price.toLocaleString()}
                    <span className="text-xs font-normal text-[#7A899E] ml-2 font-sans-clean">
                      (Bespoke Tailoring Fee)
                    </span>
                  </div>
                )}

                <p className="text-sm text-[#4B5B72] leading-relaxed mb-6 font-light">
                  {activeLightboxItem.description}
                </p>

                {/* Fabric & Lead Time specs */}
                <div className="space-y-3 py-4 border-t border-b border-slate-100 text-xs text-[#4B5B72] mb-6">
                  {activeLightboxItem.fabricDetails && (
                    <div className="flex items-start gap-2.5">
                      <span className="font-semibold text-[#0F2444] min-w-[70px]">Fabric:</span>
                      <span>{activeLightboxItem.fabricDetails}</span>
                    </div>
                  )}

                  {activeLightboxItem.leadTime && (
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span className="font-semibold text-[#0F2444] min-w-[70px]">Lead Time:</span>
                      <span className="font-medium text-[#0F2444]">{activeLightboxItem.leadTime}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-2.5 text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-lg">
                    <span>Direct nationwide delivery to all 36 states upon completion.</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                <button
                  onClick={() => handleBookStyle(activeLightboxItem.title)}
                  className="w-full min-h-[48px] flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#0F2444] hover:bg-[#183B70] rounded-xl shadow-md transition-all duration-200 active:scale-98"
                >
                  <Calendar className="w-4 h-4 text-[#C5A059]" />
                  <span>Order / Book This Style</span>
                </button>
                <p className="text-[11px] text-center text-[#7A899E] mt-2">
                  Pre-fills "{activeLightboxItem.title}" into your booking form
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
