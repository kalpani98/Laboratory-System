import React from 'react'
import AppointmentCard from './AppointmentCard';
import './Appointment.css';


import img1 from '../../assets/reg.png';

import img2 from '../../assets/patients.png';

import img3 from '../../assets/staff.png';

import img4 from '../../assets/pharmacy.png';

import img5 from '../../assets/lab.png';

import img6 from '../../assets/ward.png';

import img7 from '../../assets/ambulance.png';

import img8 from '../../assets/pay.png';

export default function Home(){
  





    return (

        <>

        <div className='card-group-1'>

            <AppointmentCard imgURL={img1} title='Registration' URLpath={'/Registration'} />

            <AppointmentCard imgURL={img2} title='Patients'  />

            <AppointmentCard imgURL={img3} title='Staff' />

            <AppointmentCard imgURL={img4} title='Pharmacy'  />

            <AppointmentCard imgURL={img5} title='Laboratary' URLpath={'/lab'}  />

            <AppointmentCard imgURL={img6} title='Ward' />

        </div>

        <div className='card-group-2'>

            <AppointmentCard imgURL={img7} title='Ambulance Service' />

            <AppointmentCard imgURL={img8} title='Payment'  />

        </div>

        </>

    )

}
