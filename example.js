let mail = document.querySelector('#mail');
let country = document.querySelector('#country');
let zip = document.querySelector('#zip');
let password1 = document.querySelector('#password1');
let password2 = document.querySelector('#password2');

let mailerror = document.querySelector('.mailerror');
let countryerror = document.querySelector('.countryerror');
let ziperror = document.querySelector('.ziperror');
let password1error = document.querySelector('.password1error');
let password2error = document.querySelector('.password2error');

let eventFlag=false;
let allInputs = document.querySelectorAll('input');
allInputs.forEach(x=>{
    x.addEventListener('focus',onFocus);
    x.addEventListener('input',onType);
});

function onFocus(e) {
    if(eventFlag) {e.currentTarget.removeEventListener('blur', outfocus);eventFlag=false;}
    else {e.currentTarget.addEventListener('blur',outfocus);eventFlag=true;}
}
function outfocus(e) {
    e.currentTarget.removeEventListener('blur', outfocus);    
    e.currentTarget.setCustomValidity('');
    if(!e.currentTarget.checkValidity()) {
        e.currentTarget.classList.add("invalid");
        if(e.currentTarget.value==='')e.currentTarget.nextElementSibling.textContent="Please fill out this field.";
        else if(e.currentTarget.id==='mail')e.currentTarget.nextElementSibling.textContent="Please enter a correct email.";
        else if(e.currentTarget.id==='country') {
            if(e.currentTarget.value.length<3)e.currentTarget.nextElementSibling.textContent="Field must be at least 3 characters long.";
            else e.currentTarget.nextElementSibling.textContent="Only letters are allowed."; //if(e.currentTarget.validity.patternMismatch)
            
        }
        else if(e.currentTarget.id==='zip')e.currentTarget.nextElementSibling.textContent="Only digits allowed, at least 5.";
        else if(e.currentTarget.id==='password1')e.currentTarget.nextElementSibling.textContent="Password must be at least 5 characters long.";
        // else if(e.currentTarget.id==='password2')e.currentTarget.nextElementSibling.textContent="Password must be at least 5 characters long.";
        e.currentTarget.reportValidity();
    } else {
        e.target.classList.remove("invalid");
        e.target.classList.add("valid"); 
        eventFlag=false;
        e.currentTarget.nextElementSibling.textContent='';
    }
}
function onType(e) {
    e.target.setCustomValidity('');
    if(e.target.classList.contains("invalid")) {
        if(e.target.checkValidity()) {
            e.target.classList.remove("invalid"); 
            e.target.classList.add("valid");    
            e.currentTarget.nextElementSibling.textContent='';
        }
    }    
}