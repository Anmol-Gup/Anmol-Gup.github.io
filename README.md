# Surya Prakash Gupta — Portfolio

Personal portfolio site. Built with React, Vite, and Tailwind CSS.

Live at: https://anmol-gup.github.io

## Development

```
npm install
npm run dev
```

## Content

All copy (bio, experience, projects, skills, certifications, education) lives in
[`src/data/content.js`](src/data/content.js) — edit that file to update the site, no
component code needs to change.

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes it to GitHub Pages.
