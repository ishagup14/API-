const express = require('express');
const mongoose = require('mongoose');
const Admin = require('../model/admin');
const bcrypt = require('bcrypt');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        msg:'Admin route working'
    })
})

router.post('/',(req,res,next)=>{
    bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err){
            return res.status(500).json({
                error:err
            })
        }
        else{
            const admin =new Admin({
                _id: new mongoose.Types.ObjectId,
                username:req.body.username,
                password:hash,
                phone:req.body.phone,
                email:req.body.email
            })
            admin.save()
            .then(result=>{
                res.status(200).json({
                    new_user:result
                })
            })
            .catch(err=>{
                res.status(500).json({
                    error:err
                })
            })
        }

    })
})


module.exports=router;