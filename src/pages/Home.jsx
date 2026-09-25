import Hero from '../components/Hero/Hero';
import AboutAcademy from '../components/AboutAcademy/AboutAcademy';
import AcademyHighlights from '../components/AcademyHighlights/AcademyHighlights';
import Programmes from '../components/Programmes/Programmes';
import WhyChooseRRC from '../components/WhyChooseRRC/WhyChooseRRC';
import LearningApproach from '../components/LearningApproach/LearningApproach';
import FeaturedProgramme from '../components/FeaturedProgramme/FeaturedProgramme';
import Faculty from '../components/Faculty/Faculty';
import Results from '../components/Results/Results';
import StudyResources from '../components/StudyResources/StudyResources';
import CurrentAffairs from '../components/CurrentAffairs/CurrentAffairs';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQ from '../components/FAQ/FAQ';
import CTA from '../components/CTA/CTA';
import Contact from '../components/Contact/Contact';
import { usePageMeta } from '../utils/seo';

/**
 * Homepage — introduces the RRC Law Academy brand first, then the full
 * programme ecosystem. CLAT UG 2027 appears later as a featured programme.
 */
export default function Home() {
  usePageMeta(
    'RRC Law Academy | Law Entrance Coaching',
    'RRC Law Academy is a professional law entrance preparation academy offering structured coaching for CLAT UG, AILET UG, CLAT PG and AILET PG.'
  );

  return (
    <>
      <Hero />
      <AboutAcademy />
      <AcademyHighlights />
      <Programmes />
      <WhyChooseRRC />
      <LearningApproach />
      <FeaturedProgramme />
      <Faculty />
      <Results />
      <StudyResources />
      <CurrentAffairs />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}