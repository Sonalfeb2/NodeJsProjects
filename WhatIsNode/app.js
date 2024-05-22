const http = require("http");
http
  .createServer((req, res) => {
    if (req.url == "/") {
      res.write("<html>Welcome to my NodeJS Project</html>");
    } else {
      res.write(`<html><div>Welcome to my ${(req.url).slice(1)} Page</div></html>`);
    }

    res.end();
  })
  .listen(3000);
