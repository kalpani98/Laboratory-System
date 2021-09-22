const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reportSchema = new mongoose.Schema({

    name:{
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
    unit:{
        type:String,
        required:true
    }

})



const report = mongoose.model("report",reportSchema);
module.exports = report;