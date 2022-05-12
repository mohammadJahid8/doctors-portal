import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../../assets/images/landing-bg.png';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div class="hero min-h-screen "
            style={
                {
                    background: `url(${bg})`,
                    backgroundSize: '1400px 650px',
                    backgroundRepeat: "no-repeat",
                }
            }>
            <div class="hero-content flex-col lg:flex-row-reverse ">
                <img src={chair} class="md:max-w-lg rounded-lg shadow-sm" alt='dentist chair' />
                <div className='shadow-md rounded-xl p-5 mr-10 ml-5 md:mt-0 mt-5'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />

                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;