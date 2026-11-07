import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoConfig } from '../../config/seo';

/**
 * Synchronizes runtime document title, meta description, OpenGraph, Twitter Card,
 * canonical URL, and Schema.org JSON-LD whenever the active React Router route changes.
 */
export const SeoHead: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const baseOrigin = seoConfig.getBaseOrigin();
    const pageMeta = seoConfig.getPageMetadata(pathname);
    const canonicalUrl = seoConfig.getCanonicalUrl(pathname);
    const socialImageUrl = `${baseOrigin}/images/hero-mountain-resort.jpg`;

    // 1. Update Document Title
    document.title = pageMeta.title;

    // 2. Update Meta Description
    const descMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (descMeta) {
      descMeta.content = pageMeta.description;
    }

    // 3. Update or Create Canonical URL (<link rel="canonical">)
    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('id', 'canonical-link');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Update Open Graph Tags
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.content = pageMeta.title;
    }
    const ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.content = pageMeta.description;
    }
    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.content = canonicalUrl;
    }
    const ogImage = document.querySelector<HTMLMetaElement>('meta[property="og:image"]');
    if (ogImage) {
      ogImage.content = socialImageUrl;
    }

    // 5. Update Twitter Card Tags
    const twitterTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.content = pageMeta.title;
    }
    const twitterDesc = document.querySelector<HTMLMetaElement>(
      'meta[name="twitter:description"]'
    );
    if (twitterDesc) {
      twitterDesc.content = pageMeta.description;
    }
    const twitterImage = document.querySelector<HTMLMetaElement>('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.content = socialImageUrl;
    }

    // 6. Update Schema.org JSON-LD
    const jsonLdScript = document.getElementById('upword-jsonld');
    if (jsonLdScript) {
      jsonLdScript.textContent = JSON.stringify(seoConfig.getStructuredData(pathname));
    }
  }, [location.pathname]);

  return null;
};

