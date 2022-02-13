// imports
const express = require("express");
const cors = require("cors");
const { people } = require("./routes");

// init
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.end("Welcome to Redspace Swapi!");
});
app.use("/people", people);
app.listen(PORT, () =>
  console.log(`Redspace Swapi now runing at //localhost:${PORT}.`)
);
