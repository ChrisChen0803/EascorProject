const http = require('http');

const server = http.createServer((request,response)=>{
    response.setHeader('content-type','text/html');
    response.end('hello');
})

server.listen(9000,()=>{
    console.log('Started');
})