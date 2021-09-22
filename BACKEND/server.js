const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//app middleware
app.use(bodyParser.json());
app.use(cors());

//const URL 
const PORT = 8050;
const URL = 'mongodb+srv://Kalpani:kalpani1998@cluster.fddvn.mongodb.net/Laboratory_db?retryWrites=true&w=majority'

mongoose.connect (URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  
})
.then(() =>{
    console.log('DB connected');
 })
.catch((err) => console.log('DB connection error',err));

//const connection = mongoose.connection
//connection.once("open",()=>{
   // console.log("Mongodb Connection success!");
//});
const Lab_resultRouter= require('./routes/Lab_result.js');
app.use("/post",Lab_resultRouter);


const reportRouter= require('./routes/report.js');
app.use("/report",reportRouter);

app.listen(PORT,()=>{
    console.log(`Server is up and running on port number: ${PORT}`);
});
