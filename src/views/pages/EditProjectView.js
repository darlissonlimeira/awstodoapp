const { viewRender } = require("../../helpers/viewRender");
const { AddProject } = require("./AddProject");

const editProjectView = (project) => {
  const view = AddProject();
  viewRender(view);

  const editProjectForm = document.querySelector("#form-store");
  const titleInput = document.querySelector("#project-title");
  const descInput = document.querySelector("#project-desc");

  titleInput.value = project.title;
  descInput.value = project.description;

  return {
    editProjectForm,
    titleInput,
    descInput,
  };
};

module.exports = { editProjectView };
