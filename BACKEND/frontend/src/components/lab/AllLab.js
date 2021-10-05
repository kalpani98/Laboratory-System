import React, { useState, useEffect } from "react";
import axios from "axios";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './AllLab.css';
import jspdf from "jspdf";
import 'jspdf-autotable';

import swal from 'sweetalert';

export default function AllLab() {

    const [lab, setLab] = useState([]);
    const [searchTerm, setsearchTerm] = useState("");
    //Delete 
    const deleteLab = (id) => {
        axios.delete(`http://localhost:8050/post/delete/${id}`).then(() => {
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
                        ); setTimeout(function () {
                            window.location.reload();
                        }, 1000);
                    } else {
                        swal("Not Deleted");
                    }
                });
            // ;
        })
    }



    useEffect(() => {
        //fetching all supplier data from the database
        function getLab() {
            axios.get("http://localhost:8050/post/display").then((res) => {
                setLab(res.data);
            }
            ).catch((err) => {
                alert(err.message);
            })
        }
        getLab();
    }, [])

    // genarate pdf



    const generatePDF = tickets => {



        const doc = new jspdf();

        const tableColumn = ["Test Result ID", "Test ID", "Patient ID", "Name", "Test Date",

            "Amount", "Test Type", "Component", "Quantity", "Unit", "Remarkr"];

        const tableRows = [];

        const date = Date().split(" ");

        const dateStr = date[1] + "-" + date[2] + "-" + date[3];



        tickets.map(ticket => {

            const ticketData = [
                
                  
                ticket.test_result_ID,

                ticket.testID,

                ticket.patientId,

                ticket.name,

                ticket. testDate,

                ticket.amount,

                ticket.testType,

                ticket.component,

                ticket.quantity,

                ticket. unit,

                ticket.remark

            ];

            tableRows.push(ticketData);
        })
        doc.text("Hospital Management System", 70, 8).setFontSize(13);
        doc.text("Lab Details Report", 14, 16).setFontSize(13);
        doc.text(`Report Genarated Date - ${dateStr}`, 14, 23);
        doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
        doc.save("Lab Result Details .pdf");
    };


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
                <button type="button" class="btn btn-secondary btn-sm" onClick={()=> generatePDF(lab)}>GenerateReport</button>
            </div>

            <div class="lft">
                <br></br>
                <br></br>
                <div class="card1" >
                    <input type="text" placeholder="Search.." className="form-control" style={{ margintop: 50, marginbottom: 20, width: "40%" }}
                        onChange={(e) => {
                            setsearchTerm(e.target.value);
                        }} />
                    <br></br>
                    <br></br>
                    <table class="table table-bordered">
                        <table class="table table-hover" >

                            <thead>

                                <tr>
                                    <th>Test Result ID</th>
                                    <th>Test ID</th>
                                    <th>Patient ID</th>
                                    <th>Name</th>
                                    <th>Test Date</th>
                                    <th>Amount</th>
                                    <th>Test Type</th>
                                    <th>Component</th>
                                    <th>Blood Group</th>
                                    <th>Unit</th>
                                    <th>Remark</th>


                                </tr>
                            </thead>
                            <tbody>
                                {
                                    lab.filter(val => {
                                        if (searchTerm === '') {
                                            return val;
                                        } else if (
                                            val.test_result_ID.toLowerCase().includes(searchTerm.toLowerCase())



                                        ) {
                                            return val;
                                        }
                                    }).map(function (f) {
                                        return <tr>
                                            <th>{f.test_result_ID}</th>
                                            <td>{f.testID}</td>
                                            <td>{f.patientId}</td>
                                            <td>{f.name}</td>
                                            <td>{f.testDate}</td>
                                            <td>{f.amount}</td>
                                            <td>{f.testType}</td>
                                            <td>{f.component}</td>
                                            <td>{f.quantity}</td>
                                            <td>{f.unit}</td>
                                            <td>{f.remark}</td>



                                            <td > <IconButton aria-label="delete" onClick={() => deleteLab(f._id)}>


                                                <DeleteIcon fontSize="small" />
                                            </IconButton></td>

                                            <td><a className="btn btn-warning" href={'updates/' + (f._id)}>Edit
                                            <i className="far fa-edit"></i>&nbsp;</a></td>




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