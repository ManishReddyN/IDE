const API = "http://runcodebe.azurewebsites.net/";
export const newCode = (postCode) => {
  console.log(postCode);
  return fetch(`${API}newCode`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postCode),
  })
    .then((response) => {
      console.log("hello");
      return response.json();
    })
    .catch((err) => console.log(err));
};
