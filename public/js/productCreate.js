// usar focus, blur, y quizas change

window.addEventListener("load", function () {
    const form = document.querySelector("#form-product-create");

    const name = document.querySelector("#name");
    const description = document.querySelector("#description");
    const price = document.querySelector("#price");
    
    const errorProductName = document.querySelector(".error-product-name");
    const errorProductDetails = document.querySelector(".error-product-details");
    const errorProductPrice = document.querySelector(".error-product-price");



    function resetFormErrors() {
      errorMessages.forEach((errorMessage) => {
        errorMessage.style.display = "none";
      });
    }
  
    form.addEventListener("submit", function (event) {
      let errorsFront = false;
      
      resetFormErrors();
      
      if (name.value.length === 0) {
        errorMail.style.display = "block";
        errorsFront = true;
      }
      if (description.value.length === 0) {
          errorPassword.style.display = "block";
          errorsFront = true;
        }
      if (price.value != Number) {
          errorPassword.style.display = "block";
          errorsFront = true;
        }

      if (errorsFront == true) {
        event.preventDefault();
      }
  
      console.log("SUBMIT");
    });
  });
  