const { viewRender } = require('../../helpers/viewRender')
const { AddProject } = require('./AddProject')

const createProjectView = () => {
    const view = AddProject()
    viewRender(view)

    const formEl = document.querySelector('#form-store')

    return { formEl }
}

module.exports = {
    createProjectView,
}
