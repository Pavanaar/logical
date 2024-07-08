let str='hello world'
let str1=''

for(let i=0; i<str.length;i++){
    if(str[i]=='a' || str[i]=='e' || str[i]=='i'|| str[i]=='o'|| str[i]=='u'){
        false;
    }else{
        str1=str1+str[i]+"\n"
    }
  
}
  console.log(str1)
//  console.log(str1.split('')); 