import React from 'react'
import LabCard from './LabCard';
import './Labs.css';

import img1 from '../../assets/Book_Lab_test.jpg';
import img2 from '../../assets/report_2.jpg';
import img3 from '../../assets/lab_feedback.jpeg';


export default function LAB() {
    return (
        <>
        <div className='card-group-1'>
            <LabCard imgURL={img1} title='Laboratory Report' text={"Don't Make a Wish\nMake an\nAppointment"} URLpath={"/reCrud"}/>
            <LabCard imgURL={img2} title='Laboratory Result ' text={"Once You've Opened it,\nYou've Opened up\nyour mind"} URLpath={"/labs"}/>
            <LabCard imgURL={img3} title='Lab Details feedback' text={"There is always space for improvement\nno matter how long\nit takes"} URLpath={"#"}/>
        </div>
        </>
    )
}
