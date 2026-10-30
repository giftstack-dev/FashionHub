/**
 * =========================================================================
 * SARAHSKYE FASHIONHUB - OFFICIAL CLIENT COLLECTION DATA & UPDATED PRICING
 * =========================================================================
 * Synced directly with designer Sarah's updated price list:
 * - Casual (Casual_01 to Casual_05)
 * - Corporate (Corporate_01 to Corporate_06)
 * - Kids (Kids_01)
 * - Bridal (Bridal_01, Bridal_02)
 * - Traditional (Traditional_01 to Traditional_09)
 */

import { CollectionItem } from '../types';

export const collectionItems: CollectionItem[] = [
  // =========================================================================
  // 1. TRADITIONAL / OWAMBE CELEBRATION WEAR
  // =========================================================================
  {
    id: 'trad-01',
    title: 'Teal Lace Two-Piece Ensemble',
    category: 'Traditional',
    imageUrl: '/images/collection/Traditional/Traditional_01.jpg',
    description: 'Teal lace two-piece outfit featuring embroidered cord lace bell sleeves, square neckline bodice, and matching tailored skirt.',
    price: 30000,
    featured: true,
    fabricDetails: 'Embroidered Teal Cord Lace, Silk Crepe Underlay',
    leadTime: '5 – 7 working days',
  },
  {
    id: 'trad-02',
    title: 'Teal Lace Two-Piece (Detail View)',
    category: 'Traditional',
    imageUrl: '/images/collection/Traditional/Traditional_02.jpg',
    description: 'Teal lace two-piece (alt. photo) showing the hand-finished neckline embellishment and tailored waist contour.',
    price: 30000,
    featured: false,
    fabricDetails: 'Embroidered Cord Lace, Soft Lining',
    leadTime: '5 – 7 working days',
  },
  {
    id: 'trad-03',
    title: 'Blue Lace Top and Skirt Set',
    category: 'Traditional',
    imageUrl: '/images/collection/Traditional/Traditional_03.jpg',
    description: 'Blue lace top and skirt set crafted with sweetheart illusion neckline, scalloped lace bell sleeves, and delicate bead accents.',
    price: 27000,
    featured: true,
    fabricDetails: 'Royal Blue French Lace, Duchess Satin Lining',
    leadTime: '5 – 7 working days',
  },
  {
    id: 'trad-04',
    title: 'Blue Lace Top and Skirt (Full View)',
    category: 'Traditional',
    imageUrl: '/images/collection/Traditional/Traditional_04.jpg',
    description: 'Blue lace top and skirt (alt. photo) displaying the full length peplum hemline and tailored pencil skirt.',
    price: 27000,
    featured: true,
    fabricDetails: 'French Cord Lace & Duchess Satin',
    leadTime: '5 – 7 working days',
  },
  {
    id: 'trad-05',
    title: 'Printed Kaftan Boubou Gown',
    category: 'Traditional',
    imageUrl: '/images/collection/Traditional/Traditional_05.jpg',
    description: 'Printed kaftan gown in navy and dusty rose floral African print with front button placket, V-neck, and side pockets.',
    price: 17000,
    featured: true,
    fabricDetails: 'African Silk Crepe, Fabric Buttons',
    leadTime: '4 – 6 working days',
  },
  {
    id: 'trad-06',
    title: 'Purple Lace / Ankara Gown',
    category: 'Traditional',
    imageUrl: '/images/collection/Traditional/Traditional_06.jpg',
    description: 'Purple lace/Ankara gown featuring geometric purple/black Ankara wax print with cold-shoulder cutouts and sheer black floral lace sleeves.',
    price: 27000,
    featured: false,
    fabricDetails: 'Geometric Dutch Wax Ankara, Stretch Black Lace',
    leadTime: '4 – 6 working days',
  },
  {
    id: 'trad-07',
    title: 'Black Lace Top with Ankara Skirt',
    category: 'Traditional',
    imageUrl: '/images/collection/Traditional/Traditional_07.jpg',
    description: 'Black lace top with Ankara skirt featuring a sheer lace illusion long-sleeve corset top and rich earth-toned Ankara fishtail wrap skirt.',
    price: 24000,
    featured: true,
    fabricDetails: 'Illusion Mesh, Black Cord Lace, African Wax Print',
    leadTime: '5 – 7 working days',
  },
  {
    id: 'trad-08',
    title: 'Cobalt Wave Ankara Dress',
    category: 'Traditional',
    imageUrl: '/images/collection/Traditional/Traditional_08.jpg',
    description: 'Ankara dress in royal blue and gold wave print featuring a crossover wrap V-neckline and solid cobalt shoulder accents.',
    price: 14000,
    featured: false,
    fabricDetails: '100% African Wax Cotton, Crepe Accent',
    leadTime: '4 – 6 working days',
  },
  {
    id: 'trad-09',
    title: 'Red Ankara Midi Dress',
    category: 'Traditional',
    imageUrl: '/images/collection/Traditional/Traditional_09.jpg',
    description: 'Red Ankara dress in vibrant scarlet floral print with wine-red crepe side contour panels and tulip cap sleeves.',
    price: 14000,
    featured: false,
    fabricDetails: 'Red Botanical Ankara Wax, Scuba Crepe Panels',
    leadTime: '4 – 6 working days',
  },

  // =========================================================================
  // 2. CASUAL & EVERYDAY CHIC
  // =========================================================================
  {
    id: 'cas-01',
    title: 'Top with Floral Skirt (Olive)',
    category: 'Casual',
    imageUrl: '/images/collection/Casual/Casual_01.jpg',
    description: 'Top with floral skirt featuring an olive green drop-waist bodice with ruffled floral bust overlay, rosette detail, and full gathered skirt.',
    price: 10000,
    featured: true,
    fabricDetails: 'Cotton Knit Bodice, Floral Cotton Flared Skirt',
    leadTime: '3 – 5 working days',
  },
  {
    id: 'cas-02',
    title: 'Top with Floral Skirt (Alt. Outfit)',
    category: 'Casual',
    imageUrl: '/images/collection/Casual/Casual_02.jpg',
    description: 'Top with floral skirt (alt. outfit) in charcoal grey top with lilac ruffle yoke trim and pastel lavender/blue swing skirt.',
    price: 10000,
    featured: false,
    fabricDetails: 'Stretch Cotton Top, Pastel Printed Flare Skirt',
    leadTime: '3 – 5 working days',
  },
  {
    id: 'cas-03',
    title: 'Two Outfits (Duo Friendship Set)',
    category: 'Casual',
    imageUrl: '/images/collection/Casual/Casual_03.jpg',
    description: 'Two outfits, ₦10,000 each (₦20,000 for the set). Coordinated bestie casual pair showcasing matching custom ruffle yokes and drop-waist gathered skirts.',
    price: 20000,
    featured: true,
    fabricDetails: 'Two matching bespoke sets (₦10,000 each)',
    leadTime: '5 – 7 working days',
  },
  {
    id: 'cas-04',
    title: 'Top with Ankara Trousers Set',
    category: 'Casual',
    imageUrl: '/images/collection/Casual/Casual_04.jpg',
    description: 'Top with Ankara trousers featuring a tailored cropped short-sleeve black button-up shirt paired with high-waisted wide-leg geometric Ankara palazzo pants.',
    price: 12000,
    featured: true,
    fabricDetails: 'Black Crisp Poplin Top, High-Density Ankara Palazzo Trousers',
    leadTime: '3 – 5 working days',
  },
  {
    id: 'cas-05',
    title: 'Cardigan Top with Trousers',
    category: 'Casual',
    imageUrl: '/images/collection/Casual/Casual_05.jpg',
    description: 'Cardigan top with trousers: buttercup yellow cropped short-sleeve overshirt layered with tailored chocolate brown wide-leg trousers.',
    price: 10000,
    featured: false,
    fabricDetails: 'Linen-Cotton Cardigan Shirt, Suiting Crepe Trousers',
    leadTime: '3 – 5 working days',
  },

  // =========================================================================
  // 3. CORPORATE & POWER WEAR
  // =========================================================================
  {
    id: 'corp-01',
    title: 'Ankara Panel Shirt Dress',
    category: 'Corporate',
    imageUrl: '/images/collection/Corporate/Corporate_01.jpg',
    description: 'Ankara panel shirt dress combining structured solid black suiting crepe with vertical half-and-half geometric Ankara print panels and collar.',
    price: 17000,
    featured: true,
    fabricDetails: 'Suiting Crepe, Dutch Wax Ankara Geometric Panel',
    leadTime: '4 – 6 working days',
  },
  {
    id: 'corp-02',
    title: 'Ankara Panel Shirt Dress (Alt. Photo)',
    category: 'Corporate',
    imageUrl: '/images/collection/Corporate/Corporate_02.jpg',
    description: 'Ankara panel shirt dress (alt. photo) showing the tailored zipper front placket, cuff detailing, and structured contour fit.',
    price: 17000,
    featured: false,
    fabricDetails: 'Suiting Crepe & Ankara African Wax Print',
    leadTime: '4 – 6 working days',
  },
  {
    id: 'corp-03',
    title: 'Vest with Shirt and Trousers',
    category: 'Corporate',
    imageUrl: '/images/collection/Corporate/Corporate_03.jpg',
    description: 'Vest with shirt and trousers: bespoke royal blue satin wide-leg trousers paired with white contrast blazer/vest with royal blue piping.',
    price: 12000,
    featured: true,
    fabricDetails: 'Royal Blue Satin Trousers, Structured White Contrast Vest',
    leadTime: '4 – 6 working days',
  },
  {
    id: 'corp-04',
    title: 'Lilac Blouse with Purple Trousers',
    category: 'Corporate',
    imageUrl: '/images/collection/Corporate/Corporate_04.jpg',
    description: 'Lilac blouse with purple trousers: chic high-neck soft lilac blouse with puff sleeves and waist tie, paired with bespoke royal purple trousers.',
    price: 15000,
    featured: false,
    fabricDetails: 'Flowing Lilac Crepe Blouse, Tailored Purple Suiting Trousers',
    leadTime: '4 – 6 working days',
  },
  {
    id: 'corp-05',
    title: "Men's Suit & Ankara Long Gown Set",
    category: 'Corporate',
    imageUrl: '/images/collection/Corporate/Corporate_05.jpg',
    description: "Men's suit ₦25,000 + Ankara long gown ₦17,000 (₦42,000 for the pair). Tailored black two-piece suit paired with Lady's formal patterned event maxi gown.",
    price: 42000,
    featured: true,
    fabricDetails: "Men's Two-Piece Black Suit (₦25,000) & Lady's Ankara Maxi Gown (₦17,000)",
    leadTime: '7 – 10 working days',
  },
  {
    id: 'corp-06',
    title: 'Red Dress with White Collar',
    category: 'Corporate',
    imageUrl: '/images/collection/Corporate/Corporate_01.jpg', // fallback image
    videoUrl: '/images/collection/Corporate/Corporate_06.mp4',
    description: 'Red dress with white collar: chic tailored vibrant crimson dress accented with crisp white collar and clean executive silhouette. Includes video preview.',
    price: 14000,
    featured: false,
    fabricDetails: 'Crimson Poly-Crepe with Crisp White Poplin Collar',
    leadTime: '4 – 6 working days',
  },

  // =========================================================================
  // 4. BRIDAL & RECEPTION GOWNS
  // =========================================================================
  {
    id: 'bridal-01',
    title: 'Blue Ombre Reception Gown',
    category: 'Bridal',
    imageUrl: '/images/collection/Bridal/Bridal_01.jpg',
    description: 'Blue ombre gown: breathtaking wedding reception dress in white to sapphire blue ombre dip-dye silk, with a sculpted corset bodice and gathered capelet shoulders.',
    price: 40000,
    featured: true,
    fabricDetails: 'Dip-Dyed Ombre Mulberry Silk, Corset Boning',
    leadTime: '2 – 3 weeks',
  },
  {
    id: 'bridal-02',
    title: 'Red Ruffled Tulle Gown (& Couple Set)',
    category: 'Bridal',
    imageUrl: '/images/collection/Bridal/Bridal_02.jpg',
    description: "Red ruffled tulle gown (₦35,000) with cascading organza ruffles along sleeves and hem. Matching men's red native set available for ₦17,000 extra.",
    price: 35000,
    featured: true,
    fabricDetails: "Terracotta Red Crepe & Organza Ruffles (₦35,000); Matching Men's Set (+₦17,000)",
    leadTime: '2 – 3 weeks',
  },

  // =========================================================================
  // 5. KIDS OCCASION WEAR
  // =========================================================================
  {
    id: 'kids-01',
    title: 'Printed Top with Pleated Skirt',
    category: 'Kids',
    imageUrl: '/images/collection/Kids/Kids_01.jpg',
    description: 'Printed top with pleated skirt: sunshine yellow toddler pinafore party frock with black shoulder-tie bows, custom print, and black pleated lower hem.',
    price: 5500,
    featured: true,
    fabricDetails: '100% Breathable Cotton Poplin, Cotton Pleated Trim',
    leadTime: '3 – 5 working days',
  },
];
