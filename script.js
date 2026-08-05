/* Hemu Wellness — mockup 2 behaviour */

(function () {
  'use strict';

  /* ---- mobile drawer ---- */
  var nav = document.getElementById('nav');
  var burger = document.getElementById('burger');

  if (nav && burger) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- hero carousel: background, headline and sub-line rotate together ---- */
  var bgs = document.querySelectorAll('.hero__bg');
  var lines = document.querySelectorAll('.hero__line');
  var subs = document.querySelectorAll('.hero__subline');
  var bars = document.querySelectorAll('.hero__bars button');
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (bgs.length > 1) {
    var current = 0;
    var timer = null;
    var HOLD = 2000;   // ms each slide stays up — raise this to slow the carousel down

    function swap(list, next) {
      if (list[current]) list[current].classList.remove('is-on');
      if (list[next]) list[next].classList.add('is-on');
    }

    function show(next) {
      if (next === current) return;
      swap(bgs, next);
      swap(lines, next);
      swap(subs, next);
      swap(bars, next);
      if (bars[current]) bars[current].setAttribute('aria-selected', 'false');
      if (bars[next]) bars[next].setAttribute('aria-selected', 'true');
      current = next;
    }

    function start() {
      if (calm) return;
      stop();
      timer = setInterval(function () { show((current + 1) % bgs.length); }, HOLD);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    bars.forEach(function (bar) {
      bar.addEventListener('click', function () {
        show(Number(bar.dataset.go));
        start();
      });
    });

    var heroEl = document.querySelector('.hero');
    heroEl.addEventListener('mouseenter', stop);
    heroEl.addEventListener('mouseleave', start);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop(); else start();
    });

    start();
  }

  /* ---- drag-to-scroll on the image rail ---- */
  var rail = document.getElementById('rail');
  if (rail) {
    var down = false, startX = 0, startLeft = 0;
    rail.addEventListener('pointerdown', function (e) {
      down = true; startX = e.clientX; startLeft = rail.scrollLeft;
      rail.setPointerCapture(e.pointerId);
      rail.style.cursor = 'grabbing';
    });
    rail.addEventListener('pointermove', function (e) {
      if (!down) return;
      rail.scrollLeft = startLeft - (e.clientX - startX);
    });
    ['pointerup', 'pointercancel'].forEach(function (ev) {
      rail.addEventListener(ev, function () { down = false; rail.style.cursor = ''; });
    });
  }

  /* ---- reveal on scroll ---- */
  var items = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      setTimeout(function () { el.classList.add('is-in'); }, i * 65);
      io.unobserve(el);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });

  items.forEach(function (el) { io.observe(el); });
})();
