/* Free IRAN Landing — progressive enhancement only.
   Page works fully without this file. */
(function () {
  'use strict';

  /* Reveal on scroll */
  try {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.card').forEach(function (c) { io.observe(c); });
  } catch (e) { /* no-op: cards stay visible via fallback */
    document.querySelectorAll('.card').forEach(function (c) { c.classList.add('in'); });
  }

  /* Persian digit counters */
  var FA = '۰۱۲۳۴۵۶۷۸۹';
  function fa(n) {
    return String(Math.round(n)).replace(/[0-9]/g, function (d) { return FA[+d]; });
  }
  try {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.getAttribute('data-n'), 10) || 0;
        var t0 = performance.now(), dur = 1800;
        (function tick(t) {
          var p = Math.min((t - t0) / dur, 1);
          el.textContent = fa(target * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(tick);
        })(t0);
        cio.unobserve(el);
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('.num').forEach(function (el) { cio.observe(el); });
  } catch (e) { /* leave static digits */ }

  /* Subtle parallax */
  try {
    document.addEventListener('mousemove', function (e) {
      var x = (e.clientX / window.innerWidth - 0.5) * 24;
      var y = (e.clientY / window.innerHeight - 0.5) * 24;
      document.querySelectorAll('.blob').forEach(function (b, i) {
        b.style.translate = (x * (i + 1) * 0.4) + 'px ' + (y * (i + 1) * 0.4) + 'px';
      });
    }, { passive: true });
  } catch (e) { /* no-op */ }
})();
