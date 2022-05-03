const { createNode } = require('../../helpers/createDOM')

const TaskItem = (data) => {
    const dataItem = createNode('li', {
        className: 'data-item',
    })
    const dataContainer = createNode('div', {
        className: 'data-item__container data-item__task',
    })
    const formData = createNode('form', { className: 'check-form' })
    const inputId = createNode('input', {
        type: 'hidden',
        name: 'id',
        value: data.id,
    })
    const inputProjectId = createNode('input', {
        type: 'hidden',
        name: 'projectId',
        value: data.projectId,
    })
    const inputPriority = createNode('input', {
        type: 'hidden',
        name: 'priority',
        value: data.priority,
    })
    const inputDate = createNode('input', {
        type: 'hidden',
        name: 'dueDate',
        value: data.dueDate,
    })
    const inputTitle = createNode('input', {
        type: 'hidden',
        name: 'title',
        value: data.title,
    })
    const inputNotes = createNode('input', {
        type: 'hidden',
        name: 'notes',
        value: data.notes,
    })
    const inputComplete = createNode('input', {
        className: 'task-checkbox',
        type: 'checkbox',
        name: 'complete',
        id: `complete-${data.id}`,
        checked: data.complete,
    })
    const labelCheckBox = createNode('label', {
        htmlFor: `complete-${data.id}`,
    })

    const taskTitle = createNode('p', {
        className: 'data-item__title',
        textContent: data.title,
    })

    dataItem.appendChild(dataContainer)
    dataContainer.append(formData, taskTitle)
    formData.append(
        inputId,
        inputProjectId,
        inputPriority,
        inputDate,
        inputTitle,
        inputNotes,
        inputComplete,
        labelCheckBox
    )

    return dataItem
}

module.exports = { TaskItem }
