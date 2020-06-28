const express = require('express');
const http = require('http');
const path = require('path');
const searchRoute = require('./routers/search');
const homeRoute = require('./routers/home');


const mongoose = require('mongoose');

const app = express()
const port = http.createServer(app)

app.set('view engine','ejs')

app.use(express.static(path.join(__dirname,'public')))

app.use(searchRoute);
app.use(homeRoute);
// app.get('/',(req,res,next) => {
//     res.render('landing/index')
// })


port.listen(3000)