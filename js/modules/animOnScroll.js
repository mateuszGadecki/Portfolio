import { DOMstrings } from "./base.js";

// Toggle Elements on scroll function
const toggleElementOnScroll = (element, height) => {
  window.addEventListener("scroll", () => {
    element.classList.toggle("active", window.scrollY > height);
  });
};

// adding an appearance and disappearance on scroll
export const animations = () => {
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
    midOfProjectsSection:
      DOMstrings.projectsTitle.getBoundingClientRect().top +
      window.scrollY -
      0.2 * DOMstrings.projectsSection.offsetHeight,
    botOfProjectsSection:
      DOMstrings.project_3.getBoundingClientRect().top +
      window.scrollY -
      0.25 * DOMstrings.projectsSection.offsetHeight,
    midOfContactSection:
      DOMstrings.contactSection.getBoundingClientRect().top +
      window.scrollY -
      0.7 * DOMstrings.contactSection.offsetHeight,
  };
  toggleElementOnScroll(DOMstrings.fixedMenu, height.botOfHomePage - 350);
  toggleElementOnScroll(DOMstrings.aboutMeTitle, height.midOfAboutMeSec);
  toggleElementOnScroll(DOMstrings.roundPicture, height.midOfAboutMeSec);
  toggleElementOnScroll(DOMstrings.description, height.botOfAboutMeSec);
  toggleElementOnScroll(DOMstrings.skillsTitle, height.midOfSkillsSec);
  toggleElementOnScroll(DOMstrings.skillsIcons, height.midOfSkillsSec);
  toggleElementOnScroll(DOMstrings.toolsTitle, height.botOfSkillsSec);
  toggleElementOnScroll(DOMstrings.toolsIcons, height.botOfSkillsSec);
  toggleElementOnScroll(DOMstrings.project_1, height.midOfProjectsSection);
  toggleElementOnScroll(DOMstrings.project_2, height.midOfProjectsSection);
  toggleElementOnScroll(DOMstrings.project_3, height.botOfProjectsSection);
  toggleElementOnScroll(DOMstrings.project_4, height.botOfProjectsSection);
  toggleElementOnScroll(DOMstrings.contact, height.midOfContactSection);
};
