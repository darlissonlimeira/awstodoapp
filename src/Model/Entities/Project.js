class Project {
  #_id;
  #_title;
  #_description;

  constructor({ id, title, description }) {
    this.#validate(id, title, description);
    this.#_id = id;
    this.#_title = title;
    this.#_description = description;
    return Object.freeze(this);
  }

  #validate(id, title, description) {
    if (!id) throw new Error('Invalide id.');
    if (!title) throw new Error('Invalide title.');
    if (!description) throw new Error('Invalide description.');
  }

  update({ id, title, description }) {
    this.#validate(id, title, description);
    this.#_id = id;
    this.#_title = title;
    this.#_description = description;
  }

  // Getters
  get id() {
    return this.#_id;
  }

  get title() {
    return this.#_title;
  }

  get description() {
    return this.#_description;
  }

  // Setters
  set #id(inputId) {
    this.#_id = inputId;
  }

  set #title(inputTitle) {
    this.#_title = inputTitle;
  }

  set #description(inputDescription) {
    this.#_description = inputDescription;
  }

  toJSON() {
    return {
      id: this.#_id,
      title: this.#_title,
      description: this.#_description,
    };
  }
}

module.exports = Project;
