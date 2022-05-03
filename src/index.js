const { formatDate } = require('./helpers/formatDate')
const { taskModel } = require('./Model/task')
const { projectModel } = require('./Model/project')

const { IndexView } = require('./views/pages/IndexView')
const { tasksView } = require('./views/pages/TasksView')
const { createTaskView } = require('./views/pages/CreateTaskView')
const { updateTaskView } = require('./views/pages/UpdateTaskView')

const { projectsView } = require('./views/pages/ProjectsView')
const { projectDetailsView } = require('./views/pages/ProjectDetailsView')
const { createProjectView } = require('./views/pages/CreateProjectView')
const { editProjectView } = require('./views/pages/EditProjectView')

class App {
    init() {
        const projects = projectModel.findAll()
        if (projects.length > 0) {
            this.indexProjects()
        } else {
            const elements = IndexView()
            elements.button.addEventListener('click', () => {
                this.indexTasks()
            })
        }
    }

    indexProjects() {
        const projects = projectModel.findAll()
        const elements = projectsView(projects)

        elements.addProjectBtn.onclick = () => {
            this.createProject()
        }

        elements.projectElements.map((el) => {
            el.addEventListener('click', () => {
                this.showProject(el.dataset.projectId)
            })
        })

        elements.menuTasksBtn.onclick = () => {
            this.indexTasks()
        }

        elements.menuProjectsBtn.onclick = () => {
            this.indexProjects()
        }
    }

    showProject(projectId) {
        const project = projectModel.findOne(projectId)
        const tasks = taskModel
            .findAll()
            .filter((task) => task.projectId === project.data.id)

        const elements = projectDetailsView(project.data, tasks)

        elements.createTaskBtn.addEventListener('click', () => {
            this.createTask(projectId)
        })

        elements.projectCard.addEventListener('click', () => {
            this.updateProject(projectId)
        })

        elements.formDeleteProject.addEventListener('submit', (event) => {
            event.preventDefault()
            this.destroyProject(projectId)
            return false
        })

        elements.formDeleteProject.addEventListener('reset', () => {
            this.indexProjects()
        })

        elements.tasksTitle.forEach((titleEl) => {
            titleEl.addEventListener('click', () => {
                const taskId = titleEl.dataset.taskId
                this.showTask(taskId, projectId)
            })
        })

        elements.tasksCheckBox.forEach((checkBoxEl) => {
            checkBoxEl.addEventListener('change', (event) => {
                event.preventDefault()
                const taskId = checkBoxEl.dataset.taskId
                const task = taskModel.findOne(taskId).data
                task.complete = event.target.checked

                taskModel.update(taskId, task)
            })
        })
    }

    updateProject(id) {
        const project = projectModel.findOne(id)
        const elements = editProjectView(project.data)

        elements.editProjectForm.addEventListener('submit', (event) => {
            event.preventDefault()

            const title = elements.titleInput.value
            const description = elements.descInput.value
            const updatedProject = { title, description, id }

            projectModel.update(id, updatedProject)
            this.showProject(id)

            return false
        })

        elements.editProjectForm.addEventListener('reset', (event) => {
            event.preventDefault()
            this.showProject(id)
        })
    }

    createProject() {
        const elements = createProjectView()

        elements.formEl.addEventListener('submit', (event) => {
            event.preventDefault()

            const project = {
                title: event.target['title'].value,
                description: event.target['desc'].value,
            }

            const newProject = projectModel.create(project)
            this.showProject(newProject.id)

            return false
        })

        elements.formEl.addEventListener('reset', (event) => {
            event.preventDefault()
            this.indexProjects()
        })
    }

    destroyProject(projectId) {
        const tasks = taskModel.findAll()

        for (const task of tasks) {
            if (task.projectId === projectId) {
                taskModel.deleteOne(task.id)
            }
        }

        projectModel.deleteOne(projectId)
        this.indexProjects()
    }

    indexTasks() {
        const tasks = taskModel.findAll()
        const elements = tasksView(tasks)

        elements.createProjectBtn.addEventListener('click', () => {
            this.createProject()
        })

        elements.menuTasksBtn.onclick = () => {
            this.indexTasks()
        }

        elements.menuProjectsBtn.onclick = () => {
            this.indexProjects()
        }

        elements.tasksTitle.forEach((titleEl) => {
            titleEl.addEventListener('click', () => {
                const taskId = titleEl.dataset.taskId
                this.showTask(taskId)
            })
        })

        elements.tasksCheckBox.forEach((checkBoxEl) => {
            checkBoxEl.addEventListener('change', (event) => {
                event.preventDefault()
                const taskId = checkBoxEl['data-task-id']
                const task = taskModel.findOne(taskId).data
                task.complete = event.target.checked

                taskModel.update(taskId, task)
            })
        })
    }

    createTask(projectId) {
        const elements = createTaskView()
        elements.createTaskForm.addEventListener('submit', (event) => {
            event.preventDefault()

            const task = {
                projectId: projectId,
                complete: false,
                priority: event.target['priority'].value,
                dueDate: event.target['dueDate'].value,
                title: event.target['title'].value,
                notes: event.target['notes'].value,
            }

            taskModel.create(task)
            this.showProject(projectId)

            return false
        })

        elements.createTaskForm.addEventListener('reset', () => {
            this.showProject(projectId)
        })
    }

    showTask(taskId, projectId) {
        const task = taskModel.findOne(taskId)

        const modalTaskPriority = document.querySelector('#task-modal-priority')
        const modalTaskDate = document.querySelector('#task-modal-date')
        const modalTaskTitle = document.querySelector('#task-modal-title')
        const modalTaskNotes = document.querySelector('#task-modal-notes')

        const modalBtnClose = document.querySelector('.modal-button--close')
        const modalBtnEdit = document.querySelector('.modal-button--edit')
        const modalBtnDelete = document.querySelector('.modal__button--delete')

        modalTaskPriority.textContent = task.data.priority
        modalTaskDate.textContent = formatDate(task.data.dueDate)
        modalTaskTitle.textContent = task.data.title
        modalTaskNotes.textContent = task.data.notes

        const taskModal = document.querySelector('.task-modal')
        taskModal.classList.add('toggle-modal')

        modalBtnClose.onclick = () => {
            taskModal.classList.toggle('toggle-modal')
        }

        modalBtnEdit.onclick = () => {
            this.updateTask(taskId, projectId)
        }

        modalBtnDelete.onclick = () => {
            this.destroyTask(taskId, projectId)
        }
    }

    updateTask(id, projectId) {
        const task = taskModel.findOne(id)
        const elements = updateTaskView(task.data)

        elements.updateTaskForm.addEventListener('submit', (event) => {
            event.preventDefault()

            const updatedTask = {
                projectId: task.data.projectId,
                id: task.data.id,
                complete: task.data.complete,
                dueDate: event.target['dueDate'].value,
                title: event.target['title'].value,
                notes: event.target['notes'].value,
                priority: event.target['priority'].value,
            }

            taskModel.update(id, updatedTask)

            if (projectId) return this.showProject(projectId)
            this.indexTasks()

            return false
        })

        elements.updateTaskForm.addEventListener('reset', () => {
            if (projectId) return this.showProject(projectId)
            this.indexTasks()
        })
    }

    destroyTask(id) {
        taskModel.deleteOne(id)
        const taskModal = document.querySelector('.task-modal')
        const tasksElements = document.querySelector('#data-list')
        const taskEl = document.querySelector(`[data-task-id='${id}']`)
        tasksElements.removeChild(taskEl)

        taskModal.classList.toggle('toggle-modal')
    }
}

const application = new App()

application.init()
