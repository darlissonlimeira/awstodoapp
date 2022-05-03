const { viewRender } = require('../../helpers/viewRender')
const { TaskItem } = require('../components/TaskItem')
const { TaskModal } = require('../components/TaskModal')
const { ProjectDetails } = require('./ProjectDetails')

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

const projectDetailsView = (project, tasks) => {
    const view = ProjectDetails()
    const taskModal = TaskModal()
    view.appendChild(taskModal)
    viewRender(view)

    const dataListEl = document.querySelector('#data-list')
    dataListEl.innerHTML = ''

    const cardProjectTitleEl = document.querySelector('#project-card-title')
    const cardProjectDescEl = document.querySelector('#project-card-desc')
    const formDeleteProject = document.querySelector('#form-project-delete')
    const createTaskBtn = document.querySelector('#add-item-btn')
    const projectCard = document.querySelector('#project-data')

    cardProjectTitleEl.textContent = project.title
    cardProjectDescEl.textContent = project.description

    const tasksElements = tasks.map((task) => {
        const taskElement = createTaskElement(task)
        taskElement.dataset.taskId = task.id

        return taskElement
    })

    dataListEl.append(...tasksElements)

    const tasksTitle = tasksElements.map((el) => {
        const titleEl = el.querySelector('.data-item__title')
        titleEl.dataset.taskId = el.dataset.taskId

        return titleEl
    })

    const tasksCheckBox = tasksElements.map((el) => {
        const checkBoxEl = el.querySelector('.check-form')
        checkBoxEl.dataset.taskId = el.dataset.taskId

        return checkBoxEl
    })

    return {
        projectCard,
        formDeleteProject,
        createTaskBtn,
        tasksTitle,
        tasksCheckBox,
    }
}

module.exports = {
    projectDetailsView,
}
