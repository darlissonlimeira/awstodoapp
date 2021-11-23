const { v4: uuid } = require('uuid');
const { atstorage } = require('../Store/LocalStorage');
const Project = require('./Entities/Project');

class ProjectModel {
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

  addProject(inputData) {
    const dataProjects = atstorage.getProjects();
    const project = new Project({
      id: 'project-' + uuid(),
      title: inputData.title,
      description: inputData.description,
    });

    this.#validateData(dataProjects, project.title, project.id);

    atstorage.saveProject(project);
  }

  updateProject(inputData) {
    let dataProjects = atstorage.getProjects();
    const project = new Project({
      id: inputData.id,
      title: inputData.title,
      description: inputData.description,
    });

    for (let [index, dataProject] of dataProjects.entries()) {
      if (dataProject.id !== project.id) continue;
      dataProjects[index] = project;
    }

    this.#validateData(dataProjects, project.title, project.id);

    atstorage.updateProjects(dataProjects);
  }

  #deleteProjectTasks(projectId) {
    let tasks = atstorage.getTasks();
    tasks = tasks.filter(task => task.projectId !== projectId);

    return tasks;
  }

  deleteProject(id) {
    let projects = atstorage.getProjects();
    projects = projects.filter(project => project.id !== id);
    const tasks = this.#deleteProjectTasks(id);

    atstorage.updateProjects(projects);
    atstorage.updateTasks(tasks);
  }

  getProjectById(id) {
    const projects = atstorage.getProjects();
    const project = projects.find(data => data.id === id);

    return project;
  }

  getProjects() {
    return atstorage.getProjects();
  }
}

module.exports = ProjectModel;
