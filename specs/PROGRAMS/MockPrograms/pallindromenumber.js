let num='121'
let rem;
let rev=0
let temp=parseInt(num)
let final=temp
while(temp>0){
    rem = temp%10
    rev=(rev*10)+ rem
    temp=Math.floor(temp/10);
}
console.log(rev);
if(parseInt(num)===rev){
    console.log('pallindrome');
}else{
    console.log('not pallindrome');
}