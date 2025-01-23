const {createServer} = require("http");

createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    console.log("Request Details", req);
    res.end(`
        <!DOCTYPE html>
        <html>
        <body>
        <h1>Serving HTML text</h1>
        <p>${req.method} request made for ${req.url} <p>
        </body>
        </html>
        `);
}).listen(3000);


console.log("Webserver is listening on port 3000")

