import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl mt-10">
      <div className="card-body ">
        <p>{review.review}</p>
        <div className="flex items-center pt-5">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
              <img src={review.image} alt="" />
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
