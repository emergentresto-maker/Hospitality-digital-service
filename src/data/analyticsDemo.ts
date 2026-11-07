/**
 * Illustrative hospitality demonstration datasets for the UPWORD Analytics section.
 * Explicitly labelled as demonstration data — not claimed as past client results.
 */

export const ANALYTICS_DISCLAIMER_NOTE =
  'Illustrative data for demonstration only. Actual performance data will be available after analytics integration.';

export interface EnquiryFunnelStage {
  stage: string;
  shortLabel: string;
  users: number;
  retentionRate: string;
  fill: string;
}

export interface TrafficSourceItem {
  source: string;
  share: number;
  visitors: number;
  fill: string;
}

export interface MonthlyEnquiryPoint {
  month: string;
  enquiries: number;
  directCallsAndWhatsApp: number;
}

export interface ConversionFunnelStage {
  stage: string;
  count: number;
  conversionRate: string;
  description: string;
  fill: string;
}

/**
 * 1. Customer Enquiry Funnel:
 * Google Search → Website Visit → WhatsApp Click → Enquiry → Booking
 */
export const customerEnquiryFunnelData: EnquiryFunnelStage[] = [
  {
    stage: 'Google Search',
    shortLabel: 'Google Search',
    users: 5000,
    retentionRate: '100%',
    fill: '#F4B942',
  },
  {
    stage: 'Website Visit',
    shortLabel: 'Website Visit',
    users: 1850,
    retentionRate: '37.0%',
    fill: '#E6AC38',
  },
  {
    stage: 'WhatsApp Click',
    shortLabel: 'WhatsApp Click',
    users: 520,
    retentionRate: '10.4%',
    fill: '#D49A2A',
  },
  {
    stage: 'Enquiry',
    shortLabel: 'Enquiry',
    users: 310,
    retentionRate: '6.2%',
    fill: '#C2881E',
  },
  {
    stage: 'Booking',
    shortLabel: 'Booking',
    users: 115,
    retentionRate: '2.3%',
    fill: '#FFBF47',
  },
];

/**
 * 2. Traffic Source Chart:
 * Google Organic, Google Ads, Meta Ads, Social Media, Direct Traffic
 */
export const trafficSourceData: TrafficSourceItem[] = [
  {
    source: 'Google Organic',
    share: 36,
    visitors: 1332,
    fill: '#F4B942',
  },
  {
    source: 'Google Ads',
    share: 24,
    visitors: 888,
    fill: '#FFBF47',
  },
  {
    source: 'Meta Ads',
    share: 18,
    visitors: 666,
    fill: '#D49A2A',
  },
  {
    source: 'Social Media',
    share: 12,
    visitors: 444,
    fill: '#A87920',
  },
  {
    source: 'Direct Traffic',
    share: 10,
    visitors: 370,
    fill: '#7D5A18',
  },
];

/**
 * 3. Monthly Enquiry Trend:
 * Illustrative enquiries over six months
 */
export const monthlyEnquiryTrendData: MonthlyEnquiryPoint[] = [
  { month: 'Month 1', enquiries: 68, directCallsAndWhatsApp: 45 },
  { month: 'Month 2', enquiries: 96, directCallsAndWhatsApp: 68 },
  { month: 'Month 3', enquiries: 134, directCallsAndWhatsApp: 98 },
  { month: 'Month 4', enquiries: 178, directCallsAndWhatsApp: 132 },
  { month: 'Month 5', enquiries: 226, directCallsAndWhatsApp: 170 },
  { month: 'Month 6', enquiries: 284, directCallsAndWhatsApp: 218 },
];

/**
 * 4. Conversion Funnel:
 * Visitors, enquiries, qualified leads and bookings
 */
export const conversionFunnelData: ConversionFunnelStage[] = [
  {
    stage: 'Visitors',
    count: 3700,
    conversionRate: '100%',
    description: 'Travelers & diners visiting your website & Google profile',
    fill: '#F4B942',
  },
  {
    stage: 'Enquiries',
    count: 480,
    conversionRate: '13.0%',
    description: 'Guests initiating WhatsApp messages or direct phone calls',
    fill: '#E0A330',
  },
  {
    stage: 'Qualified Leads',
    count: 265,
    conversionRate: '7.2%',
    description: 'Verified check-in dates, room availability & group dining requests',
    fill: '#C78B20',
  },
  {
    stage: 'Bookings',
    count: 118,
    conversionRate: '3.2%',
    description: 'Confirmed direct room stays & table reservations',
    fill: '#FFBF47',
  },
];
