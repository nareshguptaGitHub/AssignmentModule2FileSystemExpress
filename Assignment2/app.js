const fs = require('fs');
const express = require('express');

const app = express();
const port =6500;

app.get('/',(req,res)=>{
res.send('<h1> Module 2 assignment</h1> </br>  <h3> Express Server started </h3>');
});
//route 
app.get('/getData', function(req,res){
    fs.readFile('./dbJsonFile/app-data.json',(err,result)=>{
        if(err){
            throw err;
        }else{
            res.send(JSON.parse(result));
        }
    })
});

// liten port 6500
app.listen(port, function(err){
console.log("server is running on port 6500",port);
})