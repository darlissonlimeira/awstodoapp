const { v4: uuid } = require("uuid");
const { LocalStorageService } = require("./LocalStorageService");

class Collection {
  /**
   * @type  {Object[]} #collection
   */
  #collection;
  /**
   * @type  {LocalStorageService} #dbService
   */
  #dbService;
  #Schema;
  #collectionName;
  /**
   * @param  {String} collectionName
   */
  constructor(collectionName, Schema, dbService) {
    this.#dbService = dbService;
    this.#collectionName = collectionName;
    this.#Schema = Schema;
    this.#collection = this.#dbService.getCollection(collectionName);
  }

  findAll() {
    return this.#collection;
  }

  findOne(id) {
    const index = this.#collection.findIndex((item) => item.id === id);

    if (index < 0) return null;

    const data = {
      index,
      data: this.#collection[index],
    };

    return data;
  }

  create(inputData) {
    const schema = new this.#Schema(inputData);
    const data = JSON.parse(JSON.stringify(schema));

    data["id"] = uuid();

    this.#collection.push(data);

    this.#dbService.updateCollection(this.#collectionName, this.#collection);

    return data;
  }

  deleteOne(id) {
    const result = this.findOne(id);

    if (!result) throw new Error("Data not found.");

    this.#collection.splice(result.index, 1);

    this.#dbService.updateCollection(this.#collectionName, this.#collection);

    return result.data;
  }

  update(id, inputData) {
    const result = this.findOne(id);

    if (!result) throw new Error("Data not found.");

    const schema = new this.#Schema(inputData);

    const data = JSON.parse(JSON.stringify(schema));
    data["id"] = id;

    this.#collection[result.index] = data;

    this.#dbService.updateCollection(this.#collectionName, this.#collection);

    return result.data;
  }
}

module.exports = { Collection };
