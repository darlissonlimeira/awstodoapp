const dateMin = require('../helpers/dateMin');
const createElement = require('../helpers/createElement');
const RadioInputPriority = require('./RadioInputPriority');

function FormTodo(title, dueDate, priority, notes) {
  // Priority input
  const priorityField = createElement('fieldset');
  priorityField.className = 'form-todo-field';

  const titlePriorityGroupTitle = createElement('legend');
  titlePriorityGroupTitle.textContent = "What's the priority of this task?";

  const priorityGroup = createElement('div');
  priorityGroup.className = 'priority-group-form';

  const inputLow = RadioInputPriority('low-priority', 'low', 'Low');
  const inputMedium = RadioInputPriority('medium-priority', 'medium', 'Medium');
  const inputHigh = RadioInputPriority('high-priority', 'high', 'High');

  if (priority) {
    for (const el of [inputLow, inputMedium, inputHigh]) {
      const radio = el.querySelector('input');
      if (radio.value !== priority) continue;
      radio.checked = true;
    }
  }

  priorityGroup.append(inputLow, inputMedium, inputHigh);
  priorityField.append(titlePriorityGroupTitle, priorityGroup);

  // Due date input
  const dueDateField = createElement('div');
  dueDateField.className = 'form-todo-field';

  const labelDate = createElement('label');
  labelDate.textContent = 'Please set the due date.';
  labelDate.htmlFor = 'date-todo-form';

  const inputDate = createElement('input');
  inputDate.type = 'date';
  inputDate.name = 'date';
  inputDate.id = 'date-todo-form';
  inputDate.className = 'base-input todo-form-input-date';
  inputDate.min = dateMin();
  inputDate.required = true;
  inputDate.value = dueDate || '';

  dueDateField.append(labelDate, inputDate);

  // Title input
  const titleField = createElement('div');
  titleField.className = 'form-todo-field';

  const labelTitle = createElement('label');
  labelTitle.textContent = "What's the title?";
  labelTitle.htmlFor = 'title-todo-form';

  const inputTitle = createElement('input');
  inputTitle.id = 'title-todo-form';
  inputTitle.className = 'base-input todo-form-input-title';
  inputTitle.name = 'title';
  inputTitle.required = true;
  inputTitle.value = title || '';

  titleField.append(labelTitle, inputTitle);

  // Notes input
  const notesField = createElement('div');
  notesField.className = 'form-todo-field';

  const labelNotes = createElement('label');
  labelNotes.textContent = 'Write some notes?';
  labelNotes.htmlFor = 'notes-todo-form';

  const inputNotes = createElement('textarea');
  inputNotes.id = 'notes-todo-form';
  inputNotes.className = 'base-input todo-form-input-notes';
  inputNotes.name = 'notes';
  inputNotes.rows = '7';
  inputNotes.value = notes || '';

  notesField.append(labelNotes, inputNotes);

  // Submit button
  const submitButton = createElement('input');
  submitButton.className = 'base-input-btn todo-form-input-submit';
  submitButton.type = 'submit';
  submitButton.value = 'Save';

  const form = createElement('form');
  form.className = 'form-create-todo';
  form.append(
    priorityField,
    dueDateField,
    titleField,
    notesField,
    submitButton
  );

  return form;
}

module.exports = FormTodo;
