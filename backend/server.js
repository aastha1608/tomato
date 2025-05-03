require('dotenv').config();
const PORT=process.env.PORT;

const express=require("express");

const app=express();

const connectWithDB=require('./utils/database');
connectWithDB();

app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
}) 
