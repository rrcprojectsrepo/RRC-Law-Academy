import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import SectionHeading from '../SectionHeading/SectionHeading';
import Reveal from '../Reveal/Reveal';
import { resourcePointIcons } from './icons-inline';

const POINTS = [
  {
    title: 'Current Affairs',
    text: 'Curated national and international developments, updated consistently.',
    icon: 'current',
  },
  {
    title: 'General Knowledge',
    text: 'Static GK essentials prepared for entrance examination question styles.',
    icon: 'gk',
  },
  {
    title: 'Legal Awareness',
    text: 'Everyday legal principles, concepts and landmark judgments in simple language.',
    icon: 'legal',
  },
  {
    title: 'News Analysis',
    text: 'Guided analysis of news events with legal and exam relevance.',
    icon: 'news',
  },
  {
    title: 'Revision Support',
    text: 'Periodic current affairs and legal awareness revision compilations.',
    icon: 'revision',
  },
  {
    title: 'Practice Questions',
    text: 'GK and legal awareness practice sets with solutions for accuracy building.',
    icon: 'practice',
  },
];

export default function CurrentAffairs() {
  return (
    <section className="section section--tint" aria-labelledby="current-affairs-heading">
      <div className="container">
        <div className="current-grid">
          <Reveal className="current-media">
            <figure>
              <img
                src="/images/current-affairs.svg"
                alt="Illustration of latest current affairs and legal awareness newspapers at RRC Law Academy"
                width="560"
                height="480"
                loading="lazy"
              />
            </figure>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Stay Updated"
              title="Current Affairs & Legal Awareness"
              subtitle="Preparation for every general knowledge and legal awareness question — supported through the year."
            />

            <div className="current-points">
              {POINTS.map((point) => {
                const Icon = resourcePointIcons[point.icon];
                return (
                  <div className="current-point" key={point.title}>
                    <span className="current-point-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <div>
                      <strong>{point.title}</strong>
                      <p>{point.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link to="/resources" className="btn btn--primary">
              Access Current Affairs Resources
              <FaArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}