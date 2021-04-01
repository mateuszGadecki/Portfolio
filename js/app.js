// after reloading, the page is always on the top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

(function ($) {
  $window = $(window);
  $htmlbody = $("html,body");
  $slide = $(".homeSlide");
  $body = $("body");

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
    winH = $window.height();
    if (winH <= 550) {
      winH = 550;
    }
    $slide.height(winH * 2);
    s.refresh($(".homeSlide"));
  }

  adjustWindow();
})(jQuery);
