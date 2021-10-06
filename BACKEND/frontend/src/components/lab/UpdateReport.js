import React, { useState,useEffect } from "react"

import { useParams } from "react-router";

import axios from "axios";





export default function EditForm() {

    const { id } = useParams();



    const [ name,setName] = useState("");
    const [testID,settestID] = useState("");
    const [patientId,setpatientId] = useState("");
    const [ testDate,settestDate] = useState("");
    const [amount,setAmount] = useState("");  
    const [testType,settestType] = useState("");
    const [component,setcomponent] = useState("");
    const [unit,setUnit] = useState("");


    useEffect(() => {

        async function getData(){
  
              const result = await axios.get(`http://localhost:8050/report/get/${id}`)
  
  
  
              let billData = result.data.report
  
              if (billData) {
  
                setName(billData.name);

                settestID(billData.testID);
  
                setpatientId(billData.patientId);
  
                settestDate(billData.testDate);
  
                setAmount(billData.amount);
  
                settestType(billData.testType);
  
                setcomponent(billData.component);
  
                setUnit(billData.unit);

  
              } else {
  
                  
  
              }
  
          }
  
          getData()
  
      }, [])
      function sendData(e) {

        e.preventDefault();



        const newResult ={
            name,
            testID,
             patientId,
              testDate,
              amount,
              testType,
              component,
              unit
          }

        axios.put(`http://localhost:8050/report/update/${id}`,  newResult).then(() => {

            alert("Lab Report Updated")

            window.location = "/lab"



        }).catch((err) => {

            console.log(err.message)

            alert(err)

        })



    }


    return(
        <div className='body'>
               <div className='appointment-container'>
                   <div className='title'> ADD LAB REPORT DETAILS</div>    
                   <div className='container'>
                   <form onSubmit={sendData}>
                        <div className='user-details'>
                        <div className='input-box'>
                                <label className='details' htmlFor='name'>Name</label>
                                <div className='input-group'>
                                <input type='text' id='name' name='name' placeholder='Enter Your Name' value ={name} required  onChange={(e)=>{
                                    setName(e.target.value)
                                }}/>
                                <i className='fa fa-envelope left-icon'/>
                                <i className='fa fa-times right-icon'/>
                                </div>
                            </div>
                            <div className='input-box'>
                                <label className='details' htmlFor='testID'>Test ID</label>
                                <div className='input-group'>
                                <select id='testID' name='testID'
                                onChange={(e)=>{
                                    settestID(e.target.value);
                            }}value ={testID}>
                                    <option value='Select'>Select Your test ID</option>
                                    <option value='T_101'>T_101</option>
                                    <option value='T_102'>T_102</option>
                                    <option value='T_103'>T_103</option>
                                    <option value='T_104'>T_104</option>
                                    <option value='T_105'>T_105</option>
                                    <option value='T_106'>T_106</option>
                                    <option value='T_107'>T_107</option>
                                    <option value='T_108'>T_108</option>
                                    <option value='T_109l'>T_109</option>
                                    <option value='T_110'>T_110</option>
                                </select>
                                <i className='fa fa-list left-icon'/>
                                </div>
                            </div>  
                             <div className='input-box'>
                                <label className='details' htmlFor='patientId'>Patient ID</label>
                                <div className='input-group'>
                                <input type='text' id='patientId' name='patientId' placeholder='Enter Your Patient ID' required onChange={(e)=>{
                                    setpatientId(e.target.value)
                                }}value ={patientId}/>
                                <i className='fa fa-envelope left-icon'/>
                                <i className='fa fa-times right-icon'/>
                                </div>
                            </div>
                        
                                 <div className='input-box'>
                                <label className='details' htmlFor='testDate'>Test Date</label>
                                <div className='input-group'>
                                <input type='date' id='testDate' name='date' required
                               onChange={(e)=>{
                                settestDate(e.target.value);
                        }}value ={testDate}/>
                                </div>
                            </div>
                                 
                                 
                                 <div className='input-box'>
                                <label className='details' htmlFor='amount'>Amount</label>
                                <input type='text' id='amount' name='amount' placeholder='Enter Amount' required  onChange={(e)=>{
                                    setAmount(e.target.value)
                                }}value ={amount}/>
                                <i className='fa fa-list left-icon'/>
                                <i className='fa fa-times right-icon'/>
                            </div>
                           <div className='input-box'>
                                <label className='details' htmlFor='testType'>Test Type</label>
                                <div className='input-group'>
                                <select id='testType' name='testType'
                                onChange={(e)=>{
                                    settestType(e.target.value);
                            }}value ={testType}>
                                    <option value='Select'>Select Your test type</option>
                                    <option value='Blood Count'>Blood Count</option>
                                    <option value='Urinalysis'>Urinalysis</option>
                                    <option value='Scan'>Scan</option>
                                </select>
                                <i className='fa fa-list left-icon'/>
                                </div>
                            </div>
                         
                            <div className='input-box'>
                                <label className='details' htmlFor='component'>Component</label>
                                <div className='input-group'>
                                <select id='component' name='component'
                                onChange={(e)=>{
                                    setcomponent(e.target.value);
                            }}value ={component}>
                                    <option value='Select'>Select Your Component</option>
                                    <option value='Blood'>Blood</option>
                                    <option value='Urin'>Urine</option>
                                    
                                </select>
                                <i className='fa fa-list left-icon'/>
                                </div>
                            </div>
                       
                            <div className='input-box'>
                                <label className='unit' htmlFor='unit'>Unit</label>
                                <div className='input-group'>
                                <select id='unit' name='unit'
                                onChange={(e)=>{
                                    setUnit(e.target.value)
                            }}value ={unit}>
                                    <option value='SelectC'>Select Unit</option>
                                    <option value='OPD'>OPD</option>
                                    <option value='Breast '>Breast screening</option>
                                    <option value='Cardiology'>Cardiology</option>
                                    <option value='Neurology'>Neurology</option>
                                    <option value='Oncology'>Oncology</option>
                                    <option value='ENT'>ENT(Ear,Nose,Throat)</option>
                                    <option value='Physiotheraphy'>Physiotheraphy</option>
                                    <option value='Anesthetics'>Anesthetics</option>
                                    
                                </select>
                                <i className='fa fa-list left-icon'/>
                                </div>
                            </div>
        
                    
                       
                        </div>     
                        <div className='button'>
                        <button type="update" class="btn btn-primary" onClick={(e)=>{sendData(e)}}>Update</button>
                        </div>
                   </form>
                   </div>
                </div>
               </div>
               
            );



}