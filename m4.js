const http=require('http')
const server=http.createServer((req,res)=>{
if (req.url==="/"){
    res.end("Hello this is the Home Page")
}
if (req.url==="/contact"){
    res.end("Hello is the Contact Page\n Email id : abu3abu6@gmail.com")
}
res.end('<h1>404 Error</h1><p>your requested page is Not found please check the url or go somewhere </p><a href="/">Back to Home Page<a>')
})
server.listen(5500)