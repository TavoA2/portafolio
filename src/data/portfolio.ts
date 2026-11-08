export const profile = {
  name: 'Dixon G. Araya Arias',
  title: 'DevOps Engineer | Site Reliability Engineer | Cloud Engineer',
  tagline: 'Building reliable infrastructure, automating operations, and solving complex production challenges.',
  location: 'Costa Rica',
  website: 'https://buildream-web.vercel.app/',
  youtube: { channelId: 'UCJLRzlLBtO6fx9XSEoXWqTA', url: 'https://www.youtube.com/@dixong.arayaarias9273' },
  portrait: { src: '/portrait-front.png', side: '/portrait-side.png', alt: 'Portrait of Dixon G. Araya Arias' },
  // Public contact details supplied by Dixon. Resume is served from public/.
  contact: { email: 'dixon.ar08@gmail.com', linkedin: 'https://www.linkedin.com/in/dixon-araya-devops/', github: 'https://github.com/TavoA2', resume: '/Dixon_Araya_Software_Engineer_DevOps_Cloud_CV.pdf' },
};
export const skillGroup = {
  title: 'Professional experience',
  description: 'Tools from my professional work and personal projects, plus a reference for comparing secrets management platforms.',
  rows: [
    { category: 'Systems & platforms', items: ['Linux', 'Windows Server', 'Kubernetes', 'Helm', 'Istio', 'Docker', 'kind'] },
    { category: 'Operations & delivery', items: ['Jenkins', 'GitHub Actions', 'GitHub Container Registry', 'Argo CD', 'Jira', 'ServiceNow'] },
    { category: 'Security & reliability', items: ['Akeyless', 'Venafi', 'TLS/SSL', 'Certificate renewal', 'Credential rotation', 'Kyverno', 'HashiCorp Vault'] },
    { category: 'Cloud & infrastructure', items: ['AWS', 'Azure', 'Terraform', 'AWS IAM', 'OIDC', 'Nginx'] },
    { category: 'Observability', items: ['Grafana', 'Amazon CloudWatch', 'Prometheus', 'Alertmanager'] },
    { category: 'Application development', items: ['Java', 'Go', 'PostgreSQL', 'Python', 'Flask', 'Astro', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
  ],
};
export const projects = [
  { number: '01', title: 'AWS Cloud Infrastructure Automation', type: 'Personal project · In development', summary: 'Designing and progressively implementing AWS infrastructure with Terraform, with a focus on reproducible environments and clear infrastructure boundaries.', details: 'Planned scope: VPC networking, public and private subnets, security groups, EC2, IAM, ECR, and CloudWatch. Completed features have not yet been verified for publication.', tags: ['AWS', 'Terraform', 'EC2', 'VPC', 'IAM', 'CloudWatch', 'Linux'], repo: 'https://github.com/TavoA2/AWS-DEVOPS-LAB', diagram: '/aws-devops-lab-architecture.svg', diagramNote: 'AWS DevOps Lab architecture diagram.' },
  { number: '02', title: 'Enterprise Kubernetes Operations', type: 'Professional experience', summary: 'Supported enterprise applications running on Kubernetes through deployment troubleshooting, pod lifecycle management, connectivity analysis, and production incident investigation.', details: 'Coordinated with infrastructure teams to investigate application and platform issues. This overview intentionally excludes confidential environments and corporate artifacts.', tags: ['Kubernetes', 'Helm', 'Jenkins', 'Linux', 'Istio', 'Grafana'], repo: '', diagram: '', diagramNote: '' },
  { number: '03', title: 'Enterprise Security & Production Reliability', type: 'Professional experience', summary: 'Participated in certificate renewals, credential rotations, application troubleshooting, and controlled production deployments.', details: 'Worked with infrastructure and security teams to investigate incidents, validate changes, and support service reliability within production change processes.', tags: ['Linux', 'Windows Server', 'Akeyless', 'TLS/SSL', 'ServiceNow', 'Jira'], repo: '', diagram: '', diagramNote: '' },
  { number: '04', title: 'Clubscope Platform', type: 'Personal project · In development', summary: 'A local Kubernetes platform built with kind, exploring infrastructure automation and platform engineering.', details: 'The project documents a local development environment, GitOps workflows, observability, and cluster policies. Migration to managed cloud Kubernetes is part of the roadmap.', tags: ['Kubernetes', 'kind', 'Terraform', 'ArgoCD', 'GitHub Actions', 'Prometheus', 'Grafana', 'Kyverno'], repo: 'https://github.com/TavoA2/clubscope-platform', diagram: '', diagramNote: '' },
  { number: '05', title: 'Buildream', type: 'Web project', summary: 'A bilingual website for an IT and AI consulting business, built with Astro and Tailwind CSS.', details: 'Spanish and English routes cover services, contact, and an AI readiness questionnaire that carries its results into the contact form.', tags: ['Astro', 'Tailwind CSS', 'Internationalization'], repo: 'https://github.com/TavoA2/buildream-web', diagram: '', diagramNote: '' },
  { number: '06', title: 'TaskFlow', type: 'Personal project · Kubernetes lab', summary: 'A task and request manager built to practice deployment, persistence, monitoring, and recovery on Kubernetes.', details: 'The Go API and Nginx frontend use PostgreSQL. GitHub Actions runs tests, scans images with Trivy, generates SBOMs, and publishes images to GHCR. The diagram is a snapshot of the lab and labels pending and planned work separately.', tags: ['Go', 'PostgreSQL', 'Docker', 'Kubernetes', 'GitHub Actions', 'Trivy'], repo: 'https://github.com/TavoA2/taskflow-app', diagram: '/taskflow-architecture.png', diagramWidth: 3960, diagramHeight: 2880, diagramNote: 'TaskFlow lab architecture snapshot' },
  { number: '07', title: 'Agent HQ', type: 'Personal project · Agent platform', summary: 'An agent workspace with a Next.js interface, a FastAPI backend, and a LangGraph worker.', details: 'Caddy handles HTTPS entry. PostgreSQL stores application data, queued jobs, and checkpoints. A sandbox runner executes tests in ephemeral Docker containers without network access or root privileges. GitHub draft pull requests require approval; OpenAI and notification channels are optional integrations.', tags: ['Caddy', 'Next.js', 'FastAPI', 'LangGraph', 'PostgreSQL', 'Docker'], repo: '', diagram: '/agent-hq-architecture.webp', diagramWidth: 5127, diagramHeight: 2109, diagramNote: 'Agent HQ architecture' },
];
export const education = [
  { title: "Bachelor’s Degree in Computer Engineering", institution: 'Universidad Estatal a Distancia (UNED)', status: 'Education' },
  { title: 'CCNA Routing & Switching', institution: 'Cisco Networking Academy', status: 'Training' },
  { title: 'Technical Support', institution: 'Instituto Nacional de Aprendizaje (INA)', status: 'Training' },
  { title: 'Docker, Kubernetes, Jenkins, Git & DevOps practices', institution: 'Additional technical training', status: 'Training' },
  { title: 'Certified Kubernetes Administrator (CKA)', institution: 'Currently preparing for the examination', status: 'In preparation' },
];


// Hidden until Dixon supplies the actual website details.
export const futureWebsite = { visible: false, title: '', description: '', url: '' };
