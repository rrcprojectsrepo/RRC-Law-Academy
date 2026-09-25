import { Link } from 'react-router-dom';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa6';
import PageHero from '../components/PageHero/PageHero';
import LearningApproach from '../components/LearningApproach/LearningApproach';
import WhyChooseRRC from '../components/WhyChooseRRC/WhyChooseRRC';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import Reveal from '../components/Reveal/Reveal';
import { usePageMeta } from '../utils/seo';
import { openWhatsAppChat } from '../utils/whatsapp';

export default function Approach() {
  usePageMeta(
    'Our Approach | RRC Law Academy',
    'Discover the RRC Law Academy learning approach — a structured six-step pathway from understanding to examination readiness.'
  );

  return (
    <>
      <PageHero
        title="Our Approach"
        subtitle="A structured pathway from learning to examination readiness — Understand, Learn, Practise, Test, Analyse and Improve."
        crumbs={[{ label: 'Our Approach' }]}
      />

      <LearningApproach />

      <WhyChooseRRC />

      <section className="section" aria-labelledby="personalised-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Beyond the Classroom"
            title="Personalised, At Every Step"
            subtitle="Every learner progresses differently. RRC Law Academy tracks each student's journey to keep preparation purposeful."
            center
          />
          <div className="course-cols">
            <Reveal>
              <div className="course-info-panel">
                <h3>
                  <FaArrowRight aria-hidden="true" />
                  Structured Study Plans
                </h3>
                <p>
                  Clear, stage-wise plans convert the syllabus into weekly and
                  monthly goals, so students always know exactly what to study.
                </p>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="course-info-panel">
                <h3>
                  <FaArrowRight aria-hidden="true" />
                  Feedback &amp; Mentoring
                </h3>
                <p>
                  Test results are reviewed with mentors who help students fix
                  weak areas and sharpen examination strategy continuously.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="faculty-section-cta">
            <p style={{ marginBottom: '1.25rem' }}>
              <a
                href="#!"
                onClick={(e) => {
                  e.preventDefault();
                  openWhatsAppChat();
                }}
                className="btn btn--whatsapp btn--lg"
              >
                <FaWhatsapp aria-hidden="true" />
                Ask Us About the Approach
              </a>
            </p>
            <Link to="/contact" className="btn btn--outline">
              Talk to a Counsellor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}