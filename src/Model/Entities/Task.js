class Task {
  #_id;
  #_projectId; // project related id
  #_priority; // should be low, medium or high
  #_dueDate; // can't be less current date
  #_title;
  #_notes;
  #_complete; // true or false values

  constructor({
    id = 'temp_id',
    projectId,
    priority,
    dueDate,
    title,
    notes,
    complete = false,
  }) {
    this.#validate(id, projectId, priority, dueDate, title, notes, complete);
    this.#id = id;
    this.#projectId = projectId;
    this.#priority = priority;
    this.#dueDate = dueDate;
    this.#title = title;
    this.#notes = notes;
    this.#complete = complete;
    return Object.freeze(this);
  }

  #validate(id, projectId, priority, dueDate, title, notes, complete) {
    if (!id) throw new Error('Error Id: Expect: String. Got: ' + id);
    if (!projectId)
      throw new Error('Error Project Id: Expect: String. Got: ' + projectId);
    if (!priority)
      throw new Error('Error Priority: Expect: String. Got: ' + priority);
    if (!dueDate)
      throw new Error('Error Due Date: Expect: String. Got: ' + dueDate);
    if (!title) throw new Error('Error Title: Expect: String. Got: ' + title);
    if (!notes) throw new Error('Error Notes: Expect: String. Got: ' + notes);
    if (typeof complete !== 'boolean')
      throw new Error('Error Complete: Expect: Boolean. Got: ' + complete);
  }

  #update({ id, projectId, priority, dueDate, title, notes, complete }) {
    this.#validate(id, projectId, priority, dueDate, title, notes, complete);
    this.#id = id;
    this.#projectId = projectId;
    this.#priority = priority;
    this.#dueDate = dueDate;
    this.#title = title;
    this.#notes = notes;
    this.#complete = complete;
  }

  // Getters
  get id() {
    return this.#_id;
  }

  get projectId() {
    return this.#_projectId;
  }

  get priority() {
    return this.#_priority;
  }

  get dueDate() {
    return this.#_dueDate;
  }

  get title() {
    return this.#_title;
  }

  get notes() {
    return this.#_notes;
  }

  get complete() {
    return this.#_complete;
  }

  // Setters
  set #id(inputId) {
    this.#_id = inputId;
  }

  set #projectId(inputProjectId) {
    this.#_projectId = inputProjectId;
  }

  set #priority(inputPriority) {
    this.#_priority = inputPriority;
  }

  set #dueDate(inputDueDate) {
    this.#_dueDate = inputDueDate;
  }

  set #title(inputTitle) {
    this.#_title = inputTitle;
  }

  set #notes(inputNotes) {
    this.#_notes = inputNotes;
  }

  set #complete(inputComplete) {
    this.#_complete = inputComplete;
  }

  toJSON() {
    return {
      id: this.#_id,
      projectId: this.#_projectId,
      priority: this.#_priority,
      dueDate: this.#_dueDate,
      title: this.#_title,
      notes: this.#_notes,
      complete: this.#_complete,
    };
  }
}

module.exports = Task;
