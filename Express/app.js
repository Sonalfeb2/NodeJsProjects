const express = require("express");
const bodyParser = require("body-parser");

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
app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"> Add Product : <input type="text" name="title"/> Size : <input type="number" name="size"/><button type="submit">Click Me </button></form>'
  );
});
app.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});
app.use("/", (req, res) => {
  res.send("Hello From Express");
});
app.listen(3000);
