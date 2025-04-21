# Step-by-Step Guide for Implementing the Tracker Project

## What You Have

The project already has a basic structure in place:

1. **Project Setup:**
   - React + Vite application
   - Tailwind CSS configured
   - ESLint configured

2. **Component Structure:**
   - All required components are created in `/src/components/`:
     - `Navbar.jsx`
     - `Hero.jsx` + `VideoHero.jsx` (variant)
     - `ModelSelector.jsx`
     - `Gallery.jsx`
     - `Benefits.jsx`
     - `Pricing.jsx`
     - `Contact.jsx`
     - `FAQ.jsx`
     - `AnimatedSection.jsx` (utility component)

3. **Asset Structure:**
   - Image directories for different flooring types:
     - `/src/assets/images/3d/`
     - `/src/assets/images/abstrack/`
     - `/src/assets/images/naqshlik/`
   - Video directory: `/src/assets/videos/`

4. **Routing:**
   - Current implementation uses React Router with separate pages
   - Home page already includes all components in correct order

## What You Need to Do

1. **Project Structure Updates:**
   - **Modify App.jsx:** Update to use a single-page scrolling design instead of routing
   - **Review Home.jsx:** Ensure it includes all required components in the right order

2. **Component Updates:**
   - **Navbar.jsx:** Update with Uzbek navigation links: "Bosh sahifa | Galereya | Narxlar | Bog'lanish"
   - **Hero.jsx:** Add Uzbek main heading and subtext
   - **ModelSelector.jsx:** Implement the 3 large buttons for different flooring types
   - **Gallery.jsx:** Ensure it dynamically loads images based on selected model
   - **Benefits.jsx:** Add the 4 benefit cards in Uzbek
   - **Pricing.jsx:** Update with Uzbek pricing information
   - **Contact.jsx:** Add Telegram button and contact information in Uzbek
   - **FAQ.jsx:** Add Uzbek Q&A toggle elements

3. **Design Implementation:**
   - Update Tailwind styling to match requirements:
     - Use white or light beige background
     - Implement soft green (#7BB66D) accent color
     - Apply soft shadows and rounded elements
     - Use large, readable fonts
     - Ensure mobile responsiveness

4. **Content Addition:**
   - Add Uzbek text content to all components
   - Add placeholder images to image directories if needed

5. **Testing and Refinement:**
   - Test interaction between components (ModelSelector affecting Gallery)
   - Test responsive design on different screen sizes
   - Verify all Uzbek text displays correctly (UTF-8 support)

## Implementation Steps

1. **Modify App.jsx to Remove Routing:**
   ```jsx
   import React from 'react'
   import Navbar from './components/Navbar'
   import Hero from './components/Hero'
   import ModelSelector from './components/ModelSelector'
   import Gallery from './components/Gallery'
   import Benefits from './components/Benefits'
   import Pricing from './components/Pricing'
   import Contact from './components/Contact'
   import FAQ from './components/FAQ'

   function App() {
     return (
       <div className="min-h-screen bg-slate-50">
         <Navbar />
         <Hero />
         <ModelSelector />
         <Gallery />
         <Benefits />
         <Pricing />
         <Contact />
         <FAQ />
       </div>
     )
   }

   export default App
   ```

2. **Update index.css for Global Styling:**
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   :root {
     --accent-color: #7BB66D;
   }

   body {
     font-family: 'Inter', sans-serif;
     @apply bg-slate-50 text-slate-900;
   }
   ```

3. **Update tailwind.config.js:**
   ```js
   export default {
     content: ['./index.html', './src/**/*.{js,jsx}'],
     theme: {
       extend: {
         colors: {
           primary: '#7BB66D'
         },
         borderRadius: {
           '2xl': '1rem'
         }
       },
     },
     plugins: [],
   }
   ```

4. **Update Each Component with Uzbek Content:**
   - Review each component file
   - Update text content to Uzbek
   - Apply styling according to design requirements

5. **Implement Component Interactions:**
   - Ensure ModelSelector correctly updates Gallery display
   - Implement scroll behavior for navigation links and CTA buttons

## Next Steps

After completing these updates, you'll have a fully functional decorative 3D flooring landing page for Uzbek users. The site will feature:

- Responsive design that works well on all devices
- Clean, modern UI with soft shadows and rounded elements
- Uzbek language content throughout
- Interactive elements for exploring different flooring options
- Clear pricing and contact information

You can then proceed to:
1. Add real images and content
2. Implement any additional features
3. Optimize for performance
4. Prepare for deployment 