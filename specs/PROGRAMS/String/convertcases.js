let string='Hello WeLCoMe Bye'
//let a1=[]
let st=' '
//let arr=string.split('')
//console.log(arr);
for(let i=0;i<string.length;i++){
    if(string[i]>='A'&& string[i]<='Z'){
       st=st+String.fromCharCode(string.charCodeAt(i)+32)
        
} 
if(string[i]>='a'&& string[i]<='z'){
      st=st+String.fromCharCode(string.charCodeAt(i)-32)
    }else{
       st=st+string[i]
        
    }
   
}

console.log(st);