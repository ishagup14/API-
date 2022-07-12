const mongoose= require('mongoose');
adminSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    username:String,
    password:String,
    phone:Number,
    email:String
})

module.exports=mongoose.model('admin',adminSchema);