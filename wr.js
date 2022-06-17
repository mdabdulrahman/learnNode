const {readFile,writeFileSync}=require('fs');
const http=require('http')
http.createServer((req,res)=>{
    res.write(first.html)
    res.end()
})
let dt=new Date()
let m1=02
let ded;
let i=1
let d1=26
for (let year=2004;year<=2022;year++){
    writeFileSync("./first.txt",`~~~~~~~~~~~~~~~~~~~~~~~~~~ ${i} Year ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n`,{flag:'a'})
    for (let m=m1;m<=12;m++){
        if (m==1 || m==3 || m==5 || m==7 ||m==8 ||m==10 ||m==12){
            
            ded=31
            
                        }
        else{
            ded=30
        }
      
        for (let d=d1;d<=ded;d++){
          
            writeFileSync("./first.txt",`${d} : ${m} : ${year}\n`,{flag:'a'})
            if (m===dt.getMonth() && d===dt.getDate() && year===dt.getFullYear()){
                break
            }
           
           
            if (year%4==0){
                if (m==2 && d==29){
                    break
                }
    
            }
            else{
            if (d==28 && m==2){
                break
            }}
        }
      d1=1
      if (m==dt.getMonth() && year==dt.getFullYear()){
        break
    }

    }
   m1=1
   i++;
}
            

console.log(dt.getDate())
console.log(dt.getFullYear())
console.log(dt.getMonth())