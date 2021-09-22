const router = require("express").Router();
//let Bill = require("../models/bill");
let report = require("../models/report");
//Lab_result

//create lab report
router.route("/add").post((req,res) => {
    const name = req.body.name;
    const testID = req.body.testID;
    const patientId = req.body.patientId;
    const testDate= req.body.testDate;
    const amount = req.body.amount;
    const testType = req.body.testType;
    const component = req.body.component;
    const unit = req.body.unit;
   
   


    const newreport = new report({
        name,
        testID,
        patientId,
        testDate,
        amount,
        testType,
        component,
        unit
    })
    newreport.save().then(() => {
        res.json("Lab report Added")
    }).catch((err) =>{
        console.log(err);
    })
})

//retrieve all report
router.route("/display").get((req,res) =>{
  report.find().then((report) =>{
        res.json(report)
    }).catch((err)=>{
        console.log(err)
    })
})

//Update data
router.route("/update/:testID").put(async(req,res)=> {
    let userId = req.params.testID;
    const {      name,
      testID,
      patientId,
      testDate,
      amount,
      testType,
      component,
      unit}= req.body;

    const updatereport = {
      name,
        testID,
        patientId,
        testDate,
        amount,
        testType,
        component,
        unit
    }
    const update = await report.findOneAndUpdate(userId,updatereport)
    .then(()=> {
        res.status(200).send({status:"Lab report updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status:"Error with updating data", error:err.message})
    })
})

//delete data
router.route("/delete/:testID").delete(async(req,res)=> {
    let userId = req.params.testID;

    await report.findOneAndDelete(userId)
    .then(()=> {
        res.status(200).send({status:"Lab report Deleted!"});
    }).catch((errr) =>{
        console.log(errr.message);
        res.status(500).send({status:"Error with delete lab report",error:errr.message});
    })
})

//retrieve one
router.route("/get/:testID").get(async(req,res)=> {
    let userId = req.params.testID;

    const report = await report.findOne(userId)
    .then((report)=> {
        res.status(200).send({status:"Lab Details fetched",report})
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status:"Error with get user", error:err.message});
    })
})

module.exports = router;