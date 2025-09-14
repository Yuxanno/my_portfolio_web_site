import React, { useState, useEffect } from "react";
import { handleSmoothScroll } from "../../utils/smoothScroll";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    const bars = document.querySelector(".bars");
    setMobileMenuOpen(!mobileMenuOpen);
    bars.classList.toggle("fa-xmark");
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
          <div className="absolute top-2 left-16 w-0.5 h-0.5 bg-purple-400/20 rounded-full"></div>
          <div className="absolute top-4 right-32 w-0.5 h-0.5 bg-blue-400/15 rounded-full"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative z-10">
          <div className="text-xl font-semibold text-white relative group cursor-pointer">
            Web App Developer
          </div>
          <div className="hidden custom:flex space-x-8">
            {" "}
            {/* Changed from md:flex to custom:flex */}
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
            className="custom:hidden text-gray-300 hover:text-white transition-all duration-300 relative group" /* Changed from md:hidden to custom:hidden */
          >
            <i className="bars fas fa-bars text-xl"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-900/90 backdrop-blur-xl z-50 ${
          mobileMenuOpen ? "flex" : "hidden"
        } flex-col items-center justify-center space-y-8 text-2xl overflow-hidden`}
        style={{
          WebkitBackdropFilter: "blur(20px)",
          backdropFilter: "blur(20px)",
          overflow: "hidden",
        }}
      >
        <div className="flex flex-col items-center justify-center space-y-8">
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, "home")}
            className="mobile-link text-gray-300 hover:text-white transition-all duration-300 relative group text-2xl"
          >
            Bosh sahifa
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></div>
          </a>
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "about")}
            className="mobile-link text-gray-300 hover:text-white transition-all duration-300 relative group text-2xl"
          >
            Men haqimda
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></div>
          </a>
          <a
            href="#skills"
            onClick={(e) => handleSmoothScroll(e, "skills")}
            className="mobile-link text-gray-300 hover:text-white transition-all duration-300 relative group text-2xl"
          >
            Ko'nikmalar
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></div>
          </a>
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, "projects")}
            className="mobile-link text-gray-300 hover:text-white transition-all duration-300 relative group text-2xl"
          >
            Loyihalar
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></div>
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "contact")}
            className="mobile-link text-gray-300 hover:text-white transition-all duration-300 relative group text-2xl"
          >
            Aloqa
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
