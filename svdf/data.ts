import { Category, Material, Product } from './types';

export const CONTACT_INFO = {
  phone: "+91 9916088884",
  whatsapp: "919916088884",
  email: "sourabhpatel8888@gmail.com",
  address: "Sri Vijayalaxmi Doors And Frames, Shop No. 12, Main Road, Bangalore."
};

// Fallback image in case the specific local file is missing
export const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800";

export const PRODUCTS: Product[] = [
  // --- TP LD SERIES DOORS ---
  {
    id: 'tp-ld-101',
    name: 'Door Model TP LD 101',
    category: Category.DOOR,
    material: Material.LAMINATE,
    description: 'Premium door with horizontal wood grain and a sleek vertical side panel design.',
    image: '/images/tp-ld-101.jpg', 
    features: ['Horizontal Grain', 'Vertical Panel', 'Custom Sizes Available'],
    isCustomizable: true
  },
  {
    id: 'tp-ld-103',
    name: 'Door Model TP LD 103',
    category: Category.DOOR,
    material: Material.LAMINATE,
    description: 'Modern artistic door featuring diagonal wood patterns and a bold black vertical strip.',
    image: '/images/tp-ld-103.jpg',
    features: ['Diagonal Pattern', 'Black Accent', 'Modern Aesthetic'],
    isCustomizable: true
  },
  {
    id: 'tp-ld-104',
    name: 'Door Model TP LD 104',
    category: Category.DOOR,
    material: Material.LAMINATE,
    description: 'Contemporary dual-tone design with vertical wood texture and matte grey block panels.',
    image: '/images/tp-ld-104.jpg',
    features: ['Dual Tone', 'Matte Grey Finish', 'Solid Core'],
    isCustomizable: true
  },
  {
    id: 'tp-ld-106',
    name: 'Door Model TP LD 106',
    category: Category.DOOR,
    material: Material.LAMINATE,
    description: 'Elegant wood door with a distinctive white geometric pattern strip on the side.',
    image: '/images/tp-ld-106.jpg',
    features: ['Geometric Art', 'White Accent', 'Premium Laminate'],
    isCustomizable: true
  },

  // --- LD SERIES DOORS (TEAK) ---
  {
    id: 'ld-32',
    name: 'Door Model LD 32',
    category: Category.DOOR,
    material: Material.TEAK,
    description: 'Light oak finish door with a contrasting dark brown vertical wood strip.',
    image: '/images/ld-32.jpg',
    features: ['Two-Tone Wood', 'Light Oak Finish', 'Flush Door'],
    isCustomizable: true
  },
  {
    id: 'ld-37',
    name: 'Door Model LD 37',
    category: Category.DOOR,
    material: Material.TEAK,
    description: 'Light wood door featuring sophisticated vertical silver/metallic accent lines.',
    image: '/images/ld-37.jpg',
    features: ['Metallic Strips', 'Light Wood', 'Office/Home'],
    isCustomizable: true
  },
  {
    id: 'ld-38',
    name: 'Door Model LD 38',
    category: Category.DOOR,
    material: Material.TEAK,
    description: 'Rich dark walnut finish door with sleek silver vertical lines.',
    image: '/images/ld-38.jpg',
    features: ['Dark Walnut', 'Silver Lines', 'Premium Feel'],
    isCustomizable: true
  },
  {
    id: 'ld-41',
    name: 'Door Model LD 41',
    category: Category.DOOR,
    material: Material.TEAK,
    description: 'Classic full vertical grain dark wood door.',
    image: '/images/ld-41.jpg',
    features: ['Vertical Grain', 'Classic Design', 'Rich Texture'],
    isCustomizable: true
  },

  // --- LD SERIES DOORS (MEMBRANE) ---
  {
    id: 'ld-13',
    name: 'Door Model LD 13',
    category: Category.DOOR,
    material: Material.MEMBRANE,
    description: 'Dark finish door with double vertical silver inlay strips for a modern look.',
    image: '/images/ld-13.jpg',
    features: ['Double Inlay', 'Scratch Resistant', 'Dark Finish'],
    isCustomizable: true
  },
  {
    id: 'ld-27',
    name: 'Door Model LD 27',
    category: Category.DOOR,
    material: Material.MEMBRANE,
    description: 'Simple and elegant plain reddish-brown wood finish door.',
    image: '/images/ld-27.jpg',
    features: ['Plain Finish', 'Minimalist', 'Budget Friendly'],
    isCustomizable: true
  },
  {
    id: 'ld-30',
    name: 'Door Model LD 30',
    category: Category.DOOR,
    material: Material.MEMBRANE,
    description: 'Textured door with a horizontal wood grain pattern.',
    image: '/images/ld-30.jpg',
    features: ['Horizontal Grain', 'Textured', 'Natural Look'],
    isCustomizable: true
  },
  {
    id: 'ld-31',
    name: 'Door Model LD 31',
    category: Category.DOOR,
    material: Material.MEMBRANE,
    description: 'Dark grey/brown wood finish with a subtle vertical side panel.',
    image: '/images/ld-31.jpg',
    features: ['Modern Grey/Brown', 'Subtle Design', 'Durable'],
    isCustomizable: true
  },

  // --- FRAMES ---
  {
    id: 'fr-win-grid',
    name: 'Teak Window Frame (Grid Pattern)',
    category: Category.WINDOW,
    material: Material.TEAK,
    description: 'Traditional Teak wood window frame with safety grid bars. Perfect for homes.',
    image: '/images/window-frame-grid.jpg',
    features: ['Safety Grills', 'Traditional Style', 'Custom Size'],
    isCustomizable: true
  },
  {
    id: 'fr-win-large',
    name: 'Large Teak Window Frame',
    category: Category.WINDOW,
    material: Material.TEAK,
    description: 'Large rectangular teak window frame structure for main halls.',
    image: FALLBACK_IMAGE,
    features: ['Large Format', 'Structural Strength', 'Solid Teak'],
    isCustomizable: true
  },
  {
    id: 'fr-door-solid',
    name: 'Solid Door Frame',
    category: Category.FRAME,
    material: Material.TEAK,
    description: 'Heavy duty solid wood door frame (Choukhat).',
    image: FALLBACK_IMAGE,
    features: ['Solid Wood', 'Unfinished', 'Heavy Duty'],
    isCustomizable: true
  },

  // --- BEDS & MATTRESSES ---
  {
    id: 'b-k-001',
    name: 'Luxury King Size Bed',
    category: Category.BED,
    material: Material.TEAK,
    description: 'King size ready-fixable bed with hydraulic storage option.',
    image: FALLBACK_IMAGE,
    features: ['King Size (78x72)', 'Easy Assembly', 'Storage Optional'],
    isCustomizable: true
  },
  {
    id: 'b-q-001',
    name: 'Modern Queen Size Bed',
    category: Category.BED,
    material: Material.ACACIA,
    description: 'Queen size bed frame made from treated Acacia wood.',
    image: FALLBACK_IMAGE,
    features: ['Queen Size (78x60)', 'Durable Support', 'Modern Headboard'],
    isCustomizable: true
  },
  {
    id: 'm-001',
    name: 'Orthopedic Mattress',
    category: Category.MATTRESS,
    material: Material.FOAM,
    description: 'High-density memory foam mattress for back support.',
    image: FALLBACK_IMAGE,
    features: ['Back Support', 'Cooling Gel', '5 Year Warranty'],
    isCustomizable: false
  }
];