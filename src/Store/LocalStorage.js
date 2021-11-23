const { v4: uuidv4 } = require('uuid');

class LocalStorageDB {
  #store = JSON.parse(localStorage.getItem('awstodoDB')) || {
    projects: [],
    tasks: [],
  };

  constructor() {
    return Object.freeze(this);
  }

  #saveToLocalStorage() {
    localStorage.setItem('awstodoDB', JSON.stringify(this.#store));
  }

  saveProject(project) {
    this.#store.projects.push(project);
    this.#saveToLocalStorage();
  }

  updateProjects(updatedProjects) {
    this.#store.projects = updatedProjects;
    this.#saveToLocalStorage();
  }

  getProjects() {
    return this.#store.projects;
  }

  saveTask(task) {
    this.#store.tasks.push(task);
    this.#saveToLocalStorage();
  }

  updateTasks(updatedTasks) {
    this.#store.tasks = updatedTasks;
    this.#saveToLocalStorage();
  }

  getTasks() {
    return this.#store.tasks;
  }
}

module.exports.atstorage = new LocalStorageDB();
