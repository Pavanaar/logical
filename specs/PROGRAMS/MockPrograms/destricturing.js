let arr=[1,2,3,4]
let[a,b,c,d]=arr
console.log(a,b,c);

//spread operator
let arr2=[[8,9],arr]
console.log(arr2);
//merging
let arr4=[...arr,...arr2]
console.log(arr4);



//rest operator
let[a1,b1,c1,...rest]=arr
console.log(rest);

function add(...num){
let sum=0
for(let i=0;i<num.length;i++){
    sum=sum+num[i]
}
console.log(sum);
console.log(num);
}
add(...arr)