let ar=['apple', 'orange','kiwi', 'banana']
// ar.sort()
// console.log(ar);
let temp
for(let i=0;i<ar.length;i++){
    for(let j=0;j<ar.length-1;j++){
        if(ar[j].charAt(0)>ar[j+1].charAt(0)){
               temp=ar[j]
               ar[j]=ar[j+1]
               ar[j+1]=temp
        }
    }
}
console.log(ar);

