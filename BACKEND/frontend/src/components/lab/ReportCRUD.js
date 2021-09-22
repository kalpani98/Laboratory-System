import React from 'react'
import LabCard from './LabCard';
import './Labs.css';

import img1 from '../../assets/sign_up.gif';
import img2 from '../../assets/result_2.gif';
import img3 from '../../assets/feedback_2.gif';


export default function ReportCRUD() {
    return (
        <>
        <div className='card-group-1'>
            <LabCard imgURL={img1} title='make a Lab report' text={"Don't Make a Wish\nMake an\nAppointment"} URLpath={"/report"}/>
            <LabCard imgURL={img2} title='Laboratory Report list' text={"Once You've Opened it,\nYou've Opened up\nyour mind"} URLpath={"redisplay"}/>
            <LabCard imgURL={img3} title='Lab Details feedback' text={"There is always space for improvement\nno matter how long\nit takes"} URLpath={"/report"}/>
        </div>
        </>
    )
}