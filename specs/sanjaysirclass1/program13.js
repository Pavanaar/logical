let s='011000'//op:11000
let a=s.split('')
//console.log(a)

    // let temp
    // temp=a[0]
    // a[0]=a[1]
    // a[1]=temp
    //  tem=a[1]
    //  a[1]=a[2]
    //  a[2]=temp
    // console.log(a.join(''));
    let b=[] 
    let c=[]
for(let i=0;i<a.length;i++){
    if(a[i]==1){
        b.push(a[i])
    }else{
        c.push(a[i])
    }
}
console.log(...b,...c);

