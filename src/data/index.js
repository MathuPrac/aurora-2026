

// ── Aurora'26 — All site content (edit here only) ────────────────────────────

// ── EVENTS / Competition Tracks ───────────────────────────────────────────────
export const EVENTS = [
  {
    dept: 'Undergraduate Competition',
    name: 'Agentic AI Challenge',
    desc: 'Build an AI system that detects social engineering attempts, explains risk factors, and suggests safe responses while learning from feedback.',
    tag: '4 Member Team',
  },
  {
    dept: 'Stage 1',
    name: 'Proposal Submission',
    desc: 'Submit a 5–8 page PDF covering Problem Statement, Agentic AI Architecture, Ethical Safeguards, and Expected Impact.',
    tag: 'Undergraduate',
  },
  {
    dept: 'Stage 2',
    name: 'Selection of Final Teams',
    desc: 'Top 6 proposals selected based on Innovation (30%), Technical Feasibility (30%), Ethical Compliance (25%), and Impact & Presentation (15%).',
    tag: 'Undergraduate',
  },
  {
    dept: 'Stage 3',
    name: 'Prototype & Evaluation',
    desc: 'Submit a functional GitHub repository, a 10–15 page evaluation report on agent decision logic and ethical risks, and a 3–5 minute demo video.',
    tag: 'Undergraduate',
  },
  {
    dept: 'School Competition',
    name: 'Workshop & Quiz',
    desc: 'An interactive workshop on Agentic AI and Social Engineering followed by a quiz covering Technical Skills, Ethical Knowledge, and Creative Solutions.',
    tag: 'School Students',
  },
  {
    dept: 'School Competition',
    name: 'Creative Idea Design',
    desc: 'Design a creative and innovative idea related to Agentic AI and Social Engineering. Scored on Technical Feasibility (40), Ethical Compliance (30), and Innovation (30).',
    tag: 'School Students',
  },
]

// ── TIMELINE ─────────────────────────────────────────────────────────────────
export const TIMELINE = [
  {
    date: 'May 4',
    title: 'Open Registrations',
    desc: 'Registrations open for all Sri Lankan undergraduates and A/L students interested in participating in Aurora 2026.',
  },
  {
    date: 'May 11',
    title: 'Closing Registrations & Proposal Deadline',
    desc: 'Deadline for undergraduates to register and submit their project proposals for Aurora 2026.',
  },
  {
    date: 'May 23',
    title: 'Start of Implementation Phase',
    desc: 'The first 6 selected proposals advance to the implementation phase. Undergraduate participants begin building their projects.',
  },
  {
    date: 'Jun 13',
    title: 'Closing Registrations for School Students',
    desc: 'Final deadline for school students to register for participation in Aurora 2026.',
  },
  {
    date: 'Jun 20',
    title: 'Implementation Closing — Undergraduates',
    desc: 'Deadline for completion of projects by undergraduate participants.',
  },
  {
    date: 'Jun 25',
    title: 'School Students Awareness Session',
    desc: 'Session dedicated to school student participants covering Agentic AI and Social Engineering.',
  },
  {
    date: 'Jun 27',
    title: 'Final Competition — Undergraduates',
    desc: 'Undergraduate teams present their developed projects to a panel of industry experts.',
  },
  {
    date: 'Jul 01',
    title: 'School Competition Day',
    desc: 'Competition session dedicated exclusively to school student participants.',
  },
  {
    date: 'Jul 18',
    title: 'Conference Day',
    desc: 'The eagerly anticipated conference day centred around the themes of Agentic AI & Social Engineering.',
  },
]





// ── GUIDELINES ───────────────────────────────────────────────────────────────
export const GUIDELINES = {
  eligibility: [
    'Teams must consist of exactly four members from the same university or school.',
    'Participation is open exclusively to current undergraduates and school students.',
    'All team members are required to actively engage in every stage of the competition, including awareness sessions, quizzes, poster presentations, and demonstrations.',
    'Each team must submit one proposal before the official submission deadline.',
    'Rule violations, including unauthorized materials or prohibited AI use, will result in immediate disqualification.',
    'All decisions made by the judging panel are final and binding.',
  ],
  conduct: [
    'All solutions must be developed during the designated competition period',
    'Undergraduate proposals must be original work — plagiarism leads to disqualification',
    'Code repositories must be accessible via GitHub or GitLab for evaluation',
    "Judges' decisions are final and binding in all matters",
    'Ethical AI principles must be respected — misuse prevention must be demonstrated',
    'Professional conduct is expected from all participants throughout the event',
  ],
}

// ── COMMITTEES ───────────────────────────────────────────────────────────────
export const COMMITTEES = [
  {
    id: 'executive',
    label: 'Executive Committee',
    color: '#F05023',
    heads: [
      { name: 'Elangeswaran Kishor', role: 'CSA President', dept: 'elangeswarankishor@gmail.com', img: '/photos/Kishor.png' },
      { name: 'Sachith Wickramarachchi', role: 'Co-chief Organizer', dept: 'sachithpramuditha2003@gmail.com', img: '/photos/Sachith.jpeg' },
      { name: 'Chamod Devranga', role: 'Co-chief Organizer', dept: 'cdevranga@gmail.com', img: '/photos/Chamod.jpeg' },
      { name: 'Rusira Sandul', role: 'Treasurer', dept: 'rusirasandulhw@gmail.com', img: '/photos/Rusira.jpeg' },
    ],
    members: [],
  },
]


// ── FAQs ─────────────────────────────────────────────────────────────────────
export const FAQS = [
  {
    q: 'Who can participate in Aurora 2026?',
    a: 'Aurora 2026 is open to all Sri Lankan undergraduates and A/L (Advanced Level) school students. Undergraduates compete in the Agentic AI Challenge, while school students participate in the Workshop, Quiz, and Creative Idea Design competition.',
  },
  {
    q: 'What is the theme of Aurora 2026?',
    a: 'Aurora 2026 focuses on Agentic AI and Social Engineering — exploring how autonomous AI systems can detect, prevent, and respond to social engineering threats such as phishing, fake urgency, and authority manipulation.',
  },
  {
    q: 'How many stages are in the undergraduate competition?',
    a: 'There are four stages: Stage 1 — Proposal Submission (5–8 page PDF), Stage 2 — Selection of Final 6 Teams, Stage 3 — Prototype & Evaluation Report Submission (with GitHub repo and demo video), and Stage 4 — Final Live Presentation and Q&A.',
  },
  {
    q: 'What does the school student competition involve?',
    a: 'School students attend a workshop on Agentic AI and Social Engineering, then participate in a three-section quiz (Technical Skills, Ethical Knowledge, Creative Solutions), and finally design a creative innovative idea related to the theme.',
  },
  {
    q: 'When does registration open and close?',
    a: 'Registrations open on May 4, 2026. The deadline for undergraduates to register and submit proposals is May 11, 2026. School student registrations close on June 20, 2026.',
  },
  {
    q: 'What should I bring on competition day?',
    a: 'Bring your valid student ID, a fully charged laptop with all required software pre-installed, and your GitHub/GitLab repository link ready. A detailed checklist will be sent to registered participants closer to the event.',
  },
  {
    q: 'How are undergraduate proposals evaluated?',
    a: 'Proposals are scored on Innovation (30%), Technical Feasibility (30%), Ethical Compliance (25%), and Impact & Presentation (15%). The top 6 teams advance to the implementation phase.',
  },
  {
    q: 'Where is Aurora 2026 being held?',
    a: 'Aurora 2026 is organized by the Computer Science Association in collaboration with the Department of Computer Science, University of Sri Jayewardenepura. Venue details will be confirmed and shared with registered participants.',
  },
]

// ── GALLERY ITEMS ────────────────────────────────────────────────────────────
export const GALLERY_ITEMS = [
  { year: "Aurora '24", label: 'Opening Ceremony', src: '/photos/1.jpeg' },
  { year: "Aurora '24", label: 'Panel Discussion — Generative AI', src: '/photos/2.jpeg' },
  { year: "Aurora '24", label: 'Competition Winners', src: '/photos/3.jpeg' },
  { year: "Aurora '24", label: 'Code Sprint', src: '/photos/4.jpeg' },
  { year: "Aurora '24", label: 'Organizing Committee', src: '/photos/5.jpeg' },
  { year: "Aurora '24", label: 'Digital Entrepreneurship Panel', src: '/photos/6.jpeg' },
  { year: "Aurora '22", label: 'Awards Night', src: '/photos/7.jpeg' },
  { year: "Aurora '22", label: 'Networking Hall', src: '/photos/8.jpeg' },
  { year: "Aurora '22", label: 'Keynote Session', src: '/photos/9.jpeg' },
];
