const { createNode } = require('../../helpers/createDOM')

const FormControlButtons = (title) => {
    const formControlButtons = createNode('div', {
        className: 'form__header form__buttons',
    })
    const resetBtn = createNode('button', {
        type: 'reset',
        className: 'form__button form__button--reset',
    })
    const resetIcon = createNode('i', {
        className: 'fa-solid fa-right-to-bracket',
    })
    resetBtn.appendChild(resetIcon)

    const controlTitle = createNode('h1', {
        className: 'form__title',
        textContent: title,
    })
    const saveBtn = createNode('button', {
        type: 'submit',
        className: 'form__button form__button--save',
        textContent: 'Save',
    })

    formControlButtons.append(resetBtn, controlTitle, saveBtn)
    return formControlButtons
}

module.exports = { FormControlButtons }
