const { createNode } = require('../../helpers/createDOM')
const { AddDataButton } = require('../components/AddDataButton')

const ProjectCard = () => {
    const dataContainer = createNode('div', {
        className: 'data-item__container data-item__container--details',
        id: 'project-data',
    })
    const titleItem = createNode('h2', {
        className: 'data-item__title',
        id: 'project-card-title',
    })
    const descItem = createNode('p', {
        className: 'data-item__desc',
        id: 'project-card-desc',
    })
    dataContainer.append(titleItem, descItem)

    return dataContainer
}

const ProjectDetails = () => {
    const page = createNode('div', { className: 'page' })
    const header = createNode('header')
    const form = createNode('form', { id: 'form-project-delete' })
    const formButtons = createNode('div', { className: 'form__buttons ' })
    const resetBtn = createNode('button', {
        type: 'reset',
        className: 'form__button form__button--reset',
    })
    const resetIcon = createNode('i', {
        className: 'fa-solid fa-right-to-bracket',
    })
    resetBtn.appendChild(resetIcon)

    const deleteBtn = createNode('button', {
        type: 'submit',
        className: 'form__button form__button--delete',
        textContent: 'Delete',
    })
    const main = createNode('main', { className: 'project-info' })
    const addDataBtn = AddDataButton()
    const projectInfo = createNode('section', {
        className: 'project-info__data',
    })
    const projectData = ProjectCard()
    const projectTask = createNode('section', {
        className: 'project-info__tasks',
    })
    const dataList = createNode('ul', {
        className: 'data-list',
        id: 'data-list',
    })

    page.append(header, main)
    header.appendChild(form)
    form.appendChild(formButtons)
    formButtons.append(resetBtn, deleteBtn)
    main.append(projectInfo, projectTask, addDataBtn)
    projectInfo.appendChild(projectData)
    projectTask.appendChild(dataList)

    return page
}

module.exports = { ProjectDetails }
