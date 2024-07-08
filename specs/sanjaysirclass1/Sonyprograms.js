let s="aaabbcdddf" //o/p:a3b2cd3f
let count=1
for(let i=0;i<s.length;i++){
    if(s[i]==s[i+1]){
        count++
    }else{
        process.stdout.write(s[i]+ +count)
        count=1
    }
}
// let set=new Set()
// for(let i=0;i<s.length-1;i++){
//     set.add(s.substring(i,i+2))
// }
// console.log(set)
//2.program    //sorting 
let a=[7,-3,6,2,1,-9,9]
let a1=a.sort((a,b)=>b-a)
console.log(a1)
let sum=1
for(let i=0;i<a1.length-3;i++){
    sum=sum*a1[i]
}
console.log(sum)
//3.program
let a="hello hi wolrd"
let a1=a.split(' ')
console.log(a1)
a1.splice("2",0,"welcome")
console.log(a1.join(' '))
//4.program
let a='i am selenium'
let a1=a.replaceAll(" ","")
//console.log(a1)
let c=a1.length-1
for(let i=0;i<a.length;i++){
    if(a[i]!==" "){
        process.stdout.write(a1[c--])
    }else{
         process.stdout.write(a[i])
    }
}

 //4.program
 let n=100
//let count=1
for(let i=2;i<=n;i++){
    let count=1
    for(let j=2;j<=i;j++){
        if(i%j==0){
            count++
        }
    }
    if(count==2){
        console.log(i)
    }
}

//5program
let s="javaseleniumjavascriptwdio"
// let rege=/a+/g
// let a=s.match(rege)
// console.log(a.length)

let s1=s.replaceAll("java","")
console.log(s1)

console.log(s.includes('javascript'))
console.log(s.split("java"))

function sum(a, b) {
    return a + b;
  }
  
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });