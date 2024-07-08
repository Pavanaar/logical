let s='hi hello welcome to'
let a=s.split(' ')
//console.log(a);
let temp=a[0]
a[0]=a[a.length-1]
a[a.length-1]=temp
 console.log(a);
    console.log(a.join(' '))
   
 

