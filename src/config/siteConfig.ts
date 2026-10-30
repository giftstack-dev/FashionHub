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
  subtitle: 'Bespoke fashion design and made-to-measure tailoring based in Delta State, Nigeria. Online atelier with nationwide delivery.',
  aboutSummary:
    'Founded by lead designer Sarah, Sarahskye Collection is a bespoke atelier based in Delta State, Nigeria, specializing in made-to-measure fashion, elegant traditional attire, corporate power wear, and bridal dresses. With over 2+ years of hands-on tailoring and 40+ custom outfits crafted, we bring your dream styles to life.',

  // Direct Contact (Instagram removed per user request)
  phone: '+234 805 197 9345',
  phoneRaw: '+2348051979345',
  whatsappNumber: '2348051979345',
  email: 'sarahskye500@gmail.com',

  // Studio & Delivery Policy (Based in Delta State, No physical shop, Delivery across Delta & nationwide)
  location: {
    hasPhysicalShop: false,
    hubCity: 'Delta State, Nigeria',
    serviceModel: 'Online Bespoke Atelier & Made-to-Measure Studio',
    deliveryScope: 'Delivery available across Delta State and nationwide across Nigeria via trusted courier waybills.',
    couriers: ['GIG Logistics', 'DHL Express', 'Interstate Transport Waybills'],
    fittingNote: 'Fittings are accurately done through our guided measurement chart, with personal WhatsApp consultation with Sarah.',
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
      description: 'Exclusive custom outfit tailored to your measurements and event specifications.',
    },
    {
      id: 'sewn-outfit',
      name: 'Sewn Outfit (Made-to-Measure / Cut & Sew)',
      description: 'Choose a style from our collection or send in your fabric for precision tailoring.',
    },
    {
      id: 'traditional-owambe',
      name: 'Traditional / Owambe Attire',
      description: 'Teal lace, sapphire lace, boubou gowns, and cold-shoulder Ankara dresses.',
    },
    {
      id: 'corporate-wear',
      name: 'Corporate & Executive Wear',
      description: 'Ankara panel shirt dresses, tailored power suits, and chic blouses.',
    },
    {
      id: 'bridal-reception',
      name: 'Bridal & Reception Wear',
      description: 'Blue ombre gowns, terracotta ruffled tulle gowns, and couples native sets.',
    },
    {
      id: 'kids-couture',
      name: 'Kids Occasion Wear',
      description: 'Charming printed pinafores and pleated party frocks for little ones.',
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

  // Updated Pricing Guide based on user's exact price lists
  pricingGuide: [
    {
      category: 'Casual & Everyday Chic',
      startingPrice: 10000,
      popularFor: 'Tops with floral skirts (₦10,000), Ankara trousers (₦12,000), Duo sets (₦20,000)',
      turnaroundTime: '3 – 5 working days',
      description: 'Comfortable everyday statements crafted with floral prints, drop-waist cuts, and wide-leg Ankara trousers.',
      features: ['Floral skirts & tops', 'Ankara palazzo trousers', 'Cardigan & pant co-ords'],
    },
    {
      category: 'Corporate & Power Dressing',
      startingPrice: 12000,
      popularFor: 'Shirt dresses (₦17,000), Blouse & trousers (₦15,000), Vest & suit sets (₦12,000 – ₦42,000)',
      turnaroundTime: '4 – 6 working days',
      description: 'Smart executive workwear, Ankara panel shirt dresses, convocation sets, and tailored couple suits.',
      features: ['Ankara panel shift dress', 'Convocation vest & pant sets', 'Couple formal gala suit sets'],
    },
    {
      category: 'Traditional & Owambe',
      startingPrice: 14000,
      popularFor: 'Ankara dresses (₦14,000), Kaftan gowns (₦17,000), Lace two-pieces (₦27,000 – ₦30,000)',
      turnaroundTime: '4 – 7 working days',
      description: 'Stunning Nigerian celebration wear featuring teal & sapphire lace, boubou gowns, and cold-shoulder Ankara styles.',
      features: ['Teal & blue lace two-piece sets', 'Printed silk boubou gowns', 'Cold-shoulder lace/Ankara styles'],
    },
    {
      category: 'Bridal & Ceremony Gowns',
      startingPrice: 35000,
      popularFor: 'Blue ombre gowns (₦40,000), Red ruffled tulle gowns (₦35,000), Men’s native sets (₦17,000 extra)',
      turnaroundTime: '2 – 3 weeks',
      description: 'Memorable wedding reception gowns and couple engagement sets adorned with cascading organza ruffles and ombre silk.',
      features: ['Sapphire blue ombre silk gown', 'Red ruffled tulle boubou gown', 'Matching men’s native wear option'],
    },
    {
      category: 'Kids Occasion Wear',
      startingPrice: 5500,
      popularFor: 'Printed party top with pleated skirt (₦5,500)',
      turnaroundTime: '3 – 5 working days',
      description: 'Sweet, comfortable children’s party wear designed with bright prints and pleated hems.',
      features: ['100% breathable cotton', 'Shoulder ribbon ties', 'Comfort pleated hem'],
    },
  ],

  // Client Testimonials
  testimonials: [
    {
      id: 't-1',
      name: 'Joy Efe',
      role: 'Client from Warri, Delta State',
      location: 'Delta State',
      outfit: 'Teal Lace Two-Piece Owambe Set (₦30,000)',
      quote:
        'Sarah made my teal lace outfit in just 5 days. The fit was so precise without any in-person drama. Her customer care on WhatsApp made the entire process so easy!',
      rating: 5,
    },
    {
      id: 't-2',
      name: 'Blessing Osagie',
      role: 'Corporate Professional',
      location: 'Benin City (Delivered from Delta)',
      outfit: 'Ankara Panel Shirt Dress (₦17,000)',
      quote:
        'The Ankara panel shirt dress is my favorite work outfit now! The neat stitching and high-quality crepe fabric make it look way more expensive than ₦17,000.',
      rating: 5,
    },
    {
      id: 't-3',
      name: 'Kevwe & Oghenero',
      role: 'Newlyweds',
      location: 'Delta State',
      outfit: 'Terracotta Red Ruffled Gown & Matching Men’s Set',
      quote:
        'We ordered the couple ceremony set for our engagement. The red ruffled tulle gown was breathtaking and my husband’s matching native was sharp. Sarah is our go-to designer!',
      rating: 5,
    },
  ],

  // Frequently Asked Questions
  faqs: [
    {
      number: '01',
      question: 'Where are you located and do you have a walk-in shop?',
      answer:
        'Sarahskye Collection is based in Delta State, Nigeria. We currently operate as a pure online bespoke atelier without a walk-in showroom, allowing us to focus on tailored made-to-measure orders with affordable rates.',
    },
    {
      number: '02',
      question: 'How does delivery work?',
      answer:
        'We offer prompt delivery across Delta State (Asaba, Warri, Ughelli, etc.) and nationwide delivery across Nigeria via reliable logistics and waybill services. Delivery typically takes 1 to 3 days after completion.',
    },
    {
      number: '03',
      question: 'What are the turnaround lead times?',
      answer:
        'Casual and kids outfits take 3 to 5 working days. Corporate shirt dresses take 4 to 6 working days. Traditional lace sets take 4 to 7 working days. Bridal gowns take 2 to 3 weeks. Rush orders are available upon request.',
    },
    {
      number: '04',
      question: 'How do I submit measurements if you are in Delta State?',
      answer:
        'Click our "Measurement Guide" button for simple step-by-step instructions. You can send your bust, waist, hips, and length directly to Sarah on WhatsApp or via the booking form.',
    },
    {
      number: '05',
      question: 'How do I pay for my order?',
      answer:
        'Payments are made securely via direct bank transfer. A 70% commitment deposit is required to commence fabric cutting and tailoring, with the balance paid before dispatch.',
    },
  ],
};
