const router = require("express").Router();
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
router.route("/update/:id").put(async(req,res)=> {
    let userId = req.params.id;
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
    const update = await report.findByIdAndUpdate(userId,updatereport)
    .then(()=> {
        res.status(200).send({status:"Lab report updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status:"Error with updating data", error:err.message})
    })
})

//delete data
router.route("/delete/:id").delete(async(req,res)=> {
    let userId = req.params.id;

    await report.findByIdAndDelete(userId)
    .then(()=> {
        res.status(200).send({status:"Lab report Deleted!"});
    }).catch((errr) =>{
        console.log(errr.message);
        res.status(500).send({status:"Error with delete lab report",error:errr.message});
    })
})

//retrieve one
router.route("/get/:id").get(async(req,res)=> {
    let userId = req.params.id;

    const Report = await report.findById(userId)
    .then((Report)=> {
        res.status(200).send({status:"Lab Details fetched",Report})
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status:"Error with get user", error:err.message});

        
    })
})



module.exports = router;