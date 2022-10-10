const imagearray=['images/barberry.png','images/chilli.png','images/logo.png','images/pepper.png','images/saffron.png'];
function imageloader() {
    let container = document.querySelector('.container');
    let slider = document.createElement('div');
    slider.classList.add('slider');
    let circleCounter = document.createElement('div');
    circleCounter.classList.add('circleCounter');
    for(let i=0;i<imagearray.length;i++) {
        let picdiv = document.createElement('div');
        picdiv.classList.add('picdiv','hide');
        let picimg = document.createElement('img');
        picimg.classList.add('picimg');
        picimg.src=imagearray[i];
        let selector = document.createElement('img');
        selector.classList.add('selector');
        selector.src=('images/circleempty.png');
        selector.setAttribute('data-id',`${i}`);
        picdiv.appendChild(picimg);
        slider.appendChild(picdiv);
        circleCounter.appendChild(selector);
    }
    container.appendChild(slider);
    container.appendChild(circleCounter);
}

function slideshow() {
    setInterval(animateshow,2000);
}
let currentCounter=0;
let prevCounter=imagearray.length-1;
let nextCounter=1;
function animateshow() {
    let currentImg = document.querySelector(`img[src="${imagearray[currentCounter]}"]`);
    let prevImg = document.querySelector(`img[src="${imagearray[prevCounter]}"]`);
    let nextImg = document.querySelector(`img[src="${imagearray[nextCounter]}"]`);
    let currentDiv = currentImg.parentElement;
    let prevDiv = prevImg.parentElement;
    let nextDiv = nextImg.parentElement;

    //Manipulate images
    currentDiv.classList.remove('hide');
    prevDiv.classList.add('gone');
    nextDiv.classList.add('hide');
    nextDiv.classList.remove('gone');

    //Manipulate counterCircle
    

    if(currentCounter===imagearray.length-1) currentCounter=0;
    else currentCounter++;
    if(prevCounter===imagearray.length-1)prevCounter=0;
    else prevCounter++;
    if(nextCounter===imagearray.length-1)nextCounter=0;
    else nextCounter++;
}
imageloader();
slideshow();