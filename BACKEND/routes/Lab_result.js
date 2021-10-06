const router = require("express").Router();
//let Bill = require("../models/bill");
let Lab_result = require("../models/Lab_result");


//create lab result
router.route("/add").post((req,res) => {
    const test_result_ID = req.body.test_result_ID;
    const testID = req.body.testID;
    const patientId = req.body.patientId;
    const name = req.body.name;
    const testDate= req.body.testDate;
    const amount = req.body.amount;
    const testType = req.body.testType;
    const component = req.body.component;
    const quantity = req.body.quantity;
    const unit = req.body.unit;
    const remark = req.body.remark;
   


    const newLab_result = new Lab_result({
        test_result_ID,
      testID,
      patientId,
        name,
        testDate,
        amount,
        testType,
        component,
        quantity,
        unit,
        remark
    })
    newLab_result.save().then(() => {
        res.json("Lab Result Added")
    }).catch((err) =>{
        console.log(err);
    })
})

//retrieve all lab details
router.route("/display").get((req,res) =>{
  Lab_result.find().then((Lab_result) =>{
        res.json(Lab_result)
    }).catch((err)=>{
        console.log(err)
    })
})

//Update data
router.route("/update/:id").put(async(req,res)=> {
    let userId = req.params.id;
    const { 
        test_result_ID,
        testID,
        patientId,
        name,
        testDate,
        amount,
        testType,
        component,
        quantity,
        unit,
        remark}= req.body;

    const updateLab_result = {
        test_result_ID,
      testID,
      patientId,
        name,
        testDate,
        amount,
        testType,
        component,
        quantity,
        unit,
        remark
    }
    const update = await Lab_result.findByIdAndUpdate(userId,updateLab_result)
    .then(()=> {
        res.status(200).send({status:"Lab Result updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status:"Error with updating data", error:err.message})
    })
})

//delete data
router.route("/delete/:id").delete(async(req,res)=> {
    let userId = req.params.id;

    await Lab_result.findByIdAndDelete(userId)
    .then(()=> {
        res.status(200).send({status:"Lab details Deleted!"});
    }).catch((errr) =>{
        console.log(errr.message);
        res.status(500).send({status:"Error with delete lab details",error:errr.message});
    })
})

//retrieve one
router.route("/get/:id").get(async(req,res)=> {
    let userId = req.params.id;

    const Labresult = await Lab_result.findById(userId)
    .then((Lab_result)=> {
        res.status(200).send({status:"Lab Details fetched",Lab_result})
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status:"Error with get user", error:err.message});
    })
})



module.exports = router;