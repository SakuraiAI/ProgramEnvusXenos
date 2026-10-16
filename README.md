# ProgramEnvusXenos Landing

Dark 3D landing page built with React, Vite, Tailwind CSS, Framer Motion, and React Three Fiber.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

The project is ready for:

- Vercel
- GitHub Pages

`vite.config.js` uses `base: "./"` so static assets resolve correctly in simple static hosting setups too.

## Notes

- Replace the GitHub link in `src/App.jsx`
- Replace the contact email in `src/App.jsx`

# ProgramEnvusXenos

## PGEX rozcestník

- `/`: čistý vstup do obou částí; úvodní animace jednou za relaci, respektuje reduced motion.
- `/autoservis`: servisní část s vlastním menu; `/poptavka` nabízí e-mail a telefon.
- `/technologie`, `/projekty`: technologická část, bez nabídky autoservisu v menu.
- `/o-nas`: společné informace a sociální sítě (ověřené odkazy v `src/Portal.jsx`).
- `/kontakt`: společný kontakt; parametr `oblast` zachová kontext vybrané části.

Původní HTML adresy zůstávají dostupné. Vercel rewrites směrují nové adresy na společný vstup.
Rozcestník, O nás, kontakt a menu jsou česky; původní odborné podstránky zůstávají anglicky.
E-mailový odkaz otevře poštovní program, web sám zprávy neodesílá ani nepotvrzuje rezervace.
