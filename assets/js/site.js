(function () {
  // 테마 토글: 저장된 선택 > OS 설정
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  function current() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  if (btn) btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // 스크롤 등장: 섹션, 카드 그리드, 타임라인
  var targets = document.querySelectorAll('.section, .page-head, .project-page > *, .grid-2, .grid-3, .timeline, .screens, .photo-grid, .stats');
  targets.forEach(function (el) {
    if (el.matches('.grid-2, .grid-3, .timeline, .screens, .photo-grid, .stats')) el.classList.add('reveal-stagger');
    else el.classList.add('reveal');
  });
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!('IntersectionObserver' in window) || reduce) {
    targets.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    targets.forEach(function (el) { io.observe(el); });
  }

  // 숫자 카운트업: data-count="16" data-decimals="1" data-prefix="" data-suffix="%"
  var nums = document.querySelectorAll('[data-count]');
  function animate(el) {
    var end = parseFloat(el.getAttribute('data-count'));
    var dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var pre = el.getAttribute('data-prefix') || '';
    var suf = el.getAttribute('data-suffix') || '';
    var dur = 1200, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var v = (end * eased).toFixed(dec);
      el.innerHTML = pre + Number(v).toLocaleString('ko-KR', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + (suf ? '<small>' + suf + '</small>' : '');
      if (p < 1) requestAnimationFrame(step);
    }
    if (reduce) { el.innerHTML = pre + end.toLocaleString('ko-KR') + (suf ? '<small>' + suf + '</small>' : ''); return; }
    requestAnimationFrame(step);
  }
  if (nums.length) {
    if (!('IntersectionObserver' in window)) nums.forEach(animate);
    else {
      var io2 = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { animate(e.target); io2.unobserve(e.target); } });
      }, { threshold: 0.4 });
      nums.forEach(function (el) { io2.observe(el); });
    }
  }
})();
