import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Harry",
      review: "Best dental care.",
      location: "California",
      image: people1,
    },
    {
      _id: 2,
      name: "Winson Harry",
      review: "Best doctors in the world",
      location: "California",
      image: people2,
    },
    {
      _id: 3,
      name: "Winson Harry",
      review: "Very kind doctors",
      location: "California",
      image: people3,
    },
  ];
  return (
    <section className="my-28 container mx-auto px-4">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonials</h4>
          <h2 className="text-3xl">What Our Patients Say</h2>
        </div>
        <div>
          <img src={quote} className="w-24 lg:w-48" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
