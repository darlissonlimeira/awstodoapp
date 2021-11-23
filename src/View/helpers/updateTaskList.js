const TaskController = require('../../Controller/TaskController');
const TaskList = require('../Components/TodoList');

function updateTaskList(id) {
  const taskController = new TaskController();
  const tasks = taskController.getProjectTasks(id);

  const tasksNode = TaskList(tasks);
  const prevTasksNode = document.querySelector('.todos-wrapper');

  const main = document.querySelector('.main');

  main.replaceChild(tasksNode, prevTasksNode);
}

module.exports = updateTaskList;
