import { useState } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import Reveal from '../Reveal/Reveal';
import CourseCard from '../CourseCard/CourseCard';
import { courses } from '../../data/courses';

const CATEGORIES = [
  { label: 'All', value: 'ALL' },
  { label: 'Undergraduate', value: 'UG' },
  { label: 'Postgraduate', value: 'PG' },
];

export default function Programmes({ compact = false }) {
  const [active, setActive] = useState('ALL');

  const filtered =
    active === 'ALL'
      ? courses
      : courses.filter((course) => course.category === active);

  return (
    <section className="section" id="programmes" aria-labelledby="programmes-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Courses & Programmes"
          title="Our Programmes"
          subtitle="Focused preparation programmes for undergraduate and postgraduate law entrance examinations."
          center
        />

        {!compact && (
          <div className="programme-cats" aria-label="Filter programmes by level">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                type="button"
                aria-pressed={active === cat.value}
                className={`cat-pill ${active === cat.value ? 'active' : ''}`}
                onClick={() => setActive(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        <div className="programmes-grid">
          {filtered.map((course, index) => (
            <Reveal delay={index * 80} key={course.slug}>
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}