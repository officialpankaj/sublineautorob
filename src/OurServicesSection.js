import { Link } from "react-router-dom";

export default function OurServicesSection() {
  return (
    <div className="row m-0 our-services-section">
      <div className="col-md-4">
        <p className="main-title">Our Services</p>
        <h2 className="main-heading">The Best System Services</h2>
        <p className="pb-4">Our solutions are tailored to meet the unique needs and requirements of each sector and are designed to improve efficiency, and increase productivity.</p>
        <Link to="/services" className="button">
          All Services
        </Link>
      </div>
      <div className="col-md-4 pb-4">
        <div className="item" data-aos="fade-down">
          <img src="/images/home-automation.svg" alt="home-automation" className="bounce" />
          <h4 className="heading">Home Automation</h4>
          <p className="description">Easily control the utilities and features of your home via the Internet to make life more convenient and secure.</p>
          <Link to="/services/home-automation" className="fw-bold color-ff8b34 mb-2">
            Read More&nbsp; <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div className="col-md-4 pb-4">
        <div className="item" data-aos="fade-down-left">
          <img src="/images/industry-automation.svg" alt="home-automation" className="bounce" />
          <h4 className="heading">Industry Automation</h4>
          <p className="description">We provide a complete portfolio of world-className services to ensure maximum performance of your equipment and processes.</p>
          <Link to="/services/industry-automation" className="fw-bold color-ff8b34 mb-2">
            Read More&nbsp; <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div className="col-md-4 pb-4">
        <div className="item" data-aos="fade-up-right">
          <img src="/images/smart-class-automation.svg" alt="home-automation" className="bounce" />
          <h4 className="heading">Smart Class Automation</h4>
          <p className="description">Automatic operation of Classroom Lights and Fans using Arduino and PIR sensors, detecting the presence of a human.</p>
          <Link to="/services/smart-class-automation" className="fw-bold color-ff8b34 mb-2">
            Read More&nbsp; <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div className="col-md-4 pb-4">
        <div className="item" data-aos="fade-up">
          <img src="/images/testing-equipment.svg" alt="home-automation" className="bounce" />
          <h4 className="heading">Testing Equipments</h4>
          <p className="description">The testing equipment used to detect faults in the operation of electronic devices by creating stimulus signals.</p>
          <Link to="/services/testing-equipments" className="fw-bold color-ff8b34 mb-2">
            Read More&nbsp; <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div className="col-md-4 pb-4">
        <div className="item" data-aos="fade-up-left">
          <img src="/images/electrical-panel.svg" alt="home-automation" className="bounce" />
          <h4 className="heading">Electrical Panels</h4>
          <p className="description">Control the factory equipment and provide a single base of operations for the engineer to control the manufacturing process.</p>
          <Link to="/services/electrical-panels" className="fw-bold color-ff8b34 mb-2">
            Read More&nbsp; <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
