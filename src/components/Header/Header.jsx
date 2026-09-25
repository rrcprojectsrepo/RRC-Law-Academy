import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaChevronDown, FaGraduationCap, FaTimes } from 'react-icons/fa';
import Logo from '../Logo/Logo';
import { courses } from '../../data/courses';

const MAIN_LINKS = [
  { label: 'Home', to: '/', end: true },
  { label: 'About', to: '/about' },
  { label: 'Courses', to: '/courses', dropdown: true },
  { label: 'Our Approach', to: '/approach' },
  { label: 'Faculty', to: '/faculty' },
  { label: 'Results', to: '/results' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setCoursesOpen(false);
  }, [location.pathname]);

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <Logo to="/" />
        <nav className="nav" aria-label="Primary navigation">
          <ul className="nav-list">
            {MAIN_LINKS.map((link) =>
              link.dropdown ? (
                <li key={link.to} className="has-dropdown">
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => `nav-link dropdown-toggle ${isActive ? 'active' : ''}`}
                  >
                    {link.label}
                    <FaChevronDown className="dropdown-caret" aria-hidden="true" />
                  </NavLink>
                  <ul className="dropdown-menu" aria-label="Courses">
                    {courses.map((course) => (
                      <li key={course.slug}>
                        <Link to={`/courses/${course.slug}`} className="dropdown-link">
                          <FaGraduationCap aria-hidden="true" />
                          {course.name}
                          <span className={`badge ${course.category === 'UG' ? 'badge--ug' : 'badge--pg'} dd-badge`}>
                            {course.category}
                          </span>
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link to="/courses" className="dropdown-link">
                        <FaGraduationCap aria-hidden="true" />
                        All Programmes
                        <span className="badge badge--soon dd-badge">View</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <li key={link.to}>
                  <NavLink to={link.to} end={link.end} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    {link.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
          <div className="nav-cta">
            <Link to="/contact" className="btn btn--accent">
              Enquire Now
            </Link>
          </div>
        </nav>
        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>
<nav id="mobile-menu" className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        <ul className="mobile-nav-list">
          {MAIN_LINKS.map((link) => (
            <li key={link.to}>
              {link.dropdown ? (
                <>
                  <button
                    type="button"
                    className="mobile-link"
                    aria-expanded={coursesOpen}
                    onClick={() => setCoursesOpen((v) => !v)}
                  >
                    Courses
                    <FaChevronDown aria-hidden="true" style={{ transform: coursesOpen ? 'rotate(180deg)' : 'none' }} />
                  </button>
                  <div className={`mobile-subgroup ${coursesOpen ? 'open' : ''}`}>
                    <Link to="/courses" className="mobile-subgroup-title">
                      <FaGraduationCap aria-hidden="true" />
                      All Programmes
                    </Link>
                    {courses.map((course) => (
                      <Link
                        key={course.slug}
                        to={`/courses/${course.slug}`}
                        className="mobile-dropdown-link"
                      >
                        {course.name}
                        <span className={`badge ${course.category === 'UG' ? 'badge--ug' : 'badge--pg'}`}>
                          {course.category}
                        </span>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink to={link.to} end={link.end} className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}>
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        <div className="mobile-cta">
          <Link to="/contact" className="btn btn--accent">
            Enquire Now
          </Link>
          <Link to="/contact" className="btn btn--outline">
            Book Free Counselling
          </Link>
        </div>
      </nav>
    </header>
  );
}