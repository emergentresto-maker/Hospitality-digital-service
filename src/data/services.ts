import type { LucideIcon } from 'lucide-react';
import {
  Globe,
  Search,
  MessageCircle,
  Megaphone,
  MapPin,
  Target,
  Share2,
  Star,
  Compass,
  Layers,
  Bot,
  Clapperboard,
  CalendarRange,
  MessagesSquare,
  BarChart3,
  Sparkles,
} from 'lucide-react';
import { businessConfig } from '../config/business';

export interface ServiceHighlight {
  id: string;
  number: string;
  title: string;
  shortSummary: string;
  description: string;
  deliverables: string[];
  icon: LucideIcon;
}

export type ServiceCategory =
  | 'all'
  | 'website-search'
  | 'communication-automation'
  | 'content-social'
  | 'paid-growth';

export interface ServiceCategoryInfo {
  id: Exclude<ServiceCategory, 'all'>;
  code: string;
  label: string;
  shortLabel: string;
  description: string;
}

export const serviceCategories: ServiceCategoryInfo[] = [
  {
    id: 'website-search',
    code: 'A',
    label: 'A. Website & Search Visibility',
    shortLabel: 'Website & Search',
    description:
      'Foundational hotel and restaurant websites, local Google SEO, Google Business Profile management, and guest review stewardship.',
  },
  {
    id: 'communication-automation',
    code: 'B',
    label: 'B. Communication & Automation',
    shortLabel: 'Communication & AI',
    description:
      'WhatsApp enquiry automation and intelligent AI business workflows that organize multi-channel guest requests and improve response consistency.',
  },
  {
    id: 'content-social',
    code: 'C',
    label: 'C. Content & Social Media',
    shortLabel: 'Content & Social',
    description:
      'AI-assisted Reels and video production, complete social media management, community engagement, and Insights-driven performance optimization.',
  },
  {
    id: 'paid-growth',
    code: 'D',
    label: 'D. Paid Marketing & Business Growth',
    shortLabel: 'Paid Ads & Growth',
    description:
      'High-intent Google Ads, visual Meta Ads, strategic hospitality growth consulting, and end-to-end digital management.',
  },
];

export interface ServiceOffering {
  id: string;
  number: string;
  title: string;
  price: string;
  priceSubtext: string;
  isStartingPrice: boolean;
  isNewExpansion?: boolean;
  category: Exclude<ServiceCategory, 'all'>;
  description: string;
  inclusions: string[];
  businessValue: string;
  operationalNote?: string;
  ctaLabel: string;
  icon: LucideIcon;
  featured?: boolean;
}

export interface CombinedGrowthPackage {
  id: string;
  badge: string;
  title: string;
  pricingLabel: string;
  subtitle: string;
  description: string;
  pillars: string[];
  operationalNote: string;
  ctaLabel: string;
  whatsappHref: string;
  icon: LucideIcon;
}

export interface PublishedResearchCard {
  id: string;
  code: string;
  categoryLabel: string;
  geography: string;
  year: string;
  sourceCitation: string;
  researchContext: string;
  metrics: {
    value: string;
    label: string;
  }[];
  hospitalityRelevance: string;
}

export interface CommercialCondition {
  id: string;
  title: string;
  detail: string;
}

/**
 * Generates a working WhatsApp URL with a prefilled inquiry message for a specific service.
 */
export function getServiceWhatsAppUrl(serviceTitle: string, priceDisplay?: string): string {
  const priceSegment =
    priceDisplay && priceDisplay !== 'Custom Strategy & Pricing' && priceDisplay !== 'Custom Quote'
      ? ` (${priceDisplay})`
      : '';
  const message = `Hello ${businessConfig.companyName} (${businessConfig.founder}), I would like to discuss requirements for ${serviceTitle}${priceSegment} for my hospitality business.`;
  return `https://wa.me/${businessConfig.contact.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

/**
 * 4 Hero Strip Highlights
 */
export const serviceHighlights: ServiceHighlight[] = [
  {
    id: 'website-development',
    number: '01',
    title: 'Website Development',
    shortSummary: 'Bespoke hotel, resort, and restaurant websites engineered for direct inquiries.',
    description:
      'Mobile-first, fast-loading websites crafted with luxury hospitality aesthetics, room and dining showcases, and frictionless direct inquiry journeys.',
    deliverables: ['Custom Hospitality UI', 'Mobile-First Speed', 'Direct Inquiry Integration'],
    icon: Globe,
  },
  {
    id: 'seo-services',
    number: '02',
    title: 'SEO & Google Visibility',
    shortSummary: 'Capture high-intent travelers searching for stays and dining in your city.',
    description:
      'Strategic local SEO, Google Business Profile optimization, and destination keyword targeting so guests discover your property before aggregator listings.',
    deliverables: ['Google Business Profile', 'Local Search Ranking', 'Map Pack Visibility'],
    icon: Search,
  },
  {
    id: 'ai-business-automation',
    number: '03',
    title: 'WhatsApp & AI Automation',
    shortSummary: 'Organize multi-channel guest enquiries with WhatsApp & smart AI workflows.',
    description:
      'Automated WhatsApp greeting flows, AI FAQ assistants, and structured lead routing so your front desk responds consistently.',
    deliverables: ['Instant Guest Replies', 'AI FAQ Assistant', 'Direct Lead Routing'],
    icon: Bot,
  },
  {
    id: 'ai-reels-video-production',
    number: '04',
    title: 'AI Reels, Social & Ads',
    shortSummary: 'Short-form video creation, social media management, and targeted hospitality ads.',
    description:
      'AI-assisted Instagram Reels, complete social media stewardship, and targeted Google & Meta campaigns aligned with travel demand.',
    deliverables: ['AI-Assisted Reels', 'Social Media Management', 'Search & Social Ads'],
    icon: Clapperboard,
  },
];

/**
 * Complete 15-Service Catalog:
 * - Preserves all 10 original services and their exact confirmed prices (₹10,000, ₹4,999, ₹2,499, Custom Quote).
 * - Adds the 5 new AI Automation & Social Media Growth services with "Custom Strategy & Pricing" and "Discuss Your Requirements".
 */
export const servicesCatalog: ServiceOffering[] = [
  // ============================================================================
  // CATEGORY A: WEBSITE & SEARCH VISIBILITY
  // ============================================================================
  {
    id: 'website-development',
    number: '01',
    title: 'Website Development',
    price: '₹10,000',
    priceSubtext: 'Starting price · One-time setup',
    isStartingPrice: true,
    category: 'website-search',
    description:
      'Whether you need hotel website development in Nashik, a dedicated hotel website developer in Trimbakeshwar, or restaurant website development in Indore, we build mobile-first websites that showcase rooms, menus, and capture direct inquiries.',
    inclusions: [
      'Mobile-responsive showcase for rooms, tariffs, dining & gallery',
      'Direct click-to-WhatsApp and phone reservation buttons',
      'Fast-loading pages optimized for travelers on mobile networks',
      'Google Maps location embed & foundational on-page setup',
    ],
    businessValue:
      'Gives prospective guests an official digital storefront to explore room categories, amenities, and dining menus before contacting your property directly.',
    ctaLabel: 'Inquire on WhatsApp',
    icon: Globe,
    featured: true,
  },
  {
    id: 'seo-services',
    number: '02',
    title: 'SEO Services',
    price: '₹4,999',
    priceSubtext: 'Starting price · Search optimization',
    isStartingPrice: true,
    category: 'website-search',
    description:
      'Practical hotel SEO services in Nashik, Trimbakeshwar, Ujjain, and Indore so travelers searching on Google for stays, resorts, or dining discover your property website directly.',
    inclusions: [
      'Local hospitality & destination keyword targeting',
      'Page titles, meta descriptions & heading structure optimization',
      'Image compression, alt-tags & mobile speed improvements',
      'Search indexing setup for room categories & dining pages',
    ],
    businessValue:
      'Improves organic search discoverability when travellers search for destination stays, pilgrimage accommodation, or family dining in your city.',
    ctaLabel: 'Inquire on WhatsApp',
    icon: Search,
  },
  {
    id: 'google-business-profile-management',
    number: '03',
    title: 'Google Business Profile Management',
    price: 'Custom Quote',
    priceSubtext: 'Tailored to property requirements',
    isStartingPrice: false,
    category: 'website-search',
    description:
      'Complete setup and regular upkeep of your Google Maps and Business Profile listing so nearby tourists, pilgrims, and highway diners call or navigate to your property first.',
    inclusions: [
      'Accurate business categories, amenities & check-in hours setup',
      'Regular uploads of high-resolution room, exterior & food photos',
      'Publishing seasonal offers, festive menus & local updates',
      'Profile health monitoring & map discovery optimization',
    ],
    businessValue:
      'Helps local diners and travellers on Google Maps verify your location, view authentic property photos, and initiate direct route navigation or enquiries.',
    ctaLabel: 'Request Custom Quote',
    icon: MapPin,
  },
  {
    id: 'online-review-management',
    number: '04',
    title: 'Online Review Management',
    price: 'Custom Quote',
    priceSubtext: 'Tailored to property review volume',
    isStartingPrice: false,
    category: 'website-search',
    description:
      'Practical reputation management that helps your property collect more authentic ratings from satisfied guests and ensures every online review receives a polite, professional response.',
    inclusions: [
      'Front-desk QR code & WhatsApp review link setup for guests',
      'Timely, courteous responses to positive & constructive reviews',
      'Monitoring of guest sentiment on Google & travel listings',
      'Periodic feedback insights to help improve guest experience',
    ],
    businessValue:
      'Builds long-term guest trust through consistent, professional responses to genuine guest feedback.',
    ctaLabel: 'Request Custom Quote',
    icon: Star,
  },

  // ============================================================================
  // CATEGORY B: COMMUNICATION & AUTOMATION
  // ============================================================================
  {
    id: 'whatsapp-automation',
    number: '05',
    title: 'WhatsApp Automation',
    price: '₹2,499',
    priceSubtext: 'Starting price · Workflow setup',
    isStartingPrice: true,
    category: 'communication-automation',
    description:
      'Dedicated WhatsApp automation for hotels and restaurants that replies to guest inquiries 24/7, shares room tariffs, brochures, or food menus, and forwards ready-to-book guests straight to your reception desk.',
    inclusions: [
      'Instant automated greeting & common guest FAQ responses',
      'Structured room tariff, brochure & restaurant menu sharing',
      'Check-in date, guest count & contact details collection',
      'Seamless handover to your front desk or booking manager',
    ],
    businessValue:
      'Ensures guests inquiring late at night or during busy check-in hours receive an immediate, helpful response with your tariffs or menus.',
    ctaLabel: 'Inquire on WhatsApp',
    icon: MessageCircle,
  },
  {
    id: 'ai-business-automation',
    number: '06',
    title: 'AI Business Automation & Smart Workflows',
    price: 'Custom Strategy & Pricing',
    priceSubtext: 'Tailored workflow architecture',
    isStartingPrice: false,
    isNewExpansion: true,
    category: 'communication-automation',
    description:
      'Reduce repetitive work and manage your hospitality operations more efficiently with intelligent automation.',
    inclusions: [
      'Automated enquiry management',
      'AI-powered customer FAQ assistant',
      'WhatsApp enquiry automation',
      'Customer enquiry classification',
      'Booking enquiry routing',
      'Automated follow-up reminders',
      'Lead management workflows',
      'Daily and weekly reporting',
      'Customer notification workflows',
      'Integration between website, forms and communication channels',
    ],
    businessValue:
      'Hotels receive enquiries through multiple channels. Automation can help organize enquiries, reduce repetitive manual work, route requests to the right person and improve response consistency.',
    operationalNote:
      'Technical & Integration Note: Uses real integrations across website forms, approved WhatsApp Business API channels, and lead sheets/CRMs. AI workflows classify and route enquiries—AI does not automatically confirm a booking unless a real booking engine or PMS is explicitly integrated.',
    ctaLabel: 'Discuss Your Requirements',
    icon: Bot,
    featured: true,
  },

  // ============================================================================
  // CATEGORY C: CONTENT & SOCIAL MEDIA
  // ============================================================================
  {
    id: 'ai-reels-video-production',
    number: '07',
    title: 'AI-Powered Reels & Creative Video Production',
    price: 'Custom Strategy & Pricing',
    priceSubtext: 'Custom production & editing scope',
    isStartingPrice: false,
    isNewExpansion: true,
    category: 'content-social',
    description:
      'Turn your hotel rooms, restaurant experiences, food, destinations and hospitality offerings into engaging short-form video content.',
    inclusions: [
      'AI-assisted Reels creation',
      'Hotel room showcase videos',
      'Resort and property promotional videos',
      'Restaurant food and menu videos',
      'Destination and travel content',
      'Festival and seasonal promotional videos',
      'AI-assisted video editing',
      'Caption and hook writing',
      'Hashtag research',
      'Brand-specific visual concepts',
      'Content repurposing for suitable social platforms',
    ],
    businessValue:
      'Short-form videos provide an additional way for potential guests to discover a property, understand its atmosphere and explore its services before enquiring.',
    operationalNote:
      'Authenticity & Disclosure Policy: Uses real property footage supplied by the client wherever possible. Any AI-generated visual material is labelled appropriately when needed, and synthetic footage is never represented as authentic footage of a particular hotel. Does not promise viral reach or a guaranteed number of views.',
    ctaLabel: 'Discuss Your Requirements',
    icon: Clapperboard,
    featured: true,
  },
  {
    id: 'complete-social-media-management',
    number: '08',
    title: 'Complete Social Media Management',
    price: 'Custom Strategy & Pricing',
    priceSubtext: 'Deliverables & schedule agreed per client',
    isStartingPrice: false,
    isNewExpansion: true,
    category: 'content-social',
    description:
      'Build a consistent and professional digital identity across your social media channels.',
    inclusions: [
      'Instagram management',
      'Facebook page management',
      'Weekly and monthly content calendars',
      'Daily or weekly posting schedules as agreed',
      'Captions and hashtag strategy',
      'Hospitality-focused content planning',
      'Promotional campaign planning',
      'Festival and seasonal content',
      'Story content planning',
      'Brand consistency',
      'Performance reporting',
    ],
    businessValue:
      'Maintains an active, cohesive visual identity across Instagram and Facebook aligned with seasonal hospitality, dining, and travel moments.',
    operationalNote:
      'Scope Transparency: Exact posting frequency, content formats, and monthly deliverables are agreed in writing with each client based on property requirements.',
    ctaLabel: 'Discuss Your Requirements',
    icon: CalendarRange,
  },
  {
    id: 'social-media-engagement-community',
    number: '09',
    title: 'Social Media Engagement & Community Management',
    price: 'Custom Strategy & Pricing',
    priceSubtext: 'Human-supervised response workflows',
    isStartingPrice: false,
    isNewExpansion: true,
    category: 'content-social',
    description:
      'Turn your social media presence into a more responsive customer communication channel.',
    inclusions: [
      'Comment monitoring',
      'Professional comment replies',
      'Instagram DM monitoring',
      'Customer enquiry routing',
      'FAQ response templates',
      'Customer feedback monitoring',
      'Review response coordination',
      'Relevant community engagement',
      'Potential customer identification',
      'Escalation of important enquiries to the business owner',
    ],
    businessValue:
      'Ensures prospective guests asking about room availability, pricing, or dining timings in comments and DMs receive timely, polite replies and get routed to your booking team.',
    operationalNote:
      'Human Approval & Anti-Spam Policy: Human approval and direct escalation remain available for sensitive or complex enquiries. UPWORD never uses fake comments, fake followers, fake engagement, automated spam, or unsolicited mass messaging.',
    ctaLabel: 'Discuss Your Requirements',
    icon: MessagesSquare,
  },
  {
    id: 'social-media-growth-analytics',
    number: '10',
    title: 'Social Media Growth & Performance Optimization',
    price: 'Custom Strategy & Pricing',
    priceSubtext: 'Insights & data-informed optimization',
    isStartingPrice: false,
    isNewExpansion: true,
    category: 'content-social',
    description:
      'Understand what your audience likes, identify effective content and continuously improve your digital strategy.',
    inclusions: [
      'Instagram Insights analysis',
      'Facebook Insights analysis',
      'Reach and impressions tracking',
      'Reels performance analysis',
      'Engagement rate monitoring',
      'Audience insights',
      'Profile optimization',
      'Content performance comparisons',
      'Monthly reporting',
      'Data-informed content recommendations',
    ],
    businessValue:
      'Evaluates real platform analytics so your hospitality team knows which Reels, room showcases, or dining posts drive profile visits and enquiries.',
    operationalNote:
      'Performance Disclaimer: Reach and follower growth depend on content quality, audience relevance, consistency, competition, and platform algorithms. We do not guarantee followers, reach, viral videos, or sales.',
    ctaLabel: 'Discuss Your Requirements',
    icon: BarChart3,
  },
  {
    id: 'social-media-management',
    number: '11',
    title: 'Social Media Management (Foundational)',
    price: 'Custom Quote',
    priceSubtext: 'Based on posting frequency & scope',
    isStartingPrice: false,
    category: 'content-social',
    description:
      'Consistent, polished upkeep of your Instagram and Facebook pages to showcase your property ambiance, room comfort, chef specials, and seasonal hospitality stories.',
    inclusions: [
      'Monthly content planning aligned with travel & festive seasons',
      'Curated feed posts, story updates & reel presentation',
      'Hospitality-focused captions & regional travel hashtags',
      'Bio optimization with direct booking & inquiry links',
    ],
    businessValue:
      'Ideal for properties seeking essential monthly feed curation and profile upkeep.',
    ctaLabel: 'Request Custom Quote',
    icon: Share2,
  },

  // ============================================================================
  // CATEGORY D: PAID MARKETING & BUSINESS GROWTH
  // ============================================================================
  {
    id: 'google-ads-management',
    number: '12',
    title: 'Google Ads Management',
    price: 'Custom Quote',
    priceSubtext: 'Ad spend billed separately',
    isStartingPrice: false,
    category: 'paid-growth',
    description:
      'Specialized Google Ads for hotels and hotel digital marketing in Ujjain, Nashik, Trimbakeshwar, and Indore that places your property at the top of search results when guests are actively looking to book.',
    inclusions: [
      'Search campaign setup for high-intent city & pilgrimage keywords',
      'Geographic targeting across key feeder cities & travel routes',
      'Call-only and website inquiry ad extensions setup',
      'Keyword bid management & negative keyword filtering',
    ],
    businessValue:
      'Captures high-intent searchers actively looking for hotels, resorts, or dining in your destination city.',
    ctaLabel: 'Request Custom Quote',
    icon: Target,
  },
  {
    id: 'meta-ads-management',
    number: '13',
    title: 'Meta Ads Management',
    price: 'Custom Quote',
    priceSubtext: 'Ad spend billed separately',
    isStartingPrice: false,
    category: 'paid-growth',
    description:
      'Visual Instagram and Facebook advertising campaigns designed to promote weekend resort getaways, wedding lawns, banquet bookings, and signature restaurant dining.',
    inclusions: [
      'Click-to-WhatsApp and direct call ad campaign setup',
      'Audience targeting for families, couples & corporate groups',
      'Visual ad formatting for reels, stories & carousel showcases',
      'Campaign monitoring & inquiry cost optimization',
    ],
    businessValue:
      'Reaches leisure travellers, families, and event planners visually across Instagram and Facebook with direct click-to-WhatsApp inquiry actions.',
    ctaLabel: 'Request Custom Quote',
    icon: Megaphone,
  },
  {
    id: 'hospitality-growth-consulting',
    number: '14',
    title: 'Hospitality Growth Consulting',
    price: 'Custom Quote',
    priceSubtext: 'Direct advisory with founder',
    isStartingPrice: false,
    category: 'paid-growth',
    description:
      'One-on-one strategic consulting with Shubham Upadhyay to evaluate your current digital channels, improve direct room and table inquiries, and plan practical marketing investments.',
    inclusions: [
      'Complete audit of your existing website, Google & social presence',
      'Actionable roadmap to increase direct bookings vs. aggregators',
      'Seasonal campaign planning for peak pilgrimage & holiday dates',
      'Clear prioritization of digital spend based on property goals',
    ],
    businessValue:
      'Provides hotel and restaurant owners with an objective, structured digital growth roadmap tailored to their property size and market.',
    ctaLabel: 'Request Custom Quote',
    icon: Compass,
  },
  {
    id: 'complete-digital-management',
    number: '15',
    title: 'Complete Digital Management',
    price: 'Custom Quote',
    priceSubtext: 'Comprehensive custom engagement',
    isStartingPrice: false,
    category: 'paid-growth',
    description:
      'Your all-in-one hospitality digital growth partner. UPWORD handles your website updates, Google visibility, WhatsApp automation, ads, and social presence under one coordinated strategy.',
    inclusions: [
      'End-to-end management of website, SEO & Google Business Profile',
      'Coordinated Google Ads, Meta Ads & WhatsApp inquiry workflows',
      'Consistent social media & online reputation stewardship',
      'Single dedicated partner for your entire digital growth',
    ],
    businessValue:
      'Consolidates website upkeep, search visibility, and paid campaigns under one accountable hospitality partner.',
    ctaLabel: 'Request Custom Quote',
    icon: Layers,
    featured: true,
  },
];

/**
 * Section 6: Additional Premium Combined Service Package
 * "AI-Powered Hospitality Growth Management"
 */
export const aiHospitalityGrowthPackage: CombinedGrowthPackage = {
  id: 'ai-powered-hospitality-growth-management',
  badge: 'Flagship Integrated Solution',
  title: 'AI-Powered Hospitality Growth Management',
  pricingLabel: 'Custom Strategy & Pricing',
  subtitle: 'Integrated AI Automation, Social Media, Reels Production & Direct Enquiry Ecosystem',
  description:
    'An integrated digital management solution designed for hotels, resorts, and restaurants that want their website, WhatsApp enquiry automation, AI-assisted Reels production, social media management, community replies, and performance analytics managed as one unified system.',
  pillars: [
    'AI automation & smart hospitality workflows',
    'Website and WhatsApp integration',
    'AI-assisted content creation',
    'Reels and promotional videos',
    'Social media management (Instagram & Facebook)',
    'Comment and message management',
    'Hospitality content planning & calendars',
    'Performance analytics & monthly reporting',
    'Customer enquiry classification & routing workflows',
  ],
  operationalNote:
    'Delivered as a custom-scoped engagement tailored to your room inventory, dining venues, and seasonal calendar. All AI workflows, posting schedules, and human escalation rules are configured transparently with your management team.',
  ctaLabel: 'Request a Custom Proposal',
  whatsappHref: `https://wa.me/${
    businessConfig.contact.whatsappRaw
  }?text=${encodeURIComponent(
    `Hello ${businessConfig.companyName} (${businessConfig.founder}), I would like to request a custom proposal for the AI-Powered Hospitality Growth Management combined package for my property.`
  )}`,
  icon: Sparkles,
};

/**
 * Section 8: Published Third-Party Research Statistics
 * "Why Digital Engagement Matters for Hospitality Businesses"
 */
export const digitalEngagementResearchData: PublishedResearchCard[] = [
  {
    id: 'ipsos-india-reels-2025',
    code: 'STUDY A',
    categoryLabel: 'Short-Form Video & Brand Discovery',
    geography: 'India',
    year: 'September 2025',
    sourceCitation: 'Meta-commissioned Ipsos India Research (Published September 2025)',
    researchContext:
      'Survey of Indian online users examining short-form video preferences and brand discovery behaviour on Meta platforms.',
    metrics: [
      {
        value: '92%',
        label:
          'of surveyed Indian users preferred Reels over other surveyed short-form video formats.',
      },
      {
        value: '80%',
        label: 'of surveyed Indians reported discovering new brands on Meta platforms.',
      },
    ],
    hospitalityRelevance:
      'Showcasing hotel rooms, resort views, and restaurant dishes through well-crafted Reels helps travellers visually discover and evaluate your property.',
  },
  {
    id: 'kantar-messaging-ai-2026',
    code: 'STUDY B',
    categoryLabel: 'Business Messaging & AI Assistance',
    geography: 'Global',
    year: '2026 Report',
    sourceCitation:
      'Kantar Business Messaging Research, commissioned by Meta (2026 WhatsApp Business Report)',
    researchContext:
      'Global consumer research analysing communication preferences with businesses and receptiveness to AI-assisted responses.',
    metrics: [
      {
        value: '73.3%',
        label:
          'of surveyed global consumers preferred messaging when communicating with a business.',
      },
      {
        value: '67.7%',
        label: 'of surveyed consumers agreed that receiving an AI chatbot response could be helpful.',
      },
    ],
    hospitalityRelevance:
      'Combining direct WhatsApp messaging with structured AI FAQ and enquiry routing helps hotels respond promptly when guests ask about tariffs or availability.',
  },
  {
    id: 'meta-india-weekly-messaging-2025',
    code: 'STUDY C',
    categoryLabel: 'Weekly Business Messaging Adoption',
    geography: 'India',
    year: 'September 2025',
    sourceCitation: 'India Business Messaging Research published by Meta (September 2025)',
    researchContext:
      'Research examining how frequently Indian online adults communicate with businesses via messaging channels.',
    metrics: [
      {
        value: '91%',
        label: 'of Indian online adults reportedly chat with businesses weekly.',
      },
    ],
    hospitalityRelevance:
      'Because Indian travellers and diners already use messaging every week, a responsive WhatsApp and social DM workflow meets guests on the channel they naturally use.',
  },
];

/**
 * Explicit Commercial Conditions (No invented monthly fees)
 */
export const commercialConditions: CommercialCondition[] = [
  {
    id: 'ad-budget',
    title: 'Advertising Budget Is Separate',
    detail:
      'Media spend for Google Ads and Meta (Instagram/Facebook) Ads is separate from campaign setup or management fees and is paid according to your chosen ad budget.',
  },
  {
    id: 'domain-hosting',
    title: 'Domain & Premium Hosting Charges May Be Separate',
    detail:
      'Custom domain name registration, annual renewals, and specialized or premium hosting plans may be billed separately based on your property website requirements.',
  },
  {
    id: 'whatsapp-api',
    title: 'Third-Party WhatsApp & AI API Charges May Be Separate',
    detail:
      'Official WhatsApp Business API conversation charges, third-party automation platform subscriptions, or external AI API usage fees, where applicable, are separate from setup fees.',
  },
  {
    id: 'recurring-fees',
    title: 'Custom Strategy & Recurring Fees Are Agreed in Advance',
    detail:
      'Confirmed starting prices apply to Website Development (₹10,000), SEO Services (₹4,999), and WhatsApp Automation (₹2,499). All AI automation, Reels production, and social media management scopes are custom-quoted and agreed upon in writing before commencement.',
  },
];

export default servicesCatalog;
