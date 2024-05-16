const express =require ('express');
const mongoose = require ('mongoose')

const app = express();

mongoose.connect('mongodb://localhost:27017/employes');
const userSchema = new mongoose.Schema({
    name:String,
    age:Number
    
})
const userModel = mongoose.model("users",userSchema);

app.get("/getuser",(req,res)=>{
    userModel.find().then(function(users){
        res.json(users)
    }).catch(function(error){
        console.log(error)
        
    })
})

const port =5003;

app.listen(port,()=>{
    console.log(`server is running at the port: ${port}`)
})