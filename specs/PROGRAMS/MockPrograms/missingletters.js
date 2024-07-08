let arr=[2,4,7]
//let arr2=[1,2,3,4,5,6,7,8,9,10]
let max=10
let a1=[]
for (let i=0;i<=max;i++){
    //console.log(arr[i])
    if(!arr.includes(i)){
         a1.push(i)
    }
}
console.log(a1)