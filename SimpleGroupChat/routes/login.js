const express = require("express");
const fs = require("fs");
const router = express.Router();
router.get("/login", (req, res) => {
  res.send(
    `<form action="/user" method="POST" 
    onsubmit= "localStorage.setItem('username', document.getElementById('username').value)">
    Login:<input type="text" id="username" name="user" /><button type="submit">Submit</button></form>`
  );
});
router.post("/user", (req, res) => {
  res.redirect("/");
});
router.get("/", (req, res) => {
  const data = fs.readFileSync("message.txt", "utf8");

  res.send(
    `<h2>${data.length>0?data:"No Messages"}</h2><form action="/"  method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')"><input type="text" name="title" /><input type="hidden" name="username" id="username" /><button type="submit">Send</button></form>`
  );
});
router.post("/", (req, res) => {
  const message = req.body.title;
  const username = req.body.username;
  if (username.length > 0) {
    fs.appendFile("message.txt", ` ${username}:${message} `, err => {
      if (err) {
        console.log(err);
      } else {
        console.log("saved");
      }
    });

    res.redirect("/");
  } else {
    res.redirect("/login");
  }
});
module.exports = router;
