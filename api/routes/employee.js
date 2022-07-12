const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
const Employee = require('../model/employee');


router.get('/',(req,res,next)=>{
    Employee.find()
    .then(result=>{
        res.status(200).json({
            employeeData:result
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
    Employee.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            Employee:result
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
    const employee = new Employee({
        _id:new mongoose.Types.ObjectId,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        company:req.body.company,
        email:req.body.email,
        phone:req.body.phone,
        salary:req.body.salary
    })
    employee.save()
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
    Employee.remove({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            message:'Employee deleted',
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
    Employee.findOneAndUpdate({_id:req.params.id},{
        $set:{
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            company:req.body.company,
            email:req.body.email,
            phone:req.body.phone,
            salary:req.body.salary
        }
    })
    .then(result=>{
        console.log(result);
        res.status(200).json({
            UpdatedEmployee:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })

})


module.exports = router;
    
  
