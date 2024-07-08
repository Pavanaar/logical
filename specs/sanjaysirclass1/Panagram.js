let s1='bc defghiyujklmnopqrstuvwxyz'
let s2=new Set('abcdefghijklmnopqrstuvwxyz')
let count=0
for (const iterator of s2) {
   if(s1.includes(iterator)){
    count++;
   } 
}
if(count==26){
    console.log("its panagram");
}else{
    console.log("its not panagram");
}