const JSONDB = require("simple-json-db");
// setups
const { resolve } = require("path");
const db = new JSONDB(resolve(__dirname, "../.data/database.json"), {
  asyncWrite: true,
  syncOnWrite: true,
});

module.exports = db;
