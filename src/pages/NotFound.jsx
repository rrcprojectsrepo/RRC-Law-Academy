import { Link } from 'react-router-dom';
import { usePageMeta } from '../utils/seo';

export default function NotFound() {
  usePageMeta('Page Not Found | RRC Law Academy', 'The page you are looking for could not be found.');

  return (
    <section className="section text-center">
      <div className="container">
        <h1>Page Not Found</h1>
        <p className="section-sub" style={{ marginBottom: '2rem' }}>
          The page you are looking for does not exist or has moved.
        </p>
        <Link to="/" className="btn btn--primary btn--lg">
          Back to Home
        </Link>
      </div>
    </section>
  );
}