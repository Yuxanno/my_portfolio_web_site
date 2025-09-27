import React, { useState, useEffect } from "react";
import { handleSmoothScroll } from "../../utils/smoothScroll";

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Add scroll management for mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [mobileMenuOpen]);

  // Navigation links data
  const navLinks = [
    { id: "home", label: "Bosh sahifa" },
    { id: "about", label: "Men haqimda" },
    { id: "skills", label: "Ko'nikmalar" },
    { id: "projects", label: "Loyihalar" },
    { id: "contact", label: "Aloqa" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-gray-900/90 border-b border-gray-700 shadow-2xl z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-white relative group cursor-pointer">
          Ravshanov Yuxanno
        </div>
        {/* Desktop Navigation - visible on custom breakpoint and above */}
        <div className="hidden custom:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                handleSmoothScroll(e, link.id, closeMobileMenu);
              }}
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              {link.label}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></div>
            </a>
          ))}
        </div>
        {/* Mobile menu button - visible below custom breakpoint */}
        <button
          onClick={toggleMobileMenu}
          className="custom:hidden text-gray-300 hover:text-white transition-all duration-300 relative group"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <i
            className={`fas ${mobileMenuOpen ? "fa-xmark" : "fa-bars"} text-xl`}
          ></i>
        </button>
      </div>

      {/* Mobile Menu - full screen with centered navigation and blue blurred background */}
      {mobileMenuOpen && (
        <div
          className="h-full custom:hidden fixed inset-0 z-40 flex flex-col"
          style={{
            // backdropFilter: "blur(20px) saturate(1.8)",
            WebkitBackdropFilter: "blur(20px) saturate(1.8)",
            backgroundColor: "rgba(15, 15, 35, 0.95)",
          }}
        >
          {/* Navbar remains visible at top */}
          <div className="w-full bg-gray-900/90 border-b border-gray-700 py-4 px-6">
            <div className="flex justify-between items-center">
              <div className="text-xl font-semibold text-white relative group cursor-pointer">
                Ravshanov Yuxanno
              </div>
              <button
                onClick={toggleMobileMenu}
                className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                aria-label="Close menu"
              >
                <i className="fas fa-xmark text-xl"></i>
              </button>
            </div>
          </div>

          {/* Navigation buttons centered in the middle of the screen */}
          <div className="flex flex-col items-center justify-center flex-grow">
            <div className="flex flex-col items-center justify-center space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    handleSmoothScroll(e, link.id, closeMobileMenu);
                  }}
                  className="text-gray-300 hover:text-white transition-all duration-300 relative group text-2xl"
                >
                  {link.label}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
