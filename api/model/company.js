const mongoose= require('mongoose');
companySchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    logo:String,
    website:String
})

module.exports=mongoose.model('company',companySchema);