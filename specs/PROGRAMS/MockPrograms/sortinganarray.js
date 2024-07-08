let arr=[2,4,3,1,5,6]
let temp
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1;j++){
    if(arr[j]>arr[j+1]){
        temp=arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=temp
    }}
}console.log(arr);

//using sort()


//ASCENDINGORDER
    arr.sort((a,b)=>a-b)
    console.log(arr);
//DESCENDINGORDER
arr.sort((a,b)=>b-a)
console.log(arr);
