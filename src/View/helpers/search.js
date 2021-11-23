const ProjectList = require('../Components/ProjectList');
const TodoList = require('../Components/TodoList');

const TaskController = require('../../Controller/TaskController');
const ProjectController = require('../../Controller/ProjectController');

const taskController = new TaskController();
const projectController = new ProjectController();

function filterData(dataList, searchValue) {
  return dataList.filter(data =>
    data.title.toLowerCase().includes(searchValue.toLowerCase())
  );
}

function renderSearchResults(results, searchResults, searchInput) {
  const currentList =
    document.querySelector('.todo-list') ||
    document.querySelector('.project-list');

  if (!currentList) return;

  currentList.innerHTML = '';
  currentList.innerHTML = `<h3 class='search-message'>${results.length} results found...</h3>`;

  if (results.length > 0) {
    if (searchInput.length < 1) {
      currentList.innerHTML = '';
    }
    currentList.append(...searchResults.childNodes);
  }
}

function filterTasks(inputValue) {
  const tasks = filterData(taskController.getTasks(), inputValue);
  const taskList = TodoList(tasks).querySelector('.todo-list');

  return { taskList, tasks };
}

function filterProjects(inputValue) {
  const projects = filterData(projectController.getProjects(), inputValue);
  const projectList = ProjectList(projects).querySelector('.project-list');

  return { projectList, projects };
}

function searchTask(searchValue) {
  const { taskList, tasks } = filterTasks(searchValue);
  renderSearchResults(tasks, taskList, searchValue);
}

function searchProject(searchValue) {
  const { projectList, projects } = filterProjects(searchValue);
  renderSearchResults(projects, projectList, searchValue);
}

function search(searchValue) {
  const list =
    document.querySelector('.todo-list') ||
    document.querySelector('.project-list');

  if (list.className === 'todo-list') {
    searchTask(searchValue);
  } else {
    searchProject(searchValue);
  }
}

module.exports = search;
