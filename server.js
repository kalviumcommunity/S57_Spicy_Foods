const express = require('express');
const app = express();
const port =3000;

app.get('/ping',(req,res)=>{
    res.send('pongs');
})

app.listen(port,()=>{
    console.log('App running on the port: ${port}')
})