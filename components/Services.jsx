"use client";
import { serviceCardData } from "@/data/data";
import ServiceCard from "./ServiceCard";

const Services = ({ limit = 3 }) => {
  return (
    <section className="services">
      <div className="services-shape-wrapper position-absolute w-100 h-100">
        <div className="shape-1" />
        <div className="shape-2" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-header">
              <h2>Provide Services 🛠</h2>
            </div>
          </div>
        </div>
        {/* ==== Srart services Item =====*/}
        <div className="row">
          {serviceCardData.slice(0, limit).map((item) => (
            <ServiceCard key={item.id} {...item} />
          ))}
        </div>
        {/* ==== End services Item =====*/}
      </div>
    </section>
  );
};

export default Services;
