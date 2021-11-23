const createElement = require('../helpers/createElement');

function Footer() {
  const footer = createElement('footer');
  footer.className = 'footer';

  const gitHubLink = createElement('a');
  gitHubLink.href = '#';
  gitHubLink.textContent = 'Darlisson L. Silva';
  const gitHubIcon = createElement('i');
  gitHubIcon.className = 'fab fa-github';
  gitHubLink.appendChild(gitHubIcon);

  const autorName = document.createElement('p');
  autorName.appendChild(gitHubLink);

  const copyright = document.createElement('p');
  copyright.textContent = `© Copyright 2021`;

  footer.append(copyright, autorName);

  return footer;
}

module.exports = Footer;
