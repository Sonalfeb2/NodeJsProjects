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
  fs.readFileSync("message.txt", "utf8", (err, data) => {
    if (err) {
      res.send(
        `<h1>No Chats</h1><form action="/"  method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')"><input type="text" name="title" /><input type="hidden" name="username" id="username" /><button type="submit">Send</button></form>`
      );
    } else {
      res.send(
        `<h1>${data}</h1><form action="/"  method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')"><input type="text" name="title" /><input type="hidden" name="username" id="username" /><button type="submit">Send</button></form>`
      );
    }
  });
});
router.post("/", (req, res) => {
  const message = req.body.title;
  const username = req.body.username;
  fs.appendFile("message.txt", ` ${username}:${message} `, err => {
    if (err) {
      console.log(err);
    } else {
      console.log("saved");
    }
  });
  res.redirect("/");
});
module.exports = router;
