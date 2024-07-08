let s='hello'  //op:h_e__l___l____o

for(let i=0;i<s.length;i++){
    process.stdout.write(s[i]);
    for(let j=0;j<=i;j++){
        process.stdout.write("_");
    }
}
