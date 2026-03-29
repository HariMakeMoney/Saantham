"use strict";

// =============================
// Page fade-in & smooth setup
// =============================
(function () {
  try {
    var prefersReducedMotion = false;

    if (window.matchMedia) {
      prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    function init() {
      if (document.body) {
        document.body.classList.add("is-ready");
      }
    }

    if (prefersReducedMotion) {
      if (document.body) document.body.style.opacity = "1";
    } else if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  } catch (e) {
    console.log("Fade in error", e);
  }
})();

// =============================
// Header scroll effect
// =============================
(function () {
  try {
    var header = document.getElementById("main-header");
    if (!header) return;

    window.addEventListener("scroll", function() {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

  } catch(e) {
    console.log("Header scroll error", e);
  }
})();


// =============================
// Section reveal animation
// =============================
(function () {
  try {
    var panels = document.querySelectorAll(".panel");

    if (!("IntersectionObserver" in window)) {
      for (var i = 0; i < panels.length; i++) {
        panels[i].classList.add("is-visible");
      }
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add("is-visible");
          // Optional: unobserve after reveal for one-time animation
          // observer.unobserve(entries[i].target);
        }
      }
    }, { 
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    for (var j = 0; j < panels.length; j++) {
      observer.observe(panels[j]);
    }
  } catch (e) {
    console.log("Scroll animation error", e);
  }
})();
