import { Link } from "react-router-dom";
import OurServicesSection from "../Common/OurServicesSection";
import UserFAQSection from "../Common/UserFAQSection";

export default function Services() {
  return (
    <div className="services-container">
      <div className="section-top-heading">
        <h1 className="heading mb-3">Our Service</h1>
        <p className="breadcrumb d-flex align-items-center justify-content-center mb-0">
          <Link to="/">Home</Link>&nbsp;<i className="fa-solid fa-angle-right color-ff8b34 px-2"></i>&nbsp;Services
        </p>
      </div>
      <OurServicesSection />
      <div className="row m-0 services-four-up pb-0">
        <div className="col-md-3 box-wrapper">
          <div className="box box1" data-aos="fade-up-right">
            <div className="content-body d-flex flex-column justify-content-end">
              <h3 className="font-Kanit fs-large">Manufacture System</h3>
              <p className="text mb-0">Our company specializes in the design and implementation of advanced manufacturing systems to optimize production processes and improve efficiency.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 box-wrapper">
          <div className="box box2" data-aos="fade-up">
            <div className="content-body d-flex flex-column justify-content-end">
              <h3 className="font-Kanit fs-large">Robot Industry</h3>
              <p className="text mb-0">Our company pioneers the future of work by delivering advanced automation solutions and driving innovation in the rapidly growing robot industry</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 box-wrapper">
          <div className="box box3" data-aos="fade-up">
            <div className="content-body d-flex flex-column justify-content-end">
              <h3 className="font-Kanit fs-large">Machine Maintainance</h3>
              <p className="text mb-0">Our company offers comprehensive machine maintenance services to ensure seamless operation and prolong the lifespan of your automation equipment.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 box-wrapper">
          <div className="box box4" data-aos="fade-up-left">
            <div className="content-body d-flex flex-column justify-content-end">
              <h3 className="font-Kanit fs-large">Robot Installation</h3>
              <p className="text mb-0">Our experienced technicians provide professional robot installation services, ensuring seamless integration and efficient performance for your automation equipment.</p>
            </div>
          </div>
        </div>
      </div>
      {/* <ClientTestimonialSection /> */}
      <UserFAQSection />
    </div>
  );
}
