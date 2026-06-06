/* shared site behaviour: scroll reveal + active-nav fallback
   ------------------------------------------------------------------
   Reveal contract: [data-reveal] is VISIBLE by default (opacity:1).
   The .in class layers a one-shot fade/slide entrance ON TOP.
   We only add .in when the document is actually visible and motion
   is allowed — so a backgrounded tab (where CSS animations freeze at
   frame 0) never leaves content stuck invisible. */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = [].slice.call(document.querySelectorAll('[data-reveal]'));

  function animate(el) {
    if (el.classList.contains('in')) return;
    var d = el.getAttribute('data-delay');
    if (d) el.style.animationDelay = d + 'ms';
    el.classList.add('in');
  }

  var canAnimate = !reduce && !document.hidden;

  if (!canAnimate) {
    // content already visible at base state — nothing to do
  } else {
    var vh = window.innerHeight || document.documentElement.clientHeight;

    // reveal anything in the initial viewport immediately
    items.forEach(function (el) {
      if (el.getBoundingClientRect().top < vh * 0.92) animate(el);
    });

    // observe the rest for scroll-in
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
        });
      }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
      items.forEach(function (el) { if (!el.classList.contains('in')) io.observe(el); });
    } else {
      items.forEach(animate);
    }
  }

  // ---- active nav ----
  var path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (path === '') path = 'index.html';
  [].forEach.call(document.querySelectorAll('.nav__links a'), function (a) {
    var href = (a.getAttribute('href') || '').toLowerCase();
    if (href === path) a.classList.add('active');
  });
})();
