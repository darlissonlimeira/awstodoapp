const { Database } = require('./Database')

const localStorageDB = new Database('awstodo_db')

module.exports = {
    localStorageDB,
}
