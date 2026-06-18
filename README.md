# Isuru Adikari — Personal Portfolio

A modern, highly animated personal portfolio website built with React (Vite), Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **React 18** + **Vite 4**
- **Tailwind CSS 3** — utility-first styling
- **Framer Motion 10** — animations
- **React Icons 4** — icon library

## ✨ Features

- 🎆 Animated loading screen with progress bar
- 🌌 Interactive particle background (mouse-reactive)
- 📍 Scroll-progress indicator bar
- 🔝 Back-to-top button
- 📱 Fully responsive (mobile + desktop)
- 🌊 Smooth scroll & section-based active navbar
- 💎 Glassmorphism cards
- ⌨️ Typing animation hero
- 📊 Animated skill progress bars
- 🗂️ Project cards with inline SVG mockup screenshots
- 📅 Animated education timeline
- 📬 Contact form with send animation

## 🛠️ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── About.jsx          # About section + SectionTitle export
│   ├── Contact.jsx        # Contact form + social links
│   ├── Education.jsx      # Animated education timeline
│   ├── Footer.jsx         # Site footer
│   ├── Hero.jsx           # Hero section with typing animation
│   ├── Loader.jsx         # Animated loading screen
│   ├── Navbar.jsx         # Sticky navbar with active highlight
│   ├── ParticleBackground.jsx  # Canvas particle system
│   ├── ProjectSVGs.jsx    # Inline SVG project screenshots
│   ├── Projects.jsx       # Projects grid
│   ├── ScrollIndicator.jsx # Progress bar + back-to-top
│   ├── Section.jsx        # Animated section wrapper
│   └── Skills.jsx         # Skill bars + badges
├── styles/
│   └── globals.css        # Tailwind + custom styles
├── data.js                # All personal data
├── App.jsx                # Root component
└── main.jsx               # Entry point
```

## 🎨 Design Choices

- **Font**: Orbitron (display/headings), Rajdhani (body), JetBrains Mono (code/mono)
- **Colors**: Neon cyan `#00d4ff`, Purple `#9b59ff`, Pink `#ff2d78`, Green `#00ff88`
- **Theme**: Dark futuristic with glassmorphism and neon accents
- **Animations**: Framer Motion for page transitions, scroll reveals, and hover effects

## 📝 Customization

Edit `src/data.js` to update all personal information, skills, projects, and education details.
