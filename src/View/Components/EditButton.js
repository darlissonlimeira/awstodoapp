const createElement = require('../helpers/createElement');

function EditButton(text) {
  const editIcon = createElement('i');
  editIcon.className = 'fas fa-pen';
  const editButton = createElement('button');
  editButton.textContent = text || '';
  editButton.append(editIcon);

  return editButton;
}

module.exports = EditButton;
