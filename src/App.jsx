import { useEffect, useState } from "react";
import Header from "./components/common/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/common/Footer";
import LoadingScreen from "./components/common/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [siteVisible, setSiteVisible] = useState(false);

  useEffect(() => {
    // Add loading class to body
    document.body.classList.add("loading");

    // Handle loading state
    const handleLoad = () => {
      // Small delay to ensure everything is ready
      setTimeout(() => {
        setIsLoading(false);
        document.body.classList.remove("loading");
        document.body.classList.add("loaded");

        // Hide loading screen and show site with fade-in effect
        setTimeout(() => {
          setShowLoadingScreen(false);
          setSiteVisible(true);

          // Trigger entrance animations after site is visible
          setTimeout(() => {
            document.body.classList.add("animations-ready");
          }, 600);
        }, 500);
      }, 10);
    };

    // If page is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Fallback timeout
    const fallbackTimeout = setTimeout(() => {
      if (isLoading) {
        handleLoad();
      }
    }, 5000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(fallbackTimeout);
    };
  }, [isLoading]);

  return (
    <>
      {showLoadingScreen && (
        <div
          data-loading-screen
          style={{
            opacity: 1,
            transition: "opacity 1s ease-out",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 9999,
            backgroundColor: "#0f0f23",
          }}
        >
          <LoadingScreen isVisible={showLoadingScreen} />
        </div>
      )}
      <div
        className={`bg-gray-900 text-gray-100 overflow-x-hidden transition-opacity duration-1000 ${
          siteVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
