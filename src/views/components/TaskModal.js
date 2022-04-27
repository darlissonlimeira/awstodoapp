const { createNode } = require("../../helpers/createDOM");

const TaskModal = () => {
  const modal = createNode("div", { className: "task-modal" });
  const modalContent = createNode("div", { className: "task-modal__content" });
  const priority = createNode("p", {
    className: "task-modal__priority",
    id: "task-modal-priority",
  });
  const dueDate = createNode("p", {
    className: "task-modal__date",
    id: "task-modal-date",
  });
  const title = createNode("p", {
    className: "task-modal__title",
    id: "task-modal-title",
  });
  const notes = createNode("p", {
    className: "task-modal__notes",
    id: "task-modal-notes",
  });

  const priorityDateContainer = createNode("div", {
    className: "modal__priorityDate-container",
  });
  priorityDateContainer.append(priority, dueDate);

  const closeIcon = createNode("i", { className: "fa-solid fa-xmark" });
  const closeBtn = createNode("button", {
    className: "modal-button--close",
  });
  closeBtn.appendChild(closeIcon);

  const editBtn = createNode("button", {
    className: "modal-button--edit",
    textContent: "Edit",
  });

  const modalButtons = createNode("div", { className: "modal__buttons" });
  modalButtons.append(editBtn, closeBtn);

  const deleteBtn = createNode("button", {
    type: "submit",
    className: "modal__button--delete task-delete-btn",
    textContent: "Delete",
  });

  modal.appendChild(modalContent);
  modalContent.append(
    modalButtons,
    priorityDateContainer,
    title,
    notes,
    deleteBtn
  );

  return modal;
};

module.exports = {
  TaskModal,
};
