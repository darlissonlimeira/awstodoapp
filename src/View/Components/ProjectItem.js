const createElement = require('../helpers/createElement');
const ProjectPage = require('../Pages/Project-Page');
const renderView = require('../helpers/renderView');

function ProjectItem(data) {
  const li = createElement('li');
  li.className = 'project-item';
  const wrapper = createElement('div');
  wrapper.className = 'project-wrapper';

  const titleEl = createElement('h3');
  titleEl.className = 'project-item-title';
  titleEl.textContent = data.title;
  const descriptionEl = createElement('p');
  descriptionEl.className = 'project-item-description';
  descriptionEl.textContent = data.description;

  wrapper.append(titleEl, descriptionEl);

  li.addEventListener('click', () => {
    const view = () => ProjectPage(data.id);
    renderView(view);
  });

  li.append(wrapper);

  return li;
}

module.exports = ProjectItem;
