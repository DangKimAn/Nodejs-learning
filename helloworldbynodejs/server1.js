const express = require('express');
require('dotenv').config() // khai bao env  
console.log(process.env)

const app = express()

// config template engine 
app.set('views' , './src/views/') ///huong dan noi chua views

app.set('view engine' , 'ejs') // ten engine su dung 
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
tmp  =0 
app.get('/', (req , res) =>{

  tmp = tmp+1
  console.log(tmp)
  res.send("hello world!")
})


// more route 
app.get('/abc' , (req , res) =>{
  res.send('abc')
})


// tra ve mot tag html
app.get('/html' , (req,res) =>{

  res.send('<h1>Hello html </h1>')

})

// them render su dung ejs

app.get('/ejs' , (req, res) =>{
  res.render('sample.ejs')
})
app.listen(port , () =>{

  tmp = tmp+1
  console.log(tmp)
  console.log(`Example app listening on port ${port}`)
})
