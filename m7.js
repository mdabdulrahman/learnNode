const http=require('http')
const server = http.createServer((req,res)=>{
    console.log("request event");
    res.end("Hello Ben Tennyson!!")
})
server.listen(5500,()=>{
    console.log('Server listening on port : 5500.....')
})