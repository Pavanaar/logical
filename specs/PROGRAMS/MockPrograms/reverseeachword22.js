let s='hi hello welcome'
let c=s.split(' ')
console.log(c);
let rev1=[]
for(let i=0;i<c.length;i++){
    d=c[i]
    let rev=''
    for(let j=d.length-1;j>=0;j--){
      rev=rev+d[j]
    }
    console.log(rev);
    rev1.push(rev)
}

console.log(rev1.join(' '));
console.log(...rev1);

