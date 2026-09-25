import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

/**
 * Reusable faculty member card. Consumes an object from data/faculty.js.
 * Placeholder entries (isPlaceholder) are marked clearly — nothing is invented.
 */
export default function FacultyCard({ member }) {
  return (
    <article className="faculty-card" aria-label={`Faculty profile: ${member.subject}`}>
      <div className="faculty-avatar">
        <img
          src={member.photo || '/images/placeholder-avatar.svg'}
          alt={`${member.name} — faculty placeholder portrait for ${member.subject}`}
          width="92"
          height="92"
          loading="lazy"
        />
      </div>
      {member.placeholder && <span className="faculty-placeholder-tag">Profile coming soon</span>}
      <h3>{member.name}</h3>
      <p className="faculty-subject">{member.subject}</p>
      <p className="faculty-qual">{member.qualification}</p>
      <Link to="/faculty" className="faculty-profile-link">
        View Profile
        <FaArrowRight aria-hidden="true" />
      </Link>
    </article>
  );
}