import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheck } from 'react-icons/fa6';
import SectionHeading from '../SectionHeading/SectionHeading';
import Reveal from '../Reveal/Reveal';

const FEATURES = [
  { text: 'Complete CLAT UG preparation pathway' },
  { text: 'Legal reasoning, English, reasoning & GK support' },
  { text: 'Sectional tests and full-length mock tests' },
  { text: 'Current affairs and legal awareness material' },
  { text: 'Personal mentoring and doubt-clearance' },
  { text: 'Study support and structured revision' },
];

/**
 * Featured current programme — CLAT UG 2027.
 * Clearly labelled as one programme within the RRC Law Academy ecosystem.
 */
export default function FeaturedProgramme() {
  return (
    <section className="section" aria-labelledby="featured-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Highlighted Programme"
          title="Featured Programme"
          subtitle="A current offering from RRC Law Academy."
          center
        />

        <Reveal>
          <div className="featured-band">
            <div className="featured-content">
              <span className="featured-label">Featured Programme</span>
              <h2>CLAT UG 2027</h2>
              <p>
                CLAT UG is one of the academy's flagship undergraduate programmes.
                It provides a complete preparation journey — from concept clarity to
                full-length mock tests — for students aiming at undergraduate law
                admissions through the Common Law Admission Test.
              </p>

              <ul className="featured-features">
                {FEATURES.map((feature) => (
                  <li key={feature.text}>
                    <FaCheck aria-hidden="true" />
                    {feature.text}
                  </li>
                ))}
              </ul>

              <div className="featured-ctas">
                <Link to="/courses/clat-ug" className="btn btn--accent btn--lg">
                  Explore CLAT UG
                  <FaArrowRight aria-hidden="true" />
                </Link>
                <Link to="/contact" className="btn btn--outline-light btn--lg">
                  Enquire Now
                </Link>
              </div>
            </div>

            <div className="featured-media">
              <figure>
                <img
                  src="/images/featured-clat.svg"
                  alt="CLAT UG 2027 featured programme highlighted at RRC Law Academy"
                  width="460"
                  height="320"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </figure>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}