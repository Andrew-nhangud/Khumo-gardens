import "./Services.css";
import { services } from "../../data/services.js";

export const Services = () => {
  return (
    <section id="services">
      <h2 className="section-subheader">offerings</h2>
      <h1 className="section-main-header">Services</h1>

      <div className="line2">
        {services.map((service, index) => (
          <div className="services-items" key={index}>
            <img src={service.image} alt="icon" />
            <h1>{service.title}</h1>
            <p>{service.para}</p>
            <div className="line-diveder"></div>
          </div>
        ))}
      </div>
    </section>
  );
};
