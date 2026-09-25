import { FaWhatsapp } from 'react-icons/fa6';
import { openWhatsAppChat } from '../../utils/whatsapp';

/**
 * Floating WhatsApp click-to-chat button, visible on every page.
 */
export default function WhatsAppButton() {
  return (
    <button
      type="button"
      className="whatsapp-float"
      aria-label="Chat with RRC Law Academy on WhatsApp"
      title="Chat with us on WhatsApp"
      onClick={() => openWhatsAppChat()}
    >
      <FaWhatsapp aria-hidden="true" />
    </button>
  );
}