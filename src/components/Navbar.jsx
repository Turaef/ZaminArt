import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isGalleryDropdownOpen, setIsGalleryDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleGalleryDropdown = () => {
    setIsGalleryDropdownOpen(!isGalleryDropdownOpen)
  }

  const closeGalleryDropdown = () => {
    setIsGalleryDropdownOpen(false)
  }

  const smoothScroll = (el) => {
    el.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">ZaminArt</Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/#hero" 
              className="text-gray-700 font-medium hover:text-accent transition duration-300 hover:underline decoration-accent underline-offset-4"
            >
              Bosh sahifa
            </Link>
            <div className="relative">
              <button
                onClick={toggleGalleryDropdown}
                className="text-gray-700 font-medium hover:text-accent transition duration-300 hover:underline decoration-accent underline-offset-4 flex items-center"
              >
                Galereya
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 ml-1 transform transition-transform ${isGalleryDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {isGalleryDropdownOpen && (
                  <motion.div
                    className="absolute left-0 mt-2 py-2 w-40 bg-white rounded-lg shadow-xl z-10"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                  >
                    <motion.div variants={itemVariants}>
                      <Link 
                        to="/3d"
                        className="block px-4 py-2 text-gray-700 hover:bg-accent hover:text-white rounded-md mx-1 transition duration-300"
                        onClick={closeGalleryDropdown}
                      >
                        3D
                      </Link>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <Link 
                        to="/abstrack"
                        className="block px-4 py-2 text-gray-700 hover:bg-accent hover:text-white rounded-md mx-1 transition duration-300"
                        onClick={closeGalleryDropdown}
                      >
                        Abstrack
                      </Link>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <Link 
                        to="/naqshlik"
                        className="block px-4 py-2 text-gray-700 hover:bg-accent hover:text-white rounded-md mx-1 transition duration-300"
                        onClick={closeGalleryDropdown}
                      >
                        Naqshlik
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <HashLink 
              smooth 
              to="/#pricing" 
              className="text-gray-700 font-medium hover:text-accent transition duration-300 hover:underline decoration-accent underline-offset-4"
            >
              Narxlar
            </HashLink>
          </div>
          
          <div className="hidden md:flex items-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <motion.a 
              href="tel:+998909433444" 
              className="hover:text-accent transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              +998 90 943 3444
            </motion.a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none focus:text-accent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen 
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 flex flex-col">
            <Link 
              to="/#hero" 
              className="text-gray-700 font-medium hover:text-accent py-2 transition duration-300"
              onClick={toggleMenu}
            >
              Bosh sahifa
            </Link>
            <div>
              <button
                onClick={() => setIsGalleryDropdownOpen(!isGalleryDropdownOpen)}
                className="flex items-center justify-between w-full text-left text-gray-700 font-medium hover:text-accent py-2 transition duration-300"
              >
                <span>Galereya</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 ml-1 transform transition-transform ${isGalleryDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {isGalleryDropdownOpen && (
                  <motion.div
                    className="pl-4 mt-2 space-y-2"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link 
                      to="/3d"
                      className="block py-2 text-gray-700 hover:text-accent transition duration-300"
                      onClick={toggleMenu}
                    >
                      3D
                    </Link>
                    <Link 
                      to="/abstrack"
                      className="block py-2 text-gray-700 hover:text-accent transition duration-300"
                      onClick={toggleMenu}
                    >
                      Abstrack
                    </Link>
                    <Link 
                      to="/naqshlik"
                      className="block py-2 text-gray-700 hover:text-accent transition duration-300"
                      onClick={toggleMenu}
                    >
                      Naqshlik
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <HashLink 
              smooth 
              to="/#pricing" 
              className="text-gray-700 font-medium hover:text-accent py-2 transition duration-300"
              onClick={toggleMenu}
            >
              Narxlar
            </HashLink>
            <motion.a 
              href="tel:+998909433444" 
              className="flex items-center text-gray-700 hover:text-accent py-2 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +998 90 943 3444
            </motion.a>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar 