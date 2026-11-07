import { assetPaths } from '../assets';
import { businessConfig } from '../config/business';

export interface IndependentHospitalityReference {
  name: string;
  locationLabel: string;
  googleMapsUrl: string;
}

export interface LocationDetailItem {
  id: string;
  number: string;
  city: string;
  title: string;
  state: string;
  regionTag: string;
  image: string;
  imageAlt: string;
  focusSummary: string;
  introduction: string;
  propertyTypes: string[];
  servicesAvailable: string[];
  growthOpportunities: string[];
  independentExamples: IndependentHospitalityReference[];
  ctaLabel: string;
  whatsappHref: string;
  seoLandingPageRoute: string;
  seoLandingPageLabel: string;
}

export type FocusCityCardData = LocationDetailItem;
export type LocationSectionData = LocationDetailItem;

function createCityWhatsAppUrl(cityTitle: string): string {
  const message = `Hello ${businessConfig.companyName}, I operate a hospitality business in ${cityTitle} and would like to discuss digital growth services.`;
  return `https://wa.me/${businessConfig.contact.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

export const locationDetailsData: LocationDetailItem[] = [
  {
    id: 'nashik',
    number: '01',
    city: 'Nashik',
    title: 'NASHIK',
    state: 'Maharashtra',
    regionTag: 'Wine Capital, Luxury Resorts & Business Hotels',
    image: assetPaths.locationNashikVineyardResort,
    imageAlt:
      'Luxury boutique resort and vineyard hotel terrace in Nashik overlooking green hills and lake at sunset',
    focusSummary:
      'Focus on luxury resorts, vineyard stays, business hotels, family restaurants, and weekend getaway properties.',
    introduction:
      'Nashik attracts year-round leisure travelers from Mumbai and Pune, vineyard tourists, wedding groups, and corporate visitors. A fast, mobile-first digital presence helps Nashik hospitality properties convert high-value weekend and event enquiries directly.',
    propertyTypes: [
      'Luxury & Boutique Hotels',
      'Vineyard & Lakeview Resorts',
      'Guest Houses & Homestays',
      'Fine-Dining Restaurants & Cafes',
      'Banquet & Wedding Venues',
    ],
    servicesAvailable: [
      'Hotel Website Development in Nashik (from ₹10,000)',
      'Hotel SEO Services in Nashik (from ₹4,999)',
      'WhatsApp Automation for Hotels & Resorts (from ₹2,499)',
      'Google Business Profile & Maps Optimization',
      'Google Ads & Meta Ads for Weekend Getaways',
    ],
    growthOpportunities: [
      'Capture direct weekend staycation bookings from Mumbai, Thane, and Pune travelers',
      'Rank on Google Maps for Nashik resort, hotel, and family dining searches',
      'Automate WhatsApp room tariff brochures and wedding lawn inquiry responses',
    ],
    independentExamples: [
      {
        name: 'Beyond by Sula',
        locationLabel: 'Nashik, Maharashtra',
        googleMapsUrl:
          'https://www.google.com/maps/search/?api=1&query=Beyond+by+Sula+Nashik+Maharashtra',
      },
      {
        name: 'The Source at Sula',
        locationLabel: 'Nashik, Maharashtra',
        googleMapsUrl:
          'https://www.google.com/maps/search/?api=1&query=The+Source+at+Sula+Nashik+Maharashtra',
      },
    ],
    ctaLabel: 'Inquire for Nashik Property',
    whatsappHref: createCityWhatsAppUrl('Nashik, Maharashtra'),
    seoLandingPageRoute: '/hotel-digital-marketing-nashik',
    seoLandingPageLabel: 'Hotel Digital Marketing in Nashik',
  },
  {
    id: 'trimbakeshwar',
    number: '02',
    city: 'Trimbakeshwar',
    title: 'TRIMBAKESHWAR',
    state: 'Maharashtra',
    regionTag: 'Jyotirlinga Pilgrimage Corridor & Scenic Foothill Stays',
    image: assetPaths.locationNashikTrimbakeshwar,
    imageAlt:
      'Boutique hotel and tranquil guest house courtyard overlooking green Brahmagiri hills near Trimbakeshwar',
    focusSummary:
      'Focus on hotels, guest houses, homestays, pilgrimage accommodation, and seasonal festival demand.',
    introduction:
      'As home to the sacred Trimbakeshwar Jyotirlinga and surrounded by the scenic Brahmagiri foothills, Trimbakeshwar experiences intense pilgrimage and family travel demand across auspicious dates, Shravan months, and long weekends.',
    propertyTypes: [
      'Pilgrimage Hotels & Bhaktaniwas',
      'Family Guest Houses & Lodges',
      'Foothill Homestays & Villas',
      'Pure-Veg Family Restaurants',
      'Seasonal & Group Accommodation',
    ],
    servicesAvailable: [
      'Hotel Website Developer in Trimbakeshwar (from ₹10,000)',
      'Local SEO & Temple-Proximity Search Visibility (from ₹4,999)',
      'WhatsApp Automation for Instant Room Tariff Replies (from ₹2,499)',
      'Google Business Profile Management for Pilgrims',
      'Seasonal Google Search Ads for Peak Dates',
    ],
    growthOpportunities: [
      'Help out-of-state devotees book family rooms directly before arriving in town',
      'Display clear temple distance, parking availability, and check-in timings online',
      'Handle high-volume seasonal phone and WhatsApp room inquiries without missed calls',
    ],
    independentExamples: [
      {
        name: 'Hotel Three Leaves',
        locationLabel: 'Trimbakeshwar, Maharashtra',
        googleMapsUrl:
          'https://www.google.com/maps/search/?api=1&query=Hotel+Three+Leaves+Trimbakeshwar+Maharashtra',
      },
      {
        name: 'Hotel Dhruv Palace',
        locationLabel: 'Trimbakeshwar, Maharashtra',
        googleMapsUrl:
          'https://www.google.com/maps/search/?api=1&query=Hotel+Dhruv+Palace+Trimbakeshwar+Maharashtra',
      },
    ],
    ctaLabel: 'Inquire for Trimbakeshwar Property',
    whatsappHref: createCityWhatsAppUrl('Trimbakeshwar, Maharashtra'),
    seoLandingPageRoute: '/hotel-digital-marketing-trimbakeshwar',
    seoLandingPageLabel: 'Hotel Digital Marketing in Trimbakeshwar',
  },
  {
    id: 'ujjain',
    number: '03',
    city: 'Ujjain',
    title: 'UJJAIN',
    state: 'Madhya Pradesh',
    regionTag: 'Shri Mahakaleshwar Corridor & Heritage Hospitality',
    image: assetPaths.locationUjjainHospitality,
    imageAlt:
      'Heritage hotel and welcoming pilgrimage guest house courtyard in Ujjain with warm sandstone arches',
    focusSummary:
      'Focus on hotels, guest houses, lodges, dharamshalas, and Mahakal pilgrimage accommodation.',
    introduction:
      'Following the expansion of Shri Mahakal Lok, Ujjain welcomes millions of spiritual travelers and families year-round. Properties with trustworthy websites, accurate Google Maps profiles, and quick WhatsApp booking flows stand out immediately.',
    propertyTypes: [
      'Hotels & Heritage Stays',
      'Guest Houses & Family Lodges',
      'Dharamshalas & Yatri Niwas',
      'Mahakal Pilgrimage Accommodation',
      'Traditional Dining & Thali Restaurants',
    ],
    servicesAvailable: [
      'Hotel Website Development in Ujjain (from ₹10,000)',
      'Hotel Digital Marketing & SEO in Ujjain (from ₹4,999)',
      'WhatsApp Automation for Pilgrimage Bookings (from ₹2,499)',
      'Google Business Profile & Review Management',
      'Google Ads for Hotels Near Mahakal Corridor',
    ],
    growthOpportunities: [
      'Attract direct room reservations from families planning Mahakal darshan trips',
      'Build guest trust with verified property photos, room categories, and clear tariffs',
      'Reduce commission leakage to third-party travel aggregators during peak months',
    ],
    independentExamples: [
      {
        name: 'Anjushree',
        locationLabel: 'Ujjain, Madhya Pradesh',
        googleMapsUrl:
          'https://www.google.com/maps/search/?api=1&query=Hotel+Anjushree+Ujjain+Madhya+Pradesh',
      },
      {
        name: 'Hotel Imperial Grand',
        locationLabel: 'Ujjain, Madhya Pradesh',
        googleMapsUrl:
          'https://www.google.com/maps/search/?api=1&query=Hotel+Imperial+Grand+Ujjain+Madhya+Pradesh',
      },
    ],
    ctaLabel: 'Inquire for Ujjain Property',
    whatsappHref: createCityWhatsAppUrl('Ujjain, Madhya Pradesh'),
    seoLandingPageRoute: '/hotel-digital-marketing-ujjain',
    seoLandingPageLabel: 'Hotel Digital Marketing in Ujjain',
  },
  {
    id: 'indore',
    number: '04',
    city: 'Indore',
    title: 'INDORE',
    state: 'Madhya Pradesh',
    regionTag: 'Commercial Capital, Resorts, Cafes & Culinary Hub',
    image: assetPaths.locationIndoreHospitality,
    imageAlt:
      'Modern luxury hotel courtyard, boutique resort lounge, and fine-dining restaurant terrace in Indore',
    focusSummary: 'Focus on hotels, resorts, cafes, and restaurants.',
    introduction:
      'As Madhya Pradesh’s commercial center andUPWORD’s headquarters city, Indore boasts a thriving ecosystem of business hotels, highway resorts, specialty cafes, and acclaimed restaurants competing for corporate guests, diners, and event bookings.',
    propertyTypes: [
      'Business & Boutique Hotels',
      'Weekend & Bypass Resorts',
      'Specialty Cafes & Lounges',
      'Fine-Dining & Family Restaurants',
      'Corporate Banquet & Lawn Venues',
    ],
    servicesAvailable: [
      'Restaurant & Hotel Website Development in Indore (from ₹10,000)',
      'Local SEO Services for Hotels & Restaurants (from ₹4,999)',
      'WhatsApp Table & Room Reservation Automation (from ₹2,499)',
      'Meta Ads (Instagram/Facebook) & Google Ads Management',
      'Social Media & Online Review Management',
    ],
    growthOpportunities: [
      'Drive direct corporate room bookings, banquet inquiries, and weekend resort stays',
      'Showcase digital food menus, ambiance galleries, and table reservation links',
      'Run targeted Instagram and Google campaigns for festive dining and events',
    ],
    independentExamples: [
      {
        name: 'Sayaji Hotel Indore',
        locationLabel: 'Indore, Madhya Pradesh',
        googleMapsUrl:
          'https://www.google.com/maps/search/?api=1&query=Sayaji+Hotel+Indore+Madhya+Pradesh',
      },
      {
        name: 'Sheraton Grand Palace Indore',
        locationLabel: 'Indore, Madhya Pradesh',
        googleMapsUrl:
          'https://www.google.com/maps/search/?api=1&query=Sheraton+Grand+Palace+Indore+Madhya+Pradesh',
      },
    ],
    ctaLabel: 'Inquire for Indore Property',
    whatsappHref: createCityWhatsAppUrl('Indore, Madhya Pradesh'),
    seoLandingPageRoute: '/hotel-digital-marketing-indore',
    seoLandingPageLabel: 'Hotel Digital Marketing in Indore',
  },
];

export const focusCitiesData = locationDetailsData;

export default locationDetailsData;
