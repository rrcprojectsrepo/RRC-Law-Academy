import { Link } from 'react-router-dom';
import { FaTrophy } from 'react-icons/fa6';
import SectionHeading from '../SectionHeading/SectionHeading';
import Reveal from '../Reveal/Reveal';
import { results } from '../../data/results';

export default function Results() {
  return (
    <section className="section section--tint" aria-labelledby="results-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Achievements"
          title="Results & Achievements"
          subtitle="Student successes across law entrance examinations."
          center
        />

        <Reveal>
          <div className="results-panel">
            <span className="results-panel-icon">
              <FaTrophy aria-hidden="true" />
            </span>
            <h3>Results Coming Soon</h3>
            <p>{results.message}</p>
          </div>
        </Reveal>

        <div className="results-grid">
          {results.placeholders.map((item, index) => (
            <Reveal delay={index * 90} key={item.title}>
              <article className="result-placeholder-card">
                <span className="badge badge--soon">Coming Soon</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="faculty-section-cta">
          <Link to="/results" className="btn btn--outline">
            View Results Page
          </Link>
        </div>
      </div>
    </section>
  );
}