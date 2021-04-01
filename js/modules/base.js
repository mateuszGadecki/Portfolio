export const DOMstrings = {
  fixedMenu: document.querySelector(".fixedMenu"),
  menuItems: document.querySelector(".fixedMenuContainer"),
  hamburger: document.querySelector(".hamburger"),
  canvas: document.querySelector(".canvas"),
  canvasBackground: document.querySelector(".canvasBackground"),
  skillsTitle: document.querySelector(".skillsTitle"),
  toolsTitle: document.querySelector(".toolsTitle"),
  skillsIcons: document.querySelector(".skillsIcons"),
  toolsIcons: document.querySelector(".toolsIcons"),
};
export const height = {
  aboutMeSection: document.querySelector(".aboutMeSection").offsetHeight,
  topOfskillsSection:
    document.querySelector(".skillsSection").offsetHeight +
    document.querySelector(".projectsSection").offsetHeight +
    document.querySelector(".aboutMeSection").offsetHeight +
    document.querySelector(".homeSlide").offsetHeight +
    document.querySelector(".skills").offsetHeight / 3,
  middleOfskillsSection:
    document.querySelector(".skillsSection").offsetHeight +
    document.querySelector(".projectsSection").offsetHeight +
    document.querySelector(".aboutMeSection").offsetHeight +
    document.querySelector(".homeSlide").offsetHeight +
    document.querySelector(".skills").offsetHeight / 2,
};
