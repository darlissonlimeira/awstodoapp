const { viewRender } = require("../../helpers/viewRender");
const { ProjectItem } = require("../components/ProjectItem");
const { Home } = require("./Home");

function projectsView(projects) {
  const view = Home("Projects");
  viewRender(view);

  const dataListEl = document.querySelector("#data-list");
  dataListEl.classList.add("projects");
  dataListEl.innerHTML = "";

  const projectElements = [];

  if (projects.length > 0) {
    for (const project of projects) {
      const projectElement = ProjectItem(project);
      projectElement["data-project-id"] = project.id;
      projectElements.push(projectElement);
    }
  }

  dataListEl.append(...projectElements);

  const addProjectBtn = document.querySelector("#new-item-btn");

  const { menuTasksBtn, menuProjectsBtn } = navHandlers();

  setMenuHandlers();

  const elements = {
    addProjectBtn,
    projectElements,
    menuProjectsBtn,
    menuTasksBtn,
  };

  return elements;
}

function setMenuHandlers() {
  const openMenuBtn = document.querySelector("#toggle-menu");
  const closeMenuBtn = document.querySelector("#close-nav-menu");

  openMenuBtn.onclick = () => {
    const nav = document.querySelector("#menu-app");
    nav.classList.toggle("toggle-menu");
  };

  closeMenuBtn.onclick = () => {
    const nav = document.querySelector("#menu-app");
    nav.classList.toggle("toggle-menu");
  };
}

function navHandlers() {
  const menuTasksBtn = document.querySelector("#menu-btn-tasks");
  const menuProjectsBtn = document.querySelector("#menu-btn-projects");

  return {
    menuTasksBtn,
    menuProjectsBtn,
  };
}

module.exports = {
  projectsView,
};
