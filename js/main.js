(function () {
  "use strict";

  var header = document.querySelector("[data-header]");
  var toggle = document.querySelector("[data-nav-toggle]");
  var mobileNav = document.querySelector("[data-mobile-nav]");
  var yearNodes = document.querySelectorAll("[data-year]");
  var glow = document.querySelector(".glow");
  var finePointer = window.matchMedia("(pointer: fine)").matches;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  yearNodes.forEach(function (node) {
    node.textContent = String(new Date().getFullYear());
  });

  function setOpen(open) {
    if (!toggle || !mobileNav) return;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    mobileNav.hidden = !open;
    document.body.classList.toggle("nav-open", open);
  }

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      setOpen(mobileNav.hidden);
    });

    mobileNav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });
  }

  var onScroll = function () {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (!CSS.supports("animation-timeline", "view()") && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal").forEach(function (el) {
      observer.observe(el);
    });
  }

  if (glow && finePointer && !reduceMotion) {
    glow.setAttribute("data-follow", "");
    var mx = 50;
    var my = 20;
    var tx = 50;
    var ty = 20;
    window.addEventListener(
      "pointermove",
      function (event) {
        tx = (event.clientX / window.innerWidth) * 100;
        ty = (event.clientY / window.innerHeight) * 100;
      },
      { passive: true }
    );
    function tick() {
      mx += (tx - mx) * 0.08;
      my += (ty - my) * 0.08;
      glow.style.setProperty("--mx", mx.toFixed(2) + "%");
      glow.style.setProperty("--my", my.toFixed(2) + "%");
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
})();
