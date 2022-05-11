import React from 'react';
import fluoride from './../../assets/images/fluoride.png';
import cavity from './../../assets/images/cavity.png';
import whitening from './../../assets/images/whitening.png';


const ServicesCard = () => {


    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div class="card w-96 bg-base-100 shadow-xl pt-8">
                <figure><img src={fluoride} alt="Shoes" className=''/></figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Fluoride Treatment</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl pt-8">
                <figure><img src={cavity} alt="Shoes" /></figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Cavity Filling</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl pt-8">
                <figure><img src={whitening} alt="Shoes" /></figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>

        </div>
    );
};

export default ServicesCard;