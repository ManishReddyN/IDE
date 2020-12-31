const mongoose = require("mongoose");

const code = mongoose.Schema({
  shortid: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  input: {
    type: String,
  },
  output: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Codes", code);
