const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.json({
        message: "Here's the database :rainbow:"
    })
})