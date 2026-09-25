import CourseLayout from '../components/CourseLayout/CourseLayout';
import { getCourse } from '../data/courses';

export default function CLATUG() {
  const course = getCourse('clat-ug');
  return (
    <CourseLayout
      course={course}
      extra={
        <div className="course-info-panel">
          <h3>A Word on CLAT UG</h3>
          <p>
            CLAT UG is a single door to most National Law Universities' five-year
            integrated LL.B. programmes. Success depends on disciplined daily
            reading, consistent practice and the ability to stay calm under timed
            conditions — exactly what the RRC CLAT UG pathway is designed to build.
          </p>
        </div>
      }
    />
  );
}