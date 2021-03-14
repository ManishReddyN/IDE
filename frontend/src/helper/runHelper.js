/* eslint-disable no-useless-escape */
export const runHelper = (runArgs) => {
  var formData = new FormData();
  for (var i in runArgs) {
    formData.append(i, runArgs[i]);
  }

  return fetch("https://rextester.com/rundotnet/api", {
    method: "POST",
    body: formData,
    // headers: {
    //   "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    //   Origin: null,
    // },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return {
        Errors:
          "There is an error with the code running service. Will be fixed soon.",
      };
    });
};
