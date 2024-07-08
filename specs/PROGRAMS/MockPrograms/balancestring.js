let str="[{()}]"
let pushstr=[]
for(let i=0;i<str.length;i++){
    if((pushstr.length!==0)&&(
        (str[i]==="]")&&(pushstr[pushstr.length-1]==='[')
        || (str[i]==="}")&&(pushstr[pushstr.length-1]==='{')
        ||(str[i]===")")&&(pushstr[pushstr.length-1]==='('))){
            pushstr.pop()
        }

else{
    pushstr.push(str[i])
}}
console.log(pushstr)
if(pushstr.length==0){
    console.log("balance string")
}else{
    console.log("its not balanced string")
}