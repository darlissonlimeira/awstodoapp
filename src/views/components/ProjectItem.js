const { createNode } = require("../../helpers/createDOM");

const ProjectItem = (data) => {
  const dataItem = createNode("li", {
    className: "data-item",
    id: data.id,
  });
  const dataContainer = createNode("div", {
    className: "data-item__container",
  });
  const titleItem = createNode("h2", {
    className: "data-item__title",
    textContent: data.title,
  });
  const descItem = createNode("p", {
    className: "data-item__desc",
    textContent: data.description,
  });
  dataItem.append(dataContainer);
  dataContainer.append(titleItem, descItem);

  return dataItem;
};

module.exports = { ProjectItem };
