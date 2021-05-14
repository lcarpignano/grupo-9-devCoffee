// usar focus, blur, y quizas change

window.addEventListener("load", function () {
    const form = document.querySelector("#form-login");

    const mail = document.querySelector("#mail");
    const password = document.querySelector("#password");

    const errorMail = document.querySelector(".error-mail");
    const errorPassword = document.querySelector(".error-password");

    console.log("form", form);
    console.log("selectAll", errorMessages);
  
    function resetFormErrors() {
      errorMessages.forEach((errorMessage) => {
        errorMessage.style.display = "none";
      });
    }
  
    form.addEventListener("submit", function (event) {
      let errorsFront = false;
      var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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
  