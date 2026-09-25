import { Link } from 'react-router-dom';
import { FaEnvelope, FaLocationDot, FaPhone, FaWhatsapp } from 'react-icons/fa6';
import SectionHeading from '../SectionHeading/SectionHeading';
import Reveal from '../Reveal/Reveal';
import { ACADEMY } from '../../data/academy';
import { openWhatsAppChat } from '../../utils/whatsapp';

const CONTACT_CARDS = [
  {
    icon: FaLocationDot,
    label: 'Academy Address',
    value: ACADEMY.contact.address,
    href: null,
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: ACADEMY.contact.phone,
    href: null,
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: ACADEMY.contact.whatsapp,
    action: () => openWhatsAppChat(),
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: ACADEMY.contact.email,
    href: null,
  },
];

export default function Contact() {
  return (
    <section className="section section--tint" aria-labelledby="visit-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Reach Us"
          title="Visit RRC Law Academy"
          subtitle="Talk to our team to understand the right programme for you and how to begin."
          center
        />

        <div className="contact-strip">
          {CONTACT_CARDS.map((card, index) => {
            const Icon = card.icon;
            const Tag = card.action ? 'button' : 'article';
            return (
              <Reveal delay={index * 70} key={card.label}>
                <Tag
                  type={card.action ? 'button' : undefined}
                  className="contact-strip-card"
                  style={card.action ? { textAlign: 'left', cursor: 'pointer' } : undefined}
                  onClick={card.action}
                  aria-label={card.action ? `Chat with RRC Law Academy on WhatsApp` : `${card.label}: ${card.value}`}
                >
                  <span className="contact-strip-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <strong style={{ display: 'block' }}>{card.label}</strong>
                    <p>{card.value}</p>
                  </div>
                </Tag>
              </Reveal>
            );
          })}
        </div>

        <div className="faculty-section-cta">
          <Link to="/contact" className="btn btn--primary">
            View Contact &amp; Directions
          </Link>
        </div>
      </div>
    </section>
  );
}