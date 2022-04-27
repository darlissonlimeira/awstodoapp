const { localStorageDB } = require("../Database/config");

class Task {
  #projectId;
  #priority;
  #dueDate;
  #title;
  #notes;
  #complete;

  constructor({ projectId, priority, dueDate, title, notes, complete }) {
    this.#validate(projectId, priority, dueDate, title, notes);

    this.#projectId = projectId;
    this.#priority = priority;
    this.#dueDate = dueDate;
    this.#title = title;
    this.#notes = notes;
    this.#complete = complete;

    return Object.freeze(this);
  }

  #validate(projectId, priority, dueDate, title, notes) {
    if (!projectId)
      throw new Error("Project Id: Expect: String. Got: " + projectId);
    if (!priority)
      throw new Error("Priority: Expect: String. Got: " + priority);
    if (!dueDate) throw new Error("Due Date: Expect: String. Got: " + dueDate);
    if (!title) throw new Error("Title: Expect: String. Got: " + title);
    if (!notes) throw new Error("Notes: Expect: String. Got: " + notes);
  }

  get projectId() {
    return this.#projectId;
  }

  get title() {
    return this.#title;
  }

  get notes() {
    return this.#notes;
  }

  get dueDate() {
    return this.#dueDate;
  }

  get priority() {
    return this.#priority;
  }

  get complete() {
    return this.#complete;
  }

  toJSON() {
    return {
      projectId: this.#projectId,
      title: this.#title,
      notes: this.#notes,
      dueDate: this.#dueDate,
      priority: this.#priority,
      complete: this.#complete,
    };
  }
}

const taskModel = localStorageDB.model("Task", Task);

module.exports = { taskModel };
