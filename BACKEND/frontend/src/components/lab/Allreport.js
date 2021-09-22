import React,{useState,useEffect} from "react";
import axios from "axios";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './AllLab.css';
 
import swal from 'sweetalert';

export default function Allreport(){

    const [lab, setLab] = useState([]);
    const [searchTerm, setsearchTerm] = useState("");
//Delete 
    const deleteLab=(id) =>{
        axios.delete(`http://localhost:8050/report/delete/${id}`).then(()=>{
            swal({
                title: "Are you sure?",
                text: "The Item Will be Deleted from Lab Report!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("The file has been deleted!", 
                    "success",
                  );  setTimeout(function(){
                    window.location.reload();
                   },1000);
                } else {
                  swal("Not Deleted");
                }
              });
        // ;
        })
      }



    useEffect(() => {
        //fetching all supplier data from the database
        function getLab(){
        axios.get("http://localhost:8050/post/display").then((res) => {
            setLab(res.data);
            }
        ).catch((err) => {
            alert(err.message);
        })
    }
    getLab();
    }, [])

    return (
        <>
         <div class="head">
        <br></br>
          <br></br>
          <br></br>
    <br></br>
        <br></br>
   </div>
   <br></br>
          <br></br>
   <div class="buttonn">
       <button type="button" class="btn btn-secondary btn-sm">GenerateReport</button>
   </div>
    
       <div class="lft">
       <br></br>
       <br></br>
<div class="card1" >
    <input type="text" placeholder="Search.." className="form-control" style={{margintop:50,marginbottom:20,width:"40%"}}
      onChange = {(e) => {
          setsearchTerm(e.target.value);
      }}/>
   <br></br>
   <br></br>
   <table class="table table-bordered">
        <table class="table table-hover" >
         
                   <thead>
                
                       <tr>
                       <th>Name</th>
                       <th>Test ID</th>
                        <th>Patient ID</th>
                        <th>Test Date</th>
                        <th>Amount</th>
                        <th>Test Type</th>
                        <th>Component</th>
                        <th>Unit</th>
        
                         

                       </tr>
                   </thead>
                   <tbody>
                       {
                           lab.filter(val=>{
                               if(searchTerm === ''){
                                   return val;
                               }else if(
                                   val.testID.toLowerCase().includes(searchTerm.toLowerCase()) 
                                    
                                    

                               ){
                                   return val;
                               }
                               }).map(function (f) {
                               return <tr>
                                   <td>{f.name}</td>
                                   <td>{f.testID}</td>
                                  <td>{f.patientId}</td>
                                   <td>{f.testDate}</td>
                                   <td>{f.amount}</td>
                                   <td>{f.testType}</td>
                                   <td>{f.component}</td>
                                   <td>{f.unit}</td>
                                  

                                    

                                   <td > <IconButton aria-label="delete"  onClick={() =>deleteLab  (f._id)}>
                                       
               
         <DeleteIcon fontSize="small" />
       </IconButton></td>

       <td > <IconButton aria-label="delete"  >
                                       
               
                                       <EditIcon fontSize="small" />
                                     </IconButton></td>

                               </tr>

                           })
                       }
                   </tbody>
                   </table>
               </table>
</div>
</div>

       </>
   
   )








}