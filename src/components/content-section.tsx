import { ArrowUpRight, Youtube, Terminal, Cloud, Container } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { SectionHeading } from './ui';

const themes = [
  { icon: Cloud, label: 'Cloud & infrastructure', text: 'AWS labs and infrastructure as code.' },
  { icon: Container, label: 'Kubernetes & platforms', text: 'Local environments and platform engineering.' },
  { icon: Terminal, label: 'Operations & troubleshooting', text: 'A practical approach to production challenges.' },
];

export function ContentSection() {
  return <section id="content" className="section shell content-section">
    <SectionHeading index="06" eyebrow="LEARNING IN PUBLIC" title="Build. Document. Share."/>
    <div className="channel-feature">
      <div className="channel-art" aria-hidden="true"><span className="channel-art-label">ENGINEERING NOTES</span><div className="channel-glyph"><Youtube size={44} strokeWidth={1.2}/></div><span className="channel-art-bottom">DIXON ARAYA <span>ON YOUTUBE ↗</span></span></div>
      <div className="channel-copy"><p className="eyebrow"><span className="status-dot"/> CONTENT PLANNED</p><h3>From the lab<br/>to the conversation.</h3><p>I’m planning to share technical content on YouTube. A space to document what I learn while building infrastructure and exploring DevOps.</p><a className="button channel-button" href={profile.youtube.url} target="_blank" rel="noopener noreferrer"><Youtube size={17}/> Visit my channel <ArrowUpRight size={16}/></a><p className="channel-handle">@dixong.arayaarias9273</p></div>
    </div>
    <div className="content-themes"><p className="small-label">POSSIBLE FUTURE TOPICS</p><div>{themes.map(({ icon: Icon, label, text }) => <article key={label}><Icon size={19} strokeWidth={1.4}/><h4>{label}</h4><p>{text}</p></article>)}</div></div>
  </section>;
}
