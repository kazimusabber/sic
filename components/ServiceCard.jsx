"use client";
import Image from "next/image";

const ServiceCard = ({ title, description, img }) => {
  return (
    <div className="col-lg-4 mb-5">
      <div className="card text-center">
        <div className="card-icon">
          <Image src={img} alt="services-icon" height={80} width={80} />
        </div>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
