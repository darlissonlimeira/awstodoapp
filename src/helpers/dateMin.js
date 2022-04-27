function dateMin() {
  const date = new Date();
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const month =
    date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  const fullYear = date.getFullYear();

  return `${fullYear}-${month}-${day}`;
}

module.exports = { dateMin };
