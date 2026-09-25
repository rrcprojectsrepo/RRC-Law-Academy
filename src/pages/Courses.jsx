import PageHero from '../components/PageHero/PageHero';
import Programmes from '../components/Programmes/Programmes';
import LearningApproach from '../components/LearningApproach/LearningApproach';
import CTA from '../components/CTA/CTA';
import { usePageMeta } from '../utils/seo';

export default function Courses() {
  usePageMeta(
    'Law Entrance Coaching Programmes | RRC Law Academy',
    'Explore the programmes at RRC Law Academy — structured preparation for CLAT UG, AILET UG, CLAT PG and AILET PG for undergraduate and postgraduate law aspirants.'
  );

  return (
    <>
      <PageHero
        title="Courses & Programmes"
        subtitle="Focused preparation programmes for undergraduate and postgraduate law entrance examinations — explore the full RRC Law Academy offering below."
        crumbs={[{ label: 'Courses' }]}
      />
      <Programmes />
      <LearningApproach />
      <CTA />
    </>
  );
}