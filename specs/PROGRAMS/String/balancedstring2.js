let bal="[{()]"
let ar= bal.split("")
console.log(ar)
let arr=[]
for(let i=0;i<ar.length;i++)
    if((arr.length!==0)&&((ar[i]==='}' && arr[arr.length-1]==='{')||
                           ( ar[i]===')' && arr[arr.length-1]==='(')||
                        (ar[i]===']' && arr[arr.length-1]==='[')))
{
    arr.pop(arr[arr.length-1])
}
else
{
    arr.push(ar[i])
}
if(arr.length===0){
    console.log('the string is balanced');
}else{
    console.log('the string is not balanced');
}
