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

  /* ---- first-visit step tabs ---- */
  var tabs = document.querySelectorAll('.steps__tabs button');
  var panes = document.querySelectorAll('.steps__pane');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var i = Number(tab.dataset.step);
      tabs.forEach(function (t) { t.classList.remove('is-on'); });
      panes.forEach(function (p) { p.classList.remove('is-on'); });
      tab.classList.add('is-on');
      if (panes[i]) panes[i].classList.add('is-on');
    });
  });

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
