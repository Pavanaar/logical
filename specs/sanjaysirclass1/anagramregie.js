let s1='hello'
let s2='elloh'
if(s1.length!==s2.length){
    console.log("not anagram")
}
else{
    let s3=s1.split('').sort().join('')
let s4=s2.split('').sort().join('')
console.log(s3,s4 )
let a= s3===s4 ? "anagram":"not anagram"
console.log(a)
}