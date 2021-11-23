const createElement = require('../helpers/createElement');
const ProjectItem = require('./ProjectItem');

function ProjectList(projectList) {
  if (projectList && projectList.length > 0) {
    const wrapper = createElement('div');
    wrapper.className = 'projects-wrapper';
    const title = createElement('h3');
    title.className = 'list-title';
    title.textContent = 'Projects';
    const list = createElement('ul');
    const projectsEl = projectList.map(project => ProjectItem(project));
    list.className = 'project-list';
    list.append(...projectsEl);
    wrapper.append(title, list);

    return wrapper;
  } else {
    const defaultMsg = createElement('h3');
    defaultMsg.className = 'default-message';
    defaultMsg.textContent = "You don't have projects yet!";

    return defaultMsg;
  }
}

module.exports = ProjectList;
