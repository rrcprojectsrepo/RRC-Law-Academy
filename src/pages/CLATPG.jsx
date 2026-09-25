import CourseLayout from '../components/CourseLayout/CourseLayout';
import { getCourse } from '../data/courses';

export default function CLATPG() {
  const course = getCourse('clat-pg');
  return (
    <CourseLayout
      course={course}
      extra={
        <div className="course-info-panel">
          <h3>A Word on CLAT PG</h3>
          <p>
            PG law entrance preparation is different from UG preparation — it
            rewards consolidated subject knowledge and mature legal reasoning
            rather than test-taking tricks. CLAT PG preparation at RRC is built
            around deep revision of core law subjects and disciplined mock cycles.
          </p>
        </div>
      }
    />
  );
}