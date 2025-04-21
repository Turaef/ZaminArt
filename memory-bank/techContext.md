# Technical Context

## Technology Stack
- **Frontend Framework**: React.js
- **Styling**: Tailwind CSS for utility-based styling
- **Build Tool**: Vite
- **Package Manager**: npm
- **Languages**: JavaScript (JSX)

## Development Environment
- Node.js runtime
- ESLint for code quality
- PostCSS for CSS processing
- Git for version control

## Project Structure
The project follows a standard Vite + React structure:
- `/src`: Source code
  - `/components`: React components
    - `Navbar.jsx`: Navigation bar with logo and Uzbek links
    - `Hero.jsx`: Main hero section with headline and CTA
    - `ModelSelector.jsx`: Buttons for selecting flooring type
    - `Gallery.jsx`: Dynamic image gallery based on selection
    - `Benefits.jsx`: Product benefit cards
    - `Pricing.jsx`: Pricing information
    - `Contact.jsx`: Contact information and Telegram button
    - `FAQ.jsx`: Frequently asked questions
    - `AnimatedSection.jsx`: Utility component for animations
  - `/assets`: Static assets
    - `/images`: Image files
      - `/3d`: 3D flooring images
      - `/abstrack`: Abstract flooring images
      - `/naqshlik`: Patterned flooring images
    - `/videos`: Video files
  - `App.jsx`: Main application component
  - `main.jsx`: Entry point
  - `index.css`: Global styles
- `/public`: Static assets
- `index.html`: Entry point
- Configuration files: 
  - `vite.config.js`
  - `tailwind.config.js`
  - `postcss.config.js`
  - `eslint.config.js`

## Dependencies
- React for UI components
- Tailwind CSS for styling
- Additional packages for animations or interactions may be needed

## Design System
- Color palette:
  - Primary: white/light beige background
  - Accent: soft green (#7BB66D)
- Typography:
  - Font family: Inter or Poppins
  - Size scale: Using Tailwind's text-xl, text-2xl, etc.
- Component styling:
  - Rounded corners (rounded-2xl)
  - Soft shadows (shadow-xl)
  - Hover effects (hover:scale-105)
- Responsive design:
  - Mobile-first approach
  - Tailwind's responsive modifiers (sm:, md:, lg:, etc.)

## Localization
- All text content in Uzbek language
- UTF-8 encoding to support Uzbek characters

## Deployment
Deployment strategy to be determined. Options include:
- Static site hosting (Netlify, Vercel, GitHub Pages)
- Container-based deployment
- Traditional web hosting

## Technical Constraints
- Must support mobile devices
- Performance optimization for potentially slow internet connections
- Support for Uzbek language (UTF-8 encoding)

*Note: This document will be updated as more technical details are discovered during development.* 