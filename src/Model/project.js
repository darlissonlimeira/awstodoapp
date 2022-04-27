const { localStorageDB } = require("../Database/config");

class Project {
  #title;
  #description;

  constructor({ title, description }) {
    this.#validate(title, description);
    this.#title = title;
    this.#description = description;

    return Object.freeze(this);
  }

  #validate(title, description) {
    if (!title) throw new Error("Invalide title.");
    if (!description) throw new Error("Invalide description.");
  }

  get title() {
    return this.#title;
  }

  get description() {
    return this.#description;
  }

  toJSON() {
    return {
      title: this.#title,
      description: this.#description,
    };
  }
}

const projectModel = localStorageDB.model("Project", Project);

module.exports = { projectModel };
