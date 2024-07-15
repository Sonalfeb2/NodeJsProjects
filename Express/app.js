const express = require("express");
const bodyParser = require("body-parser"); //It is used to parse the body of incoming request .
const adminRouter = require("./routes/admin")
const shopRouter = require("./routes/shop")
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// app.use((req, res, next) => {
//   console.log("I am in Middleware");
//   res.send("<h1>Sonal</h1>");
//   next();

// });
// app.use((req, res, next) => {
//   console.log("I am in another Middleware");

// });
app.use('/admin',adminRouter);
app.use('/shop',shopRouter)
app.use((req,res)=>{
  res.status(400).send('Page not Found')
})
app.listen(3000);
