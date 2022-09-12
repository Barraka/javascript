let table= [
    [1,0,0,0,0,0],
    [0,1,0,1,1,1],
    [0,0,1,0,1,0],
    [1,1,0,0,1,0],
    [1,0,1,1,0,0],
    [1,0,0,0,0,1],
]
function isisland(a,b,c=-1,d=-1) {
    if(a===1 && b===3)
    {console.log("");}
    if(a===0 && table[a][b]===1)return false;
    if(a===table.legth-1 && table[a][b]===1)return false;
    if(b===0 && table[a][b]===1)return false;
    if(b===table[a].length-1 && table[a][b]===1)return false;
    if(table[a][b]===0)return false;
    if(table[a][b-1]===1) {
        if(b-1===d)return false;
        if(b===1)return false;
        if(a===c && b===d)return true;
        return isisland(a,b-1,a,b);        
    }
    if(table[a][b+1]===1) {
        if(b===table[a].length-2)return false;
        if(a===c && b===d)return true;
        return isisland(a,b+1,a,b);        
    }
    if(table[a-1][b]===1) {
        if(a===1)return false;
        if(a===c && b===d)return true;
        return isisland(a+1,b,a,b);      
    }
    if(table[a+1][b]===1) {
        if(a===table.legth-2)return false;
        if(a===c && b===d)return true;
        return isisland(a+1,b,a,b);        
    }
    console.log("found island at :" + a + "  "  + b);
    return true;

}

function launch() {
    for(let x=0;x<table.length;x++) {
        for(let y=0;y<table[x].length;y++) {
            if(isisland(x,y))console.log("yes");
        }
    }
}

function otherisland() {
    let tempisland=[...table];
    let tablex=table.length;
    let tabley=table[0].length;
    for(let x=0;x<tablex;x++) {
        for(let y=0;y<tabley;y++) {
            if(x===0 || x===tablex-1 || y===0 || y===tabley-1 || table[x][y]===0)tempisland[x][y]=table[x][y];
            else if(table[x][y-1]===0 && table[x][y+1]===0 && table[x+1][y]===0 && table[x-1][y]===0)tempisland[x][y]=0;
            else tempisland[x][y]="";
        }
    }
    for(let x=1;x<tablex-1;x++) {
        for(let y=1;y<tabley-1;y++) {
            if(tempisland[x][y]===""){

            }
        }
    }

    console.log(tempisland);
}

function nextisland() {
    let tempisland=[...table];
    let posx=0;
    let posy=0;
    let lenx=table.length;
    let leny=table[0].length;
    let rowdone=[];
    let columndone=[];
    while(true) {
        if(posx===0 || posx===lenx-1 || posy===0 || posy===leny-1)posx++;
    }
}
let matrix=[[1,0,0],[1,1,0],[1,1,0]]
function flip() {
    for(let x =0; x<matrix.length;x++) {
        matrix[x]=matrix[x].reverse();   
    }
    console.log(matrix);
}
flip();
let table2=[[1,2,3,4],[5,6,7,8],[9,0,1,2],[3,4,5,0]];
function transpose(o) {
    let temp=Array(o.length).fill('').map(x=>Array(o[0].length).fill(''));
    let lenx=o.length;
    let leny=o[0].length;
    for(let i = 0;i<lenx;i++) {
        for(let j=0;j<leny;j++) {
            temp[j][i]=o[i][j];
        }
    }
    console.log(o);
    console.log(temp);
}