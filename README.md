# Dixon Araya — Engineering Portfolio

English portfolio built with Next.js App Router, TypeScript, Tailwind CSS 4, and Lucide icons. Exports to static HTML for future Vercel or Netlify deployment.

## Develop

Requires Node.js 20.9 or later.

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000. Run `npm run typecheck` and `npm run build` to validate. Static output is written to `out/`.

## Structure

- `src/data/portfolio.ts`: profile, contact URLs, skill categories, projects, and education.
- `src/components/ui.tsx`: reusable section headings and resource links.
- `src/app/page.tsx`: page composition and professional responsibility summaries.
- `src/app/layout.tsx`: language and SEO metadata.
- `src/app/globals.css`: responsive theme, motion preferences, and styling.
- `public/`: verified resume PDF and architecture diagrams.

## Content maintenance

Set `profile.contact.email`, `linkedin`, `github`, and `resume` when verified. For the resume, add `public/resume.pdf` and set the URL to `/resume.pdf`. Empty resources display a non-clickable Coming soon state. Set project `repo` and `diagram` links only when available. Add new projects and education by extending their arrays. Add future article or case study pages under `src/app/`; remove static export if introducing features requiring a server.

The AWS project is explicitly in development. Its planned scope is not represented as completed work. Professional case studies omit employer identities, dates, confidential artifacts, and unverified outcomes. CKA is examination preparation; Cisco Networking Academy is training rather than a claim of active CCNA certification. Skill categories combine professional exposure, training, and learning without proficiency scores.

## Future deployment

- Vercel: import the project directory, select Next.js, and use `npm run build`.
- Netlify: set build command `npm run build` and publish directory `out` for this static export.
- After choosing a real domain, add `metadataBase` and canonical metadata in `layout.tsx`, and create sitemap/robots files using that domain.

No site has been published. Contact information and the English resume PDF supplied by Dixon are configured. AWS and Clubscope repository links are configured; architecture diagrams remain pending.


## Portrait and future website
Front and side portraits are stored in public/portrait-front.png and public/portrait-side.png. Their URLs are configured in src/data/portfolio.ts. Hover shows the side portrait; click, tap, or Enter toggles portraits. Escape restores the front view. Both images use a grayscale treatment with reduced-motion support. Configure futureWebsite with the real title, description and URL, then set visible to true to show the web project. No project details are invented.

## Windows compiler compatibility
The dev and build scripts explicitly use --webpack. This allows Next.js to use its SWC WebAssembly fallback if the Windows native SWC binding cannot load. Run npm.cmd run dev and keep the terminal open. Type checking is available through npm.cmd run typecheck.

