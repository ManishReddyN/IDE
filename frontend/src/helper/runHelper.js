import { API } from "../backend";

/* eslint-disable no-useless-escape */
export const runHelper = (runArgs) => {
  return fetch(`${API}runCode`, {
    method: "POST",
    body: JSON.stringify(runArgs),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return {
        Errors: "There is an error with the code running service.\n" + err,
      };
    });
};
