import SectionHeading from '../SectionHeading/SectionHeading';
import Reveal from '../Reveal/Reveal';
import { ACADEMY } from '../../data/academy';

export default function LearningApproach() {
  return (
    <section className="section section--dark" id="approach" aria-labelledby="approach-heading">
      <div className="container">
        <SectionHeading
          eyebrow="How We Prepare"
          title="Our Approach"
          subtitle="A structured pathway from learning to examination readiness."
          center
        />

        <div className="approach-grid">
          {ACADEMY.approachSteps.map((step, index) => (
            <Reveal delay={index * 90} key={step.step}>
              <article className="approach-step">
                <span className="approach-num">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}