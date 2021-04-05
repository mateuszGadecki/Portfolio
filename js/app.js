import * as $ from "./vendors/jquery.min.js";
import { DOMstrings } from "./modules/base.js";
import { animate } from "./modules/particles.js";
import { firebaseConfig } from "./modules/firebaseConfig.js";

// after reloading, the page is always on the top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Initializing particles as background
animate();

// Initializing skrollr and skrollr menu
(function ($) {
  let windowX = $(window);
  let slide = $(".homeSlide");

  function adjustWindow() {
    var s = skrollr.init();
    // Scroll to scene on button click
    skrollr.menu.init(s, {
      animate: true,
      easing: "linear",
      scale: 2,
      duration: function () {
        return 1500;
      },
      complexLinks: false,
      change: function () {},
      updateUrl: false,
    });
    let winH = windowX.height();
    if (winH <= 550) {
      winH = 550;
    }
    slide.height(winH * 2);
    s.refresh($(".homeSlide"));
  }

  adjustWindow();
})(jQuery);

const height = {
  botOfHomePage:
    DOMstrings.homePage.getBoundingClientRect().bottom + window.scrollY,
  midOfAboutMeSec:
    DOMstrings.aboutMeTitle.getBoundingClientRect().top +
    window.scrollY -
    0.5 * DOMstrings.aboutMeSection.offsetHeight,
  botOfAboutMeSec:
    DOMstrings.aboutMeTitle.getBoundingClientRect().top +
    window.scrollY -
    0.3 * DOMstrings.aboutMeSection.offsetHeight,
  midOfSkillsSec:
    DOMstrings.skillsTitle.getBoundingClientRect().top +
    window.scrollY -
    0.5 * DOMstrings.skillsSection.offsetHeight,
  botOfSkillsSec:
    DOMstrings.skillsTitle.getBoundingClientRect().top +
    window.scrollY -
    0.3 * DOMstrings.skillsSection.offsetHeight,
};

console.log(height.aboutMeTitle);

// Toggle Elements on scroll function
const toggleElementOnScroll = (element, height) => {
  window.addEventListener("scroll", () => {
    element.classList.toggle("active", window.scrollY > height);
  });
};

// adding an appearance and disappearance on scroll
toggleElementOnScroll(DOMstrings.fixedMenu, height.botOfHomePage - 350);
toggleElementOnScroll(DOMstrings.aboutMeTitle, height.midOfAboutMeSec);
toggleElementOnScroll(DOMstrings.roundPicture, height.midOfAboutMeSec);
toggleElementOnScroll(DOMstrings.description, height.botOfAboutMeSec);
toggleElementOnScroll(DOMstrings.skillsTitle, height.midOfSkillsSec);
toggleElementOnScroll(DOMstrings.skillsIcons, height.midOfSkillsSec);
toggleElementOnScroll(DOMstrings.toolsTitle, height.botOfSkillsSec);
toggleElementOnScroll(DOMstrings.toolsIcons, height.botOfSkillsSec);

// Toggle menu on click hamburgerButton
DOMstrings.hamburger.addEventListener("click", () => {
  DOMstrings.menuItems.classList.toggle("clicked");
});

DOMstrings.menuElements.forEach((el) => {
  el.addEventListener("click", () => {
    DOMstrings.menuItems.classList.remove("clicked");
  });
});

// Contact Form

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let contactInfo = firebase.database().ref("infos");

const saveValues = (name, email, message) => {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
};

const submitHandler = (e) => {
  e.preventDefault();
  let name = DOMstrings.name.value;
  let email = DOMstrings.email.value;
  let message = DOMstrings.message.value;

  saveValues(name, email, message);

  DOMstrings.form.reset();
};

DOMstrings.form.addEventListener("submit", submitHandler);
