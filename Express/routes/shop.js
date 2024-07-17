const express = require("express");
const path = require("path");
const rootDir = require('../util/path')
const router = express.Router();

//app.use render a similar path but get , post render a exact path
router.get("/", (req, res) => {
  
  res.sendFile(path.join(rootDir, "views", "shop.html"));
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});
module.exports = router;
