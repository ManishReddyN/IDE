const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes/index");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const PORT = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use("/", routes);
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
