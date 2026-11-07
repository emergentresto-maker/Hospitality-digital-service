import { assetPaths } from '../assets';
import { businessConfig } from '../config/business';

export type LocalSeoCitySlug =
  | '/hotel-digital-marketing-nashik'
  | '/hotel-digital-marketing-trimbakeshwar'
  | '/hotel-digital-marketing-ujjain'
  | '/hotel-digital-marketing-indore';

export interface LocalSeoDeepTopic {
  title: string;
  body: string;
  serviceLink: string;
  serviceLinkLabel: string;
}

export interface LocalSeoChallengeOpportunity {
  challengeTitle: string;
  challengeDetail: string;
  opportunityTitle: string;
  opportunityDetail: string;
}

export interface LocalSeoFaqItem {
  question: string;
  answer: string;
}

export interface LocalSeoServiceMatrixItem {
  id: string;
  title: string;
  priceLabel: string;
  cityApplication: string;
  serviceRoute: string;
}

export interface LocalSeoPageData {
  slug: LocalSeoCitySlug;
  cityId: 'nashik' | 'trimbakeshwar' | 'ujjain' | 'indore';
  cityName: string;
  stateName: string;
  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  heroKicker: string;
  h1Title: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  serviceAreaDisclosure: string;
  introductionParagraphs: string[];
  propertyTypesServed: string[];
  challengesAndOpportunities: LocalSeoChallengeOpportunity[];
  deepTopicSections: LocalSeoDeepTopic[];
  serviceMatrix: LocalSeoServiceMatrixItem[];
  gbpReadinessNote: string;
  faqs: LocalSeoFaqItem[];
  whatsappInquiryHref: string;
}

