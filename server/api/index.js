const https = require("https");
const BASE_URL = "https://swapi.dev/api";

const fetch = (path) => {
  // for subsequent urls
  path = path.replace(BASE_URL, "");
  return new Promise((r) => {
    https
      .get(`${BASE_URL}${path}`, (res) => {
        res.setEncoding("utf8");
        let body = "";
        res.on("data", (data) => {
          body += data;
        });
        res.on("end", () => {
          try {
            const data = JSON.parse(body);
            if (data.detail && data.detail === "Not found") {
              return r({ error: "Not found" });
            }
            r({ data });
          } catch (error) {
            r({ error });
          }
        });
      })
      .on("error", (error) => {
        r({ error });
      });
  });
};
module.exports.fetch = fetch;
module.exports.fetchBatch = async (paths) => {
  const requests = paths.map((path) => fetch(path));
  const raw = await Promise.all(requests);
  return raw.reduce(
    (acc, next) => {
      const { data, error } = next;
      if (data) {
        acc.data = [...acc.data, data];
      }
      if (error) {
        acc.error = [...acc.error, error];
      }
      return acc;
    },
    { data: [], error: [] }
  );
};
