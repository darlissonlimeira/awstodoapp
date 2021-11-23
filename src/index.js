const Home = require('./View/Pages/Home');
const Home2 = require('./View/Pages/Home-2');

const app = document.querySelector('#app');

if (localStorage.getItem('awstodoDB')) {
  app.append(Home());
} else {
  app.append(Home2());
}
