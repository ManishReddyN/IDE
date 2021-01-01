const API = "http://localhost:8000/";
export const newCode = (postCode) => {
  return fetch(`${API}postCode`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postCode),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
