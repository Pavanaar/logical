let a=[1,4,5,3,2,6,9]
// let[a1,b,c,d,e,f,g,h]=a
// console.log(a1,b,c,d,e,f,g)
let temp
for(let i=0;i<a.length;i++){
    if(a[i]>a[i+1]){
           
        temp=a[i]
        a[i]=a[i+1]
        a[i+1]=temp
        i=-1
    }
}
console.log(a);