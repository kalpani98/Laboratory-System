import React from "react";
import labcard from './labcard';
import './Book.css';

import imgage1 from '../../assets/appointment.png';
import img2 from '../../assets/history.jpg';
import img3 from '../../assets/treatment.jpeg';

export default function Book() {
    return (
        <>
        <div className='card-group-1'>
            <labcard imgURL={imgage1} title='Make Appointment' text={"Don't Make a Wish\nMake an\nAppointment"} URLpath={"/add"}/>
            <labcard imgURL={img2} title='Booking History' text={"Once You've Opened it,\nYou've Opened up\nyour mind"} URLpath={"/booking-history"}/>
            <labcard imgURL={img3} title='Treatment history' text={"Medicines cure diseases,\nbut only Doctors can\ncure Patients"} URLpath={"/treatment-history"}/>
        </div>
        </>
    )
}
