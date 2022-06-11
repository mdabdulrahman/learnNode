/* const {readFileSync,writeFileSync}=require("fs")
const f=readFileSync("./content/f2.txt","ascii")
let s=readFileSync("./content/subfolder/f1.txt","utf-8")
for (let i=1;i<27;i++){
writeFileSync("./content/subfolder/new.txt",`Hello ${i}\n`,{flag:'a'})
} */
const {readFile,writeFile}=require('fs')
readFile('./content/f2.txt','utf-8',(err,result)=>{
    if (err){
       console.log(err)
       return
    }
    const first=result
    readFile('./content/subfolder/f1.txt','utf-8',(err,result)=>{
        if (err){
            console.log(err)
            return
        }
        const second=result
        writeFile('./content/subfolder/new.txt',`Result: \n ${first}\n ${second}`,'utf-8',(err,result)=>
        {
            if (err){
console.log(err)
            }
            console.log(result)
        })
        
    })
})
console.log("welcome to")