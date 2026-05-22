# Parama Herath - Portfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

A modern personal portfolio built with React, TypeScript, and Vite.

This site showcases projects, skills, education/work experience, and contact details with a smooth motion-driven UI and a custom animated star background.

## Highlights

- Responsive single-page portfolio layout
- Section-based navigation (Projects, Skills, Experience, Contact)
- Animated hero and scroll-based effects using Framer Motion
- Canvas-driven moving star background
- Project cards with technology tags and links
- Resume quick-access link from the hero section

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS (v4)
- Framer Motion
- React Icons

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Vite will start a local dev server (typically at `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Type-check and build production assets
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint

## Project Structure

```text
src/
  App.tsx
  main.tsx
  index.css
  components/
    Navbar.tsx
    Hero.tsx
    Projects.tsx
    Skills.tsx
    Experience.tsx
    Contact.tsx
    StarBackground.tsx
public/
  images/
```

## Customization Guide

- Update hero intro text and social links in `src/components/Hero.tsx`
- Edit/add projects in `src/components/Projects.tsx`
- Update skill categories in `src/components/Skills.tsx`
- Update timeline entries in `src/components/Experience.tsx`
- Change contact email in `src/components/Contact.tsx`
- Replace project screenshots in `public/images/`
- Keep your resume PDF at `public/ParamaHerath.pdf` (or update the link in Hero)

## Build for Production

```bash
npm run build
```

Build output is generated in the `dist/` folder.

## License

This project is for personal portfolio use.
