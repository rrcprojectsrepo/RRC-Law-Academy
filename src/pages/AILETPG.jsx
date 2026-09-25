import CourseLayout from '../components/CourseLayout/CourseLayout';
import { getCourse } from '../data/courses';

export default function AILETPG() {
  const course = getCourse('ailet-pg');
  return (
    <CourseLayout
      course={course}
      extra={
        <div className="course-info-panel">
          <h3>Preparing for AILET PG</h3>
          <p>
            AILET PG rewards applied legal knowledge answered at speed. Building a
            weekly legal-reading habit — judgments, editorials and legal news — is
            a core part of the RRC AILET PG routine, alongside structured revision
            and full-length practice.
          </p>
        </div>
      }
    />
  );
}