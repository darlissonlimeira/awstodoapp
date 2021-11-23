// Helpers
const createElement = require('../helpers/createElement');

// Components
const Header = require('../Components/Header');
const BackButton = require('../Components/BackButton');
const FormProject = require('../Components/FormProject');
const renderView = require('../helpers/renderView');

// Controllers
const ProjectController = require('../../Controller/ProjectController');

function CreateProjectView() {
  const projectController = new ProjectController();

  // Views
  const Home = require('./Home');

  // Page
  const page = createElement('div');
  page.className = 'page create-project-page';

  const titleHeader = createElement('h2');
  titleHeader.className = 'title-page create-project-title';
  titleHeader.textContent = 'New project';

  const header = Header();
  header.classList.add('create-project-header', 'header-after');
  header.append(BackButton(Home), titleHeader);

  const main = createElement('main');
  main.className = 'main main-create-project-page';

  const form = FormProject();

  main.append(form);
  page.append(header, main);

  // Listeners
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const project = {
      title: this.title.value,
      description: this.description.value,
    };
    projectController.saveProject(project);
    const view = () => Home('projects');
    renderView(view);
  });

  return page;
}

module.exports = CreateProjectView;
