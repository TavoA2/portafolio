import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
export function SectionHeading({ index, eyebrow, title }: { index: string; eyebrow: string; title: string }) {
  return <div className="section-heading"><p className="eyebrow"><span>{index}</span> / {eyebrow}</p><h2>{title}</h2></div>;
}
export function ResourceLink({ href, children, download = false }: { href?: string; children: ReactNode; download?: boolean }) {
  return href ? <a className="resource-link" href={href} download={download || undefined} target={download || href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer">{children}<ArrowUpRight size={16}/></a> : <span className="resource-link unavailable" aria-disabled="true">{children}<span className="pending">Coming soon</span></span>;
}
