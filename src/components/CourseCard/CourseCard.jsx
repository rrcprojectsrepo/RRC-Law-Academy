import { Link } from 'react-router-dom';
import { FaArrowRight, FaGraduationCap, FaWhatsapp } from 'react-icons/fa6';
import { openWhatsAppChat } from '../../utils/whatsapp';

/**
 * Reusable course card. Consumes a course object from data/courses.js.
 */
export default function CourseCard({ course }) {
  return (
    <article className="course-card" aria-label={`${course.name} programme`}>
      <div className="course-card-top">
        <span className="course-icon">
          <FaGraduationCap aria-hidden="true" />
        </span>
        <span className={`badge ${course.category === 'UG' ? 'badge--ug' : 'badge--pg'}`}>
          {course.category === 'UG' ? 'Undergraduate' : 'Postgraduate'}
        </span>
      </div>

      <h3>{course.name}</h3>
      <p className="course-tagline">{course.tagline}</p>
      <p className="course-desc">{course.shortDescription}</p>

      <p className="course-focus-title">Key Focus</p>
      <div className="course-focus">
        {course.keyFocus.map((focus) => (
          <span key={focus}>{focus}</span>
        ))}
      </div>

      <div className="course-card-actions">
        <Link to={`/courses/${course.slug}`} className="btn btn--primary">
          View Programme
          <FaArrowRight aria-hidden="true" />
        </Link>
        <button
          type="button"
          className="btn btn--outline"
          onClick={() => openWhatsAppChat(`Hello RRC Law Academy, I would like to enquire about the ${course.name} programme.`)}
        >
          <FaWhatsapp aria-hidden="true" />
          Enquire
        </button>
      </div>
    </article>
  );
}