// Custom slow scroll utility functions
export const slowScrollTo = (element: HTMLElement, duration: number = 2000) => {
  const targetPosition = element.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};

// Easing function for smooth animation
const easeInOutCubic = (t: number, b: number, c: number, d: number): number => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
};

// Mobile-specific slow scroll (even slower)
export const slowScrollToMobile = (element: HTMLElement) => {
  slowScrollTo(element, 3000); // 3 seconds for mobile
};

// Desktop-specific slow scroll
export const slowScrollToDesktop = (element: HTMLElement) => {
  slowScrollTo(element, 2000); // 2 seconds for desktop
};

// Universal slow scroll function that detects device type
export const slowScrollToElement = (element: HTMLElement) => {
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    slowScrollToMobile(element);
  } else {
    slowScrollToDesktop(element);
  }
};

// Alternative: Use native smooth scroll with reduced speed
export const smoothScrollTo = (element: HTMLElement) => {
  const isMobile = window.innerWidth <= 768;
  const offset = isMobile ? 10 : 20;

  // Calculate the target scroll position with offset
  const targetPosition = element.offsetTop - offset;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
};
