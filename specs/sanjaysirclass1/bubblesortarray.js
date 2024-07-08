let a=[5,3,6,4,1]
let temp
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<a.length-1;j++){
//     if(a[j]>a[j+1]){
//         temp=a[j]
//         a[j]=a[j+1]
//         a[j+1]=temp
//     }}
// }
// console.log(a);

for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]>a[j]){
            temp=a[i]
            a[i]=a[j]
            a[j]=temp
        }
    }
}console.log(a);
// console.log(a[0]+a[1]+a[2])
// console.log(a[a.length-1]+a[a.length-2]+a[a.length-3]);
// console.log(a[0]*a[1]*a[2]);
// console.log(a[a.length-1]*a[a.length-2]*a[a.length-3]);
// console.log(a[0]);
// console.log(a[a.length-1]);
//let a=[5,3,6,4,1]
let max=''
let min=a[0]
for(let k=0;k<a.length;k++){
    if(max<a[k]){
        max=a[k]
      
    } if(a[k]<min){
        min=a[k]
    }    
}
console.log(max);
console.log(min);


