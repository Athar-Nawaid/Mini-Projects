let nameSpace = document.getElementById('nameSpace');
let email = document.getElementById('email');
let password = document.getElementById('password');
let conPassword = document.getElementById('conPassword');

let nameError = document.getElementById('nameError');
let emailError = document.getElementById('emailError');
let passwordError = document.getElementById('passwordError');
let conPasswordError = document.getElementById('conPasswordError');



function validate(){
    let submit = true;

    clearError();
    if(nameSpace.value.length<=4){
        showError(nameSpace,nameError,'Name should have atlead 4 characters')
        submit = false;
    }
    let regex = /^[$\S@]+\@[$\S@]+\.[$\S@]+$/
    if(!regex.test(email.value)){
        showError(email,emailError,'Please input correct Email format')
        submit = false;
    }
    if(password.value.length<=8){
        showError(password,passwordError,'Password should have atlead 8 characters')
        submit = false;
    }
    if(conPassword.value!= password.value){
        showError(conPassword,conPasswordError,'Both passwords should match')
        submit = false;
    }
    
    return submit;
}


function showError(obj,err,msg){
    obj.classList.add('error');
    err.textContent = msg;
}

function clearError(){
    [nameSpace,email,password,conPassword].forEach(obj=>obj.classList.remove('error'));
    [nameError,emailError,passwordError,conPasswordError].forEach(obj=>obj.textContent="");
}