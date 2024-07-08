let str='hello world'
 let arr= str.split(' ')
 let rev=''
 let finarr = []
console.log(arr);
arr.map((ele)=>{//ele.split('')
//console.log(ele.split(''));
for(let i=ele.length-1; i>=0;i--){
   
    rev=rev+ele[i]
    
    
}
console.log(rev);
finarr.push(rev)
rev = ''
})
console.log(finarr.join(" "))






