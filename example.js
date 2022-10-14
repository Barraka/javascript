let myimg = document.querySelector('.mypic');
let output;
let fetch = require('node-fetch');
fetch('https://www.bbc.com', {
    mode:'cors',
    method:'GET',
    cache: 'no-cache',
    credentials: 'same-origin',
    referrerPolicy: 'no-referrer',
    headers: {
        'Content-Type': 'application/json'
    },
    
})
.then(x=>{
    console.log(x);
    return x.json();
})
.then(x=>{
    output=x;
    console.log(x);
})
.catch(e=>{
    console.log(e)
});