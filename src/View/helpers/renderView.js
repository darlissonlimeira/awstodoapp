function renderView(view) {
  const app = document.querySelector('#app');
  app.replaceChild(view(), app.childNodes[0]);
}

module.exports = renderView;
