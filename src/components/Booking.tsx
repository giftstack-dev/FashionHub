import React, { useState, useEffect } from 'react';
import { Calendar, Clock, CheckCircle2, Send, Mail, Phone, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface BookingProps {
  prefilledStyle: string;
  onClearPrefill: () => void;
  onOpenMeasurementGuide: () => void;
}

export const Booking: React.FC<BookingProps> = ({
  prefilledStyle,
  onClearPrefill,
  onOpenMeasurementGuide,
}) => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('custom-outfit');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00 AM');
  const [styleNotes, setStyleNotes] = useState('');
  const [measurementsOrNotes, setMeasurementsOrNotes] = useState('');

  // Validation & Submission State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    whatsappUrl: string;
    mailToUrl: string;
  } | null>(null);

  // Sync pre-filled style from gallery / pricing
  useEffect(() => {
    if (prefilledStyle) {
      setStyleNotes(prefilledStyle);
    }
  }, [prefilledStyle]);

  // Today's minimum date string YYYY-MM-DD
  const todayString = new Date().toISOString().split('T')[0];

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }

    if (!phone.trim()) {
      errs.phone = 'Please enter your contact phone number';
    } else if (phone.replace(/\D/g, '').length < 8) {
      errs.phone = 'Please enter a valid phone number (at least 8 digits)';
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!date) {
      errs.date = 'Please pick a preferred appointment date';
    } else if (date < todayString) {
      errs.date = 'Appointment date cannot be in the past';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const constructMessages = () => {
    const selectedService = siteConfig.bookingServices.find((s) => s.id === serviceType)?.name || serviceType;

    const summaryText =
`*New Booking Request - Sarahskye FashionHub*
---------------------------------------
*Client Name:* ${fullName.trim()}
*Phone:* ${phone.trim()}
${email.trim() ? `*Email:* ${email.trim()}\n` : ''}*Service:* ${selectedService}
*Preferred Date:* ${date}
*Preferred Time:* ${time}
*Style / Occasion:* ${styleNotes.trim() || 'General consultation'}
${measurementsOrNotes.trim() ? `*Notes / Measurements:*\n${measurementsOrNotes.trim()}\n` : ''}---------------------------------------
_Sent via Sarahskye Collection website_`;

    const encodedWhatsApp = encodeURIComponent(summaryText);
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedWhatsApp}`;

    const emailSubject = encodeURIComponent(`Booking Request: ${fullName.trim()} - ${selectedService}`);
    const emailBody = encodeURIComponent(
`New Booking Request for Sarahskye FashionHub:

Client Name: ${fullName.trim()}
Phone: ${phone.trim()}
Email: ${email.trim() || 'N/A'}
Service: ${selectedService}
Preferred Date: ${date}
Preferred Time: ${time}
Style / Occasion: ${styleNotes.trim() || 'General consultation'}

Additional Notes / Measurements:
${measurementsOrNotes.trim() || 'None provided'}

Thank you!
`
    );
    const mailToUrl = `mailto:${siteConfig.email}?subject=${emailSubject}&body=${emailBody}`;

    return { whatsappUrl, mailToUrl };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const { whatsappUrl, mailToUrl } = constructMessages();
    setSubmittedData({ whatsappUrl, mailToUrl });
    setIsSubmitted(true);

    // Auto-open WhatsApp after a brief 500ms delay for feedback
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setDate('');
    setStyleNotes('');
    setMeasurementsOrNotes('');
    onClearPrefill();
  };

  return (
    <section id="booking" className="py-20 sm:py-24 bg-[#FAF7F2] border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Appointment & Fitting</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2444] mb-3">
            Book an Appointment
          </h2>
          <p className="text-sm sm:text-base text-[#4B5B72]">
            Reserve your consultation for custom bespoke creations or precision-sewn outfits. We confirm
            every booking within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Atelier Hours & Assurance Note */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] shadow-xs">
              <h3 className="font-serif-luxury text-xl font-bold text-[#0F2444] mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#C5A059]" />
                <span>Studio Working Hours</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-[#4B5B72] border-b border-slate-100 pb-4 mb-4">
                <div className="flex justify-between items-center py-1">
                  <span className="font-medium text-[#0F2444]">Monday – Friday</span>
                  <span className="tabular-nums font-semibold">9:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-medium text-[#0F2444]">Saturday</span>
                  <span className="tabular-nums font-semibold">9:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-1 text-slate-500">
                  <span>Sunday</span>
                  <span className="font-medium text-amber-800">Closed (By appt)</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD0] text-xs text-[#0F2444] space-y-1.5">
                <p className="font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Online Atelier · 24-Hr Confirmation</span>
                </p>
                <p className="text-[#4B5B72] text-[11px] leading-relaxed">
                  We operate as an online bespoke studio with direct, tracked doorstep delivery across all 36 Nigerian states.
                  Submitting this form connects you directly with Sarah via WhatsApp.
                </p>
              </div>
            </div>

            {/* Quick Measurement Guide Card */}
            <div className="bg-[#0F2444] text-white rounded-2xl p-6 sm:p-7 shadow-md">
              <h4 className="font-serif-luxury text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span>Nationwide & Diaspora Clients</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                No physical shop visit needed! We cater to clients throughout Nigeria and overseas. Simply provide your
                measurements using our step-by-step visual chart.
              </p>
              <button
                type="button"
                onClick={onOpenMeasurementGuide}
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#0F2444] bg-[#C5A059] hover:bg-[#A8843D] rounded-lg transition-colors text-center"
              >
                Open Measurement Guide
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm relative">
              {/* Success Screen after submission */}
              {isSubmitted && submittedData ? (
                <div className="py-8 text-center animate-fade-in space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#0F2444] mb-2">
                      Appointment Details Ready!
                    </h3>
                    <p className="text-sm text-[#4B5B72] max-w-md mx-auto">
                      Your booking summary has been prepared. WhatsApp should open automatically. If it
                      didn't pop up, please tap below:
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-2">
                    <a
                      href={submittedData.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-xl shadow-md transition-all active:scale-98"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Open in WhatsApp</span>
                    </a>

                    <a
                      href={submittedData.mailToUrl}
                      className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#0F2444] hover:text-[#C5A059] bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all"
                    >
                      <Mail className="w-4 h-4 text-[#C5A059]" />
                      <span>Send by Email Instead</span>
                    </a>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-[#7A899E] hover:text-[#0F2444] underline underline-offset-4"
                    >
                      Submit another booking or reset form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {prefilledStyle && (
                    <div className="p-3 bg-[#FAF7F2] border border-[#E8DFD0] rounded-xl flex items-center justify-between text-xs text-[#0F2444]">
                      <span>
                        Booking requested for style: <strong className="text-[#C5A059]">{prefilledStyle}</strong>
                      </span>
                      <button
                        type="button"
                        onClick={onClearPrefill}
                        className="text-[#7A899E] hover:text-red-500 font-medium ml-2"
                      >
                        Clear
                      </button>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2444] mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder="e.g. Adetola Balogun"
                        className={`w-full px-4 py-3 text-sm rounded-xl border bg-white text-[#0E1A2B] placeholder:text-slate-400 focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                            : 'border-[#E2E8F0] focus:border-[#C5A059]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2444] mb-1.5">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="e.g. +234 800 000 0000"
                        className={`w-full px-4 py-3 text-sm rounded-xl border bg-white text-[#0E1A2B] placeholder:text-slate-400 focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                            : 'border-[#E2E8F0] focus:border-[#C5A059]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email (Optional) */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2444] mb-1.5">
                        Email Address <span className="text-xs text-[#7A899E] font-normal">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="e.g. yourname@domain.com"
                        className={`w-full px-4 py-3 text-sm rounded-xl border bg-white text-[#0E1A2B] placeholder:text-slate-400 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-[#E2E8F0] focus:border-[#C5A059]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Service Type Selection */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2444] mb-1.5">
                        Service Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-[#E2E8F0] bg-white text-[#0E1A2B] focus:outline-none focus:border-[#C5A059] transition-colors"
                      >
                        {siteConfig.bookingServices.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Preferred Date */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2444] mb-1.5">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        min={todayString}
                        value={date}
                        onChange={(e) => {
                          setDate(e.target.value);
                          if (errors.date) setErrors({ ...errors, date: '' });
                        }}
                        className={`w-full px-4 py-3 text-sm rounded-xl border bg-white text-[#0E1A2B] focus:outline-none transition-colors ${
                          errors.date
                            ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                            : 'border-[#E2E8F0] focus:border-[#C5A059]'
                        }`}
                      />
                      {errors.date && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.date}</span>
                        </p>
                      )}
                    </div>

                    {/* Preferred Time Slot */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2444] mb-1.5">
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-[#E2E8F0] bg-white text-[#0E1A2B] focus:outline-none focus:border-[#C5A059] transition-colors"
                      >
                        {siteConfig.timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Style or Occasion */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2444] mb-1.5">
                      Style Title or Occasion
                    </label>
                    <input
                      type="text"
                      value={styleNotes}
                      onChange={(e) => setStyleNotes(e.target.value)}
                      placeholder="e.g. Traditional wedding aso-ebi, Corporate blazer set, etc."
                      className="w-full px-4 py-3 text-sm rounded-xl border border-[#E2E8F0] bg-white text-[#0E1A2B] placeholder:text-slate-400 focus:outline-none focus:border-[#C5A059] transition-colors"
                    />
                  </div>

                  {/* Measurements or Extra Notes */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#0F2444]">
                        Measurements or Extra Notes
                      </label>
                      <button
                        type="button"
                        onClick={onOpenMeasurementGuide}
                        className="text-xs text-[#C5A059] hover:text-[#A8843D] underline font-medium"
                      >
                        Need measurement tips?
                      </button>
                    </div>
                    <textarea
                      rows={3}
                      value={measurementsOrNotes}
                      onChange={(e) => setMeasurementsOrNotes(e.target.value)}
                      placeholder="Include your bust, waist, hip measurements in inches, fabric preferences, or event date deadlines..."
                      className="w-full px-4 py-3 text-sm rounded-xl border border-[#E2E8F0] bg-white text-[#0E1A2B] placeholder:text-slate-400 focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full min-h-[50px] flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wide uppercase text-white bg-[#0F2444] hover:bg-[#183B70] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-98"
                    >
                      <Send className="w-4 h-4 text-[#C5A059]" />
                      <span>Request Booking via WhatsApp</span>
                    </button>
                    <p className="text-[11px] text-center text-[#7A899E] mt-3">
                      Submitting opens a WhatsApp chat pre-filled with your details directly to Sarah's atelier number.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
