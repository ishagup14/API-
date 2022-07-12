const mongoose =require('mongoose');
const employeeSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    firstName:String,
    lastName:String,
    company:String,
    email:String,
    phone:Number,
    salary:Number
})

module.exports=mongoose.model('Employee',employeeSchema);