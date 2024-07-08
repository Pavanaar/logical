let a=[1,4,3,5,6,2]
let temp
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]<a[j]){
             temp=a[i]
             a[i]=a[j]
             a[j]=temp
        }
    }
}
console.log(a);
let sum=0
let pro=1
for(let k=0;k<3;k++){
    sum=sum+a[k]
     pro=pro*a[k]

}
console.log(sum)
console.log(pro);
// for(l=a.length-1;l>=0;l--){
//     sum=sum+a[l]
//     pro=pro*a[l]
// }
// console.log(sum);
// console.log(pro);
