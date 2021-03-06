window.addEventListener("load", function () {
  const form = document.querySelector("#form-login");

  const mail = document.querySelector("#mail");
  const password = document.querySelector("#password");


  const errorMessages = document.querySelectorAll(".error-message");

  const errorMail = document.querySelector(".error-mail");
  const errorPassword = document.querySelector(".error-password");

  function resetFormErrors() {
    errorMessages.forEach((errorMessage) => {
      errorMessage.style.display = "none";
    });
  }
  mail.addEventListener("focus", () => console.log("FOCUS"));

  form.addEventListener("submit", function (event) {
    let errorsFront = false;
    var mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    resetFormErrors();

    if (!mail.value.match(mailformat)) {
      errorMail.style.display = "block";
      errorsFront = true;
    }
    if (password.value.length === 0) {
      errorPassword.style.display = "block";
      errorsFront = true;
    }

    if (errorsFront == true) {
      event.preventDefault();
    }

    console.log("SUBMIT");
  });

});
