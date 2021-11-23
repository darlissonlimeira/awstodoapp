// Helpers
const createElement = require('../helpers/createElement');
const renderView = require('../helpers/renderView');

// Components
const FormTodo = require('../Components/FormTodo');

// Controllers
const TaskController = require('../../Controller/TaskController');
const ProjectPage = require('./Project-Page');

function EditTaskPage(data) {
  const taskController = new TaskController();

  // Page
  const page = createElement('div');
  page.className = 'page edit-todo-page';
  const main = createElement('main');
  main.className = 'main';

  const closeIcon = createElement('i');
  closeIcon.className = 'fas fa-times';
  const closeButton = createElement('button');
  closeButton.className = 'close-button-edit-page';
  closeButton.append(closeIcon);

  const form = FormTodo(data.title, data.dueDate, data.priority, data.notes);

  main.append(form);
  page.append(closeButton, main);

  // Listeners
  closeButton.addEventListener('click', () => {
    const view = () => ProjectPage(data.projectId);
    renderView(view);
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const task = {
      id: data.id,
      projectId: data.projectId,
      complete: data.complete,
      priority: this.priority.value,
      dueDate: this.date.value,
      title: this.title.value,
      notes: this.notes.value,
    };
    taskController.updateTask(task);
    const view = () => ProjectPage(task.projectId);
    renderView(view);
  });

  return page;
}

module.exports = EditTaskPage;
