const createElement = require('../helpers/createElement');
const TodoItem = require('./TodoItem');

function TodoList(todoList) {
  if (todoList && todoList.length > 0) {
    const wrapper = createElement('div');
    wrapper.className = 'todos-wrapper';
    const title = createElement('h3');
    title.className = 'list-title';
    title.textContent = 'Tasks';
    const list = createElement('ul');
    list.className = 'todo-list';
    const todosEL = todoList.map(todo => TodoItem(todo));
    list.append(...todosEL);
    wrapper.append(title, list);

    return wrapper;
  } else {
    const defaultMsg = createElement('h3');
    defaultMsg.className = 'default-message';
    defaultMsg.textContent = "You don't have tasks yet!";

    return defaultMsg;
  }
}

module.exports = TodoList;
