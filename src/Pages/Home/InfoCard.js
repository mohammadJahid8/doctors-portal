import React from "react";

const InfoCard = ({ img, cardTitle, bgClass }) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass} py-3 `}>
      <figure className="pl-5">
        <img className="" src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p>All time open</p>
      </div>
    </div>
  );
};

export default InfoCard;
