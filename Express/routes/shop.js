const express = require("express");
const router = express.Router();
//app.use render a similar path but get , post render a exact path
router.get("/", (req, res) => {
    res.send("Hello From Express");
  });
module.exports = router