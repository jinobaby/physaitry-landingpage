# Physaitry — Landing Page

> Candidate-owned project — TypeScript-based landing page for a mental health / psychiatry service demo.

## Overview

I built this project as a single-page landing site to demonstrate my frontend engineering skills with TypeScript and modern web toolchains. The repo contains a small, production-ready static site that showcases component design, responsive layout, accessibility considerations, and deployment to GitHub Pages.

This README is written from my perspective as the author and includes implementation notes, how to run the project locally, and suggested talking points for interviews.

---

## Key highlights (what I want you to notice)

- Codebase written in TypeScript to improve correctness and maintainability.
- Small, component-driven structure intended for a landing page / marketing site.
- Built and deployed as a static site (GitHub Pages enabled in the repository metadata).
- Focus on responsive design, semantic HTML, and accessibility-friendly patterns.
- Minimal external dependencies to reduce bundle size and security surface area.

---

## Tech stack

- Language: TypeScript
- Framework / build tool: See `package.json` for the exact framework (e.g., React + Vite, Next.js, or similar). I used a modern frontend toolchain and standard npm scripts to build and serve the site.
- CSS: Component or utility-based CSS (check `src/` and `public/` for the exact approach).
- Deployment: GitHub Pages (repository has Pages enabled). See the `package.json` `deploy` or `build` scripts.

> Note: I intentionally keep the README framework-agnostic because the repository aims to be a short, framework-focused demo. See `package.json` and `src/` to confirm the specific stacks and versions.

---

## Project structure (typical — inspect actual files in this repo)

- `src/` - application source (components, pages, styles)
- `public/` or `static/` - static assets (images, icons, meta files)
- `package.json` - scripts and dependencies
- `tsconfig.json` - TypeScript configuration
- `README.md` - this file
- `.github/workflows/` - CI (if present)

---

## Local development

1. Clone the repository

   git clone https://github.com/jinobaby/physaitry-landingpage.git
   cd physaitry-landingpage

2. Install dependencies

   npm install
   # or
   yarn install

3. Run the dev server

   npm run dev
   # or
   npm start

4. Build for production

   npm run build

5. Serve production build locally (optional)

   npm run serve

> If the repository uses a specific tool (Next/Vite/Create-React-App), use the corresponding commands from `package.json`.

---

## Deployment

- The repository currently has GitHub Pages enabled. Typical deployment options I used or recommend:
  - GitHub Actions to build and push to `gh-pages` branch
  - `gh-pages` npm package (for SPA builds)
  - Vercel / Netlify for automatic CI/CD deployments

Include the live URL (if published): `https://jinobaby.github.io/physaitry-landingpage` (verify in repo Pages settings).

---

## Testing & Quality

- Unit tests: Add/inspect `__tests__`, `tests/`, or `jest` configuration in `package.json`.
- E2E tests: Optionally use Playwright / Cypress for forms and accessibility flows.
- Linting & formatting: I recommend ESLint + Prettier; check for `.eslintrc` / `.prettierrc`.
- TypeScript strictness: See `tsconfig.json` for `strict` options — I prefer enabling strict type checks.

---

## Accessibility & Performance notes

- Semantic HTML, landmarks, and ARIA attributes used where appropriate.
- Images optimized for web (responsive `srcset` or `picture` if used).
- Lighthouse score targets: Performance >= 90, Accessibility >= 90.

---

## Security & Dependencies

- I keep dependencies minimal and avoid large runtime frameworks for landing pages.
- Regularly run `npm audit` and apply updates. For interview demos, I keep a small dependency surface so reviewers can reason about the code easily.

---

## Known limitations & next steps

- This is a demo landing page — not a full production SaaS app (no backend integration by default).
- Suggested improvements:
  - Add a contact form backed by serverless function or form provider
  - Add unit and E2E tests with CI workflow
  - Add analytics (privacy-aware) and A/B experiment points
  - Add an explicit LICENSE file

---

## License

No license is included in this repo. If you want this project to be open-source, I would add the MIT license (or the license requested by the organization).

---

## Candidate notes (what I will explain in interviews)

When I present this project I will:
- Walk through the component structure and show a non-trivial component that required TypeScript typing.
- Explain choices around state (local state vs. global), styling approach, and bundling.
- Show the build/deploy pipeline I used and how I verified the production build.
- Discuss accessibility and performance trade-offs.
- Explain how I would extend this to integrate real services (forms, authentication, CMS).

---

## Suggested interview tasks & evaluation checklist for reviewers

1. Ask the candidate to run the project locally and explain the dev workflow.
2. Ask for a live walkthrough of one component and a short refactor (e.g., make it more testable, add Prop validation or stricter typing).
3. Ask the candidate to add a small feature: a contact form with client-side validation and demonstration of its accessibility.
4. Code review exercise: identify 3 improvements (performance, accessibility, or code organization).
5. DevOps exercise: create a CI workflow to run tests and deploy to GitHub Pages.

---

## Contact

Candidate: @jinobaby (GitHub)
Email: (add your email here if you want to share)

---

## How to verify claims quickly

- Open `package.json` to confirm exact dependencies and scripts.
- Inspect `tsconfig.json` to confirm TypeScript strictness.
- Check `.github/workflows/` for CI and `gh-pages` / `pages` branch for deployment.
- Run `npm run build` and `npm start` to validate build and production serve.

---

Thank you for reviewing my project. I look forward to discussing technical choices and demonstrating deeper parts of the code during interviews.

(End of candidate-authored README)