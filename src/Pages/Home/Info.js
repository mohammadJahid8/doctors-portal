import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';


const Info = () => {


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4'>
            <InfoCard cardTitle='Opening Hours' bgClass='bg-gradient-to-r from-secondary to-primary' img={clock} />
            <InfoCard cardTitle='Ours Locations' bgClass='bg-accent' img={marker} />
            <InfoCard cardTitle='Contact Us' bgClass='bg-gradient-to-r from-secondary to-primary' img={phone} />
        </div>
    );
};

export default Info;