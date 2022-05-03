const { createNode } = require('../../helpers/createDOM')
const { dateMin } = require('../../helpers/dateMin')
const { FormControlButtons } = require('../components/FormControlButtons')

const TaskPriorityOption = (id, value, text) => {
    const formRadioOption = createNode('div', {
        className: 'form__radio-group task-priority__option',
    })
    const radioInput = createNode('input', {
        className: 'form__input',
        type: 'radio',
        value,
        name: 'priority',
        required: true,
        id,
    })
    const radioLabel = createNode('label', {
        className: 'task-priority-check',
        htmlFor: id,
        textContent: text,
    })

    formRadioOption.append(radioInput, radioLabel)

    return formRadioOption
}

const TaskPriorityFieldset = () => {
    const fieldset = createNode('fieldset', {
        className: 'form-control task-priority',
    })
    const legend = createNode('legend', { textContent: 'Priority' })
    const lowOption = TaskPriorityOption('task-priority-low', 'low', 'Low')
    const mediumOption = TaskPriorityOption(
        'task-priority-medium',
        'medium',
        'Medium'
    )
    const highOption = TaskPriorityOption('task-priority-high', 'high', 'High')

    fieldset.append(legend, lowOption, mediumOption, highOption)

    return fieldset
}

const AddTask = () => {
    const page = createNode('div', { className: 'page' })
    const formSection = createNode('div', { className: 'form' })
    const form = createNode('form', { id: 'form-store' })
    const formContainer = createNode('div', { className: 'form-container' })
    const formBody = createNode('div', { className: 'form__body' })

    const controlPriority = TaskPriorityFieldset()

    const controlDate = createNode('div', { className: 'form-control' })
    const labelDate = createNode('label', {
        htmlFor: 'task-duedate',
        textContent: 'Due Date',
    })
    const inputDate = createNode('input', {
        id: 'task-duedate',
        name: 'dueDate',
        min: dateMin(),
        type: 'date',
        className: 'form__input',
        required: true,
    })
    controlDate.append(labelDate, inputDate)

    const controlTitle = createNode('div', { className: 'form-control' })
    const labelTitle = createNode('label', {
        htmlFor: 'task-title',
        textContent: 'Title',
    })
    const inputTitle = createNode('input', {
        id: 'task-title',
        name: 'title',
        type: 'text',
        className: 'form__input',
        required: true,
    })
    controlTitle.append(labelTitle, inputTitle)

    const controlNotes = createNode('div', { className: 'form-control' })
    const labelNotes = createNode('label', {
        htmlFor: 'task-notes',
        textContent: 'Notes',
    })
    const inputNotes = createNode('textarea', {
        id: 'task-notes',
        name: 'notes',
        row: '2',
        className: 'form__input',
        required: true,
    })
    controlNotes.append(labelNotes, inputNotes)

    const inputProjectId = createNode('input', {
        type: 'hidden',
        name: 'projectId',
    })

    const formControlButtons = FormControlButtons('Task')

    page.appendChild(formSection)
    formSection.appendChild(form)
    form.appendChild(formContainer)
    form.appendChild(formBody)
    formBody.append(
        inputProjectId,
        controlPriority,
        controlDate,
        controlTitle,
        controlNotes,
        formControlButtons
    )

    return page
}

module.exports = { AddTask }
