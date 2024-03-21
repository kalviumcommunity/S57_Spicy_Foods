const express = require('express')
const mongoose = require('mongoose')
const { connectDb, checkConnected }=require('./db');
const routes = require('./route');

  
const app = express();
connectDb();

app.use(express.json());
app.get('/ping',(req, res)=>{
  res.send('pong')

});

app.get('/',(req,res)=> {
  if(checkConnected()){
    res.send('Database connection status:connected');
  }else{
    res.send('Database connection status:connection failed');

  }

  });
app.use('/api',routes);

const PORT = process.env.PORT||3000;
app.listen(PORT,()=>{
  console.log(`server running on port ${PORT}`);
});