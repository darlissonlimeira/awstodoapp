// const Footer = require('../Components/Footer');
// const createElement = require('../helpers/createElement');
// const renderView = require('../helpers/renderView');
// const Home = require('./Home');

function Home2() {
  const Footer = require('../Components/Footer');
  const createElement = require('../helpers/createElement');
  const renderView = require('../helpers/renderView');
  const Home = require('./Home');

  const page = createElement('div');
  page.className = 'page first-home';

  const main = createElement('div');
  main.className = 'main main-first-home';
  const title = createElement('h1');
  title.className = 'title-first-home';
  title.textContent = 'Awesome ToDo.';

  const button = createElement('button');
  button.className = 'home-btn';
  button.textContent = 'Open the app';

  const footer = Footer();

  main.append(title, button);

  page.append(main, footer);

  // Listeners
  button.addEventListener('click', () => {
    renderView(Home);
  });

  return page;
}

module.exports = Home2;
