/**
 * TOUCH STONE - Product Catalog & Taxonomy
 * Designed for Indian imitation jewellery for everyday wear, college, work, and casual styling.
 * Enhanced with real iPhone 15 camera on-model snapshots from diverse angles (collarbone, ear close-ups, mirror selfies, flower flatlays).
 */

import heroImg from '../assets/images/hero_jewellery_everyday_1791901278672.jpg';
import earringsImg from '../assets/images/category_earrings_minimal_1791901280402.jpg';
import necklacesImg from '../assets/images/category_necklaces_delicate_1791901280503.jpg';
import braceletsImg from '../assets/images/category_bracelets_sleek_1791901280339.jpg';
import ringsImg from '../assets/images/category_rings_contemporary_1791901282721.jpg';

// Cohesive on-model jewellery campaign photography
import heroCampaignPortraitImg from '../assets/images/hero_campaign_portrait_1791969043256.jpg';
import earStackProfileImg from '../assets/images/ear_stack_profile_crop_1791969045330.jpg';
import collarboneNecklaceImg from '../assets/images/collarbone_necklace_detail_1791969045068.jpg';
import threeQuarterHoopsImg from '../assets/images/three_quarter_hoops_portrait_1791969045157.jpg';
import handRingsBraceletImg from '../assets/images/hand_rings_bracelet_detail_1791969046474.jpg';
import halfbodyStreetImg from '../assets/images/halfbody_street_lifestyle_1791969046463.jpg';

// Additional on-model lifestyle & flatlay assets
import iphonePearlNeckImg from '../assets/images/iphone_beaded_pearl_neck_1791913085941.jpg';
import iphoneCollarboneImg from '../assets/images/iphone_collarbone_chain_1791913051935.jpg';
import iphoneHuggiesImg from '../assets/images/iphone_ear_huggies_angle_1791913053594.jpg';
import iphoneHandDaisiesImg from '../assets/images/iphone_hand_daisies_jewellery_1791913086650.jpg';
import iphoneMirrorSelfieImg from '../assets/images/iphone_mirror_selfie_girl_1791913053701.jpg';

export type ProductCategory = 'all' | 'earrings' | 'necklaces' | 'bracelets' | 'rings' | 'sets';
export type JewelryFinish = 'Gold Tone' | 'Silver Tone' | 'Rose Gold' | 'Oxidised' | 'Dual Tone' | 'Pearl / Zircon';
export type VibeType = 'all' | 'college' | 'office' | 'coffee' | 'evening';

export interface StickerBadge {
  label: string;
  tone: 'butter' | 'linen' | 'blush' | 'matcha';
}

export interface Product {
  id: string;
  code: string;
  name: string;
  category: 'earrings' | 'necklaces' | 'bracelets' | 'rings' | 'sets';
  price?: number; // In INR (₹).
  finish: JewelryFinish;
  image: string;
  secondaryImage?: string;
  modelAngleImage?: string; // Additional on-model iPhone snapshot
  shortDescription: string;
  description: string;
  details: {
    material: string;
    closure?: string;
    dimensions?: string;
    care: string;
  };
  tags: string[];
  vibes: VibeType[];
  badge?: StickerBadge;
  featured?: boolean;
  isNew?: boolean;
}

export const CATEGORIES: Array<{ id: ProductCategory; label: string; description: string }> = [
  { id: 'all', label: 'All Pieces', description: 'Curated everyday imitation jewellery designed for daily wear.' },
  { id: 'earrings', label: 'Earrings', description: 'Clean hoops, minimal studs, and lightweight everyday drops.' },
  { id: 'necklaces', label: 'Necklaces', description: 'Delicate chains, understated pendants, and layering favourites.' },
  { id: 'bracelets', label: 'Bracelets & Cuffs', description: 'Sleek bangles, minimal chain links, and daily wire cuffs.' },
  { id: 'rings', label: 'Rings', description: 'Stackable bands, bezel solitaires, and textured everyday rings.' },
  { id: 'sets', label: 'Everyday Sets', description: 'Coordinated pairings designed for effortless daily styling.' }
];

