import { assetPaths } from '../assets';

export interface TargetMarket {
  id: string;
  city: string;
  state: string;
  fullName: string;
  regionTag: string;
  seoDescription: string;
  seoLandingPageRoute: string;
}

export interface BusinessConfig {
  companyName: string;
  tagline: string;
  founder: string;
  businessCategory: string;
  siteUrl: string;
  headquarters: {
    city: string;
    state: string;
    country: string;
    countryCode: string;
    fullAddress: string;
  };
  contact: {
    phoneRaw: string;
    phoneHref: string;
    whatsappRaw: string;
    whatsappHref: string;
    whatsappPrefilledHref: string;
    email: null; // Explicitly null as email is not available yet
  };
  targetMarkets: TargetMarket[];
  targetKeywords: string[];
  theme: {
    background: string;
    secondary: string;
    cards: string;
    gold: string;
    cta: string;
    text: string;
  };
  assets: {
    heroMountainResort: string;
  };
}

const DEFAULT_PRODUCTION_URL = 'https://upword.in';

export const businessConfig: BusinessConfig = {
  companyName: 'UPWORD',
  tagline: 'Your Complete Hospitality Digital Growth Partner.',
  founder: 'Shubham Upadhyay',
  businessCategory: 'AI-Powered Hospitality Digital Growth Agency',
  siteUrl:
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_URL) ||
    DEFAULT_PRODUCTION_URL,
  headquarters: {
    city: 'Indore',
    state: 'Madhya Pradesh',
    country: 'India',
    countryCode: 'IN',
    fullAddress: 'Indore, Madhya Pradesh, India',
  },
  contact: {
    phoneRaw: '+919131093658',
    phoneHref: 'tel:+919131093658',
    whatsappRaw: '919131093658',
    whatsappHref: 'https://wa.me/919131093658',
    whatsappPrefilledHref:
      'https://wa.me/919131093658?text=' +
      encodeURIComponent(
        'Hello UPWORD (Shubham Upadhyay), I would like a free consultation regarding digital growth for my hotel/restaurant.'
      ),
    email: null,
  },
  targetMarkets: [
    {
      id: 'nashik',
      city: 'Nashik',
      state: 'Maharashtra',
      fullName: 'Nashik, Maharashtra',
      regionTag: 'Wine Capital & Luxury Retreats',
      seoDescription:
        'Hotel website development in Nashik, hotel SEO services in Nashik, and AI automation for hotels, vineyard resorts, and fine-dining properties.',
      seoLandingPageRoute: '/hotel-digital-marketing-nashik',
    },
    {
      id: 'trimbakeshwar',
      city: 'Trimbakeshwar',
      state: 'Maharashtra',
      fullName: 'Trimbakeshwar, Maharashtra',
      regionTag: 'Sacred Heritage & Pilgrimage Stays',
      seoDescription:
        'Dedicated hotel website developer in Trimbakeshwar helping pilgrimage hotels, guest houses, and homestays capture direct room enquiries with WhatsApp automation for hotels.',
      seoLandingPageRoute: '/hotel-digital-marketing-trimbakeshwar',
    },
    {
      id: 'ujjain',
      city: 'Ujjain',
      state: 'Madhya Pradesh',
      fullName: 'Ujjain, Madhya Pradesh',
      regionTag: 'Spiritual Corridor & Temple Hospitality',
      seoDescription:
        'Specialized hotel digital marketing in Ujjain, AI social media management for hotels, and AI customer enquiry automation for Mahakal pilgrimage lodges.',
      seoLandingPageRoute: '/hotel-digital-marketing-ujjain',
    },
    {
      id: 'indore',
      city: 'Indore',
      state: 'Madhya Pradesh',
      fullName: 'Indore, Madhya Pradesh',
      regionTag: 'Commercial Hub & Culinary Hospitality',
      seoDescription:
        'Restaurant website development in Indore, restaurant social media management, Instagram Reels creation for hotels, and Google Ads for hotels, resorts, and cafes.',
      seoLandingPageRoute: '/hotel-digital-marketing-indore',
    },
  ],
  targetKeywords: [
    'Hotel website development in Nashik',
    'Hotel website developer in Trimbakeshwar',
    'Hotel SEO services in Nashik',
    'Hotel digital marketing in Ujjain',
    'Restaurant website development in Indore',
    'WhatsApp automation for hotels',
    'Google Ads for hotels',
    'Hospitality digital growth agency',
    'AI automation for hotels',
    'AI social media management for hotels',
    'Instagram Reels creation for hotels',
    'Social media management for restaurants',
    'Hospitality digital marketing',
    'AI customer enquiry automation',
    'Restaurant social media management',
  ],
  theme: {
    background: '#15120F',
    secondary: '#1C1814',
    cards: '#211B16',
    gold: '#F4B942',
    cta: '#FFBF47',
    text: '#F5F1EA',
  },
  assets: {
    heroMountainResort: assetPaths.heroMountainResort,
  },
};

export default businessConfig;
