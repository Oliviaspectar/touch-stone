/**
 * TOUCH STONE - Verified Brand & Business Information
 * Exact contact details, store address, phone numbers, and WhatsApp communication protocols.
 */

export interface BusinessDetails {
  name: string;
  tagline: string;
  category: string;
  address: {
    line1: string;
    line2: string;
    area: string;
    city: string;
    postalCode: string;
    fullAddress: string;
  };
  phones: string[];
  whatsAppNumber: string;
  whatsAppBaseUrl: string;
}

export const BUSINESS_INFO: BusinessDetails = {
  name: 'TOUCH STONE',
  tagline: 'ELEGANT | MODERN | EXQUISITE',
  category: 'Indian Imitation Jewellery',
  address: {
    line1: 'Kanhaiya Apt, Shop No 2',
    line2: 'Lokmanya Nagar Pada No 2',
    area: 'Lokmanya Nagar',
    city: 'Thane West',
    postalCode: '400606',
    fullAddress: 'Kanhaiya Apt, Shop No 2, Lokmanya Nagar Pada No 2, Lokmanya Nagar, Thane West – 400606'
  },
  phones: ['9820764929', '8779842872'],
  whatsAppNumber: '919820764929',
  whatsAppBaseUrl: 'https://wa.me/919820764929'
};

/**
 * Generates an encoded WhatsApp enquiry URL for a specific product.
 */
export function createProductWhatsAppUrl(product: { name: string; code?: string; price?: number }): string {
  const priceText = product.price ? ` (₹${product.price.toLocaleString('en-IN')})` : '';
  const codeText = product.code ? ` [Code: ${product.code}]` : '';
  const message = `Hi TOUCH STONE, I'm interested in ${product.name}${codeText}${priceText}. Could you please share more details?`;
  return `${BUSINESS_INFO.whatsAppBaseUrl}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates an encoded WhatsApp enquiry URL for a list of shortlisted products.
 */
export function createShortlistWhatsAppUrl(items: Array<{ name: string; code?: string; price?: number }>): string {
  if (items.length === 0) {
    return createGeneralWhatsAppUrl();
  }

  const itemsList = items
    .map((item, index) => {
      const priceStr = item.price ? ` - ₹${item.price.toLocaleString('en-IN')}` : ' - Price on enquiry';
      const codeStr = item.code ? ` (${item.code})` : '';
      return `${index + 1}. ${item.name}${codeStr}${priceStr}`;
    })
    .join('\n');

  const message = `Hi TOUCH STONE, I would like to enquire about my shortlisted items:\n\n${itemsList}\n\nCould you please let me know availability and how to proceed?`;
  return `${BUSINESS_INFO.whatsAppBaseUrl}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates an encoded WhatsApp URL for general store enquiries.
 */
export function createGeneralWhatsAppUrl(subject?: string): string {
  const message = subject
    ? `Hi TOUCH STONE, I have an enquiry regarding ${subject}.`
    : `Hi TOUCH STONE, I would like to know more about your everyday jewellery collection.`;
  return `${BUSINESS_INFO.whatsAppBaseUrl}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates an encoded WhatsApp URL to share a piece with a friend or bestie.
 * Does not specify a recipient number so the user can choose any friend or chat in WhatsApp.
 */
export function createFriendShareWhatsAppUrl(product: { name: string; price?: number; code?: string }): string {
  const priceText = product.price ? ` for ₹${product.price.toLocaleString('en-IN')}` : '';
  const message = `Hey! Look at this everyday piece from TOUCH STONE: "${product.name}"${priceText} — what do you think? You can enquire with them directly at ${BUSINESS_INFO.whatsAppBaseUrl}`;
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
}

export interface BagOrderParams {
  items: Array<{ name: string; code?: string; price: number; quantity: number }>;
  totalAmount: number;
  discountAmount?: number;
}

/**
 * Generates an encoded WhatsApp enquiry URL for items added to the cart
 */
export function createBagOrderWhatsAppUrl(params: BagOrderParams): string {
  const { items, totalAmount, discountAmount = 0 } = params;
  if (items.length === 0) return createGeneralWhatsAppUrl();

  const itemListText = items
    .map((item) => `• ${item.name} (${item.code || 'TS'}) x${item.quantity} — ₹${(item.price * item.quantity).toLocaleString('en-IN')}`)
    .join('\n');

  const discountText = discountAmount > 0 ? `\n🎁 Stack Bonus (10% OFF): -₹${discountAmount.toLocaleString('en-IN')}` : '';

  const message = `Hello TOUCH STONE! 🤍\nI would like to enquire about ordering these items from my cart:\n\n${itemListText}${discountText}\n\n*Estimated Total: ₹${totalAmount.toLocaleString('en-IN')}*\n\nPlease let me know if these pieces are available and how to proceed. Thank you!`;

  return `${BUSINESS_INFO.whatsAppBaseUrl}?text=${encodeURIComponent(message)}`;
}

