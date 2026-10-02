(function () {
  var track = document.querySelector('.hero-diagram .diagram-track');
  var panels = document.querySelectorAll('.hero-diagram .diagram-panel');
  if (!track || panels.length < 2) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var current = 0;
  setInterval(function () {
    current = (current + 1) % panels.length;
    track.style.transform = 'translateX(-' + current * 100 + '%)';
  }, 4500);
})();
