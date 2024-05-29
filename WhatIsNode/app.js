const http = require("http");
const routes = require("./routes");
console.log(routes.someText)
http.createServer(routes.handler).listen(3000);
