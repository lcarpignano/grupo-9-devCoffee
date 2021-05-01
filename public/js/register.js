window.addEventListener('load', function(){

    
    let form = document.querySelector('form')
    form.addEventListener('submit', function(event){
        let errors = [];
        let firstName = document.querySelector('#first_name')
        if (firstName.value.length < 2){
            errors.push('Tienes que completar tu NOMBRE');
        }
        if(errors.length > 0) {
            event.preventDefault();
        }
        let errMessage = document.querySelector('.warning');
        console.log(errMessage)
        errMessage.innerHTML = errors;
    })
    
})
console.log('Hola js de FRONT')