import { useState } from 'react';
import PageHero from '../components/PageHero/PageHero';
import FacultyCard from '../components/FacultyCard/FacultyCard';
import Reveal from '../components/Reveal/Reveal';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import CTA from '../components/CTA/CTA';
import { facultyMembers, facultyFilters } from '../data/faculty';
import { usePageMeta } from '../utils/seo';

const matchesFilter = (member, filter) => {
  if (filter === 'All') return true;
  if (filter === 'UG Preparation') return member.tier === 'UG';
  if (filter === 'PG Preparation') return member.tier === 'PG';
  return member.category === filter;
};

export default function FacultyPage() {
  usePageMeta(
    'Faculty | RRC Law Academy',
    'Meet the RRC Law Academy faculty guiding students across law entrance preparation — official teacher profiles will be published here.'
  );

  const [filter, setFilter] = useState('All');
  const visible = facultyMembers.filter((member) => matchesFilter(member, filter));

  return (
    <>
      <PageHero
        title="Meet Our Faculty"
        subtitle="Experienced guidance across the core areas of law entrance preparation. Official faculty names, qualifications and profiles will be published here as soon as they are confirmed."
        crumbs={[{ label: 'Faculty' }]}
      />

      <section className="section" aria-label="Faculty listing">
        <div className="container">
          <SectionHeading
            eyebrow="Academy Faculty"
            title="Faculty Directory"
            subtitle="Use the filters to browse faculty by their teaching area."
            center
          />

          <div className="programme-cats" style={{ justifyContent: 'center' }}>
            {facultyFilters.map((item) => (
              <button
                key={item}
                type="button"
                className={`cat-pill ${filter === item ? 'active' : ''}`}
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="faculty-grid">
            {visible.map((member, index) => (
              <Reveal delay={index * 70} key={member.id}>
                <FacultyCard member={member} />
              </Reveal>
            ))}
          </div>

          <p className="testimonial-note">
            Faculty profiles are placeholders until official details are supplied by the academy.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}