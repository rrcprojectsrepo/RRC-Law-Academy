import { Link } from 'react-router-dom';
import { FaArrowRight, FaEye, FaFlag, FaMapLocationDot } from 'react-icons/fa6';
import PageHero from '../components/PageHero/PageHero';
import AboutAcademy from '../components/AboutAcademy/AboutAcademy';
import LearningApproach from '../components/LearningApproach/LearningApproach';
import WhyChooseRRC from '../components/WhyChooseRRC/WhyChooseRRC';
import CTA from '../components/CTA/CTA';
import Reveal from '../components/Reveal/Reveal';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import { ACADEMY } from '../data/academy';
import { usePageMeta } from '../utils/seo';

export default function About() {
  usePageMeta(
    'About Us | RRC Law Academy',
    'Learn about RRC Law Academy — a professional law entrance preparation academy with structured programmes for CLAT UG, AILET UG, CLAT PG and AILET PG.'
  );

  return (
    <>
      <PageHero
        title="About RRC Law Academy"
        subtitle="A professional law entrance preparation and legal education academy focused on structured, student-first preparation for major law school entrances."
        crumbs={[{ label: 'About' }]}
      />

      <AboutAcademy />

      <section className="section section--tint" aria-labelledby="vm-heading">
        <div className="container">
          <SectionHeading eyebrow="Who We Are" title="Vision & Mission" center />
          <div className="course-cols">
            <Reveal>
              <div className="course-info-panel">
                <h3>
                  <FaEye aria-hidden="true" />
                  {ACADEMY.vision.heading}
                </h3>
                <p>{ACADEMY.vision.text}</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="course-info-panel">
                <h3>
                  <FaFlag aria-hidden="true" />
                  {ACADEMY.mission.heading}
                </h3>
                <p>{ACADEMY.mission.text}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <LearningApproach />

      <section className="section" aria-labelledby="student-support-heading">
        <div className="container">
          <Reveal>
            <div className="course-info-panel">
              <h3>
                <FaMapLocationDot aria-hidden="true" />
                Student Support at RRC Law Academy
              </h3>
              <p>
                Students are supported beyond the classroom through doubt-clearance
                sessions, one-to-one mentoring checkpoints, structured test feedback
                and continuous guidance on study planning. Academic counselling with
                the academy team helps students choose the right programme and stay
                on track through the preparation cycle.
              </p>
              <p className="mt-2">
                <Link to="/contact" className="btn btn--primary">
                  Book a Counselling Session
                  <FaArrowRight aria-hidden="true" />
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <WhyChooseRRC />
      <CTA />
    </>
  );
}