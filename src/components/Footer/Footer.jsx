import { Link } from 'react-router-dom';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';
import Logo from '../Logo/Logo';
import { ACADEMY } from '../../data/academy';
import { courses } from '../../data/courses';
import { openWhatsAppChat } from '../../utils/whatsapp';

const QUICK_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Our Approach', to: '/approach' },
  { label: 'Faculty', to: '/faculty' },
  { label: 'Results', to: '/results' },
  { label: 'Resources', to: '/resources' },
  { label: 'FAQs', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo to="/" variant="footer" />
            <p>
              A professional law entrance preparation academy offering structured
              programmes for undergraduate and postgraduate law entrance
              examinations.
            </p>
          </div>

          <div>
            <h4>Courses</h4>
            <ul className="footer-links">
              {courses.map((course) => (
                <li key={course.slug}>
                  <Link to={`/courses/${course.slug}`}>{course.name}</Link>
                </li>
              ))}
              <li>
                <Link to="/courses">All Programmes</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <FaPhoneAlt aria-hidden="true" />
                <span>{ACADEMY.contact.phone}</span>
              </li>
              <li className="footer-contact-item">
                <FaWhatsapp aria-hidden="true" />
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => openWhatsAppChat()}
                >
                  {ACADEMY.contact.whatsapp}
                </button>
              </li>
              <li className="footer-contact-item">
                <FaEnvelope aria-hidden="true" />
                <span>{ACADEMY.contact.email}</span>
              </li>
              <li className="footer-contact-item">
                <FaMapMarkerAlt aria-hidden="true" />
                <span>{ACADEMY.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} RRC Law Academy. All Rights Reserved.</p>
          <p>
            <Link to="/contact">Enquire Now</Link>
            {' · '}
            <Link to="/faq">FAQs</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}