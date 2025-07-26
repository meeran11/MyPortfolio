import React from 'react'

const NavBar = ({ open, onClose }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onClose(); // Close navbar after clicking
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-start justify-end">
      <div className="bg-white dark:bg-gray-900 w-80 h-full shadow-lg p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-gray-700 dark:text-white">&times;</button>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Navigation</h2>
          <nav className="space-y-4">
            <button
              onClick={() => scrollToSection('page1')}
              className="w-full text-left py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="w-full text-left py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="w-full text-left py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="w-full text-left py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full text-left py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
            >
              Contact Me
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavBar