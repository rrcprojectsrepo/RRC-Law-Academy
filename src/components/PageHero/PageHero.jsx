import { Link } from 'react-router-dom';

/**
 * Inner-page hero with breadcrumbs, eyebrow, title and optional CTAs.
 */
export default function PageHero({ title, subtitle, crumbs = [], children, badge }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        {crumbs.length > 0 && (
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {crumbs.map((crumb) => (
              <span key={crumb.label} style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}>
                <span aria-hidden="true">/</span>
                {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
              </span>
            ))}
          </nav>
        )}

        {badge && <span className={`badge ${badge === 'PG' ? 'badge--pg' : 'badge--ug'}`}>{badge === 'PG' ? 'Postgraduate Programme' : 'Undergraduate Programme'}</span>}

        <h1>{title}</h1>
        {subtitle && <p className="page-hero-sub">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}