import React from 'react';
import chair from '../../assets/images/chair.png';
import Button from '../Shared/Button';
import bg from '../../assets/images/landing-bg.png';

const Banner = () => {
    return (
        <section style={
            {
                background: `url(${bg})`,
                backgroundSize: '1400px 650px',
                backgroundRepeat: "no-repeat",
            }
        }>

            <div className="hero min-h-screen md:px-8"  >
                <div className="hero-content flex-col lg:flex-row-reverse flex-nowrap">
                    <div className='md:w-1/2 flex justify-end'>
                        <img src={chair} className="md:max-w-lg rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div className='md:w-1/2'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.  In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div >
        </section>
    );
};

export default Banner;