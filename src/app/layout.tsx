import type { Metadata } from 'next';
import './globals.css';
import './minimal.css';
export const metadata: Metadata = {
  title: 'Dixon G. Araya Arias | DevOps, SRE & Cloud Engineer',
  description: 'Computer Engineer based in Costa Rica with 5 years of IT experience across application operations, system administration, and cloud-native environments.',
  openGraph: { title: 'Dixon G. Araya Arias | Engineering Portfolio', description: 'Reliable infrastructure. Thoughtful automation. Production experience.', type: 'website', locale: 'en_US' },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

