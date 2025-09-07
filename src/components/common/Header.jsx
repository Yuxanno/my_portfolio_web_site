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

  // Smooth scroll function with offset for fixed navbar
  // Enhanced smooth scroll function with optimized performance
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 80; // Height of fixed navbar
      const targetPosition = targetElement.offsetTop - navbarHeight;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = Math.min(Math.abs(distance) / 2, 1000); // Dynamic duration, max 1000ms

      // Enhanced smooth scrolling with custom easing
      const startTime = performance.now();

      const easeInOutCubic = (t) => {
        return t < 0.5
          ? 4 * t * t * t
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animateScroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easedProgress = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * easedProgress);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
    // Close mobile menu if open
    if (mobileMenuOpen) {
      closeMobileMenu();
    }
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

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-700 shadow-2xl relative overflow-hidden">
        {/* Animated navigation background - minimal */}
        <div className="absolute inset-0 opacity-5">
          {/* Navigation particles - minimal */}
          <div
            className="absolute top-2 left-16 w-0.5 h-0.5 bg-purple-400/20 rounded-full animate-pulse"
            style={{ animationDelay: "0s", animationDuration: "6s" }}
          ></div>
          <div
            className="absolute top-4 right-32 w-0.5 h-0.5 bg-blue-400/15 rounded-full animate-pulse"
            style={{ animationDelay: "3s", animationDuration: "8s" }}
          ></div>

          {/* Energy streams - minimal */}
          <div
            className="absolute top-0 left-1/3 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/3 to-transparent animate-pulse"
            style={{ animationDelay: "0s", animationDuration: "10s" }}
          ></div>

          {/* Orbiting nav elements - minimal */}
          <div
            className="absolute inset-0 animate-spin"
            style={{ animationDuration: "50s" }}
          >
            <div className="absolute top-2 left-1/2 w-0.5 h-0.5 bg-white/10 rounded-full transform -translate-x-1/2"></div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative z-10">
          <div className="text-xl font-semibold text-white glow relative group cursor-pointer">
            RY
            {/* Logo animations - minimal */}
            <div
              className="absolute -top-1 -left-1 w-6 h-6 border border-purple-400/15 rounded-full animate-pulse"
              style={{ animationDelay: "0s", animationDuration: "5s" }}
            ></div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "home")}
              className="nav-link text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              Bosh sahifa
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "about")}
              className="nav-link text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              Men haqimda
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a
              href="#skills"
              onClick={(e) => handleSmoothScroll(e, "skills")}
              className="nav-link text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              Ko'nikmalar
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, "projects")}
              className="nav-link text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              Loyihalar
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="nav-link text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              Aloqa
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></div>
            </a>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-300 hover:text-white transition-all duration-300 relative group"
          >
            <i className="fas fa-bars text-xl transform transition-transform duration-300 group-hover:rotate-90"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-900/95 backdrop-blur-lg z-40 ${
          mobileMenuOpen ? "flex" : "hidden"
        } flex-col items-center justify-center space-y-8 text-2xl relative overflow-hidden`}
      >
        {/* Mobile menu background animations - minimal */}
        <div className="absolute inset-0 opacity-5">
          {/* Floating orbs - minimal */}
          <div
            className="absolute top-16 left-16 w-4 h-4 bg-purple-400/20 rounded-full animate-pulse"
            style={{ animationDelay: "0s", animationDuration: "5s" }}
          ></div>
          <div
            className="absolute bottom-24 right-24 w-3 h-3 bg-blue-400/15 rounded-full animate-pulse"
            style={{ animationDelay: "2.5s", animationDuration: "6s" }}
          ></div>
        </div>
        <a
          href="#home"
          onClick={(e) => handleSmoothScroll(e, "home")}
          className="mobile-link text-gray-300 hover:text-white transition-all duration-300 relative group"
        >
          Bosh sahifa
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></div>
        </a>
        <a
          href="#about"
          onClick={(e) => handleSmoothScroll(e, "about")}
          className="mobile-link text-gray-300 hover:text-white transition-all duration-300 relative group"
        >
          Men haqimda
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></div>
        </a>
        <a
          href="#skills"
          onClick={(e) => handleSmoothScroll(e, "skills")}
          className="mobile-link text-gray-300 hover:text-white transition-all duration-300 relative group"
        >
          Ko'nikmalar
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></div>
        </a>
        <a
          href="#projects"
          onClick={(e) => handleSmoothScroll(e, "projects")}
          className="mobile-link text-gray-300 hover:text-white transition-all duration-300 relative group"
        >
          Loyihalar
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></div>
        </a>
        <a
          href="#contact"
          onClick={(e) => handleSmoothScroll(e, "contact")}
          className="mobile-link text-gray-300 hover:text-white transition-all duration-300 relative group"
        >
          Aloqa
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></div>
        </a>
      </div>
    </>
  );
};

export default Header;
