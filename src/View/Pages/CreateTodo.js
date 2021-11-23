// Helpers
const createElement = require('../helpers/createElement');
const renderView = require('../helpers/renderView');

// Controllers
const ProjectController = require('../../Controller/ProjectController');
const TaskController = require('../../Controller/TaskController');

// Components
const Header = require('../Components/Header');
const BackButton = require('../Components/BackButton');
const FormTodo = require('../Components/FormTodo');

function CreateTodoView(id) {
  const taskController = new TaskController();
  const projectController = new ProjectController();

  // Views
  const ProjectPage = require('./Project-Page');
  const projectView = () => ProjectPage(id);

  // Page
  const page = createElement('div');
  page.className = 'page create-todo-page';

  const header = Header();
  header.classList.add('header-create-task-page', 'header-after');
  const titlePage = createElement('h2');
  titlePage.textContent = 'New todo';
  titlePage.className = 'title-page create-todo-page-title';

  const form = FormTodo();

  const main = createElement('main');
  main.className = 'main';

  header.append(BackButton(projectView), titlePage);
  main.append(form);
  page.append(header, main);

  // Listeners
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const task = {
      projectId: id,
      priority: this.priority.value,
      dueDate: this.date.value,
      title: this.title.value,
      notes: this.notes.value,
    };
    taskController.saveTask(task);
    const view = () => ProjectPage(id);
    renderView(view);
  });

  return page;
}

module.exports = CreateTodoView;
