const express=require('express');
const mongoose= require('mongoose');
const cors=require('cors');
const todoModel=require("./models/todo");
const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/test");

app.post("/add",(req,res)=>{
    const task=req.body.task;
    todoModel.create({
        task:task
    }).then(result=>res.json(result))
    .catch(err=>res.json(err));
})

app.get("/get",(req,res)=>{
    todoModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
app.put('/update/:id',(req,res)=>{
    const {id}=req.params;
    todoModel.findByIdAndUpdate({_id:id},{done:true})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
    
});
app.delete("/delete/:id",(req,res)=>{
    const {id}=req.params;
    todoModel.findByIdAndDelete({_id:id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.listen(3001,()=>{
    console.log("server running");
})