function createLocalSeoWhatsAppUrl(cityName: string, primaryKeyword: string): string {
  const message = `Hello ${businessConfig.companyName} (${businessConfig.founder}), I operate a hospitality property in ${cityName} and would like to discuss ${primaryKeyword} and website/digital growth services.`;
  return `https://wa.me/${businessConfig.contact.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

export const localSeoPagesData: Record<LocalSeoCitySlug, LocalSeoPageData> = {
  // ============================================================================
  // PAGE A: NASHIK (/hotel-digital-marketing-nashik)
  // ============================================================================
  '/hotel-digital-marketing-nashik': {
    slug: '/hotel-digital-marketing-nashik',
    cityId: 'nashik',
    cityName: 'Nashik',
    stateName: 'Maharashtra',
    seoTitle: 'Hotel Website Development & Digital Marketing in Nashik | UPWORD',
    metaDescription:
      'Specialized hotel digital marketing in Nashik by UPWORD. We provide hotel website development in Nashik, restaurant website design, hotel SEO services, WhatsApp automation, AI workflows, and Reels production for Nashik hotels and resorts.',
    primaryKeyword: 'Hotel Digital Marketing in Nashik',
    secondaryKeywords: [
      'Hotel Website Development Nashik',
      'Restaurant Website Design Nashik',
      'SEO Services for Hotels Nashik',
      'WhatsApp Automation for Hotels Nashik',
      'Social Media Management for Hotels Nashik',
      'Resort Digital Marketing Nashik',
      'Google Business Profile Management Nashik',
    ],
    heroKicker: 'Nashik Hospitality Digital Growth · Service-Area Coverage',
    h1Title: 'Hotel Website Development & Digital Marketing in Nashik.',
    heroSubtitle:
      'Helping boutique hotels, vineyard resorts, lakeview retreats, guest houses, and restaurants in Nashik attract direct weekend, leisure, corporate, and event enquiries without relying solely on third-party travel aggregators.',
    heroImage: assetPaths.locationNashikVineyardResort,
    heroImageAlt:
      'Luxury vineyard resort and boutique hotel terrace in Nashik overlooking green hills at sunset — UPWORD Hotel Digital Marketing in Nashik',
    serviceAreaDisclosure:
      'UPWORD is headquartered in Indore, Madhya Pradesh and serves hotels, resorts, guest houses, and restaurants in Nashik, Maharashtra remotely and through dedicated digital consultation.',
    introductionParagraphs: [
      'Nashik occupies a unique position in Maharashtra’s hospitality landscape. Combining vineyard tourism around Gangapur Road and Sula corridors, scenic dam-side resorts near Igatpuri and Kashypi, corporate stays along the Mumbai–Agra highway, and year-round heritage travel, hospitality businesses in Nashik cater to diverse guest segments.',
      'Yet many well-maintained hotels, resorts, and family restaurants in Nashik depend heavily on online travel agencies (OTAs) or word-of-mouth referrals. When weekend travellers from Mumbai, Thane, or Pune search on Google or explore Instagram Reels before planning a trip, properties without a fast, mobile-first website or responsive WhatsApp workflow often lose direct enquiries.',
      'UPWORD provides specialized hotel digital marketing in Nashik—combining custom hotel website development, restaurant website design, local SEO services for hotels in Nashik, WhatsApp automation, AI-assisted Instagram Reels, and targeted Google and Meta advertising under one structured growth strategy.',
    ],
    propertyTypesServed: [
      'Vineyard & Lakeview Resorts',
      'Business & Highway Hotels',
      'Boutique Stays & Villas',
      'Guest Houses & Homestays',
      'Fine-Dining Restaurants & Cafes',
      'Destination Wedding & Banquet Lawns',
    ],
    challengesAndOpportunities: [
      {
        challengeTitle: 'High Aggregator Commissions on Weekend Stays',
        challengeDetail:
          'Leisure travellers from Mumbai and Pune frequently discover Nashik resorts on aggregator portals, eroding room revenue margins during peak weekend and monsoon seasons.',
        opportunityTitle: 'Direct Enquiry Websites & Brand Search Capture',
        opportunityDetail:
          'A dedicated hotel website with clear room categories, tariff galleries, and one-tap WhatsApp enquiry buttons encourages guests who look up your property name on Google to book directly with your front desk.',
      },
      {
        challengeTitle: 'Unanswered Evening & Weekend Guest Enquiries',
        challengeDetail:
          'Prospective guests often message or call late in the evening to ask about pool access, extra bed charges, pet policies, or group dining packages.',
        opportunityTitle: 'WhatsApp Automation & AI Enquiry Workflows',
        opportunityDetail:
          'Automated WhatsApp flows and AI FAQ assistants instantly share room brochures, resort day-outing packages, and restaurant menus while routing qualified leads to your reservations team.',
      },
      {
        challengeTitle: 'Standing Out in Visual Leisure & Dining Discovery',
        challengeDetail:
          'Static photos alone rarely convey the atmosphere of a Nashik hillside resort, vineyard view, or rooftop restaurant.',
        opportunityTitle: 'AI-Assisted Instagram Reels & Social Media Management',
        opportunityDetail:
          'Consistent short-form Reels showcasing room interiors, monsoon valley views, and signature dishes help travellers experience your property’s ambiance before they enquire.',
      },
    ],
    deepTopicSections: [
      {
        title: 'Hotel Website Development & Restaurant Website Design in Nashik',
        body: 'We build mobile-first websites starting from ₹10,000 for Nashik hotels, resorts, and restaurants. Every site is engineered for fast loading on mobile networks, featuring dedicated room and villa galleries, downloadable banquet brochures, digital food menus, Google Maps directions, and direct click-to-WhatsApp inquiry triggers.',
        serviceLink: '/services#website-development',
        serviceLinkLabel: 'Explore Website Development (from ₹10,000)',
      },
      {
        title: 'SEO Services for Hotels & Google Business Profile Management in Nashik',
        body: 'When travellers search for stays near Gangapur Dam, Panchavati, Mumbai Naka, or vineyard corridors, local search visibility is essential. Our SEO services for hotels in Nashik (starting from ₹4,999) and Google Business Profile management optimize your page titles, structured schema, local map categories, and photo updates.',
        serviceLink: '/services#seo-services',
        serviceLinkLabel: 'Explore Hotel SEO Services (from ₹4,999)',
      },
      {
        title: 'WhatsApp Automation & AI Business Workflows for Nashik Properties',
        body: 'With WhatsApp automation for hotels in Nashik (starting from ₹2,499) and custom AI business automation workflows, your property can automatically classify incoming room, wedding lawn, or table reservation enquiries, send instant tariff PDFs, and schedule follow-up reminders.',
        serviceLink: '/services#ai-business-automation',
        serviceLinkLabel: 'Explore WhatsApp & AI Automation',
      },
      {
        title: 'Resort Digital Marketing, Instagram Reels & Paid Ads in Nashik',
        body: 'We produce AI-assisted Instagram Reels from your real property footage, manage complete social media calendars, and run targeted Google Search Ads and Meta (Instagram/Facebook) campaigns aimed at weekend travellers and event planners.',
        serviceLink: '/services#ai-reels-video-production',
        serviceLinkLabel: 'Explore AI Reels & Social Media Management',
      },
    ],
    serviceMatrix: [
      {
        id: 'website-dev-nashik',
        title: 'Professional Hotel Website Development',
        priceLabel: '₹10,000 (Starting Price)',
        cityApplication: 'Custom room, villa, and resort showcase websites for Nashik stays.',
        serviceRoute: '/services#website-development',
      },
      {
        id: 'restaurant-web-nashik',
        title: 'Restaurant Website Development',
        priceLabel: '₹10,000 (Starting Price)',
        cityApplication: 'Digital menu, ambiance gallery, and table inquiry websites for Nashik restaurants & cafes.',
        serviceRoute: '/services#website-development',
      },
      {
        id: 'seo-nashik',
        title: 'Search Engine Optimization (SEO)',
        priceLabel: '₹4,999 (Starting Price)',
        cityApplication: 'On-page and local search optimization for Nashik hotel and resort keywords.',
        serviceRoute: '/services#seo-services',
      },
      {
        id: 'gbp-nashik',
        title: 'Google Business Profile Management',
        priceLabel: 'Custom Quote',
        cityApplication: 'Google Maps listing optimization, photo updates, and local discovery upkeep.',
        serviceRoute: '/services#google-business-profile-management',
      },
      {
        id: 'google-ads-nashik',
        title: 'Google Ads Management',
        priceLabel: 'Custom Quote',
        cityApplication: 'High-intent search campaigns targeting travellers searching for Nashik hotels & resorts.',
        serviceRoute: '/services#google-ads-management',
      },
      {
        id: 'meta-ads-nashik',
        title: 'Meta Ads Management',
        priceLabel: 'Custom Quote',
        cityApplication: 'Instagram and Facebook campaigns for weekend staycations, banquets, and dining.',
        serviceRoute: '/services#meta-ads-management',
      },
      {
        id: 'whatsapp-nashik',
        title: 'WhatsApp Automation',
        priceLabel: '₹2,499 (Starting Price)',
        cityApplication: 'Instant automated replies sharing room tariffs, resort packages, and menus.',
        serviceRoute: '/services#whatsapp-automation',
      },
      {
        id: 'ai-auto-nashik',
        title: 'AI Business Automation',
        priceLabel: 'Custom Strategy & Pricing',
        cityApplication: 'AI FAQ assistants, multi-channel enquiry classification, and lead routing.',
        serviceRoute: '/services#ai-business-automation',
      },
      {
        id: 'ai-reels-nashik',
        title: 'AI-Generated Instagram Reels',
        priceLabel: 'Custom Strategy & Pricing',
        cityApplication: 'Short-form video editing and Reels showcasing Nashik rooms, views, and cuisine.',
        serviceRoute: '/services#ai-reels-video-production',
      },
      {
        id: 'smm-nashik',
        title: 'Social Media Management',
        priceLabel: 'Custom Strategy & Pricing',
        cityApplication: 'Consistent Instagram and Facebook content calendars for Nashik hospitality brands.',
        serviceRoute: '/services#complete-social-media-management',
      },
      {
        id: 'community-nashik',
        title: 'Comment & Message Management',
        priceLabel: 'Custom Strategy & Pricing',
        cityApplication: 'Monitoring and replying to Instagram DMs and comments with human escalation.',
        serviceRoute: '/services#social-media-engagement-community',
      },
      {
        id: 'reviews-nashik',
        title: 'Review Management',
        priceLabel: 'Custom Quote',
        cityApplication: 'Polite, professional responses to guest reviews and QR review collection setup.',
        serviceRoute: '/services#online-review-management',
      },
      {
        id: 'analytics-nashik',
        title: 'Customer Enquiry Analytics',
        priceLabel: 'Custom Strategy & Pricing',
        cityApplication: 'Tracking website visits, WhatsApp clicks, and social media engagement trends.',
        serviceRoute: '/process#analytics',
      },
      {
        id: 'consulting-nashik',
        title: 'Hospitality Growth Consulting',
        priceLabel: 'Custom Quote',
        cityApplication: 'Direct strategic advisory with Shubham Upadhyay for Nashik property owners.',
        serviceRoute: '/services#hospitality-growth-consulting',
      },
    ],
    gbpReadinessNote:
      'Google Business Profile Compliance: UPWORD is headquartered in Indore, Madhya Pradesh and serves Nashik as a digital service area. When managing Google Business Profiles for Nashik hotels and restaurants, we strictly follow Google guidelines—using verified property addresses, authentic property photography, and genuine guest reviews without artificial incentives.',
    faqs: [
      {
        question: 'How can a hotel or resort in Nashik get its own direct-enquiry website?',
        answer:
          'UPWORD builds mobile-responsive hotel and resort websites in Nashik starting at ₹10,000. We organize your room categories, amenities, photo galleries, and location map, and connect every page to direct WhatsApp and telephone enquiry buttons so guests can contact your reception desk directly.',
      },
      {
        question: 'Does UPWORD also design websites for restaurants and cafes in Nashik?',
        answer:
          'Yes. Our restaurant website design service in Nashik showcases your dining ambiance, interactive food and beverage menus, banquet or party offerings, Google Maps location, and direct WhatsApp table reservation requests.',
      },
      {
        question: 'How do SEO services for hotels in Nashik help reduce aggregator dependency?',
        answer:
          'On-page and local SEO (starting at ₹4,999) helps your official website and Google Business Profile appear when travellers search for specific accommodation types, localities, or your property name—allowing guests to contact you directly rather than booking through third-party portals.',
      },
      {
        question: 'Can Nashik resorts automate WhatsApp replies for weekend and wedding enquiries?',
        answer:
          'Yes. With WhatsApp Automation (starting at ₹2,499) and AI Business Automation workflows, your property can automatically greet guests, share room tariff PDFs or wedding lawn brochures, collect check-in dates and guest counts, and route the inquiry to your sales or front-desk team.',
      },
      {
        question: 'How does UPWORD create Instagram Reels for Nashik hospitality properties?',
        answer:
          'We use authentic video clips and photographs provided by your hotel, resort, or restaurant and apply AI-assisted editing, hooks, captions, and destination hashtag strategies. Any AI-generated visual elements are clearly labelled, and we never misrepresent synthetic footage as real property footage.',
      },
      {
        question: 'Does UPWORD have a physical office in Nashik?',
        answer:
          'No. UPWORD is headquartered in Indore, Madhya Pradesh, and serves hotels, resorts, and restaurants across Nashik remotely via WhatsApp, telephone, video consultations, and cloud-based workflow integrations.',
      },
    ],
    whatsappInquiryHref: createLocalSeoWhatsAppUrl('Nashik, Maharashtra', 'Hotel Digital Marketing in Nashik'),
  },

  // ============================================================================
  // PAGE B: TRIMBAKESHWAR (/hotel-digital-marketing-trimbakeshwar)
  // ============================================================================
  '/hotel-digital-marketing-trimbakeshwar': {
    slug: '/hotel-digital-marketing-trimbakeshwar',
    cityId: 'trimbakeshwar',
    cityName: 'Trimbakeshwar',
    stateName: 'Maharashtra',
    seoTitle:
      'Guest House Website Development & Hotel Digital Marketing in Trimbakeshwar | UPWORD',
    metaDescription:
      'Dedicated guest house website development and hotel digital marketing in Trimbakeshwar by UPWORD. Mobile-friendly hotel websites, local hotel SEO, WhatsApp booking enquiries, homestay marketing, and review management.',
    primaryKeyword: 'Hotel Digital Marketing in Trimbakeshwar',
    secondaryKeywords: [
      'Guest House Website Development Trimbakeshwar',
      'Hotel SEO Trimbakeshwar',
      'Resort Marketing Trimbakeshwar',
      'Homestay Digital Marketing Trimbakeshwar',
      'WhatsApp Booking Enquiries',
      'Hotel Social Media Management Trimbakeshwar',
    ],
    heroKicker: 'Trimbakeshwar Hospitality Digital Growth · Service-Area Coverage',
    h1Title:
      'Guest House Website Development & Hotel Digital Marketing in Trimbakeshwar.',
    heroSubtitle:
      'Practical, mobile-first website development, local search visibility, and WhatsApp enquiry automation for hotels, guest houses, homestays, yatri lodges, and scenic foothill resorts serving visitors to Trimbakeshwar.',
    heroImage: assetPaths.locationNashikTrimbakeshwar,
    heroImageAlt:
      'Boutique hotel and tranquil guest house courtyard overlooking green Brahmagiri hills near Trimbakeshwar — UPWORD Hotel Digital Marketing in Trimbakeshwar',
    serviceAreaDisclosure:
      'UPWORD is headquartered in Indore, Madhya Pradesh and provides remote website development, SEO, and WhatsApp automation services to hospitality businesses in Trimbakeshwar, Maharashtra.',
    introductionParagraphs: [
      'Trimbakeshwar is one of Maharashtra’s most important spiritual and scenic foothill destinations. Families, senior citizens, and travellers visiting the sacred Trimbakeshwar Jyotirlinga temple and the surrounding Brahmagiri hills frequently plan their trips from across Maharashtra, Gujarat, Madhya Pradesh, and throughout India.',
      'Before arriving in town, out-of-station families look online to verify three essential details: how close a hotel or guest house is to the temple, whether clean family rooms and parking are available, and how they can contact the property directly on WhatsApp or phone to confirm tariffs and check-in timings.',
      'Many guest houses, homestays, and hotels in Trimbakeshwar either lack an official website or have outdated listings. UPWORD provides specialized guest house website development and hotel digital marketing in Trimbakeshwar—giving property owners a trustworthy digital presence that converts searchers into direct WhatsApp and phone enquiries.',
    ],
    propertyTypesServed: [
      'Guest Houses & Family Lodges',
      'Pilgrimage Hotels & Bhaktaniwas',
      'Brahmagiri Foothill Homestays',
      'Scenic Highway & Nature Resorts',
      'Pure-Veg Family Restaurants',
      'Group & Family Suite Properties',
    ],
    challengesAndOpportunities: [
      {
        challengeTitle: 'Out-of-State Guests Struggling to Verify Property Details',
        challengeDetail:
          'Families travelling with elders or children want to see genuine room photos, AC/non-AC options, lift/parking availability, and exact walking or driving distance before they commit.',
        opportunityTitle: 'Mobile-Friendly Property Websites & Room Galleries',
        opportunityDetail:
          'A clear, fast-loading website (starting at ₹10,000) with authentic room galleries, transparent facility lists, and embedded Google Maps directions builds immediate confidence with travelling families.',
      },
      {
        challengeTitle: 'High Call Volumes During Auspicious Dates & Festivals',
        challengeDetail:
          'During Shravan, long weekends, and festival periods, front-desk staff are often overwhelmed by repetitive phone calls asking for room rates and directions.',
        opportunityTitle: 'Structured WhatsApp Booking Enquiries & AI FAQ Flows',
        opportunityDetail:
          'WhatsApp automation (starting at ₹2,499) automatically replies with your room tariff card, check-in/check-out rules, and Google Maps pin while collecting the guest’s arrival date and family size.',
      },
      {
        challengeTitle: 'Inconsistent Map Pins & Unanswered Online Reviews',
        challengeDetail:
          'Inaccurate map markers or unaddressed guest reviews can cause travellers to choose another lodge nearby.',
        opportunityTitle: 'Local SEO, Google Business Profile & Review Stewardship',
        opportunityDetail:
          'Maintaining an accurate Google Business Profile and responding politely to guest reviews reinforces your property’s reputation as a reliable, welcoming stay in Trimbakeshwar.',
      },
    ],
    deepTopicSections: [
      {
        title: 'Guest House & Hotel Website Development in Trimbakeshwar',
        body: 'We design mobile-friendly websites starting at ₹10,000 specifically tailored for Trimbakeshwar guest houses, hotels, and homestays. Pages highlight double, triple, and family room configurations, parking and hot-water facilities, distance landmarks, and instant booking enquiry forms.',
        serviceLink: '/services#website-development',
        serviceLinkLabel: 'View Website Development Details (₹10,000)',
      },
      {
        title: 'Hotel SEO & Google Maps Integration in Trimbakeshwar',
        body: 'Our Hotel SEO services in Trimbakeshwar (starting at ₹4,999) and Google Business Profile optimization help your property appear when families search for stays in Trimbakeshwar, ensuring your map pin, photos, and check-in hours are clear and accurate.',
        serviceLink: '/services#seo-services',
        serviceLinkLabel: 'View Local SEO Services (₹4,999)',
      },
      {
        title: 'WhatsApp Booking Enquiries & Seasonal Content Planning',
        body: 'We configure WhatsApp automation (starting at ₹2,499) and AI enquiry workflows so visitors can request room availability in seconds. We also assist with seasonal and festival-related social media content planning so guests know your booking window is open ahead of busy travel dates.',
        serviceLink: '/services#whatsapp-automation',
        serviceLinkLabel: 'View WhatsApp Automation (₹2,499)',
      },
      {
        title: 'Resort & Homestay Digital Marketing & Reputation Management',
        body: 'For scenic resorts and homestays along the Nashik–Trimbakeshwar corridor, we provide AI-assisted Reels production, social media management, online review management, and targeted search/social ad campaigns.',
        serviceLink: '/services#complete-social-media-management',
        serviceLinkLabel: 'Explore Social Media & Review Management',
      },
    ],
    serviceMatrix: [
      {
        id: 'website-dev-trimbak',
        title: 'Professional Hotel & Guest House Website Development',
        priceLabel: '₹10,000 (Starting Price)',
        cityApplication: 'Mobile-friendly websites for Trimbakeshwar guest houses, hotels, and homestays.',
        serviceRoute: '/services#website-development',
      },
      {
        id: 'restaurant-web-trimbak',
        title: 'Restaurant Website Development',
        priceLabel: '₹10,000 (Starting Price)',
        cityApplication: 'Menu and location showcase websites for family restaurants in Trimbakeshwar.',
        serviceRoute: '/services#website-development',
      },
      {
        id: 'seo-trimbak',
        title: 'Search Engine Optimization (Hotel SEO)',
        priceLabel: '₹4,999 (Starting Price)',
        cityApplication: 'Local search optimization for Trimbakeshwar accommodation and stay queries.',
        serviceRoute: '/services#seo-services',
      },
      {
        id: 'gbp-trimbak',
        title: 'Google Business Profile Management',
        priceLabel: 'Custom Quote',
        cityApplication: 'Accurate map pin, room photo uploads, and amenity updates on Google Maps.',
        serviceRoute: '/services#google-business-profile-management',
      },
      {
        id: 'google-ads-trimbak',
        title: 'Google Ads Management',
        priceLabel: 'Custom Quote',
        cityApplication: 'Targeted search ads for travellers actively planning trips to Trimbakeshwar.',
        serviceRoute: '/services#google-ads-management',
      },
      {
        id: 'meta-ads-trimbak',
        title: 'Meta Ads Management',
        priceLabel: 'Custom Quote',
        cityApplication: 'Visual campaigns for foothill resorts, homestays, and family villas.',
        serviceRoute: '/services#meta-ads-management',
      },
      {
        id: 'whatsapp-trimbak',
        title: 'WhatsApp Automation',
        priceLabel: '₹2,499 (Starting Price)',
        cityApplication: 'Automated room tariff sharing, check-in date collection, and map direction replies.',
        serviceRoute: '/services#whatsapp-automation',
      },
      {
        id: 'ai-auto-trimbak',
        title: 'AI Business Automation',
        priceLabel: 'Custom Strategy & Pricing',
        cityApplication: 'AI FAQ assistant for parking, temple distance, extra beds, and enquiry routing.',
        serviceRoute: '/services#ai-business-automation',
      },
      {
        id: 'ai-reels-trimbak',
        title: 'AI-Generated Instagram Reels',
        priceLabel: 'Custom Strategy & Pricing',
        cityApplication: 'Reels showcasing clean rooms, Brahmagiri foothill views, and guest hospitality.',
        serviceRoute: '/services#ai-reels-video-production',
      },
      {
        id: 'smm-trimbak',
        title: 'Social Media Management',
        priceLabel: 'Custom Strategy & Pricing',
        cityApplication: 'Seasonal and festival-aligned social media calendars for Trimbakeshwar stays.',
        serviceRoute: '/services#complete-social-media-management',
      },
      {
        id: 'community-trimbak',
        title: 'Comment & Message Management',
        priceLabel: 'Custom Strategy & Pricing',
        cityApplication: 'Prompt replies to guest questions on Instagram and Facebook with owner escalation.',
        serviceRoute: '/services#social-media-engagement-community',
      },
      {
        id: 'reviews-trimbak',
        title: 'Review Management',
        priceLabel: 'Custom Quote',
        cityApplication: 'Front-desk review QR codes and courteous responses to guest feedback.',
        serviceRoute: '/services#online-review-management',
      },
      {
        id: 'analytics-trimbak',
        title: 'Customer Enquiry Analytics',
        priceLabel: 'Custom Strategy & Pricing',
        cityApplication: 'Clear visibility into website visits, WhatsApp clicks, and seasonal enquiry patterns.',
        serviceRoute: '/process#analytics',
      },
      {
        id: 'consulting-trimbak',
        title: 'Hospitality Growth Consulting',
        priceLabel: 'Custom Quote',
        cityApplication: 'Practical digital strategy consulting with Shubham Upadhyay.',
        serviceRoute: '/services#hospitality-growth-consulting',
      },
    ],
    gbpReadinessNote:
      'Service-Area & Accuracy Commitment: UPWORD operates from Indore, Madhya Pradesh and supports Trimbakeshwar properties remotely. We never promise specific religious tourism demand or guaranteed booking volumes; instead, we build accurate, mobile-friendly digital assets that help your property communicate clearly with prospective guests.',
    faqs: [
      {
        question: 'How can guest houses in Trimbakeshwar receive direct enquiries from families?',
        answer:
          'By launching a mobile-friendly property website (starting at ₹10,000) paired with an accurate Google Business Profile and WhatsApp automation (starting at ₹2,499). When families see verified room photos, clear facility details, and a direct WhatsApp button, they can message your reception desk directly to inquire about availability.',
      },
      {
        question: 'What information should a Trimbakeshwar hotel or homestay include on its website?',
        answer:
          'A Trimbakeshwar hospitality website should clearly display room categories (2-bed, 3-bed, 4-bed family suites), authentic bathroom and room photos, check-in/check-out timings, parking and elevator availability, approximate distance to the temple and bus/railway hubs, and a one-tap WhatsApp inquiry button.',
      },
      {
        question: 'Can WhatsApp automation handle repetitive guest questions about room rates and parking?',
        answer:
          'Yes. Our WhatsApp Automation setup (₹2,499) and AI Business Automation workflows can immediately reply to common questions—such as room tariffs, extra mattress charges, parking availability, and location pins—while forwarding the guest’s travel dates and headcount to your manager.',
      },
      {
        question: 'Does UPWORD help homestays and scenic resorts near Trimbakeshwar with social media?',
        answer:
          'Yes. We provide AI-assisted Instagram Reels creation using your authentic property footage, along with seasonal and festival-aware social media management so leisure and family travellers can discover your stay visually.',
      },
      {
        question: 'Does UPWORD guarantee a specific number of room bookings in Trimbakeshwar?',
        answer:
          'No. Room occupancy and travel demand depend on seasonality, property pricing, location, and guest preferences. UPWORD focuses on building a professional website, strong local search fundamentals, and responsive enquiry workflows.',
      },
      {
        question: 'How do we start working with UPWORD if our guest house is in Trimbakeshwar?',
        answer:
          'You can click "Chat on WhatsApp" or "Call Now" on this page to connect directly with founder Shubham Upadhyay. Room photos, tariff details, and website approvals are coordinated smoothly via WhatsApp and phone.',
      },
    ],
    whatsappInquiryHref: createLocalSeoWhatsAppUrl(
      'Trimbakeshwar, Maharashtra',
      'Hotel Digital Marketing in Trimbakeshwar'
    ),
  },

  // ============================================================================
  // PAGE C: UJJAIN (/hotel-digital-marketing-ujjain)
  // ============================================================================
  '/hotel-digital-marketing-ujjain': {
    slug: '/hotel-digital-marketing-ujjain',
    cityId: 'ujjain',
    cityName: 'Ujjain',
    stateName: 'Madhya Pradesh',
    seoTitle: 'Hotel Website Development & Hospitality Digital Marketing in Ujjain | UPWORD',
    metaDescription:
      'Professional hotel website development and hospitality digital marketing in Ujjain by UPWORD. Serving Ujjain hotels, guest houses, lodges, dharamshalas, and restaurants with SEO, WhatsApp automation, AI Reels, and ads.',
    primaryKeyword: 'Hotel Digital Marketing in Ujjain',
    secondaryKeywords: [
      'Hotel Website Development Ujjain',
      'Restaurant Digital Marketing Ujjain',
      'Guest House Website Design Ujjain',
      'Hotel SEO Services Ujjain',
      'WhatsApp Automation for Hotels Ujjain',
      'Social Media Marketing for Resorts Ujjain',
    ],
    heroKicker: 'Ujjain Hospitality Digital Growth · Madhya Pradesh Corridor',
    h1Title: 'Hotel Website Development & Hospitality Digital Marketing in Ujjain.',
    heroSubtitle:
      'Empowering hotels, heritage stays, guest houses, family lodges, dharamshalas, and restaurants in Ujjain with authoritative websites, local Google search visibility, WhatsApp enquiry automation, and AI-powered social media.',
    heroImage: assetPaths.locationUjjainHospitality,
    heroImageAlt:
      'Heritage hotel and welcoming pilgrimage guest house courtyard in Ujjain with warm sandstone arches — UPWORD Hotel Digital Marketing in Ujjain',
    serviceAreaDisclosure:
      'UPWORD is headquartered in nearby Indore, Madhya Pradesh, serving hospitality businesses across Ujjain as a primary regional service corridor.',
    introductionParagraphs: [
      'Ujjain is one of Central India’s most vibrant spiritual and cultural hospitality markets. With year-round families, devotees, and tourists visiting Shri Mahakaleshwar Temple, Shri Mahakal Lok corridor, Ram Ghat, and surrounding heritage landmarks, travellers from across India actively research Ujjain accommodation and dining online before their journey.',
      'Because many visitors travel with multi-generational families, trust and clarity are paramount. Guests searching for hotels, guest houses, or lodges in Ujjain want to verify authentic room photographs, proximity to key corridors or Ujjain Junction railway station, transparent room tariffs, and a reliable way to speak with or message the property directly.',
      'Headquartered in neighboring Indore, UPWORD provides dedicated hotel digital marketing in Ujjain—helping hotels, guest houses, resorts, dharamshalas, and traditional restaurants establish a professional digital presence that captures direct guest enquiries.',
    ],
    propertyTypesServed: [
      'Hotels & Heritage Properties',
      'Guest Houses & Family Lodges',
      'Dharamshalas & Yatri Niwas',
      'Highway & Bypass Resorts',
      'Traditional Thali & Family Restaurants',
      'Boutique Homestays & Group Stays',
    ],
    challengesAndOpportunities: [
      {
        challengeTitle: 'Building Trust With Out-of-State Families & Pilgrims',
        challengeDetail:
          'Travellers booking from Delhi, Mumbai, Gujarat, or Rajasthan are cautious about unverified listings and want an official property website before paying an advance.',
        opportunityTitle: 'Authoritative Hotel & Guest House Website Design in Ujjain',
        opportunityDetail:
          'An official, fast-loading website (starting at ₹10,000) presenting genuine exterior and room photos, clear policies, and verified location details reassures families that they are dealing directly with the property.',
      },
      {
        challengeTitle: 'Managing High-Volume WhatsApp & Telephone Enquiries',
        challengeDetail:
          'Front-desk staff frequently spend hours answering identical questions on WhatsApp about room availability, check-in times, and distance from Mahakal Lok.',
        opportunityTitle: 'WhatsApp Automation & AI Enquiry Classification',
        opportunityDetail:
          'WhatsApp automation for hotels in Ujjain (starting at ₹2,499) and AI business workflows instantly share room tariff sheets and location maps while organizing incoming booking requests by check-in date.',
      },
      {
        challengeTitle: 'Competing for Local Search & Map Visibility',
        challengeDetail:
          'With new hotels and guest houses opening across Ujjain, properties without structured SEO or updated Google Business Profiles get buried in search results.',
        opportunityTitle: 'Hotel SEO Services & Review Management in Ujjain',
        opportunityDetail:
          'Targeted hotel SEO services in Ujjain (starting at ₹4,999) combined with active Google Business Profile upkeep and review management help your property maintain strong local visibility.',
      },
    ],
    deepTopicSections: [
      {
        title: 'Hotel Website Development & Guest House Website Design in Ujjain',
        body: 'Starting at ₹10,000, we build mobile-first websites for Ujjain hotels, guest houses, lodges, and dharamshalas. We structure your room categories, family suite options, dining facilities, and location landmarks clearly, with direct WhatsApp and phone call buttons on every screen.',
        serviceLink: '/services#website-development',
        serviceLinkLabel: 'Explore Website Development (₹10,000)',
      },
      {
        title: 'Hotel SEO Services & Google Business Profile Optimization in Ujjain',
        body: 'Our hotel SEO services in Ujjain (starting at ₹4,999) optimize your website architecture, heading hierarchy, local schema, and speed, while our Google Business Profile management keeps your map listing, photos, and visitor updates accurate.',
        serviceLink: '/services#seo-services',
        serviceLinkLabel: 'Explore Hotel SEO Services (₹4,999)',
      },
      {
        title: 'WhatsApp Automation & AI Workflows for Ujjain Hospitality',
        body: 'We implement WhatsApp automation for hotels in Ujjain (starting at ₹2,499) alongside advanced AI business automation workflows that classify room enquiries, answer common guest FAQs, and route ready-to-book families to your front desk.',
        serviceLink: '/services#ai-business-automation',
        serviceLinkLabel: 'Explore WhatsApp & AI Automation',
      },
      {
        title: 'Restaurant Digital Marketing, AI Reels & Paid Campaigns in Ujjain',
        body: 'For Ujjain restaurants, highway resorts, and hotels, we create AI-assisted Instagram Reels using your real property footage, manage complete social media calendars, coordinate guest review responses, and run targeted Google Ads and Meta Ads.',
        serviceLink: '/services#ai-reels-video-production',
        serviceLinkLabel: 'Explore AI Reels & Social Media Services',
      },
    ],
    serviceMatrix: [
      {
        id: 'website-dev-ujjain',
        title: 'Professional Hotel Website Development',
        priceLabel: '₹10,000 (Starting Price)',
        cityApplication: 'Official websites for Ujjain hotels, guest houses, lodges, and dharamshalas.',
        serviceRoute: '/services#website-development',
      },
      {
        id: 'restaurant-web-ujjain',
        title: 'Restaurant Website Development',
        priceLabel: '₹10,000 (Starting Price)',
        cityApplication: 'Digital menu, thali showcase, and location websites for Ujjain restaurants.',
        serviceRoute: '/services#website-development',
      },
      {
        id: 'seo-ujjain',
        title: 'Search Engine Optimization (Hotel SEO)',
        priceLabel: '₹4,999 (Starting Price)',
        cityApplication: 'On-page and local search optimization for Ujjain hospitality searches.',
        serviceRoute: '/services#seo-services',
      },
      {
        id: 'gbp-ujjain',
        title: 'Google Business Profile Management',
        priceLabel: 'Custom Quote',
        cityApplication: 'Google Maps profile optimization, authentic photo updates, and local upkeep.',
        serviceRoute: '/services#google-business-profile-management',
      },
      {
        id: 'google-ads-ujjain',
        title: 'Google Ads Management',
        priceLabel: 'Custom Quote',
        cityApplication: 'Search campaigns capturing travellers looking for Ujjain hotels and stays.',
        serviceRoute: '/services#google-ads-management',
      },
      {
        id: 'meta-ads-ujjain',
        title: 'Meta Ads Management',
        priceLabel: 'Custom Quote',
        cityApplication: 'Instagram and Facebook campaigns for Ujjain resorts, hotels, and dining.',
        serviceRoute: '/services#meta-ads-management',
      },
      {
        id: 'whatsapp-ujjain',
        title: 'WhatsApp Automation',
        priceLabel: '₹2,499 (Starting Price)',
        cityApplication: '24/7 automated WhatsApp replies with room tariffs, brochures, and location pins.',
        serviceRoute: '/services#whatsapp-automation',
      },
      {
        id: 'ai-auto-ujjain',
        title: 'AI Business Automation',
        priceLabel: 'Custom Strategy & Pricing',
        cityApplication: 'Smart enquiry classification, AI FAQ assistant, and lead routing workflows.',
        serviceRoute: '/services#ai-business-automation',
      },
      {
        id: 'ai-reels-ujjain',
        title: 'AI-Generated Instagram Reels',
        priceLabel: 'Custom Strategy & Pricing',
        cityApplication: 'Engaging Reels edited from your real hotel room, property, and food footage.',
        serviceRoute: '/services#ai-reels-video-production',
      },
      {
        id: 'smm-ujjain',
        title: 'Social Media Management',
        priceLabel: 'Custom Strategy & Pricing',
        cityApplication: 'Structured Instagram and Facebook content calendars for Ujjain properties.',
        serviceRoute: '/services#complete-social-media-management',
      },
      {
        id: 'community-ujjain',
        title: 'Comment & Message Management',
        priceLabel: 'Custom Strategy & Pricing',
        cityApplication: 'Monitoring Instagram DMs and comments and routing booking leads.',
        serviceRoute: '/services#social-media-engagement-community',
      },
      {
        id: 'reviews-ujjain',
        title: 'Review Management',
        priceLabel: 'Custom Quote',
        cityApplication: 'Review collection workflows and professional responses to guest ratings.',
        serviceRoute: '/services#online-review-management',
      },
      {
        id: 'analytics-ujjain',
        title: 'Customer Enquiry Analytics',
        priceLabel: 'Custom Strategy & Pricing',
        cityApplication: 'Tracking website traffic sources, WhatsApp clicks, and monthly enquiry trends.',
        serviceRoute: '/process#analytics',
      },
      {
        id: 'consulting-ujjain',
        title: 'Hospitality Growth Consulting',
        priceLabel: 'Custom Quote',
        cityApplication: 'One-on-one digital growth consulting with founder Shubham Upadhyay.',
        serviceRoute: '/services#hospitality-growth-consulting',
      },
    ],
    gbpReadinessNote:
      'Regional Service-Area Transparency: UPWORD is headquartered in Indore, Madhya Pradesh—just down the Indore–Ujjain corridor—and serves Ujjain hotels, guest houses, and restaurants as a core service area. All Google Business Profile and review management work adheres strictly to Google’s authenticity guidelines.',
    faqs: [
      {
        question: 'Can hotels and guest houses in Ujjain automate WhatsApp enquiries?',
        answer:
          'Yes. UPWORD configures WhatsApp Automation (starting at ₹2,499) and AI Business Automation workflows for Ujjain hotels and guest houses. When a prospective guest messages your property on WhatsApp, the system can automatically greet them, share room categories and tariffs, ask for their check-in/check-out dates and family size, and forward the organized inquiry to your reception team.',
      },
      {
        question: 'How much does hotel or guest house website development in Ujjain cost?',
        answer:
          'Our foundational hotel and guest house website development starts at ₹10,000. This includes a mobile-responsive design, room and facility showcases, photo gallery, Google Maps integration, and direct WhatsApp and phone inquiry buttons.',
      },
      {
        question: 'How does Hotel SEO in Ujjain help local accommodation providers?',
        answer:
          'Hotel SEO services in Ujjain (starting at ₹4,999) optimize your website structure, page titles, meta descriptions, and local keywords so families searching on Google for stays in Ujjain can discover your official website and contact you directly.',
      },
      {
        question: 'Does UPWORD provide digital marketing for restaurants and resorts in Ujjain?',
        answer:
          'Yes. We work with family restaurants, thali dining venues, and highway resorts in Ujjain—offering restaurant website development, Google Business Profile optimization, AI-assisted Instagram Reels creation, and localized Meta and Google advertising.',
      },
      {
        question: 'Do you use real hotel photos and videos for Instagram Reels in Ujjain?',
        answer:
          'Yes. We always prioritize authentic room, courtyard, and dining footage supplied by your property so guests see an honest representation of your hotel. If any AI-generated visual element is used for conceptual graphics, it is clearly labelled.',
      },
      {
        question: 'Since UPWORD is based in Indore, how do we coordinate for our Ujjain property?',
        answer:
          'Being headquartered in neighboring Indore makes collaboration effortless. You can initiate a consultation anytime via our "Chat on WhatsApp" or "Call Now" buttons to discuss your Ujjain hotel, guest house, or restaurant.',
      },
    ],
    whatsappInquiryHref: createLocalSeoWhatsAppUrl('Ujjain, Madhya Pradesh', 'Hotel Digital Marketing in Ujjain'),
  },

  // ============================================================================
  // PAGE D: INDORE (/hotel-digital-marketing-indore)
  // ============================================================================
  '/hotel-digital-marketing-indore': {
    slug: '/hotel-digital-marketing-indore',
    cityId: 'indore',
    cityName: 'Indore',
    stateName: 'Madhya Pradesh',
    seoTitle:
      'Hotel & Restaurant Website Development and Digital Marketing in Indore | UPWORD',
    metaDescription:
      'Headquartered in Indore, UPWORD provides hotel digital marketing in Indore, restaurant website development, hotel website development, restaurant SEO services, WhatsApp automation, and AI social media management.',
    primaryKeyword: 'Hotel Digital Marketing in Indore',
    secondaryKeywords: [
      'Restaurant Website Development Indore',
      'Hotel Website Development Indore',
      'Restaurant SEO Services Indore',
      'Hospitality Digital Marketing Indore',
      'WhatsApp Automation Indore',
      'AI Social Media Management Indore',
    ],
    heroKicker: 'Indore Headquarters · Commercial & Culinary Hospitality Hub',
    h1Title:
      'Hotel & Restaurant Website Development and Digital Marketing in Indore.',
    heroSubtitle:
      'Headquartered in Indore, UPWORD partners with business hotels, luxury resorts, specialty cafes, fine-dining restaurants, and banquet venues across Indore to build high-converting websites, search visibility, AI workflows, and social media presence.',
    heroImage: assetPaths.locationIndoreHospitality,
    heroImageAlt:
      'Modern luxury hotel courtyard, boutique resort lounge, and fine-dining restaurant terrace in Indore — UPWORD Hotel Digital Marketing in Indore',
    serviceAreaDisclosure:
      'Indore, Madhya Pradesh is UPWORD’s primary headquarters location, led directly by founder Shubham Upadhyay.',
    introductionParagraphs: [
      'As the commercial capital of Madhya Pradesh and one of India’s most celebrated culinary cities, Indore features a dynamic hospitality market. From corporate hotels along Vijay Nagar, AB Road, and Super Corridor to sprawling weekend resorts on Bypass Road, specialty cafes in New Palasia, and fine-dining restaurants, Indore’s hospitality brands compete for discerning corporate travellers, families, diners, and event hosts.',
      'In a market this active, guests evaluate a hotel, resort, or restaurant online long before stepping through the door. Corporate bookers check official hotel websites for room standards and conference facilities; diners browse Instagram Reels and Google reviews before choosing a restaurant; and families message on WhatsApp to compare banquet lawn packages.',
      'Founded and headquartered in Indore by Shubham Upadhyay, UPWORD delivers comprehensive hotel digital marketing in Indore and restaurant website development in Indore—combining bespoke web design, local SEO, WhatsApp and AI automation, Reels production, and performance analytics.',
    ],
    propertyTypesServed: [
      'Business & Corporate Hotels',
      'Fine-Dining & Family Restaurants',
      'Specialty Cafes, Bakeries & Lounges',
      'Bypass & Weekend Staycation Resorts',
      'Wedding Lawns, Banquets & Convention Venues',
      'Boutique Stays & Serviced Apartments',
    ],
    challengesAndOpportunities: [
      {
        challengeTitle: 'Standing Out in Indore’s Competitive Dining & Cafe Scene',
        challengeDetail:
          'Relying only on food delivery apps or sporadic social posts makes it difficult for restaurants and cafes in Indore to build direct brand loyalty, table reservations, and private party bookings.',
        opportunityTitle: 'Restaurant Website Development, SEO & AI Reels in Indore',
        opportunityDetail:
          'A dedicated restaurant website (from ₹10,000) paired with restaurant SEO services in Indore (from ₹4,999) and engaging Instagram Reels turns local food discovery into direct table and event inquiries.',
      },
      {
        challengeTitle: 'Capturing Corporate Stays, Banquets & Resort Events',
        challengeDetail:
          'Hotels and resorts in Indore often miss out on high-value corporate tie-ups, conference bookings, and wedding inquiries when their website lacks clear event kits or instant follow-up.',
        opportunityTitle: 'Hotel Website Development & AI Enquiry Workflows',
        opportunityDetail:
          'We combine polished hotel and resort websites with WhatsApp automation (from ₹2,499) and AI business workflows that classify room vs. banquet enquiries and route them to the right manager.',
      },
      {
        challengeTitle: 'Measuring Which Marketing Channels Actually Drive Enquiries',
        challengeDetail:
          'Many hospitality owners boost posts or run ads without clear visibility into how website visitors convert into WhatsApp clicks or booking leads.',
        opportunityTitle: 'Full-Funnel Hospitality Analytics & Paid Ad Management',
        opportunityDetail:
          'Our 8-step process tracks the journey from Google Search and social discovery to website visits, WhatsApp clicks, and qualified enquiries.',
      },
    ],
    deepTopicSections: [
      {
        title: 'Restaurant Website Development & Hotel Website Development in Indore',
        body: 'Starting at ₹10,000, we craft mobile-first websites for Indore hotels, resorts, restaurants, and cafes. Whether you need an interactive culinary menu and table reservation flow or a multi-room hotel and banquet showcase, every site is engineered for speed and direct inquiry conversion.',
        serviceLink: '/services#website-development',
        serviceLinkLabel: 'Explore Website Development (₹10,000)',
      },
      {
        title: 'Restaurant SEO Services & Hotel Search Visibility in Indore',
        body: 'Our SEO services in Indore (starting at ₹4,999) and Google Business Profile management help your hotel, resort, or restaurant rank for local dining, stay, and banquet searches across Indore while keeping your map listing and reviews active.',
        serviceLink: '/services#seo-services',
        serviceLinkLabel: 'Explore Hotel & Restaurant SEO (₹4,999)',
      },
      {
        title: 'WhatsApp Automation & AI Customer Enquiry Automation in Indore',
        body: 'With WhatsApp automation in Indore (starting at ₹2,499) and custom AI business automation workflows, your property can automate FAQ responses, share digital menus or banquet packages, and route corporate or family enquiries 24/7.',
        serviceLink: '/services#ai-business-automation',
        serviceLinkLabel: 'Explore WhatsApp & AI Automation',
      },
      {
        title: 'AI Social Media Management, Reels Production & Ads in Indore',
        body: 'We provide AI social media management in Indore, AI-assisted Instagram Reels creation for hotels and restaurants, community DM/comment management, and targeted Google Ads and Meta Ads campaigns.',
        serviceLink: '/services#complete-social-media-management',
        serviceLinkLabel: 'Explore AI Social Media & Reels',
      },
    ],
    serviceMatrix: [
      {
        id: 'website-dev-indore',
        title: 'Professional Hotel Website Development',
        priceLabel: '₹10,000 (Starting Price)',
        cityApplication: 'Bespoke websites for Indore business hotels, boutique stays, and resorts.',
        serviceRoute: '/services#website-development',
      },
      {
        id: 'restaurant-web-indore',
        title: 'Restaurant Website Development',
        priceLabel: '₹10,000 (Starting Price)',
        cityApplication: 'Digital menus, dining galleries, and reservation inquiry sites for Indore restaurants & cafes.',
        serviceRoute: '/services#website-development',
      },
      {
        id: 'seo-indore',
        title: 'Search Engine Optimization (Hotel & Restaurant SEO)',
        priceLabel: '₹4,999 (Starting Price)',
        cityApplication: 'Local SEO for Indore hotel, resort, cafe, and restaurant search queries.',
        serviceRoute: '/services#seo-services',
      },
      {
        id: 'gbp-indore',
        title: 'Google Business Profile Management',
        priceLabel: 'Custom Quote',
        cityApplication: 'Google Maps optimization, food & room photo updates, and local offer posts.',
        serviceRoute: '/services#google-business-profile-management',
      },
      {
        id: 'google-ads-indore',
        title: 'Google Ads Management',
        priceLabel: 'Custom Quote',
        cityApplication: 'High-intent search ads for Indore hotels, banquet halls, and resorts.',
        serviceRoute: '/services#google-ads-management',
      },
      {
        id: 'meta-ads-indore',
        title: 'Meta Ads Management',
        priceLabel: 'Custom Quote',
        cityApplication: 'Instagram and Facebook ad campaigns for Indore dining, events, and staycations.',
        serviceRoute: '/services#meta-ads-management',
      },
      {
        id: 'whatsapp-indore',
        title: 'WhatsApp Automation',
        priceLabel: '₹2,499 (Starting Price)',
        cityApplication: 'Automated table reservation, menu sharing, and room tariff workflows.',
        serviceRoute: '/services#whatsapp-automation',
      },
      {
        id: 'ai-auto-indore',
        title: 'AI Business Automation',
        priceLabel: 'Custom Strategy & Pricing',
        cityApplication: 'Multi-channel enquiry classification, AI FAQ assistants, and CRM/sheet routing.',
        serviceRoute: '/services#ai-business-automation',
      },
      {
        id: 'ai-reels-indore',
        title: 'AI-Generated Instagram Reels',
        priceLabel: 'Custom Strategy & Pricing',
        cityApplication: 'Short-form Reels production for Indore chef specials, cafe ambiance, and hotel suites.',
        serviceRoute: '/services#ai-reels-video-production',
      },
      {
        id: 'smm-indore',
        title: 'Social Media Management',
        priceLabel: 'Custom Strategy & Pricing',
        cityApplication: 'Complete Instagram and Facebook management for Indore hospitality brands.',
        serviceRoute: '/services#complete-social-media-management',
      },
      {
        id: 'community-indore',
        title: 'Comment & Message Management',
        priceLabel: 'Custom Strategy & Pricing',
        cityApplication: 'Responsive Instagram DM and comment handling with direct owner escalation.',
        serviceRoute: '/services#social-media-engagement-community',
      },
      {
        id: 'reviews-indore',
        title: 'Review Management',
        priceLabel: 'Custom Quote',
        cityApplication: 'Table/front-desk QR review funnels and professional review responses.',
        serviceRoute: '/services#online-review-management',
      },
      {
        id: 'analytics-indore',
        title: 'Customer Enquiry Analytics',
        priceLabel: 'Custom Strategy & Pricing',
        cityApplication: 'Performance tracking across search, social, website visits, and WhatsApp leads.',
        serviceRoute: '/process#analytics',
      },
      {
        id: 'consulting-indore',
        title: 'Hospitality Growth Consulting',
        priceLabel: 'Custom Quote',
        cityApplication: 'Direct strategic consulting in Indore with founder Shubham Upadhyay.',
        serviceRoute: '/services#hospitality-growth-consulting',
      },
    ],
    gbpReadinessNote:
      'Primary Business Headquarters (Indore): UPWORD is headquartered in Indore, Madhya Pradesh. We help Indore hotels, resorts, cafes, and restaurants structure and maintain compliant Google Business Profiles using accurate categories, verified local details, and ethical review practices.',
    faqs: [
      {
        question: 'How can restaurants and cafes in Indore improve their Google visibility and direct inquiries?',
        answer:
          'By combining a fast, mobile-friendly restaurant website (starting at ₹10,000) with Restaurant SEO Services in Indore (starting at ₹4,999) and an actively managed Google Business Profile. Showcasing your menu, ambiance photos, and direct WhatsApp reservation button helps diners choose your venue directly.',
      },
      {
        question: 'Does UPWORD provide AI-powered social media management for hotels and restaurants in Indore?',
        answer:
          'Yes. We offer Complete Social Media Management, AI-Powered Reels & Creative Video Production, Community Management, and Social Media Growth & Analytics tailored for Indore hotels, resorts, cafes, and restaurants.',
      },
      {
        question: 'Can UPWORD manage both Google Ads and Meta Ads for our Indore hospitality business?',
        answer:
          'Yes. We manage Google Search Ads (ideal for capturing high-intent hotel, resort, and banquet searches) and Meta Ads on Instagram and Facebook (ideal for promoting weekend resort packages, dining experiences, and festive events). Advertising media budgets are paid separately to the ad platforms.',
      },
      {
        question: 'How does WhatsApp and AI Business Automation work for an Indore hotel or restaurant?',
        answer:
          'Our WhatsApp Automation (starting at ₹2,499) and custom AI Business Automation workflows greet customers immediately, share digital food menus, room tariffs, or banquet brochures, classify the inquiry type, and route the lead to your front desk or restaurant manager.',
      },
      {
        question: 'What are UPWORD’s confirmed starting prices for Indore hospitality businesses?',
        answer:
          'Website Development starts at ₹10,000, SEO Services start at ₹4,999, and WhatsApp Automation starts at ₹2,499. Advanced AI business automation, Reels production, social media management, and paid ad management are offered under Custom Strategy & Pricing tailored to your property.',
      },
      {
        question: 'Where is UPWORD located, and how can we discuss our Indore property requirements?',
        answer:
          'UPWORD is headquartered right here in Indore, Madhya Pradesh, and founded by Shubham Upadhyay. Simply click "Chat on WhatsApp" or "Call Now" on this page to start a direct conversation.',
      },
    ],
    whatsappInquiryHref: createLocalSeoWhatsAppUrl('Indore, Madhya Pradesh', 'Hotel Digital Marketing in Indore'),
  },
};

export const localSeoPagesList: LocalSeoPageData[] = Object.values(localSeoPagesData);

export default localSeoPagesData;
