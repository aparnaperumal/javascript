const https = require("https");
const fs = require("fs");

const url ="https://en.wikipedia.org/wiki/Cher";
//by using options
// const options = {
//     hostname: "en.wikipedia.org",
//     port : 443,
//     path : "/wiki/Cher",
//     method : "GET"
// }

// const request = https.request(options, res=>{
//     let responseBody = "";
//     res.setEncoding("utf-8");
//     res.on("data", chunk =>{
//         console.log("==chunk", chunk.length);
//         responseBody += chunk;
//     });
//     res.on("end",()=>{
//         fs.writeFile("cher.html", responseBody, err=>{
//             if(err){
//                 throw err;
//             }
//             console.log("file downloaded");
//         })
//     })
// });


const request = https.get(url, res=>{
   let downloaded = fs.createWriteStream("cher1.html");
   console.log("Response started!")
   res.pipe(downloaded);
   res.on("end",() =>{
    console.log("Response finished");
   })
});
request.end();

