# TBDCycling Website 

Site for a small DC-based cycling club.

# Updating posters

Name the poster `<Name>_<YYYY-MM-DD>.png` (e.g. `Bethesda-Ride_2026-08-08.png`), drop it in `public/content/posters/`, and push to main. Hyphens become spaces in the title.

Supported image formats: jpg, jpeg, png, webp, gif

# Running Locally

* run `npm install` to install all packages
* run `npm run dev` to run it locally.
* visit `http://localhost:5173/tbdcycling/` 

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
