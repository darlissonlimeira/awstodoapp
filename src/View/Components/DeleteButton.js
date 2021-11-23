const createElement = require('../helpers/createElement');

function DeleteButton(text) {
  const deleteIcon = createElement('i');
  deleteIcon.className = 'fas fa-trash';
  const deleteButton = createElement('button');
  deleteButton.textContent = text || '';
  deleteButton.append(deleteIcon);

  return deleteButton;
}

module.exports = DeleteButton;
