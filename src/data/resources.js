/**
 * Study resources data.
 * Resources are organised by category. Since downloadable material is not
 * available yet, every item is flagged `available: false` and renders a
 * "Coming Soon" state rather than fake download links.
 */

export const resourceCategories = [
  {
    id: 'concept-notes',
    title: 'Concept Notes',
    icon: 'concept',
    description: 'Summarised notes covering core concepts across law, English, reasoning and quantitative sections.',
    available: false,
  },
  {
    id: 'practice-questions',
    title: 'Practice Questions',
    icon: 'practice',
    description: 'Topic-wise practice questions with solutions to build accuracy and speed.',
    available: false,
  },
  {
    id: 'mock-tests',
    title: 'Mock Tests',
    icon: 'mock',
    description: 'Sectional and full-length mock tests designed around the actual examination pattern.',
    available: false,
  },
  {
    id: 'revision-material',
    title: 'Revision Material',
    icon: 'revision',
    description: 'Compact, exam-ready revision notes for quick review before the examination.',
    available: false,
  },
  {
    id: 'current-affairs',
    title: 'Current Affairs',
    icon: 'current',
    description: 'Curated current affairs updates relevant for general knowledge sections.',
    available: false,
  },
  {
    id: 'legal-awareness',
    title: 'Legal Awareness',
    icon: 'legal',
    description: 'Daily legal awareness and landmark-judgment summaries for legal reasoning and GK sections.',
    available: false,
  },
];