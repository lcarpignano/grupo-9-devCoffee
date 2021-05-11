// usar focus, blur, y quizas change

window.addEventListener("load", function () {
  const form = document.querySelector("#form-register");

  const firstName = document.querySelector("#first_name");
  const lastName = document.querySelector("#last_name");
  const username = document.querySelector("#username");
  const birth = document.querySelector("#birth");
  const mail = document.querySelector("#mail");
  const checkMail = document.querySelector("#check_mail");
  const password = document.querySelector("#password");
  const checkPass = document.querySelector("#check_pass");
  const country = document.querySelector("#country");
  const city = document.querySelector("#city");
  const address = document.querySelector("#address");
  const zipCode = document.querySelector("#zip");

  const errorMessages = document.querySelectorAll(".error-message");
  const errorName = document.querySelector(".error-firstname");
  const errorLastName = document.querySelector(".error-lastname");
  const errorUsername = document.querySelector(".error-username");
  const errorBirth = document.querySelector(".error-birth");
  const errorMail = document.querySelector(".error-mail");
  const errorCheckMail = document.querySelector(".error-check_mail");
  const errorPassword = document.querySelector(".error-password");
  const errorCheckPass = document.querySelector(".error-check_pass");
  const errorCountry = document.querySelector(".error-country");
  const errorCity = document.querySelector(".error-city");
  const errorAddress = document.querySelector(".error-address");
  const errorZipCode = document.querySelector(".error-zip");

  console.log("form", form);
  console.log("selectAll", errorMessages);

  function resetFormErrors() {
    errorMessages.forEach((errorMessage) => {
      errorMessage.style.display = "none";
    });
  }

  form.addEventListener("submit", function (event) {
    let errorsFront = false;

    resetFormErrors();
    event.preventDefault();


    if (firstName.value.length < 2) {
      errorName.style.display = "block";
      errorsFront = true;
    }

    if (lastName.value.length < 2) {
      errorLastName.style.display = "block";
      errorsFront = true;
    }

    if (username.value.length < 2) {
      errorUsername.style.display = "block";
      errorsFront = true;
    }

    if (birth.value.length == 0) {
      errorBirth.style.display = "block";
      errorsFront = true;
    }

    if (mail.value.length < 2) {
      errorMail.style.display = "block";
      errorsFront = true;
    }

    if (checkMail.value.length < 2) {
      errorCheckMail.style.display = "block";
      errorsFront = true;
    }

    if (password.value.length < 2) {
        errorPassword.style.display = "block";
        errorsFront = true;
      }

      if (checkPass.value.length < 2) {
        errorCheckPass.style.display = "block";
        errorsFront = true;
      }

      if (country.value.length === 0) {
        errorCountry.style.display = "block";
        errorsFront = true;
      }

      if (city.value.length === 0) {
        errorCity.style.display = "block";
        errorsFront = true;
      }

      if (address.value.length === 0) {
        errorAddress.style.display = "block";
        errorsFront = true;
      }

      if (zipCode.value.length === 0) {
        errorZipCode.style.display = "block";
        errorsFront = true;
      }

    if (errorsFront == true) {
      event.preventDefault();
    }

    console.log("SUBMIT");
  });
});
