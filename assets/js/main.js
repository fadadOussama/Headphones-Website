/*=============== SHOW MENU ===============*/
const navToggle = document.getElementById("nav__toggle"),
  navClose = document.getElementById("nav__close"),
  navMenu = document.getElementById("nav__menu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show__menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
  });
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
});

/*==================== SHOW SCROLL UP ====================*/
const scrollUp = document.getElementById("scroll-up");
window.addEventListener("scroll", () => {
  this.scrollY >= 200
    ? scrollUp.classList.add("scroll-show")
    : scrollUp.classList.remove("scroll-show");
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`.home__header, .section__title`, { delay: 600 });
sr.reveal(`.home__footer`, { delay: 700 });
sr.reveal(`.home__img`, { delay: 900, origin: "top" });

sr.reveal(
  `.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,
  { origin: "top", interval: 100 }
);

sr.reveal(`.specs__data`, { origin: "left", interval: 100 });
sr.reveal(`.specs__img`, { origin: "right", interval: 100 });

sr.reveal(`.discount__animate`, { distance: "0px", opacity: 0, delay: 600 });
sr.reveal(`.discount__img`, { distance: "0px", opacity: 0, delay: 600 });

sr.reveal(`.case__data`, { origin: "bottom" });
sr.reveal(`.case__img`, { origin: "top" });

function aniSpecs() {
  let caseImg = document.querySelector(".specs__img");
  caseImg.classList.add("ani__specs");
}

aniSpecs();
