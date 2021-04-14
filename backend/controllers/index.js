const Codes = require("../models/codes.js");
const { customAlphabet } = require("nanoid");
const axios = require("axios").default;
const nanoid = customAlphabet(
  "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  7
);

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
      shortid = nanoid();
      const check = await Codes.findOne({ shortid });
      if (!check) {
        break;
      }
    }
    const runArgs = {
      language: language,
      source: code,
      stdin: input,
    };
    axios({
      method: "POST",
      url: "https://emkc.org/api/v1/piston/execute",
      data: runArgs,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        output = response.data.output;
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
            output: output,
            stdout: response.data.stdout,
            stderr: response.data.stderr,
          });
        });
      })
      .catch((err) => console.log(err));
  } catch {
    next();
  }
};
exports.runCode = (req, res) => {
  let { language, source, stdin } = req.body;
  const runArgs = {
    language,
    source,
    stdin,
  };
  axios({
    method: "POST",
    url: "https://emkc.org/api/v1/piston/execute",
    data: runArgs,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return res.status(200).json(response.data);
    })
    .catch((err) => {
      return res.status(400).json(err);
    });
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
