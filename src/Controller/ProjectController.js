const ProjectModel = require('../Model/ProjectModel');

class ProjectController {
  #model;

  constructor() {
    this.#model = new ProjectModel();
    return Object.freeze(this);
  }

  saveProject(data) {
    try {
      this.#model.addProject(data);
    } catch (error) {
      return error;
    }
  }

  deleteProject(id) {
    try {
      this.#model.deleteProject(id);
    } catch (error) {
      return error;
    }
  }

  updateProject(data) {
    try {
      this.#model.updateProject(data);
    } catch (error) {
      return error;
    }
  }

  getProjects() {
    return this.#model.getProjects();
  }

  getProject(id) {
    return this.#model.getProjectById(id);
  }
}

module.exports = ProjectController;
