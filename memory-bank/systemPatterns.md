# System Patterns

## Architecture Overview
This landing page follows a modern React component-based architecture. The application is structured as a single-page, scroll-based experience without routing. Components are organized by functionality and rendered in sequence in the main App component.

## Component Structure
- **Component Organization**: Feature-based organization with each major section of the landing page as a separate component
- **State Management**: React useState and useEffect for local component state
- **Component Reusability**: 
  - `AnimatedSection.jsx` for consistent animations across components
  - Common UI patterns like buttons, cards, and sections following consistent styling

## Data Flow
- **Content Structure**: Static content defined within components
- **Image Handling**: Dynamic loading of images based on selected flooring type
- **User Interaction**: 
  - Model selection changes displayed gallery images
  - FAQ toggling for expanding/collapsing answers
  - Scroll behavior from CTA buttons to relevant sections

## UI/UX Patterns
- **Styling Approach**: Tailwind CSS utility classes for consistent styling
- **Design System**:
  - White/light beige backgrounds
  - Soft green accent color (#7BB66D)
  - Rounded corners (rounded-2xl)
  - Soft shadows (shadow-xl)
  - Hover effects (hover:scale-105)
- **Responsive Design**:
  - Mobile-first approach
  - Flexible layouts using Tailwind's grid and flex utilities
  - Responsive typography and spacing
- **Accessibility**: 
  - Semantic HTML structure
  - Readable font sizes
  - Sufficient color contrast

## Code Organization
- **File Structure**:
  - Component files in `/src/components`
  - Static assets in `/src/assets`
  - Global styles in `index.css`
- **Naming Conventions**:
  - PascalCase for component files and function names
  - camelCase for variables and props
- **Import/Export Patterns**:
  - Named exports for utility functions
  - Default exports for components

## Performance Patterns
- **Image Optimization**: Proper sizing and format for flooring images
- **Lazy Loading**: Load gallery images only when needed
- **Component Efficiency**: Minimize unnecessary re-renders

## User Interaction Patterns
- **Navigation**: Smooth scroll to sections from navbar links
- **Selection**: Clear visual feedback for model selection
- **Information Display**: Toggling FAQ items for expanded information
- **Contact Points**: Multiple ways to initiate contact (phone, Telegram)

*Note: This document will be updated as system patterns are established during development.* 