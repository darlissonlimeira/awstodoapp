const Home = require('./View/Pages/Home');
const FirstPage = require('./View/Pages/FirstPage');

const app = document.querySelector('#app');

if (localStorage.getItem('awstodoDB')) {
  app.append(Home());
} else {
  app.append(FirstPage());
}
