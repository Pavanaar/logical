let str='hello wolrd'
let countvowels=0
let countcons=0
for(let i=0;i<str.length; i++) {
   
    if(str[i]=='a'|| str[i]=='e'||str[i]=='o'|| str[i]=='u'||str[i]=='i'){
        countvowels++
    }else{
        countcons++
    }}
    console.log("vowels" +  countvowels );
console.log("consonemnts" + countcons);



