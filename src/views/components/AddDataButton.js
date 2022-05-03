const { createNode } = require('../../helpers/createDOM')

const AddDataButton = () => {
    const button = createNode('button', {
        className: 'add-item-btn',
        id: 'add-item-btn',
    })
    const icon = createNode('i', { className: 'fa-solid fa-plus' })
    button.appendChild(icon)
    return button
}

module.exports = { AddDataButton }
