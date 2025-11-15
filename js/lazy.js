document.addEventListener("DOMContentLoaded", () => {
  const lazyFigures = document.querySelectorAll("figure.lazy");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const figure = entry.target;
          const img = figure.querySelector("img");

          // Falls noch nicht geladen
          if (img && img.dataset.src) {
            img.src = img.dataset.src;        // Bildquelle setzen
            img.removeAttribute("data-src");  // Aufräumen
          }

          figure.classList.remove("lazy");    // Klasse entfernen
          obs.unobserve(figure);              // Beobachtung beenden
        }
      });
    },
    { threshold: 0.2 }
  );

  lazyFigures.forEach(fig => observer.observe(fig));
});
