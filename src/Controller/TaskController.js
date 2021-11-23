const TaskModel = require('../Model/TaskModel');

class TaskController {
  #model;

  constructor() {
    this.#model = new TaskModel();
    return Object.freeze(this);
  }

  saveTask(data) {
    console.log(data);
    try {
      this.#model.addTask(data);
    } catch (error) {
      return error;
    }
  }

  updateTask(data) {
    try {
      this.#model.updateTask(data);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  deleteTask(id) {
    try {
      this.#model.deleteTask(id);
    } catch (error) {
      return error;
    }
  }

  getTasks() {
    return this.#model.getTasks();
  }

  getProjectTasks(id) {
    return this.getTasks().filter(task => task.projectId === id);
  }
}

module.exports = TaskController;
