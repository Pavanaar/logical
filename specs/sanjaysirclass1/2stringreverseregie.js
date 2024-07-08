let s="i love my country. i love my parents."
// let s1=s.split('. ')
// console.log(s1)
// let s2=s1[0].split(' ').reverse().join(' ')
// console.log(s2)
// let s3=s1[1].split('  ').reverse().join(' ')
// console.log(s3)
// console.log(s2 +". "+s3)

// let s="i love my country. i love my parents."
// let s1 = s.split('. ')


// let r1 = s1[0];
// console.log(r1);

// let r2 = s1[1].replaceAll('.', '');
// console.log(r2);

// // let r1 = 
// let w = "I love my country";
// function rev(s){
//    let s1=s.split(' ')
// //   console.log(s1)
//    let rev=''
//    for(let i=s1.length-1;i>=0;i--){
//        if(i==0)
//        {
//           rev= (rev+s1[i]) 
//        }
//        else
//        {
//         rev= (rev+s1[i]) + " ";   
//        }
//    }
//    return rev;
// }
// let out = rev(r1);
// let out1 = rev(r2);
// console.log(out+". "+out1+".")

// // console.log(out);
//let s="i love my country.i love my India"
let a=s.split('.')
let s1=a[0]
let a1=s1.split( " " )
let a11=a1.reverse().join( ' ')
let s2=a[1]
let a2=s2.split(" ")
let a21=a2.reverse().join(' ')
console.log(a11 +"."+a21)