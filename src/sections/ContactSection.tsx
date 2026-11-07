import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  UserCheck,
  AlertCircle,
  ExternalLink,
  Copy,
  Check,
} from 'lucide-react';
import { businessConfig } from '../config/business';
import { servicesCatalog, aiHospitalityGrowthPackage } from '../data/services';
import { Section, SectionHeading, Card, IconBox, Button } from '../components';

interface EnquiryFormState {
  name: string;
  businessName: string;
  city: string;
  businessType: string;
  serviceRequired: string;
  message: string;
}

type EnquiryFormErrors = Partial<Record<keyof EnquiryFormState, string>>;

const cityOptions = [
  'Nashik, Maharashtra',
  'Trimbakeshwar, Maharashtra',
  'Ujjain, Madhya Pradesh',
  'Indore, Madhya Pradesh',
  'Other City',
];

const businessTypeOptions = [
  'Hotel / Boutique Stay',
  'Resort / Hilltop Retreat',
  'Guest House / Homestay',
  'Pilgrimage Lodge / Dharamshala',
  'Restaurant / Cafe / Fine Dining',
  'Hospitality Group / Other',
];

const serviceOptions = [
  ...servicesCatalog.map((service) => `${service.title} (${service.price})`),
  `${aiHospitalityGrowthPackage.title} (${aiHospitalityGrowthPackage.pricingLabel})`,
  'General Hospitality Growth Consultation',
];

export function buildReadableWhatsAppMessage(data: EnquiryFormState): string {
  return [
    `Hello ${businessConfig.companyName} (${businessConfig.founder}),`,
    '',
    'I would like to enquire about hospitality digital growth services:',
    `• Name: ${data.name.trim()}`,
    `• Business Name: ${data.businessName.trim()}`,
    `• City: ${data.city.trim()}`,
    `• Business Type: ${data.businessType.trim()}`,
    `• Service Required: ${data.serviceRequired.trim()}`,
    `• Message: ${data.message.trim()}`,
  ].join('\n');
}

export function buildEncodedWhatsAppUrl(data: EnquiryFormState): string {
  const message = buildReadableWhatsAppMessage(data);
  return `https://wa.me/${businessConfig.contact.whatsappRaw}?text=${encodeURIComponent(
    message
  )}`;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormState>({
    name: '',
    businessName: '',
    city: '',
    businessType: '',
    serviceRequired: '',
    message: '',
  });

  const [errors, setErrors] = useState<EnquiryFormErrors>({});
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = useState<string | null>(null);
  const [preparedMessageText, setPreparedMessageText] = useState<string>('');
  const [copiedMessage, setCopiedMessage] = useState<boolean>(false);

  const validateForm = (state: EnquiryFormState): EnquiryFormErrors => {
    const nextErrors: EnquiryFormErrors = {};

    if (!state.name.trim() || state.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name (at least 2 characters).';
    }
    if (!state.businessName.trim() || state.businessName.trim().length < 2) {
      nextErrors.businessName =
        'Please enter your hotel, resort, guest house, or restaurant name.';
    }
    if (!state.city.trim()) {
      nextErrors.city = 'Please select your city.';
    }
    if (!state.businessType.trim()) {
      nextErrors.businessType = 'Please select your hospitality business type.';
    }
    if (!state.serviceRequired.trim()) {
      nextErrors.serviceRequired = 'Please select the service you require.';
    }
    if (!state.message.trim() || state.message.trim().length < 8) {
      nextErrors.message =
        'Please enter a short message describing your property or requirements (at least 8 characters).';
    }

    return nextErrors;
  };

  const handleFieldChange = (
    field: keyof EnquiryFormState,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setPreparedWhatsAppUrl(null);
      return;
    }

    setErrors({});
    const readableMessage = buildReadableWhatsAppMessage(formData);
    const whatsappUrl = buildEncodedWhatsAppUrl(formData);

    setPreparedMessageText(readableMessage);
    setPreparedWhatsAppUrl(whatsappUrl);

    // Trigger anchor navigation to https://wa.me/919131093658 with prefilled text
    // so the user can review and explicitly send the message inside WhatsApp.
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyPreparedMessage = async () => {
    if (!preparedMessageText || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(preparedMessageText);
      setCopiedMessage(true);
      window.setTimeout(() => setCopiedMessage(false), 2500);
    } catch {
      // Clipboard fallback ignored
    }
  };

  const inputBaseClasses =
    'w-full min-h-[46px] px-4 py-2.5 rounded-lg bg-[#15120F] border text-sm text-[#F5F1EA] placeholder:text-[#968C7E]/70 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#F4B942]';

  return (
    <Section
      id="contact"
      spacing="lg"
      surface="secondary"
      className="border-t border-[#F4B942]/15 scroll-mt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Direct Business Contact Action Cards */}
        <div className="lg:col-span-5 space-y-8">
          <SectionHeading
            kicker="Direct Hospitality Consultation"
            title="Speak With UPWORD Today."
            subtitle="Connect directly via WhatsApp or telephone to discuss website development, local Google visibility, WhatsApp automation, or advertising for your property."
          />

          <div className="space-y-4">
            {/* CARD 1: WhatsApp Support */}
            <Card variant="interactive" className="p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <IconBox icon={MessageCircle} size="md" variant="gold" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#F5F1EA]">
                    WhatsApp Support
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#D2C9BD] leading-relaxed">
                    Have a question about your hotel or restaurant? Let&apos;s discuss your requirements.
                  </p>
                  <div className="mt-4">
                    <Button
                      href={businessConfig.contact.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="md"
                      className="w-full sm:w-auto"
                      icon={<MessageCircle className="w-4 h-4" />}
                    >
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* CARD 2: Direct Enquiry */}
            <Card variant="interactive" className="p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <IconBox icon={Phone} size="md" variant="gold" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#F5F1EA]">
                    Direct Enquiry
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#D2C9BD] leading-relaxed">
                    Want to discuss your hospitality business requirements directly?
                  </p>
                  <div className="mt-4">
                    <Button
                      href={businessConfig.contact.phoneHref}
                      variant="outline"
                      size="md"
                      className="w-full sm:w-auto"
                      icon={<Phone className="w-4 h-4" />}
                    >
                      Call Now
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Founder & Location Details */}
            <Card variant="minimal" className="p-5 sm:p-6 space-y-4">
              <div className="flex items-start gap-3.5">
                <IconBox icon={UserCheck} size="sm" variant="subtle" />
                <div>
                  <p className="text-xs text-[#A69B8D]">Company &amp; Founder</p>
                  <p className="text-sm font-semibold text-[#F5F1EA] mt-0.5">
                    {businessConfig.companyName} · Founded by {businessConfig.founder}
                  </p>
                  <p className="text-xs text-[#D2C9BD] mt-0.5">
                    {businessConfig.businessCategory}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#F4B942]/12 flex items-start gap-3.5">
                <IconBox icon={MapPin} size="sm" variant="subtle" />
                <div>
                  <p className="text-xs text-[#A69B8D]">Headquarters &amp; Focus Cities</p>
                  <p className="text-sm font-semibold text-[#F5F1EA] mt-0.5">
                    {businessConfig.headquarters.fullAddress}
                  </p>
                  <p className="text-xs text-[#D2C9BD] mt-1">
                    Serving: Nashik · Trimbakeshwar · Ujjain · Indore
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Column: Validated WhatsApp Enquiry Form */}
        <div className="lg:col-span-7">
          <Card variant="elevated" className="p-6 sm:p-8 lg:p-10">
            <div className="mb-6 pb-5 border-b border-[#F4B942]/15">
              <p className="text-xs font-medium tracking-wider text-[#F4B942] mb-1.5">
                Structured WhatsApp Enquiry
              </p>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#F5F1EA]">
                Prepare Your Hospitality Growth Enquiry
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#D2C9BD]">
                Fill in your property details below. Submitting this form formats your enquiry and opens WhatsApp so you can review and send your message directly to {businessConfig.companyName}.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Row 1: Name & Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="enquiry-name"
                    className="block text-xs font-semibold text-[#F5F1EA] mb-2"
                  >
                    Your Name <span className="text-[#F4B942]">*</span>
                  </label>
                  <input
                    id="enquiry-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                    placeholder="e.g. Rajesh Sharma"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'enquiry-name-error' : undefined}
                    className={`${inputBaseClasses} ${
                      errors.name ? 'border-amber-400' : 'border-[#F4B942]/25'
                    }`}
                  />
                  {errors.name && (
                    <p
                      id="enquiry-name-error"
                      role="alert"
                      className="mt-1.5 flex items-center gap-1.5 text-xs text-[#FFBF47]"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="enquiry-business-name"
                    className="block text-xs font-semibold text-[#F5F1EA] mb-2"
                  >
                    Business Name <span className="text-[#F4B942]">*</span>
                  </label>
                  <input
                    id="enquiry-business-name"
                    name="businessName"
                    type="text"
                    required
                    autoComplete="organization"
                    value={formData.businessName}
                    onChange={(e) => handleFieldChange('businessName', e.target.value)}
                    placeholder="e.g. Hotel Grand Heritage"
                    aria-invalid={Boolean(errors.businessName)}
                    aria-describedby={
                      errors.businessName ? 'enquiry-business-error' : undefined
                    }
                    className={`${inputBaseClasses} ${
                      errors.businessName ? 'border-amber-400' : 'border-[#F4B942]/25'
                    }`}
                  />
                  {errors.businessName && (
                    <p
                      id="enquiry-business-error"
                      role="alert"
                      className="mt-1.5 flex items-center gap-1.5 text-xs text-[#FFBF47]"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.businessName}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: City Selection & Business Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="enquiry-city"
                    className="block text-xs font-semibold text-[#F5F1EA] mb-2"
                  >
                    City <span className="text-[#F4B942]">*</span>
                  </label>
                  <select
                    id="enquiry-city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={(e) => handleFieldChange('city', e.target.value)}
                    aria-invalid={Boolean(errors.city)}
                    aria-describedby={errors.city ? 'enquiry-city-error' : undefined}
                    className={`${inputBaseClasses} ${
                      errors.city ? 'border-amber-400' : 'border-[#F4B942]/25'
                    }`}
                  >
                    <option value="">Select your city</option>
                    {cityOptions.map((city) => (
                      <option key={city} value={city} className="bg-[#15120F] text-[#F5F1EA]">
                        {city}
                      </option>
                    ))}
                  </select>
                  {errors.city && (
                    <p
                      id="enquiry-city-error"
                      role="alert"
                      className="mt-1.5 flex items-center gap-1.5 text-xs text-[#FFBF47]"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.city}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="enquiry-business-type"
                    className="block text-xs font-semibold text-[#F5F1EA] mb-2"
                  >
                    Business Type <span className="text-[#F4B942]">*</span>
                  </label>
                  <select
                    id="enquiry-business-type"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={(e) => handleFieldChange('businessType', e.target.value)}
                    aria-invalid={Boolean(errors.businessType)}
                    aria-describedby={
                      errors.businessType ? 'enquiry-business-type-error' : undefined
                    }
                    className={`${inputBaseClasses} ${
                      errors.businessType ? 'border-amber-400' : 'border-[#F4B942]/25'
                    }`}
                  >
                    <option value="">Select business type</option>
                    {businessTypeOptions.map((type) => (
                      <option key={type} value={type} className="bg-[#15120F] text-[#F5F1EA]">
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.businessType && (
                    <p
                      id="enquiry-business-type-error"
                      role="alert"
                      className="mt-1.5 flex items-center gap-1.5 text-xs text-[#FFBF47]"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.businessType}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Service Selection Dropdown */}
              <div>
                <label
                  htmlFor="enquiry-service"
                  className="block text-xs font-semibold text-[#F5F1EA] mb-2"
                >
                  Service Required <span className="text-[#F4B942]">*</span>
                </label>
                <select
                  id="enquiry-service"
                  name="serviceRequired"
                  required
                  value={formData.serviceRequired}
                  onChange={(e) => handleFieldChange('serviceRequired', e.target.value)}
                  aria-invalid={Boolean(errors.serviceRequired)}
                  aria-describedby={
                    errors.serviceRequired ? 'enquiry-service-error' : undefined
                  }
                  className={`${inputBaseClasses} ${
                    errors.serviceRequired ? 'border-amber-400' : 'border-[#F4B942]/25'
                  }`}
                >
                  <option value="">Select required hospitality service</option>
                  {serviceOptions.map((service) => (
                    <option
                      key={service}
                      value={service}
                      className="bg-[#15120F] text-[#F5F1EA]"
                    >
                      {service}
                    </option>
                  ))}
                </select>
                {errors.serviceRequired && (
                  <p
                    id="enquiry-service-error"
                    role="alert"
                    className="mt-1.5 flex items-center gap-1.5 text-xs text-[#FFBF47]"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.serviceRequired}</span>
                  </p>
                )}
              </div>

              {/* Row 4: Message Field */}
              <div>
                <label
                  htmlFor="enquiry-message"
                  className="block text-xs font-semibold text-[#F5F1EA] mb-2"
                >
                  Message <span className="text-[#F4B942]">*</span>
                </label>
                <textarea
                  id="enquiry-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => handleFieldChange('message', e.target.value)}
                  placeholder="Share your room count, restaurant seating capacity, current website (if any), or digital growth goals..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'enquiry-message-error' : undefined}
                  className={`${inputBaseClasses} py-3 ${
                    errors.message ? 'border-amber-400' : 'border-[#F4B942]/25'
                  }`}
                />
                {errors.message && (
                  <p
                    id="enquiry-message-error"
                    role="alert"
                    className="mt-1.5 flex items-center gap-1.5 text-xs text-[#FFBF47]"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button & Honest WhatsApp Handover Note */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs text-[#968C7E]">
                  Opens WhatsApp with your prefilled message so you can review and send it.
                </p>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  icon={<MessageCircle className="w-4 h-4" />}
                >
                  Continue to WhatsApp
                </Button>
              </div>
            </form>

            {/* Prepared WhatsApp Handover Panel (Does not claim automatic background sending) */}
            {preparedWhatsAppUrl && (
              <div
                role="region"
                aria-label="Prepared WhatsApp message ready to send"
                className="mt-6 p-5 rounded-xl bg-[#15120F] border border-[#F4B942]/40 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-[#F4B942]">
                      Enquiry Formatted for WhatsApp
                    </p>
                    <p className="text-xs text-[#C8BFB3] mt-0.5">
                      Your message has not been sent automatically. Please click the button below (or use the newly opened WhatsApp tab) and tap <strong>Send</strong> inside WhatsApp.
                    </p>
                  </div>

                  <Button
                    href={preparedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    Open in WhatsApp
                  </Button>
                </div>

                <div className="p-3.5 rounded-lg bg-[#1C1814] border border-[#F4B942]/15">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[11px] text-[#968C7E]">
                      Prefilled Message Preview:
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyPreparedMessage}
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#F4B942] hover:text-[#FFBF47] transition-colors cursor-pointer"
                    >
                      {copiedMessage ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Text</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="text-xs text-[#F5F1EA] whitespace-pre-wrap font-sans leading-relaxed">
                    {preparedMessageText}
                  </pre>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </Section>
  );
};
