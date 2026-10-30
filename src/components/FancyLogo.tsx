import React from 'react';

interface FancyLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const FancyLogo: React.FC<FancyLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
}) => {
  const isLight = variant === 'light';

  // Sizing definitions
  const dimensions = {
    sm: { icon: 34, textMain: 'text-base sm:text-lg', textSub: 'text-[9px]' },
    md: { icon: 42, textMain: 'text-lg sm:text-xl', textSub: 'text-[10px]' },
    lg: { icon: 54, textMain: 'text-2xl sm:text-3xl', textSub: 'text-xs' },
  }[size];

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* Fancy Haute Couture Monogram Emblem */}
      <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg
          width={dimensions.icon}
          height={dimensions.icon}
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-xs"
        >
          {/* Subtle Outer Octagonal / Rounded Diamond Luxury Crest */}
          <rect
            x="3"
            y="3"
            width="54"
            height="54"
            rx="12"
            fill={isLight ? '#FFFFFF' : '#0F2444'}
            stroke="#C5A059"
            strokeWidth="1.5"
            strokeOpacity="0.85"
          />
          {/* Inner Golden Hairline Frame */}
          <rect
            x="7"
            y="7"
            width="46"
            height="46"
            rx="8"
            fill="none"
            stroke="#C5A059"
            strokeWidth="0.75"
            strokeDasharray="2 2"
            strokeOpacity="0.6"
          />

          {/* Stylized Interlocking Monogram: S & K */}
          {/* Elegant Serif 'S' */}
          <path
            d="M32 17C26 17 22 20 22 24.5C22 30 35 29 35 34.5C35 38.5 30.5 41 25.5 40C22 39.3 19.5 37.5 18 36"
            stroke={isLight ? '#0F2444' : '#C5A059'}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Stylized 'K' Stem & Arms (formed like tailored fashion scissors / needle) */}
          <path
            d="M34 16L34 42"
            stroke="#C5A059"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M44 19L35 29L45 41"
            stroke="#C5A059"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Tailor's Golden Needle Eye / Crown Accent */}
          <circle cx="34" cy="18" r="1.5" fill="#FFFFFF" />
          <path
            d="M40 14L42 10L44 14"
            stroke="#C5A059"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Luxury Wordmark Typography */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-serif-luxury font-bold tracking-wider uppercase transition-colors duration-200 ${dimensions.textMain} ${
            isLight ? 'text-white group-hover:text-[#C5A059]' : 'text-[#0F2444] group-hover:text-[#183B70]'
          }`}
        >
          Sarah Skye
        </span>
        <span
          className={`font-sans-clean font-semibold tracking-[0.25em] uppercase text-[#C5A059] mt-0.5 ${dimensions.textSub}`}
        >
          Collection
        </span>
      </div>
    </div>
  );
};
