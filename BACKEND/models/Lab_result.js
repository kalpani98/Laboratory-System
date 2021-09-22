const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Lab_resultSchema = new Schema({
    test_result_ID:{
        type:String,
        required:true
    },
    
    testID:{
        type:String,
        required:true
    },
    patientId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }, 

    testDate:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    testType:{
        type:String,
        required:true
    },
 
    component:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    }, 
    unit:{
        type:String,
        required:true
    },
    remark:{
        type:String,
        required:true
    }


})

const Lab_result = mongoose.model("Lab_result", Lab_resultSchema);
module.exports = Lab_result;