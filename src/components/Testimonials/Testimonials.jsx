import { FaQuoteLeft } from 'react-icons/fa6';
import SectionHeading from '../SectionHeading/SectionHeading';
import Reveal from '../Reveal/Reveal';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  return (
    <section className="section" aria-labelledby="testimonials-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Student Voices"
          title="Student Experiences"
          subtitle="What learners say about their preparation journey with RRC Law Academy."
          center
        />

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <Reveal delay={index * 90} key={item.id}>
              <article className="testimonial-card">
                <FaQuoteLeft className="testimonial-quote" aria-hidden="true" />
                <p className="testimonial-text">{item.text}</p>
                <div className="testimonial-person">
                  <img
                    src={item.photo}
                    alt={`${item.name} profile placeholder`}
                    width="48"
                    height="48"
                    loading="lazy"
                  />
                  <div>
                    <strong>{item.name}</strong>
                    <span>
                      {item.programme} · {item.year}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="testimonial-note">
          Verified student testimonials will be published here as they are collected.
        </p>
      </div>
    </section>
  );
}