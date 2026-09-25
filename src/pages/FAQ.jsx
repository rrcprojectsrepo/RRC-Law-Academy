import PageHero from '../components/PageHero/PageHero';
import FAQ from '../components/FAQ/FAQ';
import CTA from '../components/CTA/CTA';
import { usePageMeta } from '../utils/seo';

export default function FaqPage() {
  usePageMeta(
    'FAQs | RRC Law Academy',
    'Frequently asked questions about RRC Law Academy programmes, eligibility, mock tests, study material and how to enquire.'
  );

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Answers to the questions students ask most about RRC Law Academy, its programmes and how preparation works."
        crumbs={[{ label: 'FAQs' }]}
      />

      <FAQ heading={false} />

      <CTA />
    </>
  );
}