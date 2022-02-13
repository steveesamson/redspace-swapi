const logAndReturn = (error, res) => {
  console.log(error);
  res
    .status(500)
    .json({ error: "There was an error while fetching your character." });
};
const getIdFromParams = (url) => {
  url = url.replace("https://swapi.dev/api", "");
  const [, path, id] = url.split("/");
  return id;
};
const getIdFromQuery = (url) => {
  const [, id] = url.split("=");
  return id;
};
module.exports = {
  logAndReturn,
  getIdFromParams,
  getIdFromQuery,
};
