/**
 * =========================================================================
 * SARAHSKYE FASHIONHUB - SITE CONFIGURATION
 * =========================================================================
 * Centralized configuration for brand details, contact info, delivery
 * policies, pricing guides, and FAQs.
 */

export const siteConfig = {
  // Brand identity
  brandName: 'Sarahskye FashionHub',
  brandWordmark: 'Sarah Skye Collection',
  tagline: 'Crafted with love. Tailored to you.',
  subtitle: 'Bespoke fashion design and made-to-measure tailoring. Purely online atelier with nationwide & global delivery.',
  aboutSummary:
    'Founded by lead designer Sarah, Sarahskye Collection is a premier bespoke atelier specializing in made-to-measure fashion, regal African traditional attire, corporate power wear, and bridal splendor. We operate as an online bespoke studio offering nationwide delivery across all Nigerian states and worldwide shipping.',

  // Direct Contact & Socials
  phone: '+234 805 197 9345',
  phoneRaw: '+2348051979345',
  whatsappNumber: '2348051979345',
  email: 'sarahskye500@gmail.com', // Updated designer email
  instagramHandle: '@sarahskye_fashionhub',
  instagramUrl: 'https://instagram.com/sarahskye_fashionhub',

  // Studio & Delivery Policy (No physical shop currently, Nationwide delivery)
  location: {
    hasPhysicalShop: false,
    hubCity: 'Lagos, Nigeria',
    serviceModel: 'Online Bespoke Atelier & Made-to-Measure Studio',
    deliveryScope: 'Nationwide Delivery across all 36 States in Nigeria & International Shipping (UK, US, Canada, Europe)',
    couriers: ['GIG Logistics', 'DHL Express', 'Interstate Waybill Couriers'],
    fittingNote: 'Fittings are handled via our precision measurement guide. Concierge in-person fitting in Lagos available by advance appointment.',
  },

  // Working Hours (Monday - Saturday 9am-5pm)
  workingHours: {
    display: 'Monday – Saturday, 9:00 AM – 5:00 PM',
    sunday: 'Sunday: Closed (Available for bridal inquiries by appointment)',
    schedule: [
      { days: 'Monday – Friday', hours: '9:00 AM – 5:00 PM' },
      { days: 'Saturday', hours: '9:00 AM – 5:00 PM' },
      { days: 'Sunday', hours: 'Closed' },
    ],
    openHour: 9,
    closeHour: 17,
    workDays: [1, 2, 3, 4, 5, 6],
  },

  // Booking Options & Service Types
  bookingServices: [
    {
      id: 'custom-outfit',
      name: 'Custom Outfit (Bespoke Design from Scratch)',
      description: 'Exclusive bespoke outfit designed and cut specifically to your silhouette and event.',
    },
    {
      id: 'sewn-outfit',
      name: 'Sewn Outfit (Made-to-Measure / Cut & Sew)',
      description: 'Send us your measurements or fabric, or choose a design from our collection catalog.',
    },
    {
      id: 'traditional-owambe',
      name: 'Traditional / Owambe Attire & Aso-Ebi',
      description: 'Bespoke lace, brocade, agbada, or corset iro & buba tailored for weddings and celebrations.',
    },
    {
      id: 'corporate-wear',
      name: 'Corporate & Power Suit Tailoring',
      description: 'Impeccable executive blazers, shift dresses, and tailored trousers for the workplace.',
    },
    {
      id: 'bridal-consultation',
      name: 'Bridal & Reception Consultation',
      description: 'Comprehensive styling session for brides, groom sets, and wedding reception gowns.',
    },
  ],

  // Available Time Slots for consultations
  timeSlots: [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
  ],

  // Currency
  currency: {
    symbol: '₦',
    code: 'NGN',
    name: 'Nigerian Naira',
  },

  // Pricing & "Starting From" Guide
  pricingGuide: [
    {
      category: 'Casual & Resort Wear',
      startingPrice: 35000,
      popularFor: 'Ankara palazzo pants, Crop shirts, Drop-waist dresses, Co-ord sets',
      turnaroundTime: '3 – 5 working days',
      description: 'Effortless everyday chic made with breathable cottons, Dutch wax prints, and tailored finishes.',
      features: ['Pre-shrunk authentic African prints', 'High-waisted tailored bands', 'Comfortable French seams'],
    },
    {
      category: 'Corporate & Executive',
      startingPrice: 42000,
      popularFor: 'Shirt dresses, Power suits, Peplum blouses, Academic convocation sets',
      turnaroundTime: '4 – 7 working days',
      description: 'Sharp, commandingly elegant corporate apparel cut for daily professional comfort.',
      features: ['Precision seam allowances', 'Contrast piping & Ankara panels', 'Crease-resistant structure'],
    },
    {
      category: 'Traditional & Native',
      startingPrice: 38000,
      popularFor: 'Lace peplum blouses, Corset iro & buba, Boubou maxi gowns, Agbada sets',
      turnaroundTime: '4 – 7 working days',
      description: 'Exquisite African heritage wear adorned with cord lace, floral motifs, and rich brocades.',
      features: ['Handcrafted detailing', 'Breathable inner lining', 'Generous seam allowances for easy adjustments'],
    },
    {
      category: 'Bridal & Reception',
      startingPrice: 85000,
      popularFor: 'Dip-dye ombre reception gowns, Couple wedding sets, Ruffled boubou gowns',
      turnaroundTime: '2 – 3 weeks',
      description: 'Luxurious heirloom wedding creations with cascading organza ruffles, silk ombres, and beadwork.',
      features: ['Design sketch & consultation', 'Couple matching options', 'Complimentary garment bag'],
    },
    {
      category: 'Kids & Mini Couture',
      startingPrice: 22000,
      popularFor: 'Birthday frocks, Shoulder-tie party dresses, Holiday pinafores',
      turnaroundTime: '3 – 5 working days',
      description: 'Skin-friendly, comfortable children’s occasion wear tailored with soft inner linings.',
      features: ['100% hypoallergenic cotton lining', 'Adjustable shoulder ties', 'Room-to-grow seam margins'],
    },
  ],

  // Client Testimonials
  testimonials: [
    {
      id: 't-1',
      name: 'Bukola Adeleke',
      role: 'Client from Abuja',
      location: 'Nationwide Delivery',
      outfit: 'Royal Sapphire Beaded Lace Peplum & Scalloped Skirt',
      quote:
        'I ordered my traditional wedding guest attire from Abuja without an in-person fitting. Sarah followed my measurements to the millimeter. The royal blue lace and beadwork were stunning, and delivery was right on time!',
      rating: 5,
    },
    {
      id: 't-2',
      name: 'Temitope Olatunji',
      role: 'Graduate & Corporate Analyst',
      location: 'Lagos, Nigeria',
      outfit: 'Honor Convocation Satin Power Suit',
      quote:
        'Sarah tailored my royal blue convocation suit with the white contrast jacket. Everyone at the ceremony kept asking who made it. Her attention to detail and customer care on WhatsApp are second to none.',
      rating: 5,
    },
    {
      id: 't-3',
      name: 'Ngozi Okonkwo',
      role: 'Bride',
      location: 'Port Harcourt',
      outfit: 'Terracotta Couple Engagement Ceremony Set',
      quote:
        'The matching terracotta couple set for my husband and me arrived in Port Harcourt via waybill in pristine condition. The organza ruffles on my boubou gown flowed like a dream. Thank you Sarah!',
      rating: 5,
    },
  ],

  // Frequently Asked Questions
  faqs: [
    {
      number: '01',
      question: 'Do you have a physical walk-in shop?',
      answer:
        'We currently operate as a pure online bespoke atelier. This allows us to serve clients across all 36 states in Nigeria and internationally with customized attention. Fittings are accurately done using our step-by-step measurement guide.',
    },
    {
      number: '02',
      question: 'How does nationwide delivery work?',
      answer:
        'We ship to all 36 states in Nigeria via trusted domestic couriers (GIG Logistics, DHL, and interstate park waybill services). Delivery typically takes 24 to 72 hours once your garment is completed.',
    },
    {
      number: '03',
      question: 'What is the standard lead time for an outfit?',
      answer:
        'Casual and corporate outfits take 3 to 6 working days. Traditional lace and boubou gowns take 4 to 7 working days. Bridal gowns and elaborate couple sets take 2 to 3 weeks. Express rush orders are available on request.',
    },
    {
      number: '04',
      question: 'Can I send my own fabric or picture inspiration?',
      answer:
        'Yes! You can send us inspiration photos or sketches via WhatsApp or our booking form. You can also waybill your fabric directly to us in Lagos or have Sarah source premium fabrics on your behalf.',
    },
    {
      number: '05',
      question: 'How do I submit my measurements without a physical fitting?',
      answer:
        'Click our "Measurement Guide" button to see our easy visual instructions for measuring bust, waist, hips, and length. You can type them into the booking form or send them to Sarah on WhatsApp.',
    },
    {
      number: '06',
      question: 'What happens if my outfit needs minor adjustments?',
      answer:
        'Every outfit is tailored with generous inner seam allowances. If any minor alteration is ever needed, our local delivery guarantee covers adjustments, or we guide your local tailor with exact specs.',
    },
  ],
};
