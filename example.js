let thisArray=[2,4,6,8,10,12,14];

function mult(a) {
    return a.reduce((start,next)=>start*next,1);
}
console.log(mult(thisArray));