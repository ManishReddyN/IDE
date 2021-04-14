require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/index");

connectionString = process.env.MONGO_URL;
port = process.env.PORT || 8000;
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch(() => {
    console.log("Error Occurred While connecting");
  });
const dev = "http://localhost:3000";
const prod = "https://runcode.ml";
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", prod);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
app.use("/", routes);

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
