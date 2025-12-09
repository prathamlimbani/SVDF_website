export enum Category {
  DOOR = 'Door',
  FRAME = 'Frame',
  WINDOW = 'Window',
  BED = 'Bed',
  MATTRESS = 'Mattress'
}

export enum Material {
  TEAK = 'Teak Wood',
  ACACIA = 'Acacia Wood',
  PVC = 'PVC',
  LAMINATE = 'Laminated',
  MEMBRANE = 'Membrane',
  SAL = 'Sal Wood',
  FOAM = 'Memory Foam',
  COIR = 'Coir'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  material: Material;
  description: string;
  image: string;
  features: string[];
  isCustomizable: boolean;
}

export interface CartItem extends Product {
  quantity: number; // For future extensibility, though currently mainly a wishlist
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
}