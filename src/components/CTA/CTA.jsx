import { Link } from 'react-router-dom';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa6';
import Reveal from '../Reveal/Reveal';

export default function CTA() {
  return (
    <section className="section" aria-label="Enquiry call to action">
      <div className="container">
        <Reveal>
          <div className="cta-band">
            <div className="cta-band-inner">
              <h2>Begin Your Preparation Journey</h2>
              <p>
                Whether you are starting fresh or refining your strategy, RRC Law
                Academy is here to guide you towards law school with structured,
                student-focused preparation.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn--accent btn--lg">
                  Enquire Now
                  <FaArrowRight aria-hidden="true" />
                </Link>
                <Link to="/courses" className="btn btn--outline-light btn--lg">
                  Explore Our Programmes
                </Link>
              </div>
              <p className="form-hint" style={{ marginTop: '1.25rem', color: '#c3d3e9' }}>
                <FaWhatsapp aria-hidden="true" style={{ display: 'inline-block', marginRight: '0.4rem' }} />
                Prefer WhatsApp? Use the chat button or the enquiry form.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}