const fs = require("fs");
const requestHandler = (req,res)=>{
        
    if(req.method==='POST' && req.url === "/message"){
        const body = [];
        req.on('data',(chunk)=>{
          body.push(chunk)
          
          
        })
       return req.on('end',()=>{
          const parseBody = Buffer.concat(body).toString();
          const message = parseBody.split('=')[1]
          fs.writeFileSync('message.txt',message )
          res.statusCode = 302;
          res.setHeader('Location','/')
         return res.end();
  
        })
        
      }
      
     const readmessage =  fs.readFileSync('message.txt','utf8');
      res.write('<html>')
      res.write(`<div>${readmessage&&readmessage}</div>`)
      res.write('<form action = "message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form>')
      res.write('</html>')
      res.end();
}

// module.exports = requestHandler

// module.exports = {
//     handler : requestHandler,
//     someText : 'Some Hard Code text'
// }

// module.exports.handler = requestHandler
// module.exports.someText= 'Some Hard Code text'


exports.handler = requestHandler
exports.someText= 'Some Hard Code text'
    