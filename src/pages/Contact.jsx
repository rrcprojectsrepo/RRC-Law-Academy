import { FaClock, FaEnvelope, FaLocationDot, FaMapLocationDot, FaPhone, FaWhatsapp } from 'react-icons/fa6';
import PageHero from '../components/PageHero/PageHero';
import EnquiryForm from '../components/EnquiryForm/EnquiryForm';
import Reveal from '../components/Reveal/Reveal';
import { ACADEMY } from '../data/academy';
import { openWhatsAppChat } from '../utils/whatsapp';
import { usePageMeta } from '../utils/seo';

const CONTACT_DETAILS = [
  {
    icon: FaLocationDot,
    label: 'Academy Address',
    value: ACADEMY.contact.address,
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: ACADEMY.contact.phone,
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: ACADEMY.contact.whatsapp,
    button: true,
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: ACADEMY.contact.email,
  },
  {
    icon: FaClock,
    label: 'Working Hours',
    value: ACADEMY.contact.hours,
  },
];

export default function ContactPage() {
  usePageMeta(
    'Contact & Enquiry | RRC Law Academy',
    'Contact RRC Law Academy for law entrance coaching enquiries — phone, WhatsApp, email and address details with an enquiry form.'
  );

  const mapConfigured = !ACADEMY.contact.mapUrl.includes('MAP URL');

  return (
    <>
      <PageHero
        title="Contact & Enquiry"
        subtitle="Get in touch with RRC Law Academy — book a counselling session or send your enquiry, and our team will reach out to guide you."
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="section" aria-labelledby="contact-details-heading">
        <div className="container">
          <div className="course-cols" style={{ gap: '2rem', gridTemplateColumns: '1fr 1.05fr' }}>
            <Reveal>
              <div className="contact-strip" style={{ gridTemplateColumns: '1fr' }}>
                {CONTACT_DETAILS.map((detail) => {
                  const Icon = detail.icon;
                  const Tag = detail.button ? 'button' : 'div';
                  return (
                    <Tag
                      key={detail.label}
                      type={detail.button ? 'button' : undefined}
                      className="contact-strip-card"
                      style={detail.button ? { textAlign: 'left', cursor: 'pointer' } : undefined}
                      onClick={detail.button ? () => openWhatsAppChat() : undefined}
                      aria-label={detail.button ? 'Chat with RRC Law Academy on WhatsApp' : undefined}
                    >
                      <span className="contact-strip-icon">
                        <Icon aria-hidden="true" />
                      </span>
                      <div>
                        <strong>{detail.label}</strong>
                        <p>{detail.value}</p>
                      </div>
                    </Tag>
                  );
                })}
              </div>

              <div className="faq-item" style={{ marginTop: '1.25rem' }}>
                <div className="faq-a" style={{ gridTemplateRows: '1fr' }}>
                  <div className="faq-a-inner">
                    <div style={{ padding: '1.4rem' }}>
                      <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '1.05rem', marginBottom: '0.6rem' }}>
                        <FaMapLocationDot style={{ color: 'var(--color-blue)' }} aria-hidden="true" />
                        {mapConfigured ? 'Find Us On The Map' : 'Google Maps'}
                      </h3>
                      {mapConfigured ? (
                        <p style={{ color: 'var(--color-muted)' }}>Embedded map will render here using {ACADEMY.contact.mapUrl}.</p>
                      ) : (
                        <p style={{ color: 'var(--color-muted)' }}>
                          [MAP URL] — the academy's Google Maps location will be embedded here once provided.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div>
                <h2 style={{ marginBottom: '0.6rem' }}>Send an Enquiry</h2>
                <p className="section-sub" style={{ marginBottom: '1.5rem' }}>
                  Fill in the form and your enquiry will open on WhatsApp — ready to send to the RRC Law Academy team.
                </p>
                <EnquiryForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}