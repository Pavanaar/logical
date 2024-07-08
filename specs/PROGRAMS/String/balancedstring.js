// let string='{([])}'
// let arr=string.split("")
// console.log(arr);
// let open=['{','(','[']
// let close=[']',')','}']
// let stack=[]
// let count=0
// for(let i=0;i<arr.length;i++){
//     if(open.includes(arr[i])){
//       stack.push(arr[i])
//       console.log(stack)    
//     }
//     else if((close.includes(arr[i])) && arr[i]===stack[stack.length-1]){
//                stack.pop(stack[stack.length-1])
//                console.log(stack)
//     }
// }

// console.log(stack);
// //console.log(count);
// console.log(stack.length);
// if(stack.length==0){
//     console.log('stack is empty');
// }else{
//     console.log('stack is not empty');
// }

let balarr="[{()}]"
let ar= balancearr.split("")
console.log(balarr)