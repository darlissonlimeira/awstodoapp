const createElement = require('../helpers/createElement');
const InputAnimation = require('../helpers/animation');

function FormProject(title, description) {
  const form = createElement('form');
  form.className = 'create-project-form';

  const labelTitleProject = createElement('label');
  labelTitleProject.htmlFor = 'input-title-project';
  labelTitleProject.textContent = 'Title';

  const inputTitleProject = createElement('input');
  inputTitleProject.id = 'input-title-project';
  inputTitleProject.name = 'title';
  inputTitleProject.required = true;
  inputTitleProject.className = 'base-input form-title-project';
  inputTitleProject.value = title || '';
  const titleField = createElement('div');
  titleField.append(labelTitleProject, inputTitleProject);
  titleField.className = 'form-field';

  const labelDescriptionProject = createElement('label');
  labelDescriptionProject.htmlFor = 'input-description-project';
  labelDescriptionProject.textContent = 'Description';

  const inputDescriptionProject = createElement('textarea');
  inputDescriptionProject.rows = '10';
  inputDescriptionProject.id = 'input-description-project';
  inputDescriptionProject.name = 'description';
  inputDescriptionProject.required = true;
  inputDescriptionProject.className = 'base-input form-description-project';
  inputDescriptionProject.value = description || '';
  const descriptionField = createElement('div');
  descriptionField.append(labelDescriptionProject, inputDescriptionProject);
  descriptionField.className = 'form-field';

  const submitButton = createElement('input');
  submitButton.className = 'base-input-btn form-submit-project';
  submitButton.type = 'submit';
  submitButton.value = 'Save';

  //Animation
  // InputAnimation(inputTitleProject, labelTitleProject);
  // InputAnimation(inputDescriptionProject, labelDescriptionProject);

  form.append(titleField, descriptionField, submitButton);

  return form;
}

module.exports = FormProject;
