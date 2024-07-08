let s='aabbabccaa'
let count=1
let a=[]
for(let i=0;i<s.length;i++){
  
    if(s[i]==s[i+1]){
       count++
    
    }else{
      console.log(a.push(s[i] +""+count));
     
      count=1;
    }
   
}
console.log(a.join(''));
