let arr=[4,1,6,7,8,9]
min=arr[0]
for(let i=0;i<arr.length;i++){
 
    if(arr[i]<min){
        
    min=arr[i]
   
    
}
}
console.log(min);
max=arr[0];
for(let j=0;j<arr.length;j++){
    if(arr[j]>max){
    max=arr[j]}
}
console.log(max);