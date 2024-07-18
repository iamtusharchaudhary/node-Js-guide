// This is module type:-

import express from 'express';
const app = express();

const port = 5000;

app.get('/',(req,res)=>{
    res.send('Tushar Chaudhary');
})
app.get('/tushar',(req,res)=>{
    res.send('<h1>Tushar Chaudhary Developer</h1>');
})
app.get('/login',(req,res)=>{
    res.send('<h4>User Login Successfully</h4>');
})
app.listen(port,()=>{
    console.log(`server running http://localhost${port}`);
})

// This is commonjs type:-


const express = require('express');
const app = express();

const port = 5000;

app.get('/',(req,res)=>{
    res.send('Tushar Chaudhary');
})
app.get('/tushar',(req,res)=>{
    res.send('<h1>Tushar Chaudhary Developer</h1>');
})
app.get('/login',(req,res)=>{
    res.send('<h4>User Login Successfully</h4>');
})
app.listen(port,()=>{
    console.log(`server running http://localhost${port}`);
})
