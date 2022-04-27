const { createNode } = require("../../helpers/createDOM");
const { viewRender } = require("../../helpers/viewRender");

function IndexView() {
  const page = createNode("div", { className: "page home-index" });
  viewRender(page);

  const main = createNode("div", {
    className: "home-index__container",
  });
  const title = createNode("h1", {
    className: "home-index__title",
    textContent: "Awesome ToDo",
  });
  const button = createNode("button", {
    id: "open-app",
    className: "home-index__button",
    textContent: "Open the app",
  });

  page.append(main);
  main.append(title, button);

  return { button };
}

module.exports = { IndexView };
