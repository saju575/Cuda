const path=require('path');
const fs=require('fs');
const http=require('http');
// console.log(path.join(__dirname,'../'));
const server=http.createServer((req,res)=>{
    if(req.url==='/cuda'){
        res.writeHead(200,'text/html');
        const strem=fs.createReadStream(path.join(__dirname,'../','index.html'));
        strem.pipe(res);

    }
    else{
        res.writeHead(200,'text/plaintext');
        res.end('Sorry- page not found');
    }
});
server.listen(200,()=>{
    console.log('listen server 200');
})
