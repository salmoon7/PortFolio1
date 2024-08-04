import React from "react";
import "./Services.css";
import Services_Data from "../../assets/service_data";
import arrow_icon from "../../assets/arrow_icon.svg";

function Services() {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        {/* <img src="" alt="" /> */}
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.id}</h3>
              <h2>{service.name}</h2>
              <p>{service.desc}</p>
              <div className="service-readmore">
                <p>Read More</p>
                {/* <img src={arrow_icon} alt="" /> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
