const express = require("express")
const { get } = require("mongoose")
const cors = require("cors")
const bodyParser=require('body-parser');

const app = express()
app.use(cors())
app.use(bodyParser.json());

app.get('/',(req,res)=>{
  console.log("server is runnong on console")
  res.send("My Server is running")
})

app.get('/product',(req,res)=>{
  console.log("product console")
  res.send("product running")
})

app.get('/product/:pid',(req,res)=>{
  let cid = req.params.pid;

 console.log("product console", cid)
  res.send("product running")
})

app.get('/category',(req,res)=>{
  console.log("category console")
  res.send("category running")
})

app.post('/admin/login',(req,res)=>{
  console.log("req.body",req.body)
  let email = req.body.email;
  let password = req.body.password;

  console.log("Login is ", email, password)
  
  res.send("Login Successfull")
})

app.put('/catogory/:cid',(req,res)=>{
  res.send("category put running")
})

app.delete('/deletecatogory/:cid',(req,res)=>{
  let cid=req.params.cid;
  res.send("category deletecatogory running")
})


app.listen(5000, ()=>{
  console.log("Server starteed")
})