const { viewRender } = require("../../helpers/viewRender");
const { AddTask } = require("./AddTask");

function updateTaskView(task) {
  const view = AddTask();
  viewRender(view);

  const updateTaskForm = document.querySelector("#form-store");
  const inputDueDate = updateTaskForm.querySelector('[name="dueDate"]');
  const inputTitle = updateTaskForm.querySelector('[name="title"]');
  const inputNotes = updateTaskForm.querySelector('[name="notes"]');
  const inputPriority = updateTaskForm.querySelector(
    `[value=${task.priority}]`
  );

  inputPriority.checked = true;
  inputDueDate.value = task.dueDate;
  inputTitle.value = task.title;
  inputNotes.value = task.notes;

  return {
    updateTaskForm,
  };
}

module.exports = { updateTaskView };
