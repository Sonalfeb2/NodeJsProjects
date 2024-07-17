const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const router = express.Router();
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
  // res.send(
  //   '<form action="/product" method="POST"> Add Product : <input type="text" name="title"/> Size : <input type="number" name="size"/><button type="submit">Click Me </button></form>'
  // );
});
router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

router.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact-us.html"));
});
router.post("/success", (req, res) => {
  console.log(req.body);
  res.send("Filled Form SuccessFully");
});
module.exports = router;
