const express = require("express");
const path = require("path")
const rootDir = require("./util/path")
const bodyParser = require("body-parser"); //It is used to parse the body of incoming request .
const adminRouter = require("./routes/admin")
const shopRouter = require("./routes/shop")
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir,'public')))
// app.use((req, res, next) => {
//   console.log("I am in Middleware");
//   res.send("<h1>Sonal</h1>");
//   next();

// });
// app.use((req, res, next) => {
//   console.log("I am in another Middleware");

// });
app.use('/admin',adminRouter);
app.use(shopRouter)
app.use((req,res)=>{
  res.status(400).sendFile(path.join(rootDir,'views','404.html')) //Using Path For Abosulte Path and __dir is used for current directoy of project
})
app.listen(3000);
