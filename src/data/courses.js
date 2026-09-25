/**
 * Course / programme data for RRC Law Academy.
 * Each course contains its full, course-specific content so the four
 * programme pages remain distinct while sharing the same layout shell.
 *
 * NOTE: Examination-related descriptions below reflect the general, publicly
 * known structure of these examinations. Always refer to the official
 * notification / prospectus for the latest and exact details.
 */

export const courses = [
{
    slug: 'clat-ug',
    name: 'CLAT UG',
    category: 'UG',
    tagline: 'Undergraduate Law Entrance Preparation',
    shortDescription:
      'For students aspiring to pursue undergraduate law programmes through CLAT.',
    navLabel: 'CLAT UG',
    meta: {
      title: 'CLAT UG Coaching | RRC Law Academy',
      description:
        'CLAT UG preparation at RRC Law Academy — structured coaching across English, legal reasoning, logical reasoning, current affairs and quantitative techniques with mock tests and mentoring.',
    },
    hero: {
      heading: 'CLAT UG Preparation',
      text: 'A structured undergraduate law entrance preparation programme for students who want to approach CLAT UG with clarity, consistency and confidence — from concept building to full-length mock tests and personal mentoring.',
    },
    keyFocus: [
      'English Language',
      'Legal Reasoning',
      'Logical Reasoning',
      'Current Affairs & GK',
      'Quantitative Techniques',
    ],
    overview: [
      'The CLAT UG programme at RRC Law Academy prepares students for the Common Law Admission Test for undergraduate law aspirants. The programme is built around the passage-based format of CLAT UG, which places a strong emphasis on reading ability, legal reasoning and critical thinking.',
      'Students work through a structured pathway covering English language, current affairs and general knowledge, legal reasoning, logical reasoning and quantitative techniques. Every area is taught with clarity, practised systematically and tested through sectional and full-length mocks.',
      'Beyond syllabus coverage, the programme focuses on examination strategy — managing time, choosing the right attempts, handling difficult passages and improving accuracy under pressure.',
    ],
    whoCanJoin: [
      'Students who have completed, or are appearing for, their Class XII / Higher Secondary examination.',
      'Undergraduate law aspirants preparing for the Common Law Admission Test.',
      'Students who want structured, disciplined preparation with regular testing and mentoring.',
    ],
    eligibility: [
      'Candidates must have passed (or be appearing for) their Higher Secondary (Class XII) or equivalent examination.',
      'Minimum qualifying marks and any other conditions follow the official CLAT UG notification — verify the latest details on official sources before applying.',
    ],
examPattern: {
      note: 'CLAT UG is a passage-based examination. The exact number of questions, marks and scheme are updated each year — always confirm with the official notification.',
      sections: [
        { title: 'English Language', text: 'Passage-based questions testing comprehension, vocabulary and basic grammar.' },
        { title: 'Current Affairs & General Knowledge', text: 'Questions on contemporary events and static general knowledge.' },
        { title: 'Legal Reasoning', text: 'Passage-based legal situations answered by applying the legal principles given.' },
        { title: 'Logical Reasoning', text: 'Passage-based questions testing analytical and logical ability.' },
        { title: 'Quantitative Techniques', text: 'Short mathematics questions based on passages, at secondary-school level.' },
      ],
    },
    coreAreas: [
      { title: 'English Language', text: 'Reading comprehension, vocabulary building and grammar essentials.' },
      { title: 'Legal Reasoning', text: 'Passage-based legal aptitude with practice of applied principles.' },
      { title: 'Logical Reasoning', text: 'Critical reasoning, inference and argument analysis.' },
      { title: 'Current Affairs & GK', text: 'Year-round current affairs coverage with monthly revisions.' },
      { title: 'Quantitative Techniques', text: 'Exam-relevant basics of arithmetic, algebra and data interpretation.' },
    ],
    strategy: [
      { title: 'Foundations First', text: 'Begin with core concepts in every section before moving to application-level practice.' },
      { title: 'Reading Discipline', text: 'Daily reading practice to build the comprehension stamina CLAT UG demands.' },
      { title: 'Sectional Mastery', text: 'Master one section at a time with topic-wise questions and sectional tests.' },
      { title: 'Full-Length Simulation', text: 'Regular full-length mock tests under timed, exam-like conditions.' },
      { title: 'Post-Test Analysis', text: 'Every mock is reviewed to locate errors, slow areas and weak topics.' },
      { title: 'Smart Revision', text: 'Periodic revision cycles with curated notes and current affairs summaries.' },
    ],
    learningMethod: [
      'Classroom-style teaching with structured notes and concept clarity.',
      'Topic-wise practice questions after every learning unit.',
      'Sectional and full-length mock tests with detailed performance feedback.',
      'Doubt-clearance sessions and one-to-one mentoring checkpoints.',
      'Curated current affairs and legal awareness material throughout the year.',
    ],
    mocks: [
      'Sectional tests for every exam area.',
      'Full-length mock tests modelled on the CLAT UG format.',
      'Performance reports highlighting accuracy, speed and weak areas.',
      'Feedback sessions to plan the next improvement cycle.',
    ],
    studyMaterial: [
      'Concept notes for every preparation area.',
      'Practice question sets with solutions.',
      'Current affairs and legal awareness compilations.',
      'Revision sheets for quick exam-time review.',
      'Mock test series with analysis.',
    ],
    importantInfo: [
      'CLAT UG is conducted centrally each year — application details, dates and updates are published by the conducting body.',
      'RRC Law Academy updates its preparation material in line with the official pattern.',
      'Students are advised to verify eligibility and registration details from official sources before applying.',
    ],
    faqs: [
      {
        q: 'Who can join the CLAT UG programme?',
        a: 'The programme is for students who have completed, or are appearing for, their Class XII / Higher Secondary examination and wish to pursue a five-year integrated law programme through CLAT.',
      },
      {
        q: 'Is the programme based on the current CLAT pattern?',
        a: 'Yes. Teaching, practice and mock tests follow the latest CLAT UG passage-based structure as officially notified.',
      },
      {
        q: 'Are mock tests included in the CLAT UG programme?',
        a: 'Yes. Sectional and full-length mock tests form a core part of the programme, with detailed performance analysis after each test.',
      },
      {
        q: 'Does the academy provide current affairs material?',
        a: 'Yes. Curated current affairs, general knowledge and legal awareness material is provided and regularly updated.',
      },
    ],
  },
{
    slug: 'ailet-ug',
    name: 'AILET UG',
    category: 'UG',
    tagline: 'AILET Undergraduate Entrance Preparation',
    shortDescription: 'Focused preparation for the All India Law Entrance Test.',
    navLabel: 'AILET UG',
    meta: {
      title: 'AILET UG Coaching | RRC Law Academy',
      description:
        'AILET UG preparation at RRC Law Academy — focused coaching for the All India Law Entrance Test with English, current affairs & GK, logical reasoning, mock tests and mentoring.',
    },
    hero: {
      heading: 'AILET UG Preparation',
      text: 'Focused undergraduate preparation for the All India Law Entrance Test — sharpening the English, general knowledge and logical reasoning skills that AILET UG rewards, with regular practice and personal mentoring throughout.',
    },
    keyFocus: [
      'English Language',
      'Current Affairs & General Knowledge',
      'Logical Reasoning',
      'Exam Strategy',
      'Mock Tests & Practice',
    ],
    overview: [
      'The AILET UG programme is designed for undergraduate law aspirants targeting the All India Law Entrance Test. AILET rewards precise English usage, awareness of current affairs and sharp logical reasoning — every aspect of the programme is built around these strengths.',
      'Students develop reading and vocabulary skills, build a strong current affairs and general knowledge base, and practise logical reasoning systematically. Regular sectional tests and full-length mocks build the speed and accuracy the examination demands.',
      'Because AILET UG differs from CLAT UG in format and section emphasis, the programme uses dedicated material and practice sets instead of treating the two examinations as identical.',
    ],
    whoCanJoin: [
      'Students who have completed, or are appearing for, their Class XII / Higher Secondary examination.',
      'Undergraduate law aspirants who wish to appear for the All India Law Entrance Test.',
      'Students preparing for AILET UG alongside or instead of other law entrance examinations.',
    ],
    eligibility: [
      'Candidates must have passed (or be appearing for) their Higher Secondary (Class XII) or equivalent examination.',
      'Check the official AILET notification for qualifying percentages, age and other eligibility conditions before applying.',
    ],
examPattern: {
      note: 'AILET UG generally tests English, current affairs & general knowledge, logical reasoning and legal awareness sections. Refer to the official AILET notification for the latest pattern.',
      sections: [
        { title: 'English Language', text: 'Reading comprehension, grammar, vocabulary and comprehension-based questions.' },
        { title: 'Current Affairs & General Knowledge', text: 'Contemporary affairs and general knowledge awareness.' },
        { title: 'Logical Reasoning', text: 'Reasoning-based questions testing analytical and logical thinking.' },
        { title: 'Legal Awareness', text: 'Awareness of legal concepts and application questions included in the paper.' },
      ],
    },
    coreAreas: [
      { title: 'English Mastery', text: 'Precision in grammar, vocabulary and reading comprehension.' },
      { title: 'Current Affairs & GK', text: 'Awareness of national and international developments with legal relevance.' },
      { title: 'Logical Reasoning', text: 'Structured practice of reasoning questions in speed-focused conditions.' },
      { title: 'Legal Awareness', text: 'Everyday understanding of core legal principles and landmark cases.' },
    ],
    strategy: [
      { title: 'Language Precision', text: 'Grammar and vocabulary drills alongside daily reading practice.' },
      { title: 'GK Built Daily', text: 'Short, consistent current affairs inputs rather than last-minute cramming.' },
      { title: 'Reasoning at Speed', text: 'Targeted reasoning practice to raise both accuracy and attempt rate.' },
      { title: 'Section-Ranked Tests', text: 'Section-wise tests that build each area before full-length mocks.' },
      { title: 'Strategic Attempts', text: 'Personalised attempt planning based on mock performance.' },
    ],
    learningMethod: [
      'Structured teaching with section-wise planning.',
      'Daily practice sets covering English, GK and reasoning.',
      'Sectional and full-length mock tests with analysis.',
      'Doubt-clearing and one-to-one mentoring sessions.',
      'Regular current affairs updates and revision compilations.',
    ],
    mocks: [
      'Sectional tests for English, GK and logical reasoning.',
      'Full-length mocks aligning with the AILET UG format.',
      'Performance analysis to improve speed and accuracy.',
      'Personalised feedback on attempt strategy.',
    ],
    studyMaterial: [
      'Concept and rule notes for English and reasoning.',
      'Practice question bank across all sections.',
      'Current affairs and general knowledge compilations.',
      'Mock test papers with solutions and analysis.',
      'Revision sheets for the final preparation phase.',
    ],
    importantInfo: [
      'AILET UG is conducted by the National Law University, Delhi — refer to their official website for notifications, dates and eligibility.',
      'RRC Law Academy designs separate material for AILET UG so students prepare for its specific format.',
      'Always confirm official details before registration or examination.',
    ],
    faqs: [
      {
        q: 'How is AILET UG preparation different from CLAT UG preparation?',
        a: 'AILET UG has a different section emphasis and format. While both test English, reasoning and GK, RRC Law Academy uses dedicated material and test series so students prepare precisely for AILET UG.',
      },
      {
        q: 'Who can appear for AILET UG?',
        a: 'Students who have completed, or are appearing for, their Class XII / Higher Secondary examination are eligible, subject to the official AILET notification.',
      },
      {
        q: 'Does the AILET UG programme include mock tests?',
        a: 'Yes. Sectional tests and full-length mock tests are included, with performance feedback to guide improvement.',
      },
      {
        q: 'Will current affairs material be provided?',
        a: 'Yes. Curated current affairs and general knowledge material is provided and updated regularly through the preparation year.',
      },
    ],
  },
{
    slug: 'clat-pg',
    name: 'CLAT PG',
    category: 'PG',
    tagline: 'CLAT Postgraduate Entrance Preparation',
    shortDescription: 'Preparation support for postgraduate law aspirants appearing for CLAT PG.',
    navLabel: 'CLAT PG',
    meta: {
      title: 'CLAT PG Coaching | RRC Law Academy',
      description:
        'CLAT PG preparation at RRC Law Academy — postgraduate law entrance coaching covering core legal subjects, constitutional law, jurisprudence, previous questions, revision and mock tests.',
    },
    hero: {
      heading: 'CLAT PG Preparation',
      text: 'A focused postgraduate preparation programme for law graduates appearing for CLAT PG — consolidating core legal subjects, sharpening legal reasoning, and building a disciplined revision and mock-test routine.',
    },
    keyFocus: [
      'Core Legal Subjects',
      'Constitutional Law',
      'Jurisprudence',
      'Legal Reasoning',
      'Previous Year Practice',
    ],
    overview: [
      'The CLAT PG programme supports law graduates who are preparing for the Common Law Admission Test for postgraduate law programmes. It consolidates fundamental legal areas — constitutional law, jurisprudence and other central subjects — and turns them into examination-ready knowledge.',
      'Students work through structured revision of core subjects, heavy practice of previous-year-style questions, and full-length mock tests that mirror the CLAT PG format. Legal reasoning and conceptual clarity are developed through application-based discussion.',
      'Discipline is the backbone of PG preparation. The programme builds a monthly plan covering subject revision, question practice, mock tests and revision cycles through to the examination.',
    ],
    whoCanJoin: [
      'Law graduates (three-year or five-year LL.B.) planning to appear for CLAT PG.',
      'Postgraduate law aspirants targeting LL.M. programmes through CLAT.',
      'Final-year LL.B. students preparing alongside their coursework.',
    ],
    eligibility: [
      'Candidates must hold, or be appearing for, an LL.B. degree (three-year or five-year) from a recognised university.',
      'Qualifying percentage requirements and other conditions are decided by the official CLAT PG notification — verify before applying.',
    ],
examPattern: {
      note: 'CLAT PG tests basic perception, understanding and application of law. The exact scheme changes each year — refer to the official notification.',
      sections: [
        { title: 'Constitutional Law', text: 'Core constitutional principles, provisions and judicial interpretation.' },
        { title: 'Jurisprudence', text: 'Schools of jurisprudence, legal concepts and their practical application.' },
        { title: 'Other Core Subjects', text: 'Substantive and procedural law areas as per the notified syllabus.' },
        { title: 'Legal Aptitude & Reasoning', text: 'Application of legal knowledge to hypothetical situations.' },
      ],
    },
    coreAreas: [
      { title: 'Constitutional Law', text: 'Systematic coverage of constitutional provisions, doctrines and leading cases.' },
      { title: 'Jurisprudence', text: 'Key schools, concepts and thinkers, prepared for application-style questions.' },
      { title: 'Substantive & Procedural Law', text: 'Important legal areas and procedural principles relevant to CLAT PG.' },
      { title: 'Legal Reasoning', text: 'Applying legal knowledge to judgment-style and hypothetical questions.' },
    ],
    strategy: [
      { title: 'Subject Consolidation', text: 'Revise core law subjects into crisp, exam-ready notes first.' },
      { title: 'Case-Law Mapping', text: 'Learn landmark cases as part of each topic, not in isolation.' },
      { title: 'Previous Papers', text: 'High-volume practice of earlier CLAT PG style questions.' },
      { title: 'Timed Mock Cycles', text: 'Repeat cycles of mock tests, analysis and targeted correction.' },
      { title: 'Spaced Revision', text: 'Revisiting each subject at planned intervals to lock retention.' },
    ],
    learningMethod: [
      'Structured subject revision sessions for postgraduate preparation.',
      'Discussion of legal principles and judgment-style questions.',
      'Practice sets built from previous-year question styles.',
      'Full-length mock tests with detailed performance review.',
      'Mentoring to keep preparation organised and on schedule.',
    ],
    mocks: [
      'Full-length CLAT PG format mock tests.',
      'Subject-wise tests for constitutional law and jurisprudence.',
      'Question-practice sprints under timed conditions.',
      'Performance reports and improvement planning after every test.',
    ],
    studyMaterial: [
      'Consolidated notes for core legal subjects.',
      'Case-law compilations and doctrine summaries.',
      'Previous-year-style question practice sets.',
      'Mock test papers with solutions and analysis.',
      'Quick-revision sheets for the final phase.',
    ],
    importantInfo: [
      'CLAT PG is conducted centrally each year — tracking the official notification for syllabus, schedule and eligibility is essential.',
      'Postgraduate entrance preparation requires consistent revision of core subjects; the programme is built around that discipline.',
      'Verify official details before applying and never rely on unofficial updates for dates or rules.',
    ],
    faqs: [
      {
        q: 'Who should join the CLAT PG programme?',
        a: 'Law graduates — or final-year LL.B. students — who are preparing for postgraduate law admission through CLAT PG.',
      },
      {
        q: 'Which subjects does the programme cover?',
        a: 'The programme focuses on the core areas tested in CLAT PG, including constitutional law, jurisprudence and other important legal subjects, along with exam-style practice.',
      },
      {
        q: 'Are mock tests part of CLAT PG preparation?',
        a: 'Yes. Full-length and subject-wise tests are included, with performance analysis after every test.',
      },
      {
        q: 'Is previous-year question practice included?',
        a: 'Yes. The programme includes practice built from the style of earlier CLAT PG questions so students are familiar with how questions are framed.',
      },
    ],
  },
{
    slug: 'ailet-pg',
    name: 'AILET PG',
    category: 'PG',
    tagline: 'AILET Postgraduate Entrance Preparation',
    shortDescription: 'Focused preparation for postgraduate law aspirants appearing for AILET PG.',
    navLabel: 'AILET PG',
    meta: {
      title: 'AILET PG Coaching | RRC Law Academy',
      description:
        'AILET PG preparation at RRC Law Academy — postgraduate law coaching with core legal knowledge, practice, revision, mock tests, legal awareness and personalised mentoring.',
    },
    hero: {
      heading: 'AILET PG Preparation',
      text: 'A purpose-built postgraduate preparation programme for law graduates aiming at the AILET PG examination — combining legal knowledge, rigorous practice and strategic revision with ongoing mentoring.',
    },
    keyFocus: [
      'Core Legal Knowledge',
      'Legal Concept Application',
      'High-volume Practice',
      'Revision Cycles',
      'Legal Awareness',
    ],
    overview: [
      'The AILET PG programme supports postgraduate law aspirants preparing for the All India Law Entrance Test for postgraduate admission. It strengthens core legal knowledge and develops the speed, accuracy and judgment required to answer the examination well under time pressure.',
      'Students follow a monthly plan that cycles between subject revision, question practice, mock tests and review. Legal awareness is developed through regular reading and discussion, while every mock test ends with a structured analysis session.',
      'Because postgraduate law entrance tests reward applied legal knowledge, the programme emphasises reasoning through legal problems rather than rote recall.',
    ],
    whoCanJoin: [
      'Law graduates preparing for the AILET PG examination.',
      'Postgraduate law aspirants targeting the NLU Delhi postgraduate law programme.',
      'Final-year LL.B. students building a postgraduate preparation plan.',
    ],
    eligibility: [
      'Candidates must hold, or be appearing for, an LL.B. degree or equivalent from a recognised university.',
      'Refer to the official AILET PG notification for the latest eligibility and application details.',
    ],
examPattern: {
      note: 'AILET PG generally tests legal knowledge, legal concepts and their application. Confirm the current structure from the official AILET notification.',
      sections: [
        { title: 'Abstract Questions', text: 'Testing the perception and application of general legal principles.' },
        { title: 'Knowledge-Based Questions', text: 'Direct questions on legal concepts, cases and core law subjects.' },
        { title: 'Legal Reasoning & Application', text: 'Applying legal knowledge to fact situations with precision.' },
      ],
    },
    coreAreas: [
      { title: 'Core Legal Subjects', text: 'Consolidated knowledge of the foundational law subjects tested at PG level.' },
      { title: 'Concept Application', text: 'Training in applying legal principles quickly and accurately.' },
      { title: 'Legal Awareness', text: 'Regular reading of legal developments, judgments and debates.' },
      { title: 'Exam Tactics', text: 'Question-selection, time allocation and accuracy planning for the paper.' },
    ],
    strategy: [
      { title: 'Consolidate the Core', text: 'Turn textbook knowledge into crisp, exam-ready command of each subject.' },
      { title: 'Practise in Volume', text: 'Solve large volumes of exam-style questions to build speed.' },
      { title: 'Mock-Test Rhythm', text: 'Sit full mocks on a fixed schedule and analyse every result.' },
      { title: 'Weekly Legal Reading', text: 'Maintain legal awareness through curated case summaries and news.' },
      { title: 'Targeted Revision', text: 'Revise weak subjects before revisiting strengths, in planned cycles.' },
    ],
    learningMethod: [
      'Structured legal knowledge sessions across core subjects.',
      'Application workshops using examination-style factual scenarios.',
      'Timed practice sprints and full-length mock tests.',
      'One-to-one mentoring reviews after each test cycle.',
      'Curated legal awareness and current affairs support throughout.',
    ],
    mocks: [
      'Full-length AILET PG format mock tests on a regular schedule.',
      'Subject-wise and concept-wise test sets.',
      'Timed application-practice sessions.',
      'Detailed analysis and personalised correction plans.',
    ],
    studyMaterial: [
      'Revised and consolidated notes for legal subjects.',
      'Application-practice question sets with solutions.',
      'Mock test series with analysis and explanations.',
      'Legal awareness compilations and case summaries.',
      'Final-phase revision sheets.',
    ],
    importantInfo: [
      'AILET PG is conducted by the National Law University, Delhi — follow their official website for notifications, dates and procedures.',
      'Postgraduate preparation demands consistent practice and revision; the programme is built around both.',
      'Always rely on official sources for eligibility and examination details.',
    ],
    faqs: [
      {
        q: 'Who should join the AILET PG programme?',
        a: 'Law graduates and final-year LL.B. students who are preparing for postgraduate law admission through AILET PG.',
      },
      {
        q: 'What does the programme emphasise?',
        a: 'It emphasises core legal knowledge, application of legal principles, high-volume practice, mock tests, revision and legal awareness.',
      },
      {
        q: 'Are mock tests included?',
        a: 'Yes. Full-length and concept-wise tests are included with detailed analysis after each attempt.',
      },
      {
        q: 'How is this different from CLAT PG preparation?',
        a: 'Both are PG entrance preparations, but material and mock tests are tailored to the AILET PG format and its question styles, so students practise what the actual paper rewards.',
      },
    ],
  },
];

/** Small helper to look up a course by slug. */
export const getCourse = (slug) => courses.find((c) => c.slug === slug) || null;