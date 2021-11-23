// Helpers
const createElement = require('../helpers/createElement');
const renderView = require('../helpers/renderView');

// Components
const Header = require('../Components/Header');
const TodoList = require('../Components/TodoList');
const CreateTodoView = require('./CreateTodo');
const BackButton = require('../Components/BackButton');

// Controllers
const TaskController = require('../../Controller/TaskController');
const ProjectController = require('../../Controller/ProjectController');

function ProjectPage(projectId) {
  const taskController = new TaskController();
  const projectController = new ProjectController();
  const project = projectController.getProject(projectId);
  const tasks = taskController.getProjectTasks(projectId);

  // Views
  const Home = require('./Home');
  const EditProjectPage = require('./EditProject');

  // Page
  const page = createElement('div');
  page.className = 'page project-page';
  const header = Header();
  header.classList.add('header-project-page');
  const titlePage = createElement('h2');
  titlePage.className = 'title-page title-project-page';
  titlePage.textContent = 'Project';
  const deleteIcon = createElement('i');
  deleteIcon.className = 'fas fa-trash';
  const deleteButton = createElement('button');
  deleteButton.append(deleteIcon);

  const main = createElement('main');
  main.className = 'main main-project-page';

  const projectTitle = createElement('h3');
  projectTitle.textContent = project.title;

  const projectDescription = createElement('p');
  projectDescription.textContent = project.description;

  const editIcon = createElement('i');
  editIcon.className = 'fas fa-pen';
  const editButton = createElement('button');
  editButton.className = 'edit-button-project-page';
  editButton.append(editIcon);

  const projectInfoCard = createElement('div');
  projectInfoCard.className = 'project-page-card-info';
  projectInfoCard.append(projectTitle, projectDescription, editButton);

  const addToDoIcon = createElement('span');
  addToDoIcon.className = 'fas fa-plus task-button-plus';
  const addToDoBtn = createElement('button');
  addToDoBtn.className = 'add-todo-btn base-create-btn';
  addToDoBtn.append(addToDoIcon);

  const taskList = TodoList(tasks);

  const view = () => Home('projects');

  header.append(BackButton(view), titlePage, deleteButton);
  main.append(projectInfoCard, taskList, addToDoBtn);
  page.append(header, main);

  // Listeners
  deleteButton.addEventListener('click', () => {
    const confirmAnswer = confirm('Want to delete this project?');
    if (!confirmAnswer) return;
    projectController.deleteProject(projectId);
    renderView(view);
  });

  editButton.addEventListener('click', () => {
    const view = () => EditProjectPage(project);
    renderView(view);
  });

  addToDoBtn.addEventListener('click', () => {
    const view = () => CreateTodoView(projectId);
    renderView(view);
  });

  return page;
}

module.exports = ProjectPage;
