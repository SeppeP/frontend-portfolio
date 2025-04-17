function createAppearObserver() {
  if (typeof window === "undefined") return null; // Prevent SSR issues

  const observer =  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('visible', entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    })
  }, {
    threshold: .3,
  });

  return observer
}

export default createAppearObserver();
