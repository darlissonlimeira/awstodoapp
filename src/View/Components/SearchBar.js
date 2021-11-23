const createElement = require('../helpers/createElement');
const TodoList = require('./TodoList');
const ProjectList = require('./ProjectList');

// Helpers
const search = require('../helpers/search');

// Controller
const TaskController = require('../../Controller/TaskController');
const ProjectController = require('../../Controller/ProjectController');

function SearchBar(searchListener) {
  const taskController = new TaskController();
  const projectController = new ProjectController();

  const searchBox = createElement('div');
  searchBox.className = 'search-box';

  const icon = createElement('i');
  icon.className = 'fas fa-search search-box-icon';

  const input = createElement('input');
  input.className = 'search-box-input';
  input.type = 'search';
  input.placeholder = 'Search by title...';

  searchBox.append(input);

  // Listeners
  input.addEventListener('keyup', function () {
    search(this.value);
  });

  return searchBox;
}

module.exports = SearchBar;
