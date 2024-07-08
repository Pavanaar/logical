let s='abc1234bd45ef5gh6789' //op: 6789 5 45 1234
// let s1=''
// let a=[]
// for(let i=0;i<s.length;i++){
//   if(!isNaN(parseInt(s[i]))){
//        s1=s1+s[i]
//   }else{
//      if(!s1.length==0){
//         a.push(s1)
//      }
//      s1=''
//   }
// }
// if(s1.length>=1){
//     a.push(s1)
//  }
//  console.log(...(a.reverse()));

let s1=s.split(/\D+/);
console.log(s1);
for(let i=s1.length-1;i>=0;i--){
    process.stdout.write(s1[i]+ " ")
}
