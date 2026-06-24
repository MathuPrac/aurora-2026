
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
    name: 'Implementation Submission Started',
    desc: 'Submit a 5–8 page PDF covering Problem Statement, Agentic AI Architecture, Ethical Safeguards, and Expected Impact.',
    tag: 'Undergraduate',
  },
  {
    dept: 'Stage 2',
    name: 'Selection of Final Teams',
    desc: 'Top 8 proposals selected based on Innovation, Technical Feasibility, Ethical Compliance, and Impact & Presentation.',
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
    tag: 'School Competition',
  },
  {
    dept: 'School Competition',
    name: 'Creative Idea Design',
    desc: 'Design a creative and innovative idea related to Agentic AI and Social Engineering. Scored on Technical Feasibility (40), Ethical Compliance (30), and Innovation (30).',
    tag: 'School Competition',
  },
]

// ── REGISTRATION URLS ────────────────────────────────────────────────────────
export const UNDERGRAD_REGISTRATION_URL = 'https://forms.gle/4pGd5xQYCMqzjrFB7'
export const PROPOSAL_SUBMISSION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScRY2FJfqee5DjtScB_5YCtBQUpNIusvEFHsm8_sqzdYrxIHQ/viewform'
export const SCHOOL_REGISTRATION_URL = 'https://forms.gle/76HahruTXmjLPwdq6'

/** Set to false when you want to close school registration */
export const SCHOOL_REGISTRATION_FORCE_OPEN = true

// ── TIMELINE ─────────────────────────────────────────────────────────────────
export const TIMELINE = [
  {
    date: 'May 04',
    day: 'Monday',
    title: 'Open Registration',
    desc: 'Undergraduate team registration opens for Aurora 2026.',
    duration: '5 days',
    track: 'undergraduate',
    link: UNDERGRAD_REGISTRATION_URL,
    linkLabel: 'Register Now',
  },
  {
    date: 'May 09',
    day: 'Monday',
    title: 'Closing Registration',
    desc: 'Final deadline for undergraduate teams to register.',
    track: 'undergraduate',
  },
  {
    date: 'May 10',
    day: 'Tuesday',
    title: 'Open Proposal Submission',
    desc: 'Undergraduate participants can submit their 5–8 page project proposals.',
    duration: '5 days',
    track: 'undergraduate',
    link: PROPOSAL_SUBMISSION_URL,
    linkLabel: 'Submit Proposal',
  },
  {
    date: 'May 14',
    day: 'Saturday',
    title: 'Closing Proposal Submission',
    desc: 'Deadline for undergraduates to submit project proposals for Aurora 2026.',
    track: 'undergraduate',
  },
  {
    date: 'May 18',
    day: 'Monday',
    title: 'Starting Implementation',
    desc: 'Selected proposals advance to the implementation phase. Teams begin building their projects.',
    duration: '40 days',
    track: 'undergraduate',
  },
  {
    date: 'Jun 24',
    day: 'Wednesday',
    title: 'Registration Open for School Students',
    desc: 'Registration window opens for school teams participating in Aurora 2026.',
    track: 'school',
    link: SCHOOL_REGISTRATION_URL,
    linkLabel: 'Register School Team',
  },
  {
    date: 'Jun 27',
    day: 'Saturday',
    title: 'Implementation Closing — Undergraduates',
    desc: 'Deadline for undergraduate teams to complete and submit their implementation work.',
    track: 'undergraduate',
  },
  {
    date: 'Jun 30',
    day: 'Tuesday',
    title: 'Closing Registration for School Students',
    desc: 'Final deadline for school students to register for participation in Aurora 2026.',
    track: 'school',
    link: SCHOOL_REGISTRATION_URL,
    linkLabel: 'Register School Team',
  },
  {
    date: 'Jul 02',
    day: 'Thursday',
    title: 'School Students Awareness Session',
    desc: 'Compulsory awareness session for school participants covering Agentic AI and Social Engineering.',
    duration: '2 days',
    track: 'school',
  },
  {
    date: 'Jul 04',
    day: 'Saturday',
    title: 'Final Competition — Undergraduates',
    desc: 'Undergraduate teams present their developed projects to a panel of industry experts.',
    track: 'undergraduate',
  },
  {
    date: 'Jul 10',
    day: 'Friday',
    title: 'School Competition',
    desc: 'Workshop, quiz, and creative idea design challenges for school student participants.',
    track: 'school',
  },
  {
    date: 'Jul 18',
    day: 'Saturday',
    title: 'Conference Day',
    desc: 'The eagerly anticipated conference day centred around Agentic AI & Social Engineering.',
    track: 'conference',
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
    'Undergraduate proposals must be original work - plagiarism leads to disqualification',
    'Code repositories must be accessible via GitHub or GitLab for evaluation',
    "Judges' decisions are final and binding in all matters",
    'Ethical AI principles must be respected - misuse prevention must be demonstrated',
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
      { name: 'Elangeswaran Kishor', role: 'President', dept: 'Computer Science Association', email: 'elangeswarankishor@gmail.com', img: '/photos/Kishor.png', linkedin: 'https://www.linkedin.com/in/kishor-elangeswaran-2505a924a/' },
      { name: 'Sachith Wickramarachchi', role: 'Co-chief Organizer', dept: 'Aurora 2026', email: 'sachithpramuditha2003@gmail.com', img: '/photos/Sachith.jpeg', linkedin: 'https://www.linkedin.com/in/sachith-wickramarachchi-a76aa6328/' },
      { name: 'Chamod Devranga', role: 'Co-chief Organizer', dept: 'Aurora 2026', email: 'cdevranga@gmail.com', img: '/photos/Chamod.jpeg', linkedin: 'https://www.linkedin.com/in/chamod-devranga-5b556a268/' },
      { name: 'Rusira Sandul', role: 'Treasurer', dept: 'Aurora 2026', email: 'rusirasandulhw@gmail.com', img: '/photos/Rusira.jpeg', linkedin: 'https://www.linkedin.com/in/rusira-sandul-b6bb87292/' },
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
    a: 'There are four stages: Stage 1 — Implementation Submission Started (5–8 page PDF), Stage 2 — Selection of Final 6 Teams, Stage 3 — Prototype & Evaluation Report Submission (with GitHub repo and demo video), and Stage 4 — Final Live Presentation and Q&A.',
  },
  {
    q: 'What does the school student competition involve?',
    a: 'School students attend a workshop on Agentic AI and Social Engineering, then participate in a three-section quiz (Technical Skills, Ethical Knowledge, Creative Solutions), and finally design a creative innovative idea related to the theme.',
  },
  {
    q: 'When does registration open and close?',
    a: 'Undergraduate registration opens May 4 and closes May 9, 2026. Proposal submissions are accepted May 10–14. School student registration opens June 24 and closes June 30, 2026.',
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
