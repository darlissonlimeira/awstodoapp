class LocalStorageService {
    #dbName
    #database

    constructor(dbName) {
        this.#validateDatabaseName(dbName)

        this.#dbName = dbName
        this.#database = JSON.parse(localStorage.getItem(this.#dbName)) || {}
        return Object.freeze(this)
    }

    #saveToLocalStorage() {
        localStorage.setItem(this.#dbName, JSON.stringify(this.#database))
    }

    getCollections() {
        return this.#database
    }

    getCollection(name) {
        this.#validateCollectionName(name)

        if (!this.#database[name]) {
            this.#createCollection(name)
        }
        return this.#database[name]
    }

    destroyCollection(name) {
        this.#validateCollectionName(name)

        delete this.#database[name]
        this.#saveToLocalStorage()
    }

    updateCollection(name, data) {
        this.#validateCollectionName(name)

        if (!(data instanceof Array)) {
            throw new Error(
                'Collection type error: required to be an Array type.'
            )
        }

        this.#database[name] = data
        this.#saveToLocalStorage()
    }

    #createCollection(name) {
        this.#database[name] = []
        this.#saveToLocalStorage()
    }

    #validateDatabaseName(dbName) {
        if (!dbName) {
            throw new Error('Must provide a database name.')
        }
    }

    #validateCollectionName(name) {
        if (!name) {
            throw new Error('Invalide collection name')
        }
    }
}

module.exports = { LocalStorageService }
