function formatDate(date) {
  const dateData = new Date(date);
  const day = dateData.getUTCDate();
  const month = dateData.toLocaleString(["default", "en-US"], {
    month: "short",
  });
  const year = dateData.getFullYear();

  return `${month} ${day}, ${year}`;
}

module.exports = { formatDate };
