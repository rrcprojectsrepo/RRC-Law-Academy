import { Link } from 'react-router-dom';
import SectionHeading from '../SectionHeading/SectionHeading';
import Reveal from '../Reveal/Reveal';
import FacultyCard from '../FacultyCard/FacultyCard';
import { facultyMembers } from '../../data/faculty';

export default function Faculty({ limit = 4 }) {
  const visible = facultyMembers.slice(0, limit);

  return (
    <section className="section" aria-labelledby="faculty-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Academy Faculty"
          title="Meet Our Faculty"
          subtitle="Experienced guidance across the core areas of law entrance preparation. Official faculty profiles will be published here."
          center
        />

        <div className="faculty-grid">
          {visible.map((member, index) => (
            <Reveal delay={index * 80} key={member.id}>
              <FacultyCard member={member} />
            </Reveal>
          ))}
        </div>

        <div className="faculty-section-cta">
          <Link to="/faculty" className="btn btn--primary">
            View All Faculty
          </Link>
        </div>
      </div>
    </section>
  );
}