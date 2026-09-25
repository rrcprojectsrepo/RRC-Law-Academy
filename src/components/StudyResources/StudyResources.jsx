import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import SectionHeading from '../SectionHeading/SectionHeading';
import Reveal from '../Reveal/Reveal';
import { resourceCategories } from '../../data/resources';
import { resourceIcons } from '../../utils/icons';

export default function StudyResources() {
  return (
    <section className="section" aria-labelledby="resources-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Learning Material"
          title="Study Resources"
          subtitle="Everything you need for systematic preparation — organised by area."
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
                  <Link to="/resources" className="btn btn--outline">
                    Explore Resources
                    <FaArrowRight aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}