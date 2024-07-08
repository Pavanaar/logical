let a=[2,3,1,4,5]
let b=[3,4,3,3]
let sum=0
let max=Math.max(a.length,b.length)
for(let i=0;i<max;i++){
  if(i<a.length && i<b.length){
    sum=a[i]+b[i]
  process.stdout.write(sum.toString());
  }else if(i<a.length){
    sum=a[i]
  }else{
    sum=b[i]
  }
}
process.stdout.write(sum.toString())