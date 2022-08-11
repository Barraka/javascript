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



let edit=document.querySelector('#edit');
function clickme(b) {
    edit.textContent+=b;
}

// let container=document.querySelector('#otherbtn').children;
// for(let b of container) {

//     b.addEventListener('click',(e)=> {
//         clickme(b);
//     });
// }

let container=document.querySelector("#otherbtn");
container.addEventListener('click',(e)=> {
    clickme(e.target.id);
});

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

// let para=document.querySelectorAll("div");
// for(x of para){if(x.id==='box')x.remove()};

let para=document.querySelector("#tryme");
edit.innerHTML+=para.clientHeight +"<br>" + para.offsetHeight;


let lastX; // Tracks the last observed mouse X position
  let bar = document.querySelector("#dragme");
  bar.addEventListener("mousedown", event => {
    if (event.button == 0) {
      lastX = event.clientX;
      window.addEventListener("mousemove", moved);
      //event.preventDefault(); // Prevent selection
    }
  });

  function moved(event) {
    if (event.buttons == 0) {
      window.removeEventListener("mousemove", moved);
    } else {
      let dist = event.clientX - lastX;
      let newWidth = Math.max(1, bar.offsetWidth + dist);
      bar.style.width = newWidth + "px";
      lastX = event.clientX;
    }
  }

  document.body.appendChild(document.createTextNode(
    "supercalifragilisticexpialidocious ".repeat(1000)));

  let bar2 = document.querySelector("#progress");
  window.addEventListener("scroll", () => {
    let max = document.body.scrollHeight - innerHeight;
    bar2.style.width = `${(pageYOffset / max) * 100}%`;
  });
