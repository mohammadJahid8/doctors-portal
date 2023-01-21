import React from "react";
import treatment from "../../assets/images/treatment.png";
import Button from "../Shared/Button";

const Treatment = () => {
  return (
    <div className="hero min-h-screen my-20" id="about">
      <div className="hero-content flex-col lg:flex-row md:gap-16">
        <img src={treatment} className="md:max-w-sm rounded-lg " alt="" />
        <div className="">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            The Dental Care is a modern dental clinic, specialized in advanced
            diagnostics and treatment of dental and oral disorders. We offer
            comprehensive services from all fields of dentistry. In addition to
            high-end dental equipment, all services are provided in a
            comfortable, luxury environment.
          </p>

          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
