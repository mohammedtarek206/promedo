/** Set your GitHub username or profile; used when a project has no repo link. */
export const defaultGithubProfile = 'https://github.com';

export type ProjectItem = {
  id: string;
  name: string;
  description: string;
  liveUrl: string;
  githubUrl?: string;
  accent: string;
};

/** Preview via screenshot proxy (lazy-loaded). Replace githubUrl when repos are public. */
export const projects: ProjectItem[] = [
  {
    id: 'arqam',
    name: 'Arqam Academic Platform',
    description:
      'Full-featured academic ecosystem for courses, learners, and content delivery — built for scale and clarity.',
    liveUrl: 'https://www.arqamacademic.com/',
    accent: 'from-cyan-500/30 to-blue-600/20',
  },
  {
    id: 'it-spark',
    name: 'IT-SPARK Platform',
    description:
      'Modern IT education hub showcasing programs, pathways, and a polished UX for learners.',
    liveUrl: 'https://it-spark.vercel.app/',
    accent: 'from-emerald-500/30 to-teal-600/20',
  },
  {
    id: 'elgam3iaa',
    name: 'Charity System (El Gam3iaa)',
    description:
      'Security-hardened charity management flows with transparent donor and case handling UX.',
    liveUrl: 'https://elgam3iaa.vercel.app/',
    accent: 'from-sky-500/30 to-cyan-600/20',
  },
  {
    id: 'sysca',
    name: 'Secure System Platform (Sysca)',
    description:
      'Systems-oriented platform emphasizing secure workflows and operational dashboards.',
    liveUrl: 'https://sysca.vercel.app/',
    accent: 'from-violet-500/30 to-cyan-600/20',
  },
  {
    id: 'binaa',
    name: 'Binaa Platform',
    description:
      'Structured digital presence for institutional programs with responsive, fast delivery.',
    liveUrl: 'https://binaa-gray.vercel.app/',
    accent: 'from-emerald-600/25 to-green-900/20',
  },
  {
    id: 'mr-code',
    name: 'Mr Code Platform',
    description:
      'Developer-focused experience with crisp navigation and immersive tech branding.',
    liveUrl: 'https://mr-code-rho.vercel.app/',
    accent: 'from-cyan-400/25 to-emerald-500/15',
  },
  {
    id: 'system-lab',
    name: 'System Lab Project',
    description:
      'Experimental lab UI for tooling, integrations, and system-level visualization.',
    liveUrl: 'https://system-lab-alpha.vercel.app/',
    accent: 'from-blue-500/25 to-cyan-500/20',
  },
  {
    id: 'shendy',
    name: 'Ahmed Shendy Website',
    description:
      'Professional personal site with refined typography, smooth motion, and brand presence.',
    liveUrl: 'https://www.mrahmed-shendy.com/',
    accent: 'from-teal-500/25 to-emerald-600/20',
  },
  {
    id: 'elghzali',
    name: 'Elghazali Platform',
    description:
      'Platform experience delivering educational content with a secure, modern stack.',
    liveUrl: 'https://elghzali.vercel.app/',
    accent: 'from-cyan-500/20 to-violet-600/15',
  },
];

export function previewImageUrl(siteUrl: string): string {
  const encoded = encodeURIComponent(siteUrl);
  return `https://image.thum.io/get/width/1200/crop/800/noanimate/${encoded}`;
}
