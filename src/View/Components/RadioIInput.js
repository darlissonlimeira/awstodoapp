const createElement = require('../helpers/createElement');

function RadioInput(id, name, value, text, checked, iconClass) {
  const wrapper = createElement('div');
  wrapper.className = 'header-nav-opt';
  const label = createElement('label');
  label.className = 'radio-label';
  label.textContent = text;
  label.htmlFor = id;

  const radio = createElement('input');
  radio.type = 'radio';
  radio.id = id;
  radio.name = name;
  radio.checked = checked;
  radio.value = value;
  radio.required = true;

  if (iconClass) {
    const icon = createElement('i');
    icon.className = iconClass;
    label.append(icon);
  }

  wrapper.append(radio, label);

  return wrapper;
}

module.exports = RadioInput;
