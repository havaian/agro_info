const express = require("express");
const cors = require("cors");

require("dotenv").config();

require("./db");

const app = express();
var corsOptions = {
  origin: '*'
};
app.use(cors(corsOptions));

// app.use(require("./token/middleware").validateUser);

app.get("/", (req, res) => {
  res.send({
    agro_info: "It's working! 🙌"
  })
});

app.use("/token", require("./token/routes"));
app.use("/organisation", require("./organisation/routes"));

// set port, listen for requests
const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`Port: ${PORT} ✅`);
});