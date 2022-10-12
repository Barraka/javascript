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
let submit = document.querySelector('.submit');
submit.addEventListener('click',onSubmit);
let allInputs = document.querySelectorAll('input');
allInputs.forEach(x=>{
    // x.addEventListener('focus',onFocus);
    x.addEventListener('input',onType);
    x.addEventListener('focusout', outfocus);
});

function outfocus(e) {        
    e.currentTarget.setCustomValidity('');
    if(!e.currentTarget.checkValidity()) {
        e.currentTarget.classList.add("invalid");
        if(e.currentTarget.value==='')e.currentTarget.nextElementSibling.textContent="Please fill out this field.";
        else if(e.currentTarget.id==='mail')e.currentTarget.nextElementSibling.textContent="Please enter a correct email.";
        else if(e.currentTarget.id==='country') {
            if(e.currentTarget.value.length<3)e.currentTarget.nextElementSibling.textContent="Field must be at least 3 characters long.";
            else e.currentTarget.nextElementSibling.textContent="Only letters are allowed.";            
        }
        else if(e.currentTarget.id==='zip')e.currentTarget.nextElementSibling.textContent="Only digits allowed, at least 5.";
        else if(e.currentTarget.id==='password1')e.currentTarget.nextElementSibling.textContent="Password must be at least 5 characters long.";
        // e.currentTarget.reportValidity();
    }
    //checking specifically for the same passwords
    else if(e.currentTarget.id==='password2') {
        if(document.querySelector('#password1').value!==e.currentTarget.value) {
            e.currentTarget.nextElementSibling.textContent="Both passwords must match.";
            e.currentTarget.classList.add("invalid");
            e.currentTarget.reportValidity();
        }
    } 
    //forms are valid
    else {
        // e.target.classList.remove("invalid");
        // e.target.classList.add("valid"); 
        e.currentTarget.nextElementSibling.textContent='';
    }
}
 
function onType(e) {
    // e.currentTarget.reportValidity();
    // e.target.setCustomValidity(' ');
    if(e.target.checkValidity() && e.target.id!=='password2') {
        e.target.classList.remove("invalid"); 
        e.target.classList.add("valid");    
        e.currentTarget.nextElementSibling.textContent='';
    } else if(e.target.id==='password2') {
        if(document.querySelector('#password1').value===e.currentTarget.value && e.currentTarget.value.length>5) {
            e.target.classList.remove("invalid"); 
            e.target.classList.add("valid");    
            e.currentTarget.nextElementSibling.textContent='';
        }
        else if(e.currentTarget.classList.contains('valid')) {
            e.target.classList.remove("valid"); 
            e.target.classList.add("invalid"); 
        }
    } else if(e.currentTarget.classList.contains('valid')){
        e.target.classList.remove("valid"); 
        e.target.classList.add("invalid");
    }
    checkAllInputs();
    // e.target.setCustomValidity('');
    // setTimeout(()=>{e.target.setCustomValidity('');},200);
}
function checkAllInputs() {
    let counter=0;
    allInputs.forEach(x=>{
        if(x.checkValidity && x.classList.contains('valid'))counter++;
    });
    if(counter===allInputs.length)submit.classList.add('validButton');
    else submit.classList.remove('validButton');
}
function onSubmit(e) {
    e.preventDefault();
    for(let i=0;i<allInputs.length;i++) {
        let x=allInputs[i];
        if(!x.checkValidity() || x.classList.contains('invalid')) {
            x.reportValidity();
            x.focus();
            break;
        }
    }
}