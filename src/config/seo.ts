import { businessConfig } from './business';
import { localSeoPagesData, LocalSeoCitySlug } from '../data/localSeoPages';

export type RoutePath =
  | '/'
  | '/services'
  | '/process'
  | '/locations'
  | '/contact'
  | '/hotel-digital-marketing-nashik'
  | '/hotel-digital-marketing-trimbakeshwar'
  | '/hotel-digital-marketing-ujjain'
  | '/hotel-digital-marketing-indore';

export interface PageSeoMetadata {
  path: RoutePath;
  breadcrumbName: string;
  parentPath?: RoutePath;
  title: string;
  description: string;
}

export const routeSeoMap: Record<RoutePath, PageSeoMetadata> = {
  '/': {
    path: '/',
    breadcrumbName: 'Home',
    title: 'UPWORD | Hospitality Website Development & Digital Growth',
    description:
      'UPWORD is an AI-powered hospitality digital growth agency in Indore founded by Shubham Upadhyay, helping hotels, resorts, and restaurants grow via websites, SEO, WhatsApp automation, AI workflows, Reels production, and social media across Nashik, Trimbakeshwar, Ujjain, and Indore.',
  },
  '/services': {
    path: '/services',
    breadcrumbName: 'Services & Pricing',
    title: 'Hotel Website Development, SEO & Digital Marketing Services | UPWORD',
    description:
      'Explore UPWORD’s hospitality digital growth services: Website Development (₹10,000), SEO Services (₹4,999), WhatsApp Automation (₹2,499), AI Business Automation for hotels, AI-Powered Instagram Reels creation, Complete Social Media Management for hotels & restaurants, and Google/Meta Ads.',
  },
  '/process': {
    path: '/process',
    breadcrumbName: 'Our Process & Analytics',
    title: 'Our Process & Hospitality Growth Strategy | UPWORD',
    description:
      'Discover UPWORD’s 8-step hospitality digital growth workflow—from business discovery and digital audit to website development, SEO, WhatsApp integration, and illustrative guest enquiry analytics.',
  },
  '/locations': {
    path: '/locations',
    breadcrumbName: 'Service Locations',
    title: 'Hospitality Digital Services in Nashik, Trimbakeshwar & Ujjain | UPWORD',
    description:
      'Hospitality website development, local SEO, WhatsApp automation, AI automation for hotels, and social media management for hotels, resorts, guest houses, and restaurants in Nashik, Trimbakeshwar, Ujjain, and Indore.',
  },
  '/contact': {
    path: '/contact',
    breadcrumbName: 'Contact UPWORD',
    title: 'Contact UPWORD | Shubham Upadhyay',
    description:
      'Contact UPWORD and founder Shubham Upadhyay in Indore, Madhya Pradesh via WhatsApp or telephone for hotel website development, SEO services, WhatsApp automation, AI workflows, and hospitality digital marketing.',
  },
  '/hotel-digital-marketing-nashik': {
    path: '/hotel-digital-marketing-nashik',
    breadcrumbName: 'Hotel Digital Marketing in Nashik',
    parentPath: '/locations',
    title: localSeoPagesData['/hotel-digital-marketing-nashik'].seoTitle,
    description: localSeoPagesData['/hotel-digital-marketing-nashik'].metaDescription,
  },
  '/hotel-digital-marketing-trimbakeshwar': {
    path: '/hotel-digital-marketing-trimbakeshwar',
    breadcrumbName: 'Hotel Digital Marketing in Trimbakeshwar',
    parentPath: '/locations',
    title: localSeoPagesData['/hotel-digital-marketing-trimbakeshwar'].seoTitle,
    description:
      localSeoPagesData['/hotel-digital-marketing-trimbakeshwar'].metaDescription,
  },
  '/hotel-digital-marketing-ujjain': {
    path: '/hotel-digital-marketing-ujjain',
    breadcrumbName: 'Hotel Digital Marketing in Ujjain',
    parentPath: '/locations',
    title: localSeoPagesData['/hotel-digital-marketing-ujjain'].seoTitle,
    description: localSeoPagesData['/hotel-digital-marketing-ujjain'].metaDescription,
  },
  '/hotel-digital-marketing-indore': {
    path: '/hotel-digital-marketing-indore',
    breadcrumbName: 'Hotel Digital Marketing in Indore',
    parentPath: '/locations',
    title: localSeoPagesData['/hotel-digital-marketing-indore'].seoTitle,
    description: localSeoPagesData['/hotel-digital-marketing-indore'].metaDescription,
  },
};