export const VIBES: Array<{ id: VibeType; label: string; tag: string; description: string }> = [
  { id: 'all', label: 'All Vibes', tag: 'Complete Collection', description: 'Every single everyday piece in the TOUCH STONE catalog.' },
  { id: 'college', label: 'College Fits', tag: 'Campus & Transit', description: 'Lightweight hoops, effortless studs & pocket-friendly staples that never weigh you down.' },
  { id: 'office', label: 'Daily Office', tag: 'Desk & Meetings', description: 'Understated chains, sleek cuffs & subtle geometry that look sharp with workwear.' },
  { id: 'coffee', label: 'Coffee Run', tag: 'Weekend & Brunch', description: 'Layered textures, delicate pearls & easy pieces for cafe afternoons and casual dates.' },
  { id: 'evening', label: 'Casual Evening', tag: 'Sunset & Dinner', description: 'Dual-tone drops, oxidised filigree & ring stacks that elevate a simple denim fit.' }
];

export const FINISHES: JewelryFinish[] = [
  'Gold Tone',
  'Silver Tone',
  'Rose Gold',
  'Oxidised',
  'Dual Tone',
  'Pearl / Zircon'
];

export const PRODUCTS: Product[] = [
  // --- EARRINGS ---
  {
    id: 'ts-101',
    code: 'TS-EAR-101',
    name: 'Classic Everyday Huggie Hoops',
    category: 'earrings',
    price: 349,
    finish: 'Gold Tone',
    image: earStackProfileImg,
    secondaryImage: earringsImg,
    modelAngleImage: threeQuarterHoopsImg,
    shortDescription: 'Clean lightweight clicker huggies for all-day comfort.',
    description: 'A daily styling essential with a secure snap-lock clasp. Finished in polished gold-tone alloy, designed not to weigh down your lobes during long college or work hours.',
    details: {
      material: 'Lightweight brass alloy with polished gold-tone electroplate finish',
      closure: 'Click-lock hinge closure',
      dimensions: '14mm outer diameter, 2.5mm width',
      care: 'Keep dry. Wipe gently with a soft cloth after wear; avoid direct perfume or alcohol contact.'
    },
    tags: ['hoops', 'daily', 'gold', 'minimalist', 'college', 'work'],
    vibes: ['college', 'office', 'coffee'],
    badge: { label: 'College Staple', tone: 'butter' },
    featured: true,
    isNew: true
  },
  {
    id: 'ts-105',
    code: 'TS-EAR-105',
    name: 'Dual-Tone Link Drop Earrings',
    category: 'earrings',
    price: 399,
    finish: 'Dual Tone',
    image: earringsImg,
    secondaryImage: threeQuarterHoopsImg,
    shortDescription: 'Interlocking modern paperclip links in silver and gold tones.',
    description: 'A contemporary silhouette that bridges both silver and gold jewellery collections. Clean linear drop movement without unnecessary weight.',
    details: {
      material: 'High-polish alloy with dual rhodium and gold plating',
      closure: 'Post back with silicone comfort clutch',
      dimensions: '38mm length, 6mm width',
      care: 'Wipe with dry microfiber cloth; store away from humidity.'
    },
    tags: ['earrings', 'drops', 'dual tone', 'modern', 'statement'],
    vibes: ['evening', 'coffee', 'office'],
    badge: { label: 'Mixed Metals', tone: 'blush' },
    featured: true,
    isNew: true
  },
  {
    id: 'ts-109',
    code: 'TS-EAR-109',
    name: 'Linear T-Bar Geometric Studs',
    category: 'earrings',
    price: 299,
    finish: 'Gold Tone',
    image: earringsImg,
    secondaryImage: earStackProfileImg,
    shortDescription: 'Minimal horizontal bar studs with satin finish and clean geometric edges.',
    description: 'Subtle and sharp. The kind of earring you put on in the morning and forget you are wearing until someone compliments it.',
    details: {
      material: 'Brass with matte satin gold plating',
      closure: 'Push back butterfly stopper',
      dimensions: '12mm length, 2mm width',
      care: 'Store in airtight box when not in use.'
    },
    tags: ['studs', 't-bar', 'geometric', 'subtle', 'college'],
    vibes: ['college', 'office'],
    badge: { label: 'Under ₹300', tone: 'butter' },
    featured: true,
    isNew: false
  },
  {
    id: 'ts-111',
    code: 'TS-EAR-111',
    name: 'Oxidised Silver Filigree Daily Jhumkis',
    category: 'earrings',
    price: 349,
    finish: 'Oxidised',
    image: earringsImg,
    secondaryImage: threeQuarterHoopsImg,
    shortDescription: 'Compact, featherlight oxidised silver finish earrings with delicate floral engraving.',
    description: 'An everyday Indian classic updated with a lighter, compact silhouette so it never tugs on the earlobe during busy days.',
    details: {
      material: 'Oxidised silver-tone alloy with antique patina',
      closure: 'Fishhook wire with secure silicone back',
      dimensions: '25mm total drop length, 12mm dome width',
      care: 'Do not use chemical silver polishes; wipe with dry cotton.'
    },
    tags: ['oxidised', 'jhumki', 'ethnic', 'everyday', 'college'],
    vibes: ['college', 'evening'],
    badge: { label: 'Featherlight', tone: 'matcha' },
    featured: false,
    isNew: false
  },
  {
    id: 'ts-113',
    code: 'TS-EAR-113',
    name: 'Sculptural Chunky Croissant Huggies',
    category: 'earrings',
    price: 399,
    finish: 'Gold Tone',
    image: earringsImg,
    secondaryImage: threeQuarterHoopsImg,
    shortDescription: 'Ribbed French croissant hollow huggies with comfortable clicker closure.',
    description: 'The viral French croissant texture engineered with a hollow core so they feel weightless on your ears from 9 AM classes to late evening dinners.',
    details: {
      material: 'Hollow lightweight brass with warm gold-tone electroplate finish',
      closure: 'Hinged click-lock clasp',
      dimensions: '18mm diameter, 5mm chunky taper',
      care: 'Keep in dry jewelry pouch; wipe clean after wear.'
    },
    tags: ['croissant', 'chunky', 'huggies', 'gold', 'trend', 'college'],
    vibes: ['college', 'coffee', 'evening'],
    badge: { label: 'Trending Fit', tone: 'blush' },
    featured: true,
    isNew: true
  },
  {
    id: 'ts-114',
    code: 'TS-EAR-114',
    name: 'Dainty Dewdrop Threader Earrings',
    category: 'earrings',
    price: 299,
    finish: 'Silver Tone',
    image: earringsImg,
    secondaryImage: earStackProfileImg,
    shortDescription: 'Ultra-fine box chain threaders terminating in a smooth teardrop droplet.',
    description: 'Minimalist fluid movement that adds a gentle shimmer every time you turn your head. Can be threaded through single or double piercings.',
    details: {
      material: 'Rhodium-coated silver alloy chain with solid droplet tip',
      closure: 'Pull-through threader wire with silicone stopper',
      dimensions: '65mm total chain length, 4mm droplet',
      care: 'Store straight to prevent chain kinks.'
    },
    tags: ['threaders', 'silver', 'dainty', 'minimal', 'office'],
    vibes: ['office', 'coffee'],
    badge: { label: 'Fluid Drop', tone: 'linen' },
    featured: false,
    isNew: true
  },

  // --- NECKLACES ---
  {
    id: 'ts-102',
    code: 'TS-NECK-102',
    name: 'Petite Coin Solitaire Pendant Chain',
    category: 'necklaces',
    price: 499,
    finish: 'Gold Tone',
    image: collarboneNecklaceImg,
    secondaryImage: necklacesImg,
    modelAngleImage: heroCampaignPortraitImg,
    shortDescription: 'Delicate fine-link chain with a hammered coin pendant and micro-zircon accent.',
    description: 'An understated focal piece that sits gracefully at the collarbone. Pairs seamlessly with open-collar shirts, kurtas, and casual t-shirts.',
    details: {
      material: 'Fine brass chain with warm gold-tone finish and cubic zirconia accent',
      closure: 'Spring ring clasp with 2-inch extender chain',
      dimensions: '40cm length + 5cm extender; 10mm pendant diameter',
      care: 'Store in a separate zip pouch to prevent chain tangles and maintain plating lustre.'
    },
    tags: ['pendant', 'necklace', 'coin', 'dainty', 'layering'],
    vibes: ['college', 'coffee', 'evening'],
    badge: { label: 'Under ₹500', tone: 'linen' },
    featured: true,
    isNew: false
  },
  {
    id: 'ts-112',
    code: 'TS-NECK-112',
    name: 'Single Freshwater Pearl Accent Chain',
    category: 'necklaces',
    price: 549,
    finish: 'Pearl / Zircon',
    image: collarboneNecklaceImg,
    secondaryImage: necklacesImg,
    shortDescription: 'Lustrous button pearl drop on an ultra-slim gold-tone trace chain.',
    description: 'Soft organic luster balanced against clean modern metalwork. Light and effortless for workwear and weekend brunches.',
    details: {
      material: 'Simulated pearl cabochon with lustrous gold-tone alloy chain',
      closure: 'Lobster claw with 4cm extender',
      dimensions: '42cm + 4cm chain; 8mm pearl',
      care: 'Gently wipe clean after each wear to preserve the smooth pearl sheen.'
    },
    tags: ['pearl', 'necklace', 'dainty', 'elegant', 'workwear'],
    vibes: ['coffee', 'office'],
    badge: { label: 'Soft Pearl', tone: 'matcha' },
    featured: true,
    isNew: true
  },
  {
    id: 'ts-117',
    code: 'TS-NECK-117',
    name: 'Paperclip Link Choker Chain',
    category: 'necklaces',
    price: 529,
    finish: 'Gold Tone',
    image: necklacesImg,
    secondaryImage: collarboneNecklaceImg,
    shortDescription: 'Clean elongated rectangular paperclip links in a warm mirror gold polish.',
    description: 'The foundation piece of every modern jewelry stack. Wear it solo with a crewneck t-shirt or as the base choker beneath longer pendant chains.',
    details: {
      material: 'Polished electroplated brass with protective clear seal',
      closure: 'Sturdy lobster clasp with 5cm sizing tail',
      dimensions: '38cm choker length + 5cm extension; 4mm link width',
      care: 'Keep dry and avoid abrasive rubbing.'
    },
    tags: ['paperclip', 'choker', 'chains', 'stacking', 'college'],
    vibes: ['college', 'coffee'],
    badge: { label: 'Stack Base', tone: 'butter' },
    featured: true,
    isNew: true
  },
  {
    id: 'ts-118',
    code: 'TS-NECK-118',
    name: 'Dainty Flower Charm Solitaire Pendant',
    category: 'necklaces',
    price: 449,
    finish: 'Gold Tone',
    image: necklacesImg,
    secondaryImage: collarboneNecklaceImg,
    shortDescription: 'Delicate floral pendant with a central micro-diamond crystal.',
    description: 'A discreet talisman of nature crafted with delicate proportions. Perfect for everyday wear without feeling bulky or ostentatious.',
    details: {
      material: 'Gold-tone alloy with precision micro pavé setting',
      closure: 'Spring ring clasp',
      dimensions: '40cm length + 4cm extender; 8mm flower charm',
      care: 'Do not spray perfumes or mists directly over the pendant.'
    },
    tags: ['flower', 'daisy', 'pendant', 'minimal', 'daily'],
    vibes: ['college', 'coffee'],
    badge: { label: 'Pinterest Fave', tone: 'blush' },
    featured: true,
    isNew: true
  },
  {
    id: 'ts-106',
    code: 'TS-NECK-106',
    name: 'Fine Rope & Box Layering Chain (Pair)',
    category: 'necklaces',
    price: 649,
    finish: 'Gold Tone',
    image: necklacesImg,
    secondaryImage: collarboneNecklaceImg,
    shortDescription: 'Two complementary delicate chains designed to wear together or separately.',
    description: 'Includes one delicate box chain and one diamond-cut rope chain at stepped lengths for a balanced layered neckline.',
    details: {
      material: 'Brass base alloy with skin-friendly protective clear coat',
      closure: 'Lobster claw clasp with extension links',
      dimensions: 'Short chain: 38cm; Long chain: 44cm (+ 5cm extender)',
      care: 'Hang or store flat to avoid entangling.'
    },
    tags: ['chains', 'layering', 'gold tone', 'minimalist', 'office wear'],
    vibes: ['office', 'coffee', 'evening'],
    badge: { label: 'Layering Duo', tone: 'linen' },
    featured: false,
    isNew: false
  },
  {
    id: 'ts-119',
    code: 'TS-NECK-119',
    name: 'Sleek Herringbone Flat Snake Chain',
    category: 'necklaces',
    price: 599,
    finish: 'Gold Tone',
    image: necklacesImg,
    secondaryImage: collarboneNecklaceImg,
    shortDescription: 'Ultra-smooth liquid metal herringbone chain with liquid drape and high reflection.',
    description: 'Glides across the skin like liquid gold. A minimalist standout that elevates a basic black top or tailored blazer in seconds.',
    details: {
      material: 'Flexible flat woven brass chain with electro-lacquer gold plating',
      closure: 'Lobster claw clasp with safety ring',
      dimensions: '42cm length; 3mm flat width',
      care: 'Store flat in box without tight folds to preserve smooth herringbone curvature.'
    },
    tags: ['herringbone', 'snake chain', 'liquid gold', 'minimal', 'office'],
    vibes: ['evening', 'office'],
    badge: { label: 'Liquid Gold', tone: 'blush' },
    featured: true,
    isNew: false
  },

  // --- BRACELETS ---
  {
    id: 'ts-103',
    code: 'TS-BRAC-103',
    name: 'Minimalist Sleek Wire Cuff',
    category: 'bracelets',
    price: 399,
    finish: 'Gold Tone',
    image: braceletsImg,
    secondaryImage: handRingsBraceletImg,
    shortDescription: 'Smooth open-cuff bracelet that slips on easily for instant wrist definition.',
    description: 'Designed with clean tapered ends for adjustable comfort on most wrist sizes. Sleek, smooth, and lightweight for day-to-night styling.',
    details: {
      material: 'Pliable copper-brass alloy with gold-tone lacquer finish',
      closure: 'Open adjustable cuff',
      dimensions: '60mm inner diameter (slightly pliable to fit 5.5 to 7 inch wrists)',
      care: 'Gently adjust once to fit; avoid repeated bending.'
    },
    tags: ['cuff', 'bracelet', 'bangle', 'minimal', 'daily'],
    vibes: ['office', 'coffee', 'college'],
    badge: { label: 'Daily Fit', tone: 'matcha' },
    featured: true,
    isNew: true
  },
  {
    id: 'ts-121',
    code: 'TS-BRAC-121',
    name: 'Iris Baguette Zirconia Tennis Bracelet',
    category: 'bracelets',
    price: 599,
    finish: 'Silver Tone',
    image: braceletsImg,
    secondaryImage: handRingsBraceletImg,
    shortDescription: 'Slim channel of alternating bezel-set baguette cubic zirconias with safety clasp.',
    description: 'An understated everyday reimagining of the classic tennis bracelet. Catch the light gently across your laptop keyboard or steering wheel.',
    details: {
      material: 'Rhodium-coated brass with AAA emerald-cut simulated zirconias',
      closure: 'Fold-over safety box clasp with dual side clips',
      dimensions: '17cm length + 2cm removable extender link; 3mm width',
      care: 'Wipe with microfiber lens cloth to keep stones sparkling.'
    },
    tags: ['tennis bracelet', 'baguette', 'silver', 'sparkle', 'evening'],
    vibes: ['evening', 'office'],
    badge: { label: 'Subtle Sparkle', tone: 'blush' },
    featured: true,
    isNew: true
  },
  {
    id: 'ts-122',
    code: 'TS-BRAC-122',
    name: 'Dainty Paperclip Link Chain Bracelet',
    category: 'bracelets',
    price: 349,
    finish: 'Gold Tone',
    image: braceletsImg,
    secondaryImage: handRingsBraceletImg,
    shortDescription: 'Featherlight paperclip link chain with a minimal bar accent.',
    description: 'Pairs seamlessly with your wristwatch or smart band. So light you will forget it is there until it catches the sunlight.',
    details: {
      material: 'Gold-plated brass with smooth protective clear lacquer',
      closure: 'Lobster claw clasp with 3cm extender',
      dimensions: '16cm + 3cm extension',
      care: 'Remove before intense gym sessions.'
    },
    tags: ['paperclip', 'chain', 'bracelet', 'dainty', 'daily'],
    vibes: ['college', 'coffee'],
    badge: { label: 'Under ₹350', tone: 'butter' },
    featured: false,
    isNew: false
  },
  {
    id: 'ts-107',
    code: 'TS-BRAC-107',
    name: 'Beaded & Satin Silver Tone Bangle Duo',
    category: 'bracelets',
    price: 499,
    finish: 'Silver Tone',
    image: braceletsImg,
    secondaryImage: handRingsBraceletImg,
    shortDescription: 'Pair of rhodium-finished bangles featuring one dotted bead band and one brushed satin band.',
    description: 'A fresh, crisp silver-tone set that pairs effortlessly with modern western outfits and cool pastel kurtas.',
    details: {
      material: 'Silver-plated alloy with rhodium protective coating',
      closure: 'Slip-on bangle style',
      dimensions: '2.4 and 2.6 Indian bangle sizes',
      care: 'Protect from moisture and cosmetics; clean with a dry lint-free cloth.'
    },
    tags: ['silver', 'bangles', 'bracelets', 'minimalist', 'casual'],
    vibes: ['coffee', 'college'],
    badge: { label: 'Clean Silver', tone: 'matcha' },
    featured: false,
    isNew: true
  },

  // --- RINGS ---
  {
    id: 'ts-104',
    code: 'TS-RING-104',
    name: 'Textured & Pavé Stackable Ring Set',
    category: 'rings',
    price: 449,
    finish: 'Gold Tone',
    image: ringsImg,
    secondaryImage: handRingsBraceletImg,
    shortDescription: 'Set of four slim coordinating bands featuring hammered, twisted, and micro-pavé textures.',
    description: 'Wear them stacked on one finger or spread across different knuckles. A versatile set that adapts to casual and dressed-up moods.',
    details: {
      material: 'Brass alloy bands with AAA-grade cubic zirconia stones',
      dimensions: 'Available in standard Indian sizes 12, 14, 16',
      care: 'Remove before hand washing or using sanitizers to extend finish longevity.'
    },
    tags: ['rings', 'stackable', 'pave', 'minimalist', 'accessories'],
    vibes: ['college', 'evening', 'coffee'],
    badge: { label: 'Stack Staple', tone: 'butter' },
    featured: true,
    isNew: false
  },
  {
    id: 'ts-124',
    code: 'TS-RING-124',
    name: 'Sculptural Dome Croissant Ring',
    category: 'rings',
    price: 349,
    finish: 'Gold Tone',
    image: handRingsBraceletImg,
    secondaryImage: ringsImg,
    shortDescription: 'Bold ribbed dome signet ring that commands attention with effortless French chic.',
    description: 'The defining statement ring for your coffee photos and manicured hands. Hollow interior ensures zero heaviness while maintaining substantial visual presence.',
    details: {
      material: 'Polished hollow brass alloy with warm yellow gold-tone finish',
      dimensions: 'Open adjustable band (comfortably accommodates sizes 12 to 18)',
      care: 'Remove when applying lotions or sanitizer.'
    },
    tags: ['croissant', 'dome', 'ring', 'chunky', 'trend'],
    vibes: ['coffee', 'evening'],
    badge: { label: 'Best Seller', tone: 'butter' },
    featured: true,
    isNew: true
  },
  {
    id: 'ts-108',
    code: 'TS-RING-108',
    name: 'Clean Solitaire Bezel Ring',
    category: 'rings',
    price: 349,
    finish: 'Silver Tone',
    image: ringsImg,
    secondaryImage: handRingsBraceletImg,
    shortDescription: 'Low-profile bezel setting with a brilliant round cut synthetic zirconia stone.',
    description: 'Smooth, flush-set design that will not snag on knitwear or clothing. Clean architectural profile with quiet everyday charm.',
    details: {
      material: 'Rhodium-tone brass alloy with precision-cut cubic zirconia',
      dimensions: 'Indian ring size 14 (standard adjustable comfort shank)',
      care: 'Avoid wearing during strenuous tasks or gym sessions.'
    },
    tags: ['ring', 'solitaire', 'silver', 'bezel', 'classic'],
    vibes: ['office', 'evening'],
    badge: { label: 'Low Profile', tone: 'linen' },
    featured: false,
    isNew: false
  },
  {
    id: 'ts-125',
    code: 'TS-RING-125',
    name: 'Fluted Textured Everyday Band',
    category: 'rings',
    price: 299,
    finish: 'Gold Tone',
    image: ringsImg,
    secondaryImage: handRingsBraceletImg,
    shortDescription: 'Subtle fluted coin-edge band for timeless minimalist stacking.',
    description: 'Simple, tactile, and understated. Designed to slip on beside your wedding band, watch, or solo as a subtle signature.',
    details: {
      material: 'Polished electroplated brass alloy with protective clear seal',
      dimensions: 'Standard size 14 with slight comfort taper',
      care: 'Wipe with soft cotton pouch.'
    },
    tags: ['band', 'fluted', 'texture', 'minimal', 'daily'],
    vibes: ['college', 'office'],
    badge: { label: 'Under ₹300', tone: 'linen' },
    featured: false,
    isNew: false
  },

  // --- SETS ---
  {
    id: 'ts-127',
    code: 'TS-SET-127',
    name: 'Campus Essentials Duo (Huggies + Coin Chain)',
    category: 'sets',
    price: 799,
    finish: 'Gold Tone',
    image: heroCampaignPortraitImg,
    secondaryImage: halfbodyStreetImg,
    shortDescription: 'The everyday college starter pack: Classic Huggies paired with the Coin Solitaire Chain.',
    description: 'Save when purchased together. The foolproof combination that matches every college outfit from graphic tees to printed kurtis.',
    details: {
      material: 'High-polish gold-tone brass with protective clear lacquer',
      closure: 'Clicker clasp & spring ring',
      dimensions: '14mm hoops + 40cm chain',
      care: 'Store in Touch Stone velvet-lined pouch.'
    },
    tags: ['duo', 'campus', 'set', 'starter pack', 'value'],
    vibes: ['college', 'coffee'],
    badge: { label: 'Save ₹49', tone: 'butter' },
    featured: true,
    isNew: true
  },
  {
    id: 'ts-110',
    code: 'TS-SET-110',
    name: 'Everyday Minimalist Coordinated Gift Set',
    category: 'sets',
    price: 899,
    finish: 'Gold Tone',
    image: heroImg,
    secondaryImage: collarboneNecklaceImg,
    shortDescription: 'A matching trio including the Petite Coin Pendant, Classic Huggies, and Twisted Band Ring.',
    description: 'Curated for effortless everyday coordination. Combines our three most popular daily staples into a cohesive set suitable for gifting or personal styling.',
    details: {
      material: 'Coordinated gold-tone imitation jewellery set',
      closure: 'Various (clasp, clicker, slip-on)',
      dimensions: 'Standard daily wear proportions',
      care: 'Keep each piece wrapped separately to protect the polished surfaces.'
    },
    tags: ['set', 'gift', 'everyday', 'complete look', 'gold'],
    vibes: ['evening', 'coffee'],
    badge: { label: '3-Piece Set', tone: 'blush' },
    featured: true,
    isNew: true
  }
];

export const HERO_ASSET = heroImg;
