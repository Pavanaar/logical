let str='helloworld'

let st=''
for (let i = 0; i< str.length; i++) {
   
  let count=0
  for(let j=0 ; j<str.length;j++){
    if(str[i]==str[j]){
        if(j<i){
            break;
        }
        count++
    }
  }
  if(!count==0){
    console.log(str[i]);
  st+=str[i]
  //   let newstr=st.join('')
  //  console.log(newstr);
  

  }
   }
   
  console.log(st);
  //console.log(newstr);
  //console.log(s);