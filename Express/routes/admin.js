const express = require("express");
const router = express.Router();
router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"> Add Product : <input type="text" name="title"/> Size : <input type="number" name="size"/><button type="submit">Click Me </button></form>'
  );
});
router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});
module.exports = router