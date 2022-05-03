const { createNode } = require('../../helpers/createDOM')
const { navMenu } = require('./Nav')

const PageHeader = (title) => {
    const header = createNode('header', { className: 'header' })
    const titleHeader = createNode('div', {
        className: 'header__title',
        textContent: title,
    })

    const menuBtn = createNode('button', {
        id: 'toggle-menu',
        className: 'header__menu-button',
    })
    const menuBtnIcon = createNode('i', {
        className: 'fa-solid fa-bars-staggered',
    })
    menuBtn.appendChild(menuBtnIcon)

    const nav = navMenu()

    header.append(titleHeader, nav, menuBtn)

    return header
}

module.exports = { PageHeader }
