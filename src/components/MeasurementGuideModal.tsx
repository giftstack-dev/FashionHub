import React from 'react';
import { X, Ruler, CheckCircle2, AlertCircle } from 'lucide-react';

interface MeasurementGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MeasurementGuideModal: React.FC<MeasurementGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const guidePoints = [
    {
      title: '1. Bust / Chest',
      desc: 'Measure around the fullest part of your bust/chest. Keep the tape parallel to the floor, breathing naturally.',
    },
    {
      title: '2. Underbust',
      desc: 'Directly beneath the bust line where a bra band sits. Essential for corset bodices and fitted tops.',
    },
    {
      title: '3. Natural Waist',
      desc: 'Locate the narrowest part of your torso, typically 1 to 2 inches above your navel. Do not suck in your stomach.',
    },
    {
      title: '4. Full Hips',
      desc: 'Stand with heels together and measure around the fullest curve of your hips and buttocks.',
    },
    {
      title: '5. Shoulder to Shoulder',
      desc: 'Measure horizontally across the back from the edge of one shoulder bone to the other.',
    },
    {
      title: '6. Sleeve Length',
      desc: 'From the tip of the shoulder bone down to your wrist bone (with elbow slightly bent).',
    },
    {
      title: '7. Gown / Trouser Length',
      desc: 'From the waist (or shoulder) down to the floor, wearing the heel height you intend to wear for the event.',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Atelier Measurement Guide"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
          aria-label="Close guide"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#0F2444] text-[#C5A059] flex items-center justify-center">
            <Ruler className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif-luxury text-2xl font-bold text-[#0F2444]">
              Measurement Guide
            </h3>
            <p className="text-xs text-[#7A899E]">For Bespoke & Sewn Outfits</p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD0] mb-6 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
          <p className="text-xs text-[#4B5B72] leading-relaxed">
            <strong className="text-[#0F2444]">Tailor Pro Tip:</strong> Use a flexible fiberglass measuring
            tape (inches). Have a friend assist you if possible, and wear lightweight undergarments for the
            truest measurements.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {guidePoints.map((point, index) => (
            <div key={index} className="p-3.5 rounded-lg border border-slate-100 hover:bg-slate-50/60 transition-colors">
              <h4 className="text-sm font-semibold text-[#0F2444] mb-1">{point.title}</h4>
              <p className="text-xs text-[#4B5B72] leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
          <p className="text-xs text-[#7A899E]">
            You can type your measurements into the notes box of the booking form!
          </p>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#0F2444] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#183B70] transition-colors"
          >
            Got It, Proceed
          </button>
        </div>
      </div>
    </div>
  );
};
