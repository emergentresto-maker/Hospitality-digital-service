import type { LucideIcon } from 'lucide-react';
import {
  Compass,
  FileSearch,
  ClipboardList,
  Globe,
  MapPin,
  MessageCircle,
  Megaphone,
  BarChart3,
} from 'lucide-react';

export interface WorkflowStep {
  id: string;
  number: string;
  stepIndex: number;
  title: string;
  description: string;
  phase: string;
  hospitalityFocus: string;
  checkpoints: string[];
  icon: LucideIcon;
}

export const workflowSteps: WorkflowStep[] = [
  {
    id: 'business-discovery',
    number: '01',
    stepIndex: 1,
    title: 'Business Discovery',
    description: 'Understand the hotel, location, services and target customers.',
    phase: 'Foundation & Strategy',
    hospitalityFocus:
      'We study your property category, room inventory, dining capacity, seasonal pilgrimage or leisure peaks, and ideal guest profile across Nashik, Trimbakeshwar, Ujjain, or Indore.',
    checkpoints: [
      'Property positioning & room/menu inventory review',
      'Feeder city & traveler demographic mapping',
      'Peak season & weekday occupancy analysis',
    ],
    icon: Compass,
  },
  {
    id: 'digital-audit',
    number: '02',
    stepIndex: 2,
    title: 'Digital Audit',
    description: 'Analyze the existing website, Google presence and social profiles.',
    phase: 'Foundation & Strategy',
    hospitalityFocus:
      'We evaluate your current digital footprint to uncover where prospective guests are dropping off and why aggregator listings may be outranking your direct channels.',
    checkpoints: [
      'Website mobile speed & booking friction audit',
      'Google Business Profile & Maps ranking check',
      'Social media & online review sentiment assessment',
    ],
    icon: FileSearch,
  },
  {
    id: 'strategy-planning',
    number: '03',
    stepIndex: 3,
    title: 'Strategy & Planning',
    description: 'Prepare the digital growth plan.',
    phase: 'Foundation & Strategy',
    hospitalityFocus:
      'We craft a clear, prioritized hospitality growth roadmap tailored to your property goals, aligning your website, search keywords, and inquiry channels.',
    checkpoints: [
      'Direct inquiry & reservation funnel blueprint',
      'Destination keyword & local search roadmap',
      'Channel prioritization & milestone schedule',
    ],
    icon: ClipboardList,
  },
  {
    id: 'website-development',
    number: '04',
    stepIndex: 4,
    title: 'Website Development',
    description: 'Create a professional mobile-friendly website.',
    phase: 'Foundation & Strategy',
    hospitalityFocus:
      'We design and build an elegant, fast-loading hospitality website that showcases your rooms, banquet spaces, and restaurant menus with direct inquiry actions.',
    checkpoints: [
      'Luxury mobile-first room & dining showcase',
      'One-tap WhatsApp & phone booking triggers',
      'High-speed image delivery & location maps',
    ],
    icon: Globe,
  },
  {
    id: 'seo-google-optimization',
    number: '05',
    stepIndex: 5,
    title: 'SEO & Google Optimization',
    description: 'Improve technical SEO and local visibility.',
    phase: 'Execution & Scale',
    hospitalityFocus:
      'We optimize your website structure and Google Business Profile so travelers searching for stays or dining in your city discover your property first.',
    checkpoints: [
      'On-page SEO for destination & hotel searches',
      'Google Maps listing & photo optimization',
      'Local schema & search indexing configuration',
    ],
    icon: MapPin,
  },
  {
    id: 'whatsapp-social-integration',
    number: '06',
    stepIndex: 6,
    title: 'WhatsApp & Social Integration',
    description: 'Connect website enquiries and communication channels.',
    phase: 'Execution & Scale',
    hospitalityFocus:
      'We connect your website, Google listing, and social profiles directly to automated WhatsApp workflows so every guest inquiry receives an immediate response.',
    checkpoints: [
      'Automated WhatsApp greeting & tariff/menu sharing',
      'Instagram & Facebook direct inquiry linking',
      'Instant lead routing to front desk or reservations',
    ],
    icon: MessageCircle,
  },
  {
    id: 'advertising-lead-generation',
    number: '07',
    stepIndex: 7,
    title: 'Advertising & Lead Generation',
    description: 'Plan Google Ads and Meta Ads campaigns.',
    phase: 'Execution & Scale',
    hospitalityFocus:
      'We structure targeted search and social ad campaigns for high-demand travel dates, weekend staycations, wedding bookings, and family dining.',
    checkpoints: [
      'High-intent Google Search ads for active travelers',
      'Visual Meta (Instagram & Facebook) inquiry ads',
      'Location targeting across key feeder markets',
    ],
    icon: Megaphone,
  },
  {
    id: 'data-analysis-growth',
    number: '08',
    stepIndex: 8,
    title: 'Data Analysis & Growth',
    description: 'Analyze enquiries and recommend improvements.',
    phase: 'Execution & Scale',
    hospitalityFocus:
      'We track inquiry volume, search visibility, and guest response patterns to continuously refine your campaigns and maximize direct hospitality revenue.',
    checkpoints: [
      'WhatsApp & phone inquiry volume tracking',
      'Search ranking & ad performance evaluation',
      'Ongoing conversion & seasonal growth recommendations',
    ],
    icon: BarChart3,
  },
];

export default workflowSteps;
