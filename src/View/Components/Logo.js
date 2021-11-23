const createElement = require('../helpers/createElement');

function Logo() {
  const logo = new createElement('button');
  logo.className = 'logo';
  logo.id = 'logo-app';
  const icon1 = new createElement('i');
  icon1.className = 'far fa-sticky-note';
  const icon2 = new createElement('i');
  icon2.className = 'fas fa-pencil-alt';

  logo.append(icon1, icon2);

  return logo;
}

module.exports = Logo;
