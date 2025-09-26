import React, { useState, useEffect } from "react";
import { handleSmoothScroll } from "../../utils/smoothScroll";

const Header = () => {
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
    <>
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-700 shadow-2xl z-50"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
        }}
      >
        {/* Animated navigation background - minimal */}
        <div className="absolute inset-0 opacity-5">
          {/* Navigation particles - minimal */}
          <div className="absolute top-2 left-16 w-0.5 h-0.5 bg-purple-400/20 rounded-full"></div>
          <div className="absolute top-4 right-32 w-0.5 h-0.5 bg-blue-400/15 rounded-full"></div>
        </div>
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
                className="nav-link text-gray-300 hover:text-white transition-all duration-300 relative group"
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
              className={`bars fas ${
                mobileMenuOpen ? "fa-xmark" : "fa-bars"
              } text-xl`}
            ></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-gray-900/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center space-y-8"
          style={{
            WebkitBackdropFilter: "blur(20px)",
            backdropFilter: "blur(20px)",
          }}
        >
          <button
            onClick={closeMobileMenu}
            className="absolute top-6 right-6 text-gray-300 hover:text-white transition-all duration-300"
            aria-label="Close menu"
          >
            <i className="fas fa-xmark text-2xl"></i>
          </button>
          <div className="flex flex-col items-center justify-center space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  handleSmoothScroll(e, link.id, closeMobileMenu);
                }}
                className="mobile-link text-gray-300 hover:text-white transition-all duration-300 relative group text-2xl"
              >
                {link.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></div>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
