const createElement = require('../helpers/createElement');

function Header() {
  const header = createElement('header');
  header.className = 'header';

  const backIcon = createElement('span');
  backIcon.className = 'fas fa-angle-left';
  const backBtn = createElement('button');
  backBtn.append(backIcon);

  // header.append(backBtn);

  return header;
}

module.exports = Header;
