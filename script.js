const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");

function closeMenu() {
  menuToggle?.setAttribute("aria-expanded", "false");
  mainNav?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  mainNav.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeMenu();
});

// FAQ accordion
document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const item = trigger.closest(".accordion-item");
    const isOpen = trigger.getAttribute("aria-expanded") === "true";

    document.querySelectorAll(".accordion-item").forEach((otherItem) => {
      otherItem.classList.remove("is-open");
      otherItem.querySelector(".accordion-trigger")?.setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
    }
  });
});

// Lightweight scroll reveal
const revealElements = document.querySelectorAll(".reveal");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
  );

  revealElements.forEach((element) => observer.observe(element));
}

// Footer year
const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = new Date().getFullYear();


// Hero slider
const heroSlides = document.querySelectorAll('.hero-slide');
const heroDots = document.querySelectorAll('.hero-slider-dot');
let heroSlideIndex = 0;
let heroSliderInterval;

function showHeroSlide(index) {
  if (!heroSlides.length) return;
  heroSlideIndex = (index + heroSlides.length) % heroSlides.length;

  heroSlides.forEach((slide, currentIndex) => {
    const isActive = currentIndex === heroSlideIndex;
    slide.classList.toggle('is-active', isActive);
    slide.setAttribute('aria-hidden', String(!isActive));
  });

  heroDots.forEach((dot, currentIndex) => {
    const isActive = currentIndex === heroSlideIndex;
    dot.classList.toggle('is-active', isActive);
    dot.setAttribute('aria-current', String(isActive));
  });
}

function startHeroSlider() {
  if (heroSlides.length < 2) return;
  clearInterval(heroSliderInterval);
  heroSliderInterval = setInterval(() => {
    showHeroSlide(heroSlideIndex + 1);
  }, 4500);
}

heroDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showHeroSlide(index);
    startHeroSlider();
  });
});

showHeroSlide(0);
startHeroSlider();
