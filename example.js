let thisArray=[2,4,6,8,10,12,14];

function mult(a) {
    return a.reduce((start,next)=>start*next,1);
}
// console.log(mult(thisArray));

function foobar(n) {
    let result={};
    for(let i=1;i<=n; i++) {
        if(i%3===0 && i%5===0)result[i]="foobar";
        else if(i%3===0)result[i]="foo";
        else if(i%5===0)result[i]="bar";
        else result[i]=i;
    }
    return result;
}

// console.log(foobar(8));

function letterinastring(s) {
    let result=[];
    let len=s.length
    for(let i=0;i<=len;i++) {
        if(i%3==0)result.push(s[i-1]);
    }
    return result.join("");
}   
console.log(letterinastring("this is a beautifulstring"));