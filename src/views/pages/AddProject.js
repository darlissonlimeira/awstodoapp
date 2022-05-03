const { createNode } = require('../../helpers/createDOM')
const { FormControlButtons } = require('../components/FormControlButtons')

const FormBody = () => {
    const formBody = createNode('div', { className: 'form__body' })
    const formControlTitle = createNode('div', { className: 'form-control' })
    const labelTitle = createNode('label', {
        htmlFor: 'project-title',
        textContent: 'Title:',
    })
    const inputTitle = createNode('input', {
        className: 'form__input',
        name: 'title',
        type: 'text',
        id: 'project-title',
        placeholder: 'Title',
        required: true,
    })

    const formControlDesc = createNode('div', { className: 'form-control' })
    const labelDesc = createNode('label', {
        htmlFor: 'project-desc',
        textContent: 'Descripition:',
    })
    const inputDesc = createNode('textarea', {
        className: 'form__input',
        name: 'desc',
        rows: '2',
        id: 'project-desc',
        placeholder: 'Description',
        required: true,
    })

    formControlTitle.append(labelTitle, inputTitle)
    formControlDesc.append(labelDesc, inputDesc)
    formBody.append(formControlTitle, formControlDesc)

    return formBody
}

const AddProject = () => {
    const page = createNode('div', { className: 'page' })
    const formSection = createNode('section', { className: 'form' })
    const form = createNode('form', { id: 'form-store' })
    const formContainer = createNode('div', { className: 'form-container' })
    const formBody = FormBody()
    const formControlButtons = FormControlButtons('Project')

    page.appendChild(formSection)
    formSection.appendChild(form)
    form.appendChild(formContainer)
    formContainer.append(formBody, formControlButtons)
    return page
}
module.exports = { AddProject }
