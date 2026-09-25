import { Link } from 'react-router-dom';
import rrcMark from '../../assets/logo/rrc-mark.svg';

/**
 * Academy logo — mark + wordmark.
 * Renders inside a router <Link>; pass `to` for the destination route.
 */
export default function Logo({ to = '/', variant = 'header' }) {
  const inner = (
    <>
      <img src={rrcMark} alt="RRC Law Academy logo" width="46" height="46" />
      <span className="logo-text">
        <strong>RRC Law Academy</strong>
        <span>Law Entrance Coaching</span>
      </span>
    </>
  );

  if (variant === 'footer') {
    return (
      <Link to={to} className="footer-logo-row" aria-label="RRC Law Academy — home">
        {inner}
      </Link>
    );
  }

  return (
    <Link to={to} className="logo" aria-label="RRC Law Academy — home">
      {inner}
    </Link>
  );
}