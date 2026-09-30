# Tega Oboraruvwe — portfolio

React 18 + Vite 5 portfolio focused on React Native, Expo, TypeScript, fintech, and real-time product engineering.

## Run and check

```sh
npm ci
npm run dev -- --host 127.0.0.1
npm run lint
npm test
npm run build
npm run preview -- --host 127.0.0.1
```

The redesigned entrypoint is `src/App.jsx`; portfolio copy, experience, and external destinations live in `src/portfolio.js`. Styling is in `src/index.css`. Unmounted previous-design components and their assets remain in the repository for reference; lint covers the active entrypoint and its modules.

## Content and interaction notes

- The three selected case studies distinguish independent product work from professional contributions. Expand “My contribution” for role, engineering focus, and attribution.
- BorderGuide and Vendor Hub graphics are labeled journey/workflow illustrations, not screenshots of an app the portfolio claims to own. The Access Wealth screenshot is labeled company-site context.
- All sixteen original project destinations remain, with thirteen in the expandable archive. Links may be unavailable or change independently of this site.
- The existing generic CV link is preserved.
- The contact form opens a draft in the visitor's own email app. It does not send through a backend or claim delivery. The direct email link and copy button provide alternatives.
- Native disclosure controls, a skip link, visible keyboard focus, menu state/escape handling, mobile breakpoints, and reduced-motion support are included.

## Local review status

`npm run build`, `npm run lint`, and `npm test` are the verification commands. Tests cover data integrity, original destinations, contact encoding, truthful positioning safeguards, and source-level accessibility wiring. They are not browser end-to-end tests.

No remote push or deployment is part of this local redesign. The existing Netlify redirect configuration is unchanged.
