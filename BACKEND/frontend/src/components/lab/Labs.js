import React from 'react'
import LabCard from './LabCard';
import './Labs.css';

import img1 from '../../assets/sign_up.gif';
import img2 from '../../assets/result_2.gif';
import img3 from '../../assets/feedback_2.gif';


export default function Labs() {
    return (
        <>
        <div className='card-group-1'>
            <LabCard imgURL={img1} title='Make Lab result' text={"Don't Make a Wish\nMake an\nAppointment"} URLpath={"/add"}/>
            <LabCard imgURL={img2} title='All lab result details' text={"Once You've Opened it,\nYou've Opened up\nyour mind"} URLpath={"/display"}/>
            <LabCard imgURL={img3} title='Lab result Details feedback' text={"There is always space for improvement\nno matter how long\nit takes"} URLpath={"#"}/>
        </div>
        </>
    )
}
