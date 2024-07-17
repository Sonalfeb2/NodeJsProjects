const express = require('express')
const bodyParser = require('body-parser');
const login = require('./routes/login')
const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(login)

app.use((req,res)=>{
    res.status(400).send('Page not Found')
  })
app.listen(3001)