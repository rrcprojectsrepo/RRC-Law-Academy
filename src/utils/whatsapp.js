/**
 * WhatsApp integration utilities for RRC Law Academy.
 *
 * IMPORTANT: Replace WHATSAPP_NUMBER_HERE with the academy's official
 * WhatsApp number in international format WITHOUT the '+' sign.
 * Example: '919876543210'
 * Until the real number is supplied, the helper falls back to a plain
 * wa.me/ open with the message text (no fake number is ever used).
 */

export const WHATSAPP_NUMBER = 'WHATSAPP_NUMBER_HERE';

const numberIsConfigured = () =>
  typeof WHATSAPP_NUMBER === 'string' && !WHATSAPP_NUMBER.includes('WHATSAPP_NUMBER_HERE');

const waLink = (text) => {
  const encoded = encodeURIComponent(text);
  if (numberIsConfigured()) {
    return `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encoded}`;
  }
  return `https://wa.me/?text=${encoded}`;
};

const open = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Build a formatted WhatsApp enquiry message from form data.
 * @param {{ name: string, phone: string, email?: string, programme?: string, message?: string }} enquiry
 */
export function buildEnquiryMessage({ name, phone, email = '', programme = '', message = '' }) {
  const lines = [
    'Hello RRC Law Academy,',
    '',
    'I would like to enquire about your programme.',
    '',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email.trim() || 'Not provided'}`,
    `Programme: ${programme || 'General Enquiry'}`,
  ];
  if (message.trim()) {
    lines.push('', 'Message:', message.trim());
  }
  lines.push('', 'Thank you.');
  return lines.join('\n');
}

/** Open WhatsApp with a completed enquiry message. */
export function openWhatsAppEnquiry(enquiry) {
  open(waLink(buildEnquiryMessage(enquiry)));
}

/** Open WhatsApp with a simple pre-filled message. */
export function openWhatsAppChat(customText) {
  const text = customText || 'Hello RRC Law Academy, I would like to know more about your programmes.';
  open(waLink(text));
}