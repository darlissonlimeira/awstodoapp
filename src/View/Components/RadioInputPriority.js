const createElement = require('../helpers/createElement');

function RadioInputPriority(id, value, text, checked) {
  const wrapper = createElement('div');
  wrapper.className = 'radio-wrapper-priority';
  const label = createElement('label');
  label.className = 'radio-label-priority';
  label.textContent = text;
  label.htmlFor = id;

  const radio = createElement('input');
  radio.type = 'radio';
  radio.id = id;
  radio.name = 'priority';
  radio.checked = checked;
  radio.value = value;
  radio.required = true;

  wrapper.append(radio, label);

  return wrapper;
}

module.exports = RadioInputPriority;
