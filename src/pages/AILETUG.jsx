import CourseLayout from '../components/CourseLayout/CourseLayout';
import { getCourse } from '../data/courses';

export default function AILETUG() {
  const course = getCourse('ailet-ug');
  return (
    <CourseLayout
      course={course}
      extra={
        <div className="course-info-panel">
          <h3>Preparing for AILET UG</h3>
          <p>
            AILET UG rewards precision over volume — clean language, sharp
            reasoning and consistent general knowledge awareness. Many of our
            students prepare for AILET UG alongside CLAT UG; the academy can help
            you structure a combined plan when both examinations are on your list.
          </p>
        </div>
      }
    />
  );
}