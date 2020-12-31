const Codes = require("../models/codes.js");
const { nanoid } = require("nanoid");

exports.root = (req, res) => {
  return res.status(200).json({
    message: "UP AND RUNNING!!",
  });
};

exports.newCode = async (req, res, next) => {
  let { language, code, input, output } = req.body;
  let shortid = "";
  try {
    while (1) {
      shortid = nanoid(6);
      console.log(shortid);
      let ch = /^[a-zA-Z0-9]+$/.test(shortid[0]);
      if (!ch) continue;
      const check = await Codes.findOne({ shortid });
      if (!check) {
        console.log("in");
        break;
      }
    }

    const newCode = new Codes({ shortid, language, code, input, output });
    newCode.save((err, code) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          error: "Server Error",
        });
      }
      return res.status(200).json({
        shortid: code.shortid,
      });
    });
  } catch {
    next();
  }
};

exports.getCode = (req, res) => {
  let shortid = req.body.shortid;
  Codes.findOne({ shortid }, (err, code) => {
    if (err || !code) {
      return res.status(400).json({
        error: "Invalid URL",
      });
    }
    return res.status(200).json(code);
  });
};
