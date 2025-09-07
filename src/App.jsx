import { useEffect, useState } from "react";
import Header from "./components/common/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/common/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add loading class to body
    document.body.classList.add("loading");

    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });

    // Handle loading state
    const handleLoad = () => {
      // Small delay to ensure everything is ready
      setTimeout(() => {
        setIsLoading(false);
        document.body.classList.remove("loading");
        document.body.classList.add("loaded");
        AOS.refresh();
      }, 500);
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
    }, 2000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(fallbackTimeout);
    };
  }, [isLoading]);

  return (
    <div
      className={`bg-gray-900 text-gray-100 overflow-x-hidden ${
        isLoading ? "loading" : "loaded"
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
  );
}

export default App;
