import React from 'react';
import doctor from '../../assets/images/doctor-small.png';
import appointment from '../../assets/images/appointment.png';
import Button from '../Shared/Button';

const MakeAppointment = () => {
    return (
        <section style={
            {
                background: `url(${appointment})`,
            }
        } className=''>
            <div className='container mx-auto px-4 flex justify-center items-center'>
                <div className='flex-1 hidden lg:block container mx-auto px-4'>
                    <img className='mt-[-110px]' src={doctor} alt="" />
                </div>
                <div className='flex-1 py-16'>
                    <h3 className="text-xl text-primary font-bold">Appointment</h3>
                    <h2 className="text-3xl text-white py-5">Make an Appointment Today</h2>
                    <p className='text-white pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat laboriosam, illum explicabo ea totam ducimus alias itaque impedit facilis incidunt exercitationem optio rerum reprehenderit tenetur minus ullam at ipsam? Quam, veniam odio ab dignissimos assumenda consequatur quos nemo enim ducimus?</p>
                    <Button>Make an Appointment</Button>
                </div>
            </div>


        </section>
    );
};

export default MakeAppointment;