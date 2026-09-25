import { Link } from 'react-router-dom';
import { FaCircleCheck, FaFilePen, FaGraduationCap, FaUsers } from 'react-icons/fa6';
import { ACADEMY } from '../../data/academy';

const BADGE_ICONS = [FaGraduationCap, FaCircleCheck, FaFilePen, FaUsers];

export default function Hero() {
  return (
    <section className="hero" aria-label="Welcome to RRC Law Academy">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-eyebrow">{ACADEMY.eyebrow}</span>
          <h1>
            {ACADEMY.heroHeading.line1}
            <br />
            {ACADEMY.heroHeading.line2}
            <br />
            <span className="highlight">{ACADEMY.heroHeading.line3}</span>
          </h1>
          <p className="hero-sub">{ACADEMY.heroText}</p>

          <div className="hero-ctas">
            <Link to="/courses" className="btn btn--accent btn--lg">
              Explore Our Programmes
            </Link>
            <Link to="/contact" className="btn btn--outline-light btn--lg">
              Book Free Counselling
            </Link>
          </div>

          <div className="hero-badges">
            {ACADEMY.heroBadges.map((badge, index) => {
              const Icon = BADGE_ICONS[index % BADGE_ICONS.length];
              return (
                <span className="hero-chip" key={badge}>
                  <Icon aria-hidden="true" />
                  {badge}
                </span>
              );
            })}
          </div>
        </div>

        <div className="hero-media">
          <figure className="hero-media-figure">
            <img
              src="/images/hero-illustration.svg"
              alt="Illustration of legal scales, law books and a gavel representing law entrance preparation at RRC Law Academy"
              width="560"
              height="480"
            />
          </figure>
          <div className="hero-float hero-float--top">
            <FaGraduationCap aria-hidden="true" />
            <span>
              UG &amp; PG Programmes
              <small>CLAT · AILET</small>
            </span>
          </div>
          <div className="hero-float hero-float--bottom">
            <FaUsers aria-hidden="true" />
            <span>
              Structured Mentoring
              <small>Guidance at every step</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}