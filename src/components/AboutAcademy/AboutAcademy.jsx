import { Link } from 'react-router-dom';
import { FaLandmark } from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';
import SectionHeading from '../SectionHeading/SectionHeading';
import Reveal from '../Reveal/Reveal';
import { ACADEMY } from '../../data/academy';

export default function AboutAcademy() {
  return (
    <section className="section" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-media">
            <figure>
              <img
                src="/images/about-academy.svg"
                alt="Illustration of a law academy classroom with students learning constitutional law"
                width="560"
                height="480"
                loading="lazy"
              />
            </figure>
            <div className="about-experience-card">
              <FaLandmark aria-hidden="true" />
              <span>
                <strong>Purpose-Driven</strong>
                <small>Preparation for law entrance examinations</small>
              </span>
            </div>
          </Reveal>

          <Reveal delay={120} className="about-content">
            <div id="about-heading">
              <SectionHeading eyebrow="Who We Are" title={ACADEMY.about.heading} />
            </div>
            <p className="about-lead">{ACADEMY.about.lead}</p>
            {ACADEMY.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}

            <ul className="about-points">
              {ACADEMY.about.keyPoints.map((point) => (
                <li className="about-point" key={point.title}>
                  <FaCheckCircle aria-hidden="true" />
                  <div>
                    <strong>{point.title}</strong>
                    <p>{point.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link to="/about" className="btn btn--primary">
              Know More About Us
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}