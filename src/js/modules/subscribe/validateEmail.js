const subscribe = document.querySelector(".subscribe");
const email = document.querySelector(".email");

const validateEmail = (event) => {
  event.preventDefault();

  let subscriber = {
    email: "",
  };

  let value = email.value.trim().toLowerCase();

  let regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  if (regEx.test(value)) {
    subscriber.email = value;

    fetch("/subscriber", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(subscriber), // body data type must match "Content-Type" header
    })
      .then((response) => response.text())
      .then((data) => alert(data))
      .catch((error) => {
        if (error) throw error;
        console.log("error ", error);
      });
  } else {
    return false;
  }
};

export { subscribe };
export default validateEmail;
