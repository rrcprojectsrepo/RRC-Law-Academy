import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import SectionHeading from '../SectionHeading/SectionHeading';
import { faqItems } from '../../data/faq';

/**
 * Interactive FAQ accordion. Consumes FAQ items from data/faq.js.
 * Pass `items` to override (used by course pages).
 * Pass `bare` to render the accordion only (no section/heading wrapper).
 */
export default function FAQ({ items = faqItems, heading = true, bare = false }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (bare) {
    return (
      <div className="faq-wrap">
        <div className="faq-list">
          {renderItems(items, openIndex, setOpenIndex)}
        </div>
      </div>
    );
  }

  return (
    <section className="section" id="faq" aria-labelledby="faq-heading">
      <div className="container">
        {heading && (
          <SectionHeading
            eyebrow="Have Questions?"
            title="Frequently Asked Questions"
            subtitle="Answers to the questions students ask us most about programmes and preparation."
            center
          />
        )}
        <div className="faq-wrap">
          <div className="faq-list">{renderItems(items, openIndex, setOpenIndex)}</div>
        </div>
      </div>
    </section>
  );
}

function renderItems(items, openIndex, setOpenIndex) {
  return items.map((item, index) => {
    const isOpen = openIndex === index;
    return (
      <div className={`faq-item ${isOpen ? 'open' : ''}`} key={item.q}>
        <h3>
          <button
            type="button"
            className="faq-q"
            aria-expanded={isOpen}
            aria-controls={`faq-panel-${index}`}
            id={`faq-button-${index}`}
            onClick={() => setOpenIndex(isOpen ? null : index)}
          >
            {item.q}
            <span className="faq-icon" aria-hidden="true">
              <FaPlus />
            </span>
          </button>
        </h3>
        <div
          className="faq-a"
          id={`faq-panel-${index}`}
          role="region"
          aria-labelledby={`faq-button-${index}`}
        >
          <div className="faq-a-inner">
            <p>{item.a}</p>
          </div>
        </div>
      </div>
    );
  });
}