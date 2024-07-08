let str='1234'
//let num=parseInt(str)
// let count=0
// for(let i=2; i<=num/2; i++){
//     if(num%i==0){
//         count++
//         break;
//     }

// }
// if(count==2){
//     console.log("it prime");
// }else{
//     console.log("not prime");
// }

let arr=str.split('')
console.log(arr);
let count=0
arr.map((ele)=>{for(let i=0; i<ele.length;i++)
{
    if(ele%i==0){
count++
    }
}
})
      
if(count==2){
    console.log("prime");
}else{
    console.log("not prime");
}