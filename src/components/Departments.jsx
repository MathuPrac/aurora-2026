// import { DEPARTMENTS } from '../data'
import './Departments.css'
import {
  LuBot,
  LuShield,
  LuGlobe,
  // LuBarChart,
  LuNetwork,
  LuSettings,
  LuCloud,
  LuLock
} from "react-icons/lu";

 const DEPARTMENTS = [
  {
    icon: LuBot,
    name: 'Agentic AI',
    desc: 'Autonomous AI systems that detect, reason, and respond to real-world threats',
  },
  {
    icon: LuShield,
    name: 'Social Engineering',
    desc: 'Cybersecurity, phishing defence, ethical AI & human-tech interaction',
  },
  {
    icon: LuGlobe,
    name: 'Web Development',
    desc: 'Frontend, backend & full-stack system engineering',
  },
//   {
//   icon: LuBarChart,
//   name: 'Data Science',
//   desc: 'Analytics, machine learning & intelligent data systems',
// },
  {
    icon: LuNetwork,
    name: 'Networking',
    desc: 'Infrastructure, protocols & secure architecture design',
  },
  {
    icon: LuSettings,
    name: 'Software Engineering',
    desc: 'Algorithms, system design & software quality',
  },
  {
    icon: LuCloud,
    name: 'Cloud Computing',
    desc: 'DevOps, containerisation & scalable cloud platforms',
  },
  {
    icon: LuLock,
    name: 'Cybersecurity',
    desc: 'Ethical hacking, cryptography & digital forensics',
  },
];
function Departments() {
  return (
    <section id="departments" className="departments-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">Participating Areas</span>
          <h2 className="section-title">Departments at the Forefront</h2>
          <div className="section-line" />
          <p className="section-desc">Aurora 2026 welcomes students across all computing disciplines — united by a shared passion for technology and innovation.</p>
        </div>
        <div className="dept-grid">
          {/* {DEPARTMENTS.map((d) => {
            const Icon = d.icon;

            return (
              <div key={d.name} className="department-card">
                <Icon size={36} />
                <h4>{d.name}</h4>
                <p>{d.desc}</p>
              </div>
            );
          })} */}
          {DEPARTMENTS.map(d => {
  const Icon = d.icon;

  return (
    <div key={d.name} className="dept-card">
      <span className="dept-icon">
        <Icon size={36} />
      </span>
      <h3>{d.name}</h3>
      <p>{d.desc}</p>
    </div>
  );
})}
        </div>
      </div>
    </section>
  )
}

export default Departments
