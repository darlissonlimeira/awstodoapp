const { createNode } = require("../../helpers/createDOM");
const { PageHeader } = require("../components/PageHeader");

const NewDataBtn = () => {
  const button = createNode("button", {
    className: "add-item-btn",
    id: "new-item-btn",
  });
  const icon = createNode("i", { className: "fa-solid fa-plus" });
  button.appendChild(icon);
  return button;
};

const Home = (title) => {
  const page = createNode("div", { className: "page" });
  const header = PageHeader(title);
  const main = createNode("main", {});
  const dataSection = createNode("section", { className: "data-section" });
  const dataList = createNode("ul", {
    className: "data-list",
    id: "data-list",
  });
  const addNewBtn = NewDataBtn();

  page.append(header, main);
  main.append(dataSection, addNewBtn);
  dataSection.appendChild(dataList);

  return page;
};

module.exports = { Home };
