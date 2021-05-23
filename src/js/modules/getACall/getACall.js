let callForm = document.querySelector(".call__form");
let inputName = callForm[0];
let inputNumber = callForm[1];
let btnCall = callForm[2];

const getACall = (event) => {
  event.preventDefault();

  let contacts = {
    name: "",
    number: "",
  };

  let name = inputName.value.trim();
  let number = inputNumber.value;

  contacts = { name, number };

  fetch("/contacts", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(contacts), // body data type must match "Content-Type" header
  })
    .then((response) => response.text())
    .then((data) => alert(data))
    .catch((error) => {
      if (error) throw error;
      console.log("error ", error);
    });
};

export { btnCall };
export default getACall;
