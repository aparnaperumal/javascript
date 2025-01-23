const { createReadStream } = require("fs");
const { createServer} = require("http");

const sendFile = (res, status , type, file)=>{
    res.writeHead(200,{"Content-Type":type})
    createReadStream(file).pipe(res)
}

createServer((req,res)=>{
    switch(req.url){
        case "/":
            return sendFile(res, 200, "text/html","./sample.html")
    }
}).listen(3000);

console.log("Webserver listening 3000")