const formSubmit = () => {
  const formSelected = document.querySelector(".form");
  const submitButton = document.querySelector("#create-account");
  const userName = document.querySelector("#Username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const passWord = document.querySelector("#password").value.trim();
  const conformPassword = document
    .querySelector("#conform-password")
    .value.trim();
  const requiredAccount = document.querySelector(".required-alert");
  const result = document.querySelector(".p");

  const emailSetExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Call the validInputs function with parameters
  validInputs(userName, email, passWord, conformPassword, requiredAccount);
};

const validInputs = (
  userName,
  email,
  passWord,
  conformPassword,
  requiredAccount
) => {
  if (
    userName === "" ||
    passWord === "" ||
    email === "" ||
    conformPassword === ""
  ) {
    requiredAccount.innerHTML = "";
    return false;
  }
  // Additional validation logic can be added here

  // If all validations pass, return true or perform necessary actions
  return true;
};

const checkInputs = () => {
  // Add your input validation logic here if needed
};

// Call formSubmit when you want to trigger form submission and validation
formSubmit();
