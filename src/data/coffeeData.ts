import heroLatteImg from '@/src/assets/images/brewhaven_hero_latte_1790239790829.jpg';
import signaturePourImg from '@/src/assets/images/signature_pour_latte_1790250244540.jpg';
import icedCaramelImg from '@/src/assets/images/iced_caramel_latte_1790250260339.jpg';
import cafeInteriorImg from '@/src/assets/images/brewhaven_cafe_interior_1790239819176.jpg';
import coldBrewImg from '@/src/assets/images/brewhaven_iced_coldbrew_1790239833457.jpg';
import matchaCupImg from '@/src/assets/images/brewhaven_matcha_cup_1790239846113.jpg';
import coffeeBeansImg from '@/src/assets/images/brewhaven_coffee_beans_1790239856532.jpg';
import rwandaFarmImg from '@/src/assets/images/brewhaven_rwanda_farm_1790239884850.jpg';
import caramelLatteImg from '@/src/assets/images/brewhaven_caramel_latte_1790239899532.jpg';
import velvetMochaImg from '@/src/assets/images/brewhaven_velvet_mocha_1790239917692.jpg';

import { MenuItem, Testimonial, GalleryItem } from '../types';

export const ASSETS = {
  heroLatte: heroLatteImg,
  signaturePour: signaturePourImg,
  icedCaramel: icedCaramelImg,
  cafeInterior: cafeInteriorImg,
  coldBrew: coldBrewImg,
  matchaCup: matchaCupImg,
  coffeeBeans: coffeeBeansImg,
  rwandaFarm: rwandaFarmImg,
  caramelLatte: caramelLatteImg,
  velvetMocha: velvetMochaImg,
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'caramel-latte',
    name: 'Caramel Latte',
    category: 'signature',
    description: 'Huye Mountain espresso, velvety steamed milk, golden handcrafted artisanal caramel.',
    price: 4500,
    image: caramelLatteImg,
    ingredients: ['Single-origin Rwandan Espresso', 'Steamed Oat or Inyange Farm Milk', 'Salted Butter Caramel', 'Vanilla Bean'],
    calories: 220,
    origin: 'Huye Mountain, Rwanda',
    isPopular: true,
  },
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    category: 'tea',
    description: 'Ceremonial grade Uji matcha whisked with silky Rwandan highland microfoam.',
    price: 4200,
    image: matchaCupImg,
    ingredients: ['Ceremonial Matcha from Uji', 'Highland Microfoam Steamed Milk', 'Light Agave Nectar'],
    calories: 160,
    origin: 'Uji Kyoto & Kigali Highlands',
    isPopular: true,
  },
  {
    id: 'nitro-cold-brew',
    name: 'Nitro Cold Brew',
    category: 'cold',
    description: 'Slow-steeped for 20 hours with Lake Kivu Red Bourbon and nitrogen-infused for a creamy stout head.',
    price: 4000,
    image: coldBrewImg,
    ingredients: ['Cold Steeped Kivu Bourbon Arabica', 'Pure Rwandan Mountain Spring Water', 'Nitrogen Infusion'],
    calories: 5,
    origin: 'Lake Kivu, Rwanda',
    isPopular: true,
  },
  {
    id: 'velvet-mocha',
    name: 'Velvet Mocha',
    category: 'signature',
    description: 'Double ristretto of Nyamagabe Bourbon blended with 70% dark chocolate and dusted cocoa.',
    price: 4800,
    image: velvetMochaImg,
    ingredients: ['Double Nyamagabe Ristretto', '70% Dark Ganache', 'Steamed Silk Milk', 'Dutch Cocoa Dust'],
    calories: 280,
    origin: 'Nyamagabe, Rwanda',
    isPopular: true,
  },
  {
    id: 'house-americano',
    name: 'Artisan Americano',
    category: 'espresso',
    description: 'Double shot of washed Gakenke Bourbon extracted over pure spring water with dense golden crema.',
    price: 3000,
    image: heroLatteImg,
    ingredients: ['Double Specialty Gakenke Espresso', 'Hot Filtered Spring Water'],
    calories: 5,
    origin: 'Gakenke, Rwanda',
    isPopular: false,
  },
  {
    id: 'maraba-honey-flat-white',
    name: 'Maraba Honey Flat White',
    category: 'signature',
    description: 'Sun-dried Maraba Red Bourbon balanced with natural Nyungwe Forest raw wildflower honey.',
    price: 4500,
    image: signaturePourImg,
    ingredients: ['Maraba Specialty Espresso', 'Steamed Microfoam', 'Raw Nyungwe Wildflower Honey'],
    calories: 190,
    origin: 'Maraba, Rwanda',
    isPopular: false,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Keza M.',
    role: 'Architect · Kimihurura Resident',
    quote: 'The finest specialty coffee in Kigali. Every morning pour feels completely intentional. The Rwandan Red Bourbon notes of honeysuckle and stone fruit are celebrated with world-class technique.',
    rating: 5,
  },
  {
    id: '2',
    name: 'David K.',
    role: 'Tech Entrepreneur & Kigali Nomad',
    quote: 'BrewHaven is my creative sanctuary in Kigali. Exceptional single-origin Lake Kivu cold brew, thoughtful Rwandan walnut finishes, and a calm, welcoming vibe that inspires my best work.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Claire U.',
    role: 'Art Curator · Inema Arts',
    quote: 'My absolute favorite haven. The reverence for Rwandan coffee farmers, the serene tropical courtyard, and the sheer perfection of their caramel latte is unmatched in East Africa.',
    rating: 5,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Precision Microfoam',
    caption: 'Tulip pour crafted with single-origin Rwandan Red Bourbon.',
    image: heroLatteImg,
    category: 'Barista Craft',
  },
  {
    id: 'g2',
    title: 'Kimihurura Solarium',
    caption: 'Sunlit velvet lounge tables framed with tropical Kigali greenery.',
    image: cafeInteriorImg,
    category: 'Atmosphere',
  },
  {
    id: 'g3',
    title: 'Cascading Nitro Pour',
    caption: 'Nitrogen-steeped Lake Kivu micro-bubbles over dense slow-chill ice.',
    image: coldBrewImg,
    category: 'Signature Cold',
  },
  {
    id: 'g4',
    title: 'Rwandan Bourbon Roast',
    caption: 'Direct-trade Red Bourbon Arabica beans freshly batch-roasted weekly.',
    image: coffeeBeansImg,
    category: 'Roastery',
  },
  {
    id: 'g5',
    title: 'Misty Huye Mountain',
    caption: 'Our partner cooperative at sunrise across the high Rwandan terraces.',
    image: rwandaFarmImg,
    category: 'Origins',
  },
  {
    id: 'g6',
    title: 'Iced Caramel Ritual',
    caption: 'Espresso swirling with golden artisanal caramel over ice.',
    image: icedCaramelImg,
    category: 'Signature Craft',
  },
];