export const seoConfig = {
  title: routeSeoMap['/'].title,
  description: routeSeoMap['/'].description,
  keywords: businessConfig.targetKeywords.join(', '),
  locale: 'en_IN',
  type: 'website',
  /**
   * Always returns the canonical production origin (from VITE_SITE_URL or businessConfig.siteUrl)
   * so that <link rel="canonical">, og:url, and JSON-LD @id values remain 100% consistent with
   * public/sitemap.xml regardless of preview/staging hostnames.
   */
  getBaseOrigin(): string {
    const configured = import.meta.env?.VITE_SITE_URL;
    if (configured && typeof configured === 'string' && configured.trim().length > 0) {
      return configured.trim().replace(/\/+$/, '');
    }
    return businessConfig.siteUrl.trim().replace(/\/+$/, '');
  },
  /**
   * Normalizes any pathname (stripping query strings, hashes, and trailing slashes on sub-routes)
   * into an authoritative canonical URL.
   */
  getCanonicalUrl(pathname: string = '/'): string {
    const pathWithoutQueryOrHash = (pathname || '/').split(/[?#]/)[0];
    const cleanSegment = pathWithoutQueryOrHash.replace(/^\/+|\/+$/g, '');
    const normalizedPath = cleanSegment ? `/${cleanSegment}` : '/';
    const validPath: RoutePath =
      normalizedPath in routeSeoMap ? (normalizedPath as RoutePath) : '/';
    return `${this.getBaseOrigin()}${validPath}`;
  },
  getPageMetadata(pathname: string): PageSeoMetadata {
    const pathWithoutQueryOrHash = (pathname || '/').split(/[?#]/)[0];
    const cleanSegment = pathWithoutQueryOrHash.replace(/^\/+|\/+$/g, '');
    const normalizedPath = (cleanSegment ? `/${cleanSegment}` : '/') as RoutePath;
    return routeSeoMap[normalizedPath] ?? routeSeoMap['/'];
  },
  getStructuredData(pathname: string = '/') {
    const baseOrigin = this.getBaseOrigin();
    const pageMeta = this.getPageMetadata(pathname);
    const canonicalUrl = this.getCanonicalUrl(pageMeta.path);

    const breadcrumbItems: Array<{
      '@type': 'ListItem';
      position: number;
      name: string;
      item: string;
    }> = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseOrigin}/`,
      },
    ];

    if (pageMeta.parentPath) {
      const parentMeta = routeSeoMap[pageMeta.parentPath];
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: parentMeta.breadcrumbName,
        item: `${baseOrigin}${parentMeta.path}`,
      });
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 3,
        name: pageMeta.breadcrumbName,
        item: canonicalUrl,
      });
    } else if (pageMeta.path !== '/') {
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: pageMeta.breadcrumbName,
        item: canonicalUrl,
      });
    }

    const isLocalSeoCityPage = pageMeta.path in localSeoPagesData;
    const localCityData = isLocalSeoCityPage
      ? localSeoPagesData[pageMeta.path as LocalSeoCitySlug]
      : null;

    const graphEntities: Record<string, unknown>[] = [
      {
        '@type': 'Organization',
        '@id': `${baseOrigin}/#organization`,
        name: businessConfig.companyName,
        slogan: businessConfig.tagline,
        description:
          'AI-powered hospitality digital growth agency founded by Shubham Upadhyay in Indore, Madhya Pradesh, India.',
        url: `${baseOrigin}/`,
        founder: {
          '@id': `${baseOrigin}/#founder`,
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: businessConfig.headquarters.city,
          addressRegion: businessConfig.headquarters.state,
          addressCountry: businessConfig.headquarters.countryCode,
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            areaServed: 'IN',
            availableLanguage: ['English', 'Hindi'],
            url: `${baseOrigin}/contact`,
          },
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${baseOrigin}/#professional-service`,
        name: `${businessConfig.companyName} — ${businessConfig.businessCategory}`,
        description:
          'AI-powered hospitality digital growth agency headquartered in Indore, Madhya Pradesh, providing hotel website development, restaurant website design, local SEO, WhatsApp automation, AI business workflows, and social media management across Nashik, Trimbakeshwar, Ujjain, and Indore.',
        url: `${baseOrigin}/`,
        priceRange: '₹₹',
        parentOrganization: {
          '@id': `${baseOrigin}/#organization`,
        },
        founder: {
          '@id': `${baseOrigin}/#founder`,
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: businessConfig.headquarters.city,
          addressRegion: businessConfig.headquarters.state,
          addressCountry: businessConfig.headquarters.countryCode,
        },
        areaServed: businessConfig.targetMarkets.map((market) => ({
          '@type': 'City',
          name: market.city,
          containedInPlace: {
            '@type': 'AdministrativeArea',
            name: market.state,
          },
        })),
        knowsAbout: businessConfig.targetKeywords,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'UPWORD Hospitality Digital Growth & AI Automation Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Website Development',
                description:
                  'Hotel website development in Nashik, guest house website development in Trimbakeshwar, hotel website development in Ujjain, and restaurant website development in Indore.',
              },
              price: '10000',
              priceCurrency: 'INR',
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'SEO Services',
                description:
                  'Hotel SEO services in Nashik, Trimbakeshwar, Ujjain, and Indore.',
              },
              price: '4999',
              priceCurrency: 'INR',
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'WhatsApp Automation',
                description: 'WhatsApp automation for hotels, resorts, and restaurants.',
              },
              price: '2499',
              priceCurrency: 'INR',
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI Business Automation & Smart Workflows',
                description:
                  'AI automation for hotels and AI customer enquiry automation across website forms, WhatsApp, and communication channels.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI-Powered Reels & Creative Video Production',
                description:
                  'Instagram Reels creation for hotels, resorts, and restaurant food and menu videos.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Complete Social Media Management',
                description:
                  'AI social media management for hotels and social media management for restaurants across Instagram and Facebook.',
              },
            },
          ],
        },
      },
      {
        '@type': 'Person',
        '@id': `${baseOrigin}/#founder`,
        name: businessConfig.founder,
        jobTitle: 'Founder',
        worksFor: {
          '@id': `${baseOrigin}/#organization`,
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: businessConfig.headquarters.city,
          addressRegion: businessConfig.headquarters.state,
          addressCountry: businessConfig.headquarters.countryCode,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: pageMeta.title,
        description: pageMeta.description,
        breadcrumb: {
          '@id': `${canonicalUrl}#breadcrumb`,
        },
        isPartOf: {
          '@id': `${baseOrigin}/#website`,
        },
        about: {
          '@id': `${baseOrigin}/#organization`,
        },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: breadcrumbItems,
      },
      {
        '@type': 'WebSite',
        '@id': `${baseOrigin}/#website`,
        url: `${baseOrigin}/`,
        name: businessConfig.companyName,
        description: routeSeoMap['/'].description,
        publisher: {
          '@id': `${baseOrigin}/#organization`,
        },
        inLanguage: 'en-IN',
      },
    ];

    // Add Service schema for the 4 dedicated city landing pages (never claiming separate LocalBusiness offices)
    if (localCityData) {
      graphEntities.push({
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: localCityData.primaryKeyword,
        serviceType: 'Hospitality Website Development & Digital Marketing',
        description: localCityData.metaDescription,
        provider: {
          '@id': `${baseOrigin}/#organization`,
        },
        areaServed: {
          '@type': 'City',
          name: localCityData.cityName,
          containedInPlace: {
            '@type': 'AdministrativeArea',
            name: localCityData.stateName,
          },
        },
        url: canonicalUrl,
      });
    }

    return {
      '@context': 'https://schema.org',
      '@graph': graphEntities,
    };
  },
};

export default seoConfig;
