import { FaLandmark } from 'react-icons/fa6';
import SectionHeading from '../SectionHeading/SectionHeading';
import Reveal from '../Reveal/Reveal';
import { ACADEMY } from '../../data/academy';
import { highlightIcons } from '../../utils/icons';

export default function WhyChooseRRC() {
  return (
    <section className="section section--tint" aria-labelledby="why-heading">
      <div className="container">
        <SectionHeading
          eyebrow="The RRC Difference"
          title="Why Choose RRC Law Academy?"
          subtitle="A complete, disciplined preparation ecosystem — not just classes."
          center
        />

        <div className="why-grid">
          {ACADEMY.whyChoose.map((item, index) => {
            const Icon = highlightIcons[item.icon] || FaLandmark;
            return (
              <Reveal delay={index * 80} key={item.title}>
                <article className="why-card">
                  <span className="why-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}