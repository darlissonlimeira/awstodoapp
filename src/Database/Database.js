const { Collection } = require("./Collection");
const { LocalStorageService } = require("./LocalStorageService");

class Database {
  #dbService;
  constructor(name) {
    this.#dbService = new LocalStorageService(name);
  }

  model(name, Schema) {
    const dbModel = new Collection(name, Schema, this.#dbService);
    return dbModel;
  }
}

module.exports = {
  Database,
};
