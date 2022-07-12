const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
const Company = require('../model/company');

router.get('/',(req,res,next)=>{
    Company.find()
    .then(result=>{
        res.status(200).json({
            CompanyData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
})

router.get('/:id',(req,res,next)=>{
    console.log(req.params.id);
    Company.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            company:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
    

})

router.post('/',(req,res,next)=>{
    const company = new Company({
        _id:new mongoose.Types.ObjectId,
        name: req.body.name,
        email:req.body.email,
        logo:req.body.logo,
        website:req.body.website
    })
    company.save()
   .then(result=>{
      console.log(result);
      res.status(200).json({
          newStudent:result
      })
   })
   .catch(err=>{
       console.log(err);
       res.status(500).json({
           error:err
       })
   })
})

router.delete('/:id',(req,res,next)=>{
    Company.remove({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            message:'Company deleted',
            result:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})


router.put('/:id',(req,res,next)=>{
    console.log(req.params.id);
    Company.findOneAndUpdate({_id:req.params.id},{
        $set:{
            name: req.body.name,
            email:req.body.email,
            logo:req.body.logo,
            website:req.body.website
        }
    })
    .then(result=>{
        console.log(result);
        res.status(200).json({
            UpdatedCompany:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })

})

module.exports = router;