import Image from 'next/image';
import { profile, skillGroups } from '@/data/portfolio';
import { ResourceLink, SectionHeading } from './ui';

const brandIcons: Readonly<Record<string, string>> = {
  AWS: 'aws', Kubernetes: 'kubernetes', Docker: 'docker',
  Helm: 'helm', Terraform: 'terraform', Jenkins: 'jenkins',
  'GitHub Actions': 'githubactions', 'GitHub Container Registry': 'github',
  Linux: 'linux', 'Windows Server': 'windows', Grafana: 'grafana',
  Jira: 'jira', Python: 'python', Flask: 'flask', 'Argo CD': 'argocd',
  Prometheus: 'prometheus', Nginx: 'nginx', Astro: 'astro',
  'Next.js': 'nextjs', React: 'react', TypeScript: 'typescript',
  'Tailwind CSS': 'tailwind',
  Istio: 'istio', kind: 'kind', Kyverno: 'kyverno', Java: 'java',
  Go: 'go', PostgreSQL: 'postgresql', 'HashiCorp Vault': 'vault',
  Akeyless: 'akeyless', Venafi: 'venafi',
};

export function TechnicalToolkit() {
  return (
    <section id="expertise" className="section shell">
      <SectionHeading index="02" eyebrow="TECHNICAL TOOLKIT" title="The tools behind the work." />
      {skillGroups.map(({ title, description, rows }) => (
        <section className="toolkit-group" key={title}>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="toolkit-bands">
        {rows.map(({ category, items }) => (
          <div className="toolkit-band" key={category}>
            <h4>{category}</h4>
            <ul className="toolkit-icons">
              {items.map(name => {
                const icon = brandIcons[name];
                return (
                  <li key={name} className={icon ? 'toolkit-brand' : 'toolkit-text'}>
                    {icon && <Image src={`/skill-icons/${icon}.svg`} width={38} height={38} alt="" unoptimized />}
                    <span>{name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
          </div>
        </section>
      ))}
      <ResourceLink href={profile.contact.linkedin}>View LinkedIn profile</ResourceLink>
    </section>
  );
}
