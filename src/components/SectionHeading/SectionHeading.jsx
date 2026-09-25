/**
 * Reusable section heading (eyebrow + title + subtitle).
 */
export default function SectionHeading({ eyebrow, title, subtitle, center = false, className = '' }) {
  return (
    <div className={`section-head ${center ? 'section-head--center' : ''} ${className}`.trim()}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {subtitle ? <p className="section-sub">{subtitle}</p> : null}
    </div>
  );
}