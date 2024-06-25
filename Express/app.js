const express = require("express");
const app = express();
app.use((req, res, next) => {
  console.log("I am in Middleware");
  res.send("<h1>Sonal</h1>");
  next();
});
app.use((req, res, next) => {
  console.log("I am in another Middleware");
});
app.listen(3000);
