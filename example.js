/*
let para1=document.createElement('p');
para1.style.color='red';
para1.textContent="Hey I'm red!";
let para2=document.createElement('h3');
para2.style.color='blue';
para2.textContent="I'm a blue h3!";
let para3=document.createElement('div');
para3.style.cssText='border: 1px solid black background-color:pink';
let para4=document.createElement('h1');
para4.textContent="I'm in a div";
let para5=document.createElement('p');
para5.textContent="ME TOO!";
para3.append(para4, para5);
document.body.append(para1, para2, para3);*/

let btn=document.querySelector("#btn");
btn.onclick = () => alert('Hello World');
let btn3=document.querySelector("#btn3");
btn3.addEventListener('click', (e)=> {
e.target.style.background="blue";
});

let buttons=document.querySelectorAll('button');
buttons.forEach((b)=> {
b.addEventListener('click', ()=>alert(b.id));
});

let edit=document.querySelector('#edit');
function clickme(b) {
    edit.textContent+=b;
}

let container=document.querySelector('#otherbtn').children;
for(let b of container) {

    b.addEventListener('click',(e)=> {
        clickme(b);
    });
}

//----
function changecolor(e) {
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    //e.target.style.backgroundColor=`rbg(${r},${g},${b})`;
    let total=`rgb(${r},${g},${b})`;
    e.target.style.backgroundColor=total;

}
let mybox=document.querySelector("#box");
mybox.addEventListener("wheel",(e)=>{changecolor(e)});

