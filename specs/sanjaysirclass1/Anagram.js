let s1='rtca'
let s2='cart'
if(s1.length!==s2.length){
    console.log("its not anagram");
}else{
   let s3= s1.split('').sort().join()
   let s4=s2.split('').sort().join()
   console.log(s3);
   console.log(s4);
   if(s3===s4){
    console.log("its panagram");
   }
}