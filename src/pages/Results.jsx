import { FaTrophy } from 'react-icons/fa6';
import PageHero from '../components/PageHero/PageHero';
import Reveal from '../components/Reveal/Reveal';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import Testimonials from '../components/Testimonials/Testimonials';
import CTA from '../components/CTA/CTA';
import { results } from '../data/results';
import { usePageMeta } from '../utils/seo';

export default function ResultsPage() {
  usePageMeta(
    'Results & Achievements | RRC Law Academy',
    'Student results and achievements from RRC Law Academy — verified student outcomes will be published here as they are officially shared.'
  );

  return (
    <>
      <PageHero
        title="Results & Achievements"
        subtitle="Student achievements and results can be showcased here. All entries will be published only after verification with the academy."
        crumbs={[{ label: 'Results' }]}
      />

      <section className="section" aria-labelledby="results-student">
        <div className="container">
          <SectionHeading
            eyebrow="Verified Outcomes"
            title="Student Results"
            subtitle={results.message}
            center
          />

          <Reveal>
            <div className="results-panel">
              <span className="results-panel-icon">
                <FaTrophy aria-hidden="true" />
              </span>
              <h3>Results Wall — Coming Soon</h3>
              <p>
                Verified student results and achievements will be added here with
                student names, examination, year and achievement details as they
                are officially confirmed by the academy.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="programme-results">
        <div className="container">
          <SectionHeading
            eyebrow="By Programme & Year"
            title="Programme-wise & Year-wise Results"
            subtitle="Result highlights will be organised by programme and examination year for easy reference."
            center
          />
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
        </div>
      </section>

      <Testimonials />
      <CTA />
    </>
  );
}