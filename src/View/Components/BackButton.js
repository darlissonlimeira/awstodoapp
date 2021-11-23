const createElement = require('../helpers/createElement');
const renderView = require('../helpers/renderView');

function BackButton(view) {
  const backIcon = createElement('i');
  backIcon.className = 'fas fa-arrow-left';
  const backBtn = createElement('button');
  backBtn.append(backIcon);

  backBtn.addEventListener('click', () => renderView(view));

  return backBtn;
}

module.exports = BackButton;
