


let form = document.getElementById('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("Submit");
   
    let messaje=document.getElementById('messaje');
    if (messaje.value=="" || validator.isLowercase(messaje.value)){
        let alerta = document.getElementById('alerta');
    
        alerta.classList.add('mostrar');
        alerta.innerHTML="Falta mensaje";
    } else {
        alerta.classList.remove('mostrar');
        e.target.submit();
    }

});


console.log(validator.isLowercase('holA'));


