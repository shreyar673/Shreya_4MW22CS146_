const express=require('express')
const app=express()
const port=5000;
app.use('/post',(req,res)=>{
    res.send("Hello,World!");
})
app.listen(port,()=>{
    console.log("server listening to 5000")
})