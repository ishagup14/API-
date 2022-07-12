const express = require('express');
const app= express();
const mongoose = require('mongoose');
const bodyParser =require('body-parser')
const employeeRoute= require('./api/routes/employee')
const companyRoute= require('./api/routes/company')
const userRoute = require('./api/routes/user');
const adminRoute = require('./api/routes/admin');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/employee',employeeRoute);
app.use('/company',companyRoute);
app.use('/user',userRoute);
app.use('/admin',adminRoute);


mongoose.connect('mongodb+srv://ishagupta:isha@creation1.gukkk.mongodb.net/?retryWrites=true&w=majority')

mongoose.connection.on('error',err=>{
    console.log('Connection failed');
})

mongoose.connection.on('connected',connected=>{
    console.log('connected with database...');
})


app.use((req,res,next)=>{
    res.status(404).json({
        error:'bad request'
    })
})


module.exports=app;