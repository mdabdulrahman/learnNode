const http=require('http')
const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        for (let i=0;i<300000;i++){
            console.log(`hello ${i} `)
        }
        res.end('Home Page')
    }
    else if (req.url === '/about'){
        res.end('This is an about page to go home <a href="/">Click Here</a>')

    }
    else{
    res.end(' 404 ERROR GO HOME ❌ <br><a href="/">Go Home</a>')
    }
})
server.listen(5500,()=>{
    console.log('Server listening on port : 5500.....')
})