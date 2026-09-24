export interface MenuItem {
  id: string;
  name: string;
  category: 'signature' | 'espresso' | 'cold' | 'tea';
  description: string;
  price: number;
  image: string;
  ingredients: string[];
  calories?: number;
  origin?: string;
  isPopular?: boolean;
}

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  milkChoice?: string;
  sweetness?: string;
  temperature?: 'Hot' | 'Iced';
  extraShot?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  category: string;
}
