let arr=[1,3,4,5,7,8,9]
sum=0
for(let i=0; i<arr.length;i++){
   
    if(arr[i]%2!=0){
        console.log(arr[i]);
        sum=sum+arr[i]
    }}

console.log(sum);
