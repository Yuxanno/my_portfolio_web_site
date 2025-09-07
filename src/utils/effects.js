// Initialize additional visual effects and interactions
export const initializeEffects = () => {
  // Add ripple effect to buttons
  const addRippleEffect = (element) => {
    element.addEventListener("click", function (e) {
      const circle = document.createElement("span");
      const diameter = Math.max(element.clientWidth, element.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - element.offsetLeft - radius}px`;
      circle.style.top = `${e.clientY - element.offsetTop - radius}px`;
      circle.classList.add("ripple");

      const ripple = element.getElementsByClassName("ripple")[0];
      if (ripple) {
        ripple.remove();
      }

      element.appendChild(circle);
    });
  };

  // Apply ripple effect to buttons
  document
    .querySelectorAll(".btn-primary, .tech-card, .project-card")
    .forEach(addRippleEffect);

  // Parallax effect for floating elements
  const handleParallax = () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(".floating");

    parallaxElements.forEach((el) => {
      const speed = 0.1;
      el.style.transform = `translateY(${scrolled * speed}px)`;
    });
  };

  // Add scroll listener for parallax
  window.addEventListener("scroll", handleParallax);

  // Enhanced hover effects
  const addHoverEffects = () => {
    document
      .querySelectorAll(".tech-card, .project-card, .btn-primary")
      .forEach((card) => {
        card.addEventListener("mouseenter", () => {
          if (card.classList.contains("tech-card")) {
            card.style.transform = "translateY(-8px) scale(1.02)";
          } else if (card.classList.contains("project-card")) {
            card.style.transform = "translateY(-10px) scale(1.03)";
          } else if (card.classList.contains("btn-primary")) {
            card.style.transform = "translateY(-2px)";
          }
        });

        card.addEventListener("mouseleave", () => {
          card.style.transform = "translateY(0) scale(1)";
        });
      });
  };

  // Initialize hover effects
  addHoverEffects();

  // Performance optimization: use passive listeners
  const options = { passive: true };
  window.addEventListener("scroll", handleParallax, options);
};
