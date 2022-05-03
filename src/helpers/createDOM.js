/**
 * @param  {String} tagName
 * @param  {Object} attributes={}
 */
const createNode = (tagName, attributes = {}) => {
    if (typeof tagName !== 'string')
        throw new Error('argument error: tagname must be string type.')

    return Object.assign(document.createElement(tagName), attributes)
}

module.exports = {
    createNode,
}
