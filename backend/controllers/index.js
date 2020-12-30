const axios = require("axios");
let runArgs = {
  LanguageChoice: "24",
  Program: 'print("Hello")',
  Input: "",
  CompilerArgs: "",
};

exports.root = (req, res) => {
  return res.status(200).json({
    message: "UP AND RUNNING!!",
  });
};

exports.test = (req, res) => {
  return axios({
    url: "https://rextester.com/rundotnet/api",
    method: "POST",
    body: JSON.stringify(runArgs),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  }).then((res) => {
    let k = res;
    console.log(k.data);
    return k;
  });
  console.log(result.json());
  return res.status(200).json(result);
};
