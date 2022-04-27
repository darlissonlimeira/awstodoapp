const viewRender = (view) => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  app.appendChild(view);
};

module.exports = {
  viewRender,
};
