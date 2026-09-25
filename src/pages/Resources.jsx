import PageHero from '../components/PageHero/PageHero';
import Reveal from '../components/Reveal/Reveal';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import CTA from '../components/CTA/CTA';
import { resourceCategories } from '../data/resources';
import { resourceIcons } from '../utils/icons';
import { usePageMeta } from '../utils/seo';

const SECTIONS = [
  { title: 'Study Materials', note: 'Concept notes, revision material and exam-focused summaries will be published here.' },
  { title: 'Current Affairs', note: 'Curated current affairs compilations will be available for regular updates.' },
  { title: 'Legal Awareness', note: 'Legal awareness material and landmark case summaries will be added shortly.' },
  { title: 'Practice Questions', note: 'Topic-wise practice questions with solutions are being prepared.' },
  { title: 'Mock Tests', note: 'Sectional and full-length mock test series will be available here.' },
  { title: 'Revision Resources', note: 'Quick-revision sheets and final-phase resources are under preparation.' },
];

export default function ResourcesPage() {
  usePageMeta(
    'Study Resources | RRC Law Academy',
    'Study resources for law entrance preparation — concept notes, practice questions, mock tests, current affairs and legal awareness material from RRC Law Academy.'
  );

  return (
    <>
      <PageHero
        title="Study Resources"
        subtitle="Central hub for law entrance preparation material — organised by exam area and updated by the academy team."
        crumbs={[{ label: 'Resources' }]}
      />

      <section className="section" aria-labelledby="resource-categories-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Learning Material"
            title="Resource Categories"
            subtitle="Curated resources for every part of your preparation."
            center
          />

          <div className="resources-grid">
            {resourceCategories.map((category, index) => {
              const Icon = resourceIcons[category.icon];
              return (
                <Reveal delay={index * 80} key={category.id}>
                  <article className="resource-card">
                    <span className="resource-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="badge badge--soon">Coming Soon</span>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="resource-library-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Library"
            title="Coming Soon"
            subtitle="These resource sections are being prepared by the academy and will be activated shortly."
            center
          />
          <div className="course-cols">
            {SECTIONS.map((section, index) => (
              <Reveal delay={index * 70} key={section.title}>
                <div className="course-info-panel">
                  <span className="badge badge--soon">Coming Soon</span>
                  <h3 style={{ marginTop: '0.75rem' }}>{section.title}</h3>
                  <p>{section.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}