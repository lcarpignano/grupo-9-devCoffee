// usar focus, blur, y quizas change

window.addEventListener("load", function () {
    const form = document.querySelector("#edit-form");

    const name = document.querySelector("#name");
    const description = document.querySelector("#description");
    const origin = document.querySelector("#origin");
    const price = document.querySelector("#price");
    const logo = document.querySelector("#logo");

    const errorProductName = document.querySelector(".error-product-name");
    const errorProductDetails = document.querySelector(".error-product-details");
    const errorProductOrigin = document.querySelector(".error-product-origin");
    const errorProductPrice = document.querySelector(".error-product-price");
    const errorProductLogo = document.querySelector(".error-product-logo");



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
        if (origin.value.length === 0) {
            errorPassword.style.display = "block";
            errorsFront = true;
        }
        if (price.value != Number) {
            errorPassword.style.display = "block";
            errorsFront = true;
        }
        if (logo.value.length === 0) {
            errorPassword.style.display = "block";
            errorsFront = true;
        }

        if (errorsFront == true) {
            event.preventDefault();
        }

        console.log("SUBMIT");
    });
});
