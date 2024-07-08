 function conse(){

 let str='9912389567'
let str1=''
for(let i=0;i<str.length;i++){
    if(str.charAt(i+1)-str.charAt(i)===1){
      if(str1.length===0){
         str1=str1+str.charAt(i)+str.charAt(i+1)
       } else{
        str1=str1+str.charAt(i+1)
      }
    }
  else{
    console.log(str1);
    str1=''  
}
}
 }
 conse()
