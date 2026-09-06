/* Only behaviour on the site: the light/dark toggle. */
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme');
  if (!btn) return;

  btn.addEventListener('click', function () {
    var stored = root.getAttribute('data-theme');
    var current = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', next === 'dark' ? '#101215' : '#fdfcfa');
  });
})();
