let s=['abcd','edfg','cd','cdefg','cv']
//let s=['12','34','345','56','12']
let s1=''
let min=s[0]

for(let i=0;i<s.length;i++){
    if(s[i].length<min.length){
           min=s[i]
}}
for(let i=0;i<s.length;i++){
    if(s[i].length==min.length){
        console.log(s[i]);
    }
}


