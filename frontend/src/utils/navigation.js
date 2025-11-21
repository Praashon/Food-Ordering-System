// Navigation utility to scroll to top when navigating
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Enhanced navigation function that includes scroll to top
export const navigateWithScrollToTop = (navigate, path) => {
  navigate(path);
  // Use setTimeout to ensure navigation happens first
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Use instant for immediate scroll after route change
    });
  }, 100);
};
