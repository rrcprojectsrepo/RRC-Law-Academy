import { FaLandmark } from 'react-icons/fa6';
import SectionHeading from '../SectionHeading/SectionHeading';
import Reveal from '../Reveal/Reveal';
import { ACADEMY } from '../../data/academy';
import { highlightIcons } from '../../utils/icons';

export default function AcademyHighlights() {
  return (
    <section className="section section--tint" aria-labelledby="highlights-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Why Students Choose RRC"
          title="Academy Highlights"
          subtitle="Everything a law entrance aspirant needs — structured, supported and tracked from day one."
          center
        />
        <div className="highlights-grid">
          {ACADEMY.highlights.map((item, index) => {
            const Icon = highlightIcons[item.icon] || FaLandmark;
            return (
              <Reveal delay={index * 80} key={item.title}>
                <article className="highlight-card">
                  <span className="highlight-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}