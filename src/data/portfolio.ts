export const profile = {
  name: 'Dixon G. Araya Arias',
  title: 'DevOps Engineer | Site Reliability Engineer | Cloud Engineer',
  tagline: 'Building reliable infrastructure, automating operations, and solving complex production challenges.',
  location: 'Costa Rica',
  youtube: { channelId: 'UCJLRzlLBtO6fx9XSEoXWqTA', url: 'https://www.youtube.com/@dixong.arayaarias9273' },
  portrait: { src: '/portrait-front.png', side: '/portrait-side.png', alt: 'Portrait of Dixon G. Araya Arias' },
  // Public contact details supplied by Dixon. Resume is served from public/.
  contact: { email: 'dixon.ar08@gmail.com', linkedin: 'https://www.linkedin.com/in/dixon-araya-devops/', github: 'https://github.com/TavoA2', resume: '/Dixon_Araya_Software_Engineer_DevOps_Cloud_CV.pdf' },
};
export const skills = [
  { category: 'Cloud', items: 'AWS · Azure' },
  { category: 'Containers', items: 'Kubernetes · Docker · Helm' },
  { category: 'Infrastructure as code', items: 'Terraform · Bicep · ARM' },
  { category: 'CI/CD', items: 'Jenkins · GitHub Actions · Azure DevOps' },
  { category: 'Operating systems', items: 'Linux · Windows Server' },
  { category: 'Observability', items: 'Grafana · Splunk · CloudWatch · Azure Monitor' },
  { category: 'Networking & security', items: 'TCP/IP · DNS · TLS/SSL · IAM · RBAC' },
  { category: 'Automation', items: 'Bash · Python · Ansible' },
  { category: 'Collaboration', items: 'Git · Jira · ServiceNow · Confluence' },
];
export const projects = [
  { number: '01', title: 'AWS Cloud Infrastructure Automation', type: 'Personal project · In development', summary: 'Designing and progressively implementing AWS infrastructure with Terraform, with a focus on reproducible environments and clear infrastructure boundaries.', details: 'Planned scope: VPC networking, public and private subnets, security groups, EC2, IAM, ECR, and CloudWatch. Completed features have not yet been verified for publication.', tags: ['AWS', 'Terraform', 'EC2', 'VPC', 'IAM', 'CloudWatch', 'Linux'], repo: 'https://github.com/TavoA2/AWS-DEVOPS-LAB', diagram: '', diagramNote: 'Architecture diagram will be added after the implementation is verified.' },
  { number: '02', title: 'Enterprise Kubernetes Operations', type: 'Professional experience', summary: 'Supported enterprise applications running on Kubernetes through deployment troubleshooting, pod lifecycle management, connectivity analysis, and production incident investigation.', details: 'Coordinated with infrastructure teams to investigate application and platform issues. This overview intentionally excludes confidential environments and corporate artifacts.', tags: ['Kubernetes', 'Helm', 'Jenkins', 'Linux', 'Istio', 'Grafana'], repo: '', diagram: '', diagramNote: '' },
  { number: '03', title: 'Enterprise Security & Production Reliability', type: 'Professional experience', summary: 'Participated in certificate renewals, credential rotations, application troubleshooting, and controlled production deployments.', details: 'Worked with infrastructure and security teams to investigate incidents, validate changes, and support service reliability within production change processes.', tags: ['Linux', 'Windows Server', 'Akeyless', 'TLS/SSL', 'ServiceNow', 'Jira'], repo: '', diagram: '', diagramNote: '' },
  { number: '04', title: 'Clubscope Platform', type: 'Personal project · In development', summary: 'A local Kubernetes platform built with kind, exploring infrastructure automation and platform engineering.', details: 'The project documents a local development environment, GitOps workflows, observability, and cluster policies. Migration to managed cloud Kubernetes is part of the roadmap.', tags: ['Kubernetes', 'kind', 'Terraform', 'ArgoCD', 'GitHub Actions', 'Prometheus', 'Grafana', 'Kyverno'], repo: 'https://github.com/TavoA2/clubscope-platform', diagram: '', diagramNote: '' },
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
