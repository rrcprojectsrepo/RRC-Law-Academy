import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaBookOpen,
  FaClipboardCheck,
  FaFilePen,
  FaUsers,
} from 'react-icons/fa6';
import FAQ from '../FAQ/FAQ';
import CTA from '../CTA/CTA';
import { courses } from '../../data/courses';
import { usePageMeta } from '../../utils/seo';

function CourseHero({ course, allCourses }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/courses">Courses</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{course.name}</span>
        </nav>

        <span className={`badge ${course.category === 'UG' ? 'badge--ug' : 'badge--pg'}`}>
          {course.category === 'UG' ? 'Undergraduate' : 'Postgraduate'} Programme
        </span>

        <h1>{course.hero.heading}</h1>
        <p className="page-hero-sub">{course.hero.text}</p>

        <div className="page-hero-tags">
          {course.keyFocus.map((focus) => (
            <span className={`badge ${course.category === 'UG' ? 'badge--ug' : 'badge--pg'}`} key={focus}>
              {focus}
            </span>
          ))}
        </div>

        <div className="page-hero-ctas">
          <Link to="/contact" className="btn btn--accent btn--lg">
            Enquire Now
            <FaArrowRight aria-hidden="true" />
          </Link>
          <Link to="/contact" className="btn btn--outline-light btn--lg">
            Book Free Counselling
          </Link>
        </div>

        <div className="course-swap" role="group" aria-label="Switch course page">
          {allCourses.map((c) => (
            <Link
              key={c.slug}
              to={`/courses/${c.slug}`}
              className={c.slug === course.slug ? 'active-swap' : ''}
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CourseLayout({ course, extra = null }) {
  usePageMeta(course?.meta?.title, course?.meta?.description);

  if (!course) return null;

  return (
    <>
      <CourseHero course={course} allCourses={courses} />

      <div className="section">
        <div className="container">
          <div className="course-body">
            {/* Programme Overview */}
            <section className="course-section" aria-labelledby="overview">
              <h2 id="overview">Programme Overview</h2>
              {course.overview.map((text, index) => (
                <p key={text.slice(0, 24) + index}>{text}</p>
              ))}
            </section>

            {/* Who Can Join + Eligibility */}
            <section className="course-section" aria-labelledby="who-can-join">
              <h2 id="who-can-join">Who Can Join</h2>
              <ul>
                {course.whoCanJoin.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h2 style={{ marginTop: '1.75rem' }}>Eligibility</h2>
              <ul>
                {course.eligibility.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Exam Pattern */}
            <section className="course-section" aria-labelledby="exam-pattern">
              <h2 id="exam-pattern">Exam Pattern — {course.name}</h2>
              <div className="pattern-panel">
                <p className="pattern-note">{course.examPattern.note}</p>
                <div className="pattern-list">
                  {course.examPattern.sections.map((section, index) => (
                    <div className="pattern-row" key={section.title}>
                      <span className="pattern-num">{index + 1}</span>
                      <div>
                        <strong>{section.title}</strong>
                        <p>{section.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Core Areas */}
            <section className="course-section" aria-labelledby="core-areas">
              <h2 id="core-areas">Core Areas</h2>
              <div className="course-cols">
                {course.coreAreas.map((area) => (
                  <div className="course-info-panel" key={area.title}>
                    <h3>
                      <FaBookOpen aria-hidden="true" />
                      {area.title}
                    </h3>
                    <p>{area.text}</p>
                  </div>
                ))}
              </div>
            </section>
{/* Preparation Strategy */}
            <section className="course-section" aria-labelledby="strategy">
              <h2 id="strategy">Preparation Strategy</h2>
              <div className="course-cols">
                {course.strategy.map((step) => (
                  <div className="course-info-panel" key={step.title}>
                    <h3>
                      <FaClipboardCheck aria-hidden="true" />
                      {step.title}
                    </h3>
                    <p>{step.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Learning Methodology */}
            <section className="course-section" aria-labelledby="learning-method">
              <h2 id="learning-method">Learning Methodology</h2>
              <ul>
                {course.learningMethod.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Mock Tests + Study Material */}
            <section className="course-section" aria-labelledby="mock-material">
              <h2 id="mock-material">Mock Tests &amp; Study Material</h2>
              <div className="course-cols">
                <div className="course-info-panel">
                  <h3>
                    <FaFilePen aria-hidden="true" />
                    Mock &amp; Sectional Tests
                  </h3>
                  <ul>
                    {course.mocks.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="course-info-panel">
                  <h3>
                    <FaBookOpen aria-hidden="true" />
                    Study Material
                  </h3>
                  <ul>
                    {course.studyMaterial.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Faculty */}
            <section className="course-section" aria-labelledby="faculty-note">
              <h2 id="faculty-note">Faculty</h2>
              <div className="course-info-panel">
                <h3>
                  <FaUsers aria-hidden="true" />
                  Programme Faculty
                </h3>
                <p>
                  Faculty profiles for the {course.name} programme will be published
                  here once official details are confirmed. All programme faculty
                  guidance is managed by the RRC Law Academy team.
                </p>
              </div>
            </section>

            {/* Important Information */}
            <section className="course-section" aria-labelledby="important-info">
              <h2 id="important-info">Important Information</h2>
              <ul>
                {course.importantInfo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Course FAQs */}
            <section className="course-section" aria-labelledby="course-faq">
              <h2 id="course-faq">Frequently Asked Questions</h2>
              <FAQ items={course.faqs} bare />
            </section>

            {extra ? <section className="course-section">{extra}</section> : null}
          </div>
        </div>
      </div>

      <CTA />
    </>
  );
}