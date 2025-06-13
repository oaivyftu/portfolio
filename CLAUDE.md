# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development**: `npm run dev` - Starts Next.js development server on http://localhost:3000
- **Build**: `npm run build` - Creates production build
- **Production**: `npm start` - Runs production server
- **Lint**: `npm run lint` - Runs ESLint for code quality checks

## Architecture Overview

This is a **Next.js 14** portfolio website using the **App Router** with the following key architectural components:

### Internationalization (i18n)
- Uses **next-intl** for internationalization with support for English (en), French (fr), and Vietnamese (vi)
- Localized routes are handled via `[locale]` dynamic segments in the app directory
- Middleware (`middleware.ts`) handles locale detection and routing
- Navigation utilities in `i18n/navigation.ts` provide locale-aware routing functions
- Translation files are stored in the `messages/` directory

### Styling & UI
- **Tailwind CSS** with custom configuration including dark mode support
- **Framer Motion** for animations and transitions
- **next-themes** for theme switching (light/dark mode)
- Custom color scheme: primary (#1a1b1f), secondary (#32343a)
- Design system approach with reusable UI components in `components/ui/`

### 3D Graphics & Animation
- **Three.js** with **@react-three/fiber** and **@react-three/drei** for 3D scenes
- **three-globe** for interactive globe visualization
- **GSAP** for advanced animations
- **react-lottie** for Lottie animations
- 3D model files (.glb) stored in public directory

### Data Management
- Static data configuration in `data/index.ts` with work experience, skills, and project details
- TypeScript interfaces defined in `types/index.ts`
- Project data includes multilingual descriptions for all supported locales

### Key Components Structure
- `Header` - Navigation with theme toggle and internationalization
- `Hero` - Main landing section with 3D elements
- `MyExperience` - Work experience timeline
- `RecentProjects` - Project showcase with dynamic routing
- `ContactBox` - Contact form/information
- `Footer` - Site footer

### Dynamic Routing
- Project details accessible via `/projects/[project]` with dynamic project loading
- Locale-prefixed routes for all pages (e.g., `/en/projects/immoscout24`)

### Image Optimization
- Uses **@plaiceholder/next** for optimized image loading with placeholders
- WebP images stored in public directory with organized subdirectories

## Development Notes

- The site uses TypeScript throughout with strict typing
- Component files follow the .tsx convention
- Global styles are in `app/globals.css`
- The theme provider wraps the entire application for consistent theming
- Responsive design is implemented using Tailwind's responsive utilities