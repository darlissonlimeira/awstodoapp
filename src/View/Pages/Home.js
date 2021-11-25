// Helpers
const renderView = require('../helpers/renderView');
const createElement = require('../helpers/createElement');

// Components
const Header = require('../Components/Header');
const TodoList = require('../Components/TodoList');
const RadioInput = require('../Components/RadioIInput');
const SearchBar = require('../Components/SearchBar');
const ProjectList = require('../Components/ProjectList');
const Logo = require('../Components/Logo');

// Controllers
const TaskController = require('../../Controller/TaskController');
const ProjectController = require('../../Controller/ProjectController');

// Views
const CreateProjectView = require('./CreateProject');

function Home(op) {
  const taskController = new TaskController();
  const projectController = new ProjectController();
  const projects = ProjectList(projectController.getProjects());
  const tasks = TodoList(taskController.getTasks());

  //Views
  const FirstPage = require('./FirstPage');

  // Page
  const logo = Logo();
  const page = createElement('div');
  page.className = 'page home-page';
  const header = Header();
  header.classList.add('header-home-page');

  const iconSearchBtn = createElement('i');
  iconSearchBtn.className = 'fas fa-search search-button-icon';
  const searchOpenButton = createElement('button');
  searchOpenButton.className = 'search-open-button';
  searchOpenButton.append(iconSearchBtn);

  const iconMenuBtn = createElement('i');
  iconMenuBtn.className = 'fas fa-bars menu-button-icon';
  const menuOpenButton = createElement('button');
  menuOpenButton.className = 'menu-button';
  menuOpenButton.append(iconMenuBtn);

  const projectOpt = RadioInput(
    'projects-data',
    'view-data',
    'projects',
    'Projects',
    op ? true : false,
    'fas fa-folder'
  );
  projectOpt.classList.add('header-nav-opt');

  const tasksOpt = RadioInput(
    'tasks-data',
    'view-data',
    'tasks',
    'Tasks',
    true,
    'fas fa-tasks'
  );
  tasksOpt.classList.add('header-nav-opt');

  const selectWrapper = createElement('form');
  selectWrapper.className = 'select-wrapper home-page-nav';
  selectWrapper.append(tasksOpt, projectOpt);

  const newProjectBtn = createElement('button');
  newProjectBtn.className = 'create-project-btn base-create-btn';
  const folderIcon = createElement('i');
  folderIcon.className = 'fas fa-folder-plus';
  newProjectBtn.append(folderIcon);

  const menu = createElement('div');
  menu.className = 'home-page-menu';
  menu.append(selectWrapper);
  const searchBar = SearchBar();

  const main = createElement('main');
  main.className = 'main main-home';

  if (op) {
    main.append(projects);
  } else {
    main.append(tasks);
  }

  const headerBox = createElement('div');
  headerBox.className = 'header-box';
  headerBox.append(searchOpenButton, logo, menuOpenButton);

  header.append(headerBox, menu);
  page.append(header, main, newProjectBtn);

  // Listeners
  newProjectBtn.addEventListener('click', () => renderView(CreateProjectView));

  selectWrapper.addEventListener('change', event => {
    if (event.target.value === 'projects') {
      main.replaceChild(projects, tasks);
    } else {
      main.replaceChild(tasks, projects);
    }
  });

  searchOpenButton.addEventListener('click', function () {
    iconSearchBtn.classList.toggle('fa-times');
    iconSearchBtn.classList.toggle('fa-search');

    if (headerBox.contains(logo)) {
      headerBox.replaceChild(searchBar, logo);
    } else {
      headerBox.replaceChild(logo, searchBar);
    }
  });

  menuOpenButton.addEventListener('click', function () {
    header.classList.toggle('show-menu-home');
  });

  logo.addEventListener('click', () => {
    renderView(FirstPage);
  });

  return page;
}

module.exports = Home;
