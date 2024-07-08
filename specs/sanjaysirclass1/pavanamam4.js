let input=[1,2,3,4,5,6,7,8,9,10]

function sum(a){
    let a1=[]
for(let i=0;i<a.length-2;i++){
    if(i%2==0){
        a1.push(a[i]+a[i+2])
    }else{
        a1.push(a[i]+a[i+2])
    }
}
return a1;
}
let out1=sum(input)
console.log(out1);
let out2=sum(out1)
console.log(out2);
let out3=sum(out2)
console.log(out3);
