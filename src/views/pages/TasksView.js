const { viewRender } = require('../../helpers/viewRender')
const { TaskItem } = require('../components/TaskItem')
const { TaskModal } = require('../components/TaskModal')
const { Home } = require('./Home')

function tasksView(tasks) {
    const view = Home('Tasks')
    const taskModal = TaskModal()
    view.appendChild(taskModal)
    viewRender(view)

    const dataListEl = document.querySelector('#data-list')
    dataListEl.innerHTML = ''

    const tasksElements = []

    if (tasks.length > 0) {
        for (const task of tasks) {
            const taskElement = createTaskElement(task)
            taskElement.dataset.taskId = task.id
            tasksElements.push(taskElement)
        }
    }

    dataListEl.append(...tasksElements)

    const tasksTitle = tasksElements.map((el) => {
        const titleEl = el.querySelector('.data-item__title')
        titleEl.dataset.taskId = el.dataset.taskId

        return titleEl
    })

    const tasksCheckBox = tasksElements.map((el) => {
        const checkBoxEl = el.querySelector('.check-form')
        checkBoxEl['data-task-id'] = el['data-task-id']

        return checkBoxEl
    })

    const createProjectBtn = document.querySelector('#new-item-btn')

    const { menuProjectsBtn, menuTasksBtn } = navButtons()

    setMenuHandlers()

    return {
        createProjectBtn,
        tasksTitle,
        tasksCheckBox,
        menuProjectsBtn,
        menuTasksBtn,
    }
}

function setMenuHandlers() {
    const openMenuBtn = document.querySelector('#toggle-menu')
    const closeMenuBtn = document.querySelector('#close-nav-menu')

    openMenuBtn.onclick = () => {
        const nav = document.querySelector('#menu-app')
        nav.classList.toggle('toggle-menu')
    }

    closeMenuBtn.onclick = () => {
        const nav = document.querySelector('#menu-app')
        nav.classList.toggle('toggle-menu')
    }
}

function navButtons() {
    const menuTasksBtn = document.querySelector('#menu-btn-tasks')
    const menuProjectsBtn = document.querySelector('#menu-btn-projects')

    return {
        menuTasksBtn,
        menuProjectsBtn,
    }
}

const createTaskElement = (item) => {
    const taskElement = TaskItem(item)
    taskElement.id = item.id

    window.onclick = function (event) {
        const page = document.querySelector('.page')
        const modal = page.querySelector('.task-modal')
        if (event.target == modal) {
            page.removeChild(modal)
        }
    }

    return taskElement
}

module.exports = {
    tasksView,
}
