// Enhanced smooth scroll utility with optimized performance and accessibility
export const smoothScrollTo = (targetId, navbarHeight = 80) => {
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;

  const targetPosition = targetElement.offsetTop - navbarHeight;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;

  // Dynamic duration based on distance, with min/max limits
  const duration = Math.min(Math.max(Math.abs(distance) / 3, 400), 1200);

  // Enhanced easing function for smooth, natural movement
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  const startTime = performance.now();

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
};

// Enhanced smooth scroll handler for click events
export const handleSmoothScroll = (e, targetId, callback) => {
  e.preventDefault();
  smoothScrollTo(targetId);
  if (callback) callback();
};
