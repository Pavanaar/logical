let string='my name is shikha'
let arr=string.split(' ')
console.log(arr)
let rev=''
let ar1=[]

for(let i=0;i<arr.length;i++){
    let rev=''
    for(let j=arr[i].length-1;j>=0;j--){
        rev=rev+arr[i][j]
    }
    console.log(rev)
    ar1.push(rev)
}
console.log(ar1)
console.log(ar1.join(' '))