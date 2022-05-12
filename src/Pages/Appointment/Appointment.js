import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className='container mx-auto px-4'>
            <AppointmentBanner date={date} setDate={setDate} />
            <AvailableAppointments date={date}/>
            <Footer />
        </div>
    );
};

export default Appointment;