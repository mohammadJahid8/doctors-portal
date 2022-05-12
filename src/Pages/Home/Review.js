import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl mt-10">
            <div class="card-body">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem impedit adipisci molestiae eius ab quia?</p>
                <div class="flex items-center">
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                            <img src={review.image} alt='' />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl">{review.name}</h2>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;