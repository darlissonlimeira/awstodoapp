// Helpers
const createElement = require('../helpers/createElement');
const formatDate = require('../helpers/formatDate');
const renderView = require('../helpers/renderView');

// Components
const editButton = require('../Components/EditButton');
const deleteButton = require('../Components/DeleteButton');

// Controllers
const TaskController = require('../../Controller/TaskController');

function TodoItem(data) {
  const updateTaskList = require('../helpers/updateTaskList');
  const taskController = new TaskController();

  // View
  const EditTaskPage = require('../Pages/EditTask');

  // Page
  const checkBox = createElement('span');
  checkBox.className = 'check-box';
  const checkIconChecked = createElement('span');
  checkIconChecked.className = 'fas fa-check-square check-mark';
  const checkIconUnchecked = createElement('span');
  checkIconUnchecked.className = 'far fa-square check-circle';

  const checkBoxInput = createElement('input');
  checkBoxInput.className = 'todo-checkbox';
  checkBoxInput.type = 'checkbox';
  checkBoxInput.checked = data.complete;

  checkBox.append(checkBoxInput, checkIconChecked, checkIconUnchecked);

  const titleEl = createElement('p');
  titleEl.className = 'todo-title toggle-task-title';
  titleEl.textContent = data.title;

  const dueDateEl = createElement('time');
  dueDateEl.className = 'todo-due-date';
  dueDateEl.textContent = formatDate(data.dueDate);

  const priorityEl = createElement('p');
  priorityEl.className = 'todo-priority';
  priorityEl.textContent = data.priority;

  const notesEl = createElement('p');
  notesEl.className = 'todo-notes';
  notesEl.textContent = data.notes;

  const fullContent = createElement('div');
  fullContent.className = 'todo-content';
  fullContent.append(dueDateEl, priorityEl, notesEl);

  const detailBtn = createElement('button');
  detailBtn.className = 'todo-btn-detail';
  const detailIcon = createElement('span');
  detailIcon.className = 'fas fa-angle-down todo-icon-detail';
  detailBtn.append(detailIcon);

  const minContent = createElement('div');
  minContent.className = 'todo-min-content';
  minContent.append(checkBox, titleEl, detailBtn);

  const wrapper = createElement('div');
  wrapper.className = 'todo-wrapper';

  const editBtn = editButton('Edit');
  const deleteBtn = deleteButton('Delete');
  deleteBtn.className = 'task-delete';
  const buttonsWrapper = createElement('div');
  buttonsWrapper.className = 'todo-buttons';
  buttonsWrapper.append(editBtn, deleteBtn);

  wrapper.append(minContent, fullContent, buttonsWrapper);

  const li = createElement('li');
  li.setAttribute('data-id', data.id);
  li.className = 'todo-item';
  li.append(wrapper);

  // Listeners
  detailBtn.addEventListener('click', () => {
    detailIcon.classList.toggle('fa-angle-down');
    detailIcon.classList.toggle('fa-angle-up');
    li.classList.toggle('toggle-content');
    titleEl.classList.toggle('toggle-task-title');
  });

  checkBoxInput.addEventListener('change', function () {
    const task = {
      id: data.id,
      projectId: data.projectId,
      priority: data.priority,
      dueDate: data.dueDate,
      title: data.title,
      notes: data.notes,
      complete: this.checked,
    };

    taskController.updateTask(task);
  });

  editBtn.addEventListener('click', function () {
    const view = () => EditTaskPage(data);
    renderView(view);
  });

  deleteBtn.addEventListener('click', function () {
    taskController.deleteTask(data.id);
    updateTaskList(data.projectId);
  });

  return li;
}

module.exports = TodoItem;
