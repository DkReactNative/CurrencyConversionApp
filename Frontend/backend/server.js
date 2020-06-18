const express = require('express');
const bodyParser= require('body-parser')
const app = express();
var cors = require('cors')
const fs = require('fs');
app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const routes = require('./route/routes.js')(app, fs);

app.listen(3000, function() {
    console.log('listening on 3000')
  })  
  
