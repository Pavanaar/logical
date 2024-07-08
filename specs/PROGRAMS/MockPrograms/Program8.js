let str='AxB1#*eZ8'
//arr=str.split('')
//console.log(arr);
str1=''
str2=''
str3=''
str4=''
for(let i=0;i<str.length;i++){
    console.log(str.charAt(i));
     if(str.charAt(i)>='A' && str.charAt(i)<='Z' ){
         str1+=str[i]
     }else if(str.charAt(i)>='0' && str.charAt(i)<='9'){
         str2+=str[i]
     }else if (str.charAt(i)>='a'&& str.charAt(i)<='z'){
        str3+=str[i]
     }else{
        str4+=str[i]
    }
     }
     console.log(str);
     console.log(str1.split(' , '));
     console.log(str2.split(' , '));
    console.log(str3.split(' '));
     console.log(str4.split(' '));
