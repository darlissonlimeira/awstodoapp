// Components
const FormProject = require('../Components/FormProject');

// Helpers
const createElement = require('../helpers/createElement');
const renderView = require('../helpers/renderView');

// Controllers
const ProjectController = require('../../Controller/ProjectController');
const ProjectPage = require('./Project-Page');

function EditProjectPage(data) {
  const projectController = new ProjectController();

  // Page
  const page = createElement('div');
  page.className = 'page edit-project-page';
  const main = createElement('main');
  main.className = 'main';

  const closeIcon = createElement('i');
  closeIcon.className = 'fas fa-times';
  const closeButton = createElement('button');
  closeButton.className = 'close-button-edit-page';
  closeButton.append(closeIcon);

  const form = FormProject(data.title, data.description);

  main.append(form);
  page.append(closeButton, main);

  // Listeners
  closeButton.addEventListener('click', () => {
    const view = () => ProjectPage(data.id);
    renderView(view);
  });

  form.addEventListener('submit', function () {
    event.preventDefault();
    const project = {
      id: data.id,
      title: this.title.value,
      description: this.description.value,
    };
    projectController.updateProject(project);
    const view = () => ProjectPage(project.id);
    renderView(view);
  });

  return page;
}

module.exports = EditProjectPage;
