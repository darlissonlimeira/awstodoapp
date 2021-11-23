const { v4: uuid } = require('uuid');
const { atstorage } = require('../Store/LocalStorage');
const Task = require('./Entities/Task');

class TaskModel {
  constructor() {
    return Object.freeze(this);
  }

  #validateData(dataList, title, id) {
    for (const data of dataList) {
      if (data.title === title && data.id !== id) {
        throw new Error('Not accept data with same title.');
      }
    }
  }

  addTask(inputData) {
    const tasks = atstorage.getTasks();
    const task = new Task({
      id: 'task-' + uuid(),
      projectId: inputData.projectId,
      priority: inputData.priority,
      dueDate: inputData.dueDate,
      title: inputData.title,
      notes: inputData.notes,
      complete: inputData.complete,
    });

    this.#validateData(tasks, task.title, task.id);

    atstorage.saveTask(task);
  }

  updateTask(inputData) {
    let tasks = atstorage.getTasks();
    const task = new Task({
      id: inputData.id,
      projectId: inputData.projectId,
      priority: inputData.priority,
      dueDate: inputData.dueDate,
      title: inputData.title,
      notes: inputData.notes,
      complete: inputData.complete,
    });

    this.#validateData(tasks, task.title, task.id);

    for (const [index, data] of tasks.entries()) {
      if (task.id !== data.id) continue;
      tasks[index] = task;
    }

    atstorage.updateTasks(tasks);
  }

  deleteTask(id) {
    let tasks = atstorage.getTasks();
    tasks = tasks.filter(task => task.id !== id);

    atstorage.updateTasks(tasks);
  }

  getTaskById(id) {
    const tasks = atstorage.getTasks();
    const task = tasks.find(data => data.id === id);

    return task;
  }

  getTasks() {
    return atstorage.getTasks();
  }
}

module.exports = TaskModel;
