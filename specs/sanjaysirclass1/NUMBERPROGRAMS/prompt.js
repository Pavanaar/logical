import PromptSync from "prompt-sync";
const prompt=PromptSync()
let d=prompt("enter the value")
console.log(d)
let a1=d.toUpperCase()
for(let i=0;i<a1.length;i++){
    let count=0
    for(let j=0;j<a1.length;j++){
        if(a1[i]==a1[j]){
            if(j<i){
                break;
            }
            count++
        }
    }
    if(count>1){
        process.stdout.write(a1[i]+ +count)
    }
}
