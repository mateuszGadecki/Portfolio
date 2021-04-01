import * as $ from "./vendors/jquery.min.js";
import { DOMstrings, height } from "./modules/base.js";

// after reloading, the page is always on the top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

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
      duration: function (currentTop, targetTop) {
        return 1500;
      },
      complexLinks: false,
      change: function (newHash, newTopPosition) {},
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

// Toggle Elements on scroll

const toggleElementOnScroll = (element, height) => {
  window.addEventListener("scroll", () => {
    element.classList.toggle("active", window.scrollY > height);
  });
};

toggleElementOnScroll(DOMstrings.fixedMenu, height.homePage);

// Toggle menu on click hamburgerButton
DOMstrings.hamburger.addEventListener("click", () => {
  DOMstrings.menuItems.classList.toggle("clicked");
});
