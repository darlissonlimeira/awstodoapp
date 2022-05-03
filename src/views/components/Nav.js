const { createNode } = require('../../helpers/createDOM')

const navMenu = () => {
    const menuNav = createNode('div', {
        className: 'nav-menu',
        id: 'menu-app',
    })

    const closeMenu = createNode('button', {
        className: 'close-button',
        id: 'close-nav-menu',
    })
    const closeIcon = createNode('i', {
        className: 'fa-solid fa-xmark',
    })
    closeMenu.appendChild(closeIcon)

    const nav = createNode('nav', { className: 'menu__nav' })
    const navList = createNode('ul', { className: 'menu__list' })
    const navItem1 = createNode('li', { className: 'menu__item' })
    const projectsBtn = createNode('button', {
        className: 'menu__button',
        textContent: 'Projects',
        id: 'menu-btn-projects',
    })
    const navItem2 = createNode('li', { className: 'menu__item' })
    const tasksBtn = createNode('button', {
        className: 'menu__button',
        textContent: 'Tasks',
        id: 'menu-btn-tasks',
    })

    nav.append(navList)
    navList.append(navItem1, navItem2)
    navItem1.appendChild(projectsBtn)
    navItem2.appendChild(tasksBtn)

    menuNav.append(closeMenu, nav)

    return menuNav
}

module.exports = { navMenu }
