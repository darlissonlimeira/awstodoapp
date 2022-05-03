const { viewRender } = require('../../helpers/viewRender')
const { AddTask } = require('./AddTask')

const createTaskView = () => {
    const view = AddTask()
    viewRender(view)

    const createTaskForm = document.querySelector('#form-store')

    return {
        createTaskForm,
    }
}

module.exports = {
    createTaskView,
}
