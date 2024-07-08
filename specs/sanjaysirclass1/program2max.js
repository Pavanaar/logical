let s=['abcd','edfg','cd','cdefg','cv','adnjs']
//let s=['123','34','456','65']
let s1=' '
let max=s[0]

for(let i=0;i<s.length;i++){
    if(max.length<s[i].length){
        max=s[i]
    }
}
for(let i=0;i<s.length;i++){
    if(max.length==s[i].length){
        console.log(s[i]);
    }
}