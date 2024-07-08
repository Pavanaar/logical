let string= "level"
let string1 =''
for(let i=string.length-1; i>=0; i--){
    string1 += string[i]
 
}
console.log(string1)
if(string==string1){
    console.log('pallindrome');
}else{
    console.log('not pallindrome');
}
