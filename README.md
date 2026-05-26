# Animesh Tripathi — Interactive Developer Portfolio

A premium, high-performance, and visually stunning developer portfolio landing page. Built with **React 18**, **TypeScript**, **Vite**, **Framer Motion**, and **Tailwind CSS**, this single-page site showcases full-stack capabilities, AI integrations, skills, and interactive projects.

Live Site: [View Portfolio on Vercel](https://animeshtripathi.vercel.app/) *(or your deployed Vercel URL)*

---

## ✨ Features

- **🎬 Split-Screen Curtain Preloader**: A cinematic loading screen that counts to `100%` while typing out the name and role. Once loaded, the entire screen and portrait split down the center and slide outward like curtains to reveal the site.
- **✍️ Synchronized Hero Typing**: The main hero title `HI, I'M ANIMESH` types out in real-time, perfectly timed with the parting of the preloader curtains.
- **📱 Responsive Split Hero Layout**: A clean layout containing the developer title, role slogan, and contact CTA on the left, and a professional suit portrait on the right (stacked vertically on mobile).
- **🗂️ Interactive Projects Stack**: Projects are rendered as sticky, stacking cards that calculate scale, opacity, and position dynamically as the user scrolls.
- **🛠️ Responsive Media & Grid Layouts**: Renders 1-image or 2-image horizontal grids inside project cards to maintain original aspect ratios of website screenshots.
- **💼 CV Download**: Integrated direct download for `Animesh_Tripathi_CV.pdf` directly from the header navigation.
- **📱 Fully Responsive**: Tailored from mobile screens up to ultra-wide displays using custom HSL colors, Kanit typography, and Tailwind utility classes.

---

## 🚀 Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 8](https://vite.dev/) (Client Environment)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Configured for [Vercel](https://vercel.com/) with SPA redirections (`vercel.json`)

---

## 🛠️ Local Development & Setup

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18+ recommended) installed on your system.

### 1. Clone the Repository
```bash
git clone https://github.com/animeshtripathii/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
To build the application into the static `dist/` directory:
```bash
npm run build
```

---

## 🌐 Vercel Deployment

This project is pre-configured with a custom `vercel.json` configuration at the root level, making it deploy-ready:

1. Connect your GitHub repository to [Vercel](https://vercel.com/).
2. Select the repository `Portfolio`.
3. Vercel will automatically detect the **Vite** preset and use the following parameters:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Vercel will handle the rest!

---

## 📄 License
This project is private and created as a personal developer portfolio.
