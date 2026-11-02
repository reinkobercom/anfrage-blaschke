/**
 * Hochzählende Zahlen wie auf Onepage (animation_type „count“, 1,5 s), sobald sichtbar.
 * Element: <span data-count="24">24</span> – ohne JS bzw. bei reduzierter Bewegung steht der Endwert da.
 */
export function initCountUp(duration = 1500) {
  const els = [...document.querySelectorAll<HTMLElement>('[data-count]:not([data-count-init])')];
  if (!els.length || !('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  els.forEach((el) => {
    el.dataset.countInit = '1';
    el.textContent = '0';
  });
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        const el = e.target as HTMLElement;
        const end = Number(el.dataset.count) || 0;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = String(Math.round(end * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }),
    { threshold: 0.3 },
  );
  els.forEach((el) => io.observe(el));
}
