# Mohammad Rumman — personal portfolio

A static React + TypeScript portfolio updated from `Rumman_CV.docx`, with a PDF exported using Microsoft Word. Vite, Tailwind CSS v4, Framer Motion, Lucide, and shadcn-compatible components. No backend or environment variables required.

## Run locally

Install Node.js 22+ (LTS), then:

```sh
npm install
npm run dev
```

```sh
npm run build
npm run preview
```

## Deploy to GitHub Pages

This checkout is connected to https://github.com/mahmadru/Rumman-portfolio.git.
Commit and push these files to the `main` branch. In GitHub repository **Settings — Pages — Build and deployment**, select **GitHub Actions**. The included workflow builds and deploys on every push to main, or via its manual Run workflow button.

Expected URL after successful deployment: https://mahmadru.github.io/Rumman-portfolio/

Vite's base is `/Rumman-portfolio/`. Change `base` in `vite.config.ts` if renaming the repository or deploying at a custom-domain root (`/`). All resume links use `import.meta.env.BASE_URL`.

## Structure and editing

- `src/App.tsx`: resume-based About, Skills, Experience, Projects and Contact content.
- `src/components/ui/prisma-hero.tsx`: supplied Prisma hero adapted to the resume. Includes WordsPullUp and WordsPullUpMultiStyle; original unrelated Prisma copy replaced with real details.
- `src/components/demo.tsx`: isolated hero demo.
- `src/components/ui/button.tsx`: shadcn-style Slot/CVA button.
- `src/index.css`: global styles, Tailwind import and responsive design tokens.
- `components.json`: shadcn aliases; `@` maps to `src` in both Vite and TypeScript.
- `public/Rumman_CV.pdf`: downloadable current resume, converted from the root `Rumman_CV.docx`.

The logical `/components/ui` path lives at `src/components/ui`, matching `@/components/ui`. Keeping reusable UI here makes shadcn CLI additions and imports consistent. Tailwind and TypeScript are already configured; no separate setup is needed. Optional additional shadcn components: `npx shadcn@latest add <component>`.

The correct animation dependency is `framer-motion` (the request's `frame-motion` spelling was corrected). Reduced-motion preferences are respected. The original remote video is replaced by a local CSS infrastructure illustration, avoiding third-party video availability and autoplay concerns. Project diagrams illustrate each topic, not product screenshots. No stock images are required by this design.

Content is based on the supplied resume, with the GitHub profile derived from the supplied repository owner. No invented project URLs, metrics, testimonials or certifications. The contact button opens an email client; no contact-form service is configured. Review published contact details before deploying publicly.

UI/UX Pro Max was installed using the Codex skill-installer from https://github.com/nextlevelbuilder/ui-ux-pro-max-skill and used for minimal Swiss-style layout, responsive behavior, focus accessibility and reduced-motion guidance. Visual direction: ivory, charcoal and lime; editorial type; platform-inspired diagrams.

## Verification

Production TypeScript/Vite build passed. Headless Chrome checks passed at 375, 768 and 1440 pixels with reduced motion: six sections, no horizontal overflow, working mobile navigation, PDF HTTP 200 and no browser runtime errors. QA screenshots are local ignored files.

Repository layout: the application is in website/. The active GitHub Actions workflow is /.github/workflows/deploy.yml at the repository root and builds website/dist. Run git commands from the parent repository; website is a normal tracked folder.

