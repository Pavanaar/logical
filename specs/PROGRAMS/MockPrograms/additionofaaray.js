let a=[1,2,3,4]
let b=[1,2,3,4,5,6,7]
let sum=0
let max1=Math.max(a.length,b.length)
console.log(max1);
for(let i=0;i<max1;i++){
  if(i<a.length && i<b.length){
    sum=a[i]+b[i]
    console.log(sum)
  }else if(i<a.length){
   console.log(a[i]);
  }else{
    console.log(b[i]);
  }
}