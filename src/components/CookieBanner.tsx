import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('sarahskye_cookie_consent');
    if (!consent) {
      // Delay showing by 1s for pleasant initial page entry
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('sarahskye_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('sarahskye_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/95 backdrop-blur-md border-t border-[#E2E8F0] shadow-lg animate-fade-in"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] text-[#C5A059] flex items-center justify-center shrink-0 border border-[#E8DFD0]">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <p className="text-xs text-[#4B5B72] leading-relaxed">
            We use essential browser storage to remember your custom preferences and optimize your bespoke
            consultation experience on <strong className="text-[#0F2444]">Sarahskye FashionHub</strong>.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={handleDecline}
            className="min-h-[40px] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#4B5B72] hover:text-[#0F2444] rounded-lg transition-colors"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="min-h-[40px] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#0F2444] hover:bg-[#183B70] rounded-lg shadow-xs transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};
