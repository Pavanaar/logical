let str='shikha'
let rev =''
for(let i  = str.length-1; i >=0; i--){
   
    rev=rev+str[i]

}
console.log(rev);
//using method (split and reverse)

 let rev1= str.split('')
console.log(rev1);
let rev2 =rev1.reverse()
console.log(rev2);
let rev3=rev2.join('')
console.log(rev3);
