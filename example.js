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
submit.addEventListener('mouseover',onMouseOver);
submit.addEventListener('mouseout',onMouseOut);
submit.addEventListener('click',onSubmit);
let allInputs = document.querySelectorAll('input');
allInputs.forEach(x=>{
    // x.addEventListener('focus',onFocus);
    x.addEventListener('input',onType);
    x.addEventListener('focusout', outfocus);
});
function onMouseOver(e) {
    if(e.currentTarget.classList.contains('validButton'))e.currentTarget.classList.add('hoverValid');
    else e.currentTarget.classList.add('hoverInvalid');
}
function onMouseOut(e) {
    e.currentTarget.classList.remove('hoverInvalid', 'hoverValid');
}
function outfocus(e) {        
    e.currentTarget.setCustomValidity('');
    if(!e.currentTarget.checkValidity()) {
        let thisTarget=e.currentTarget.nextElementSibling;
        e.currentTarget.classList.add("invalid");
        if(e.currentTarget.value==='')thisTarget.textContent="Please fill out this field.";
        else if(e.currentTarget.id==='mail')thisTarget.textContent="Please enter a correct email.";
        else if(e.currentTarget.id==='country') {
            if(e.currentTarget.value.length<3)thisTarget.textContent="Field must be at least 3 characters long.";
            else thisTarget.textContent="Only letters are allowed.";            
        }
        else if(e.currentTarget.id==='zip')thisTarget.textContent="Only digits allowed, at least 5.";
        else if(e.currentTarget.id==='password1')thisTarget.textContent="Password must be at least 5 characters long.";
        removeCheck(e);
    }
    //checking specifically for the same passwords
    else if(e.currentTarget.id==='password2') {
        if(document.querySelector('#password1').value!==e.currentTarget.value) {
            e.currentTarget.nextElementSibling.textContent="Both passwords must match.";
            e.currentTarget.classList.add("invalid");
            e.currentTarget.reportValidity();
            removeCheck(e);
        }
        else if(document.querySelector('#password1').value===e.currentTarget.value && e.currentTarget.value.length>5) {
            createcheck(e);
        }
    } 
    //forms are valid
    else {
        // e.target.classList.remove("invalid");
        // e.target.classList.add("valid"); 
        let ret=createcheck(e);
        e.currentTarget.nextElementSibling.textContent='';
        if(ret.innerHTML===''){removeCheck(e);createcheck(e);}
    }
}
function removeCheck(e) {
    let thischeck=e.currentTarget.parentElement.parentElement.querySelector('.checkmark')
    if(thischeck)thischeck.remove();
}   
function createcheck(e) {
    let checkmark = document.createElement('div');
    checkmark.classList.add('checkmark');
    
    checkmark.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M21.05 33.1 35.2 18.95l-2.3-2.25-11.85 11.85-6-6-2.25 2.25ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"/></svg>';
    
    e.currentTarget.parentElement.parentElement.querySelector('.outerinput').appendChild(checkmark);
    return checkmark;
}
 
function onType(e) {
    let thisTarget=e.currentTarget.nextElementSibling;
    if(e.target.checkValidity() && e.target.id!=='password2') {
        e.target.classList.remove("invalid"); 
        e.target.classList.add("valid");    
        thisTarget.textContent='';
    } else if(e.target.id==='password2') {
        if(document.querySelector('#password1').value===e.currentTarget.value && e.currentTarget.value.length>5) {
            e.target.classList.remove("invalid"); 
            e.target.classList.add("valid");    
            thisTarget.textContent='';
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
            if(x.id==='password2')x.setCustomValidity('Both passwords must match.');
            x.reportValidity();
            x.focus();
            break;
        }
    }
    let madeit = document.createElement('div');
    madeit.classList.add('madeit');
    madeit.textContent='Congrats! You now know how to fill up a form!!';
    e.currentTarget.parentElement.appendChild(madeit);
}