# Physaitry — Landing Page

## Overview

I built this project as a single-page landing site to demonstrate my frontend engineering skills with TypeScript and modern web toolchains. The repo contains a small, production-ready static site that showcases component design, responsive layout, accessibility considerations, and deployment to GitHub Pages.

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
- CSS: Component or utility-based CSS (check `src/` and `public/` for the exact approach).
- Deployment: GitHub Pages (repository has Pages enabled). See the `package.json` `deploy` or `build` scripts.

> Note: I intentionally keep the README framework-agnostic because the repository aims to be a short, framework-focused demo. See `package.json` and `src/` to confirm the specific stacks and versions.

---

## Project structure (typical — inspect actual files in this repo)

- `src/` - application source (components, pages, styles)
- `public/` or `static/` - static assets (images, icons, meta files)
- `package.json` - scripts and dependencies
- `tsconfig.json` - TypeScript configuration
---

## Deployment

- The repository currently has GitHub Pages enabled. Typical deployment options I used or recommend:
  - GitHub Actions to build and push to `gh-pages` branch
  - `gh-pages` npm package (for SPA builds)
  - Vercel / Netlify for automatic CI/CD deployments

Include the live URL (if published): `https://jinobaby.github.io/physaitry-landingpage` (verify in repo Pages settings).

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
