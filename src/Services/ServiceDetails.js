import { Link, useParams } from "react-router-dom";
import GetFreeConsultationService from "../Common/GetFreeConsultationService";

export default function ServiceDetails() {
  const { servicename } = useParams();

  const servicedetails = {
    "home-automation": {
      title: "Home Automation",
      main_content: "Transform your home with cutting-edge home automation technology and elevate your daily living experience. With the ability to control lighting, heating, security, and other systems from one central hub or through remote accessibility, home automation brings unprecedented levels of efficiency, convenience, and comfort to your home.",
      service_benefits: ["Flexible & Cost-Effective", "Increased efficiency", "Enhanced performance", "Improved safety", "Remote control", "Seamless integration", "24/7 Available to Service"],
      sub_content: "Maximize your home's potential with cutting-edge home automation technology. Control lighting, heating, security and more from one central hub, or remotely from your smartphone, for ultimate convenience. Enhance your living experience with increased efficiency, comfort, and peace of mind. Upgrade your home to a smart home today and experience the benefits of a more connected lifestyle.",
      image_url: "/images/Smart-Home-App.jpg",
    },
    "industry-automation": {
      title: "Industry Automation",
      main_content: "Stay ahead in the industry with our cutting-edge automation solutions, designed to increase efficiency, improve performance, and drive growth for your business. Our team of experts delivers customized solutions to meet your specific needs and bring value to your operations. Trust us to drive your industry forward.",
      service_benefits: ["Flexible & Cost-Effective", "Increased efficiency", "Enhanced performance", "Improved safety", "Remote control", "Seamless integration", "24/7 Available to Service"],
      sub_content: "Maximize productivity and competitiveness with our industry-leading automation solutions. Our team offers personalized, high-quality services to enhance your operations and meet your unique needs. Partner with us for a smarter, more efficient industry.",
      image_url: "/images/robotic-arms-along-assembly-line-in-modern-factory-1-1 -3x2.jpg",
    },
    "smart-class-automation": {
      title: "Smart Class Automation",
      main_content: "Smart Class Automation revolutionizes traditional classroom education through the use of technology. Our solution streamlines teaching and learning process, making it more interactive and efficient. Say goodbye to manual grading, and hello to a smarter education system.",
      service_benefits: ["Flexible & Cost-Effective", "Increased efficiency", "Enhanced performance", "Improved safety", "Remote control", "Seamless integration", "24/7 Available to Service"],
      sub_content: "Smart Class Automation leverages cutting-edge technology to bring innovation to the classroom. With features like real-time student assessment, multimedia presentations, and automated grading, our solution enhances the educational experience for both teachers and students. It's time to upgrade to a smarter and more efficient education system. Join the revolution with Smart Class Automation today.",
      image_url: "/images/Technology-In-School-And-Business-Presentations.jpg",
    },
    "testing-equipments": {
      title: "Testing Equipments",
      main_content: "Our Testing Equipment line offers reliable and accurate solutions for various industries. From quality control to research and development, our equipments are designed to deliver precise results every time. Trust us for all your testing needs and take the first step towards efficient quality assurance.",
      service_benefits: ["Flexible & Cost-Effective", "Increased efficiency", "Enhanced performance", "Improved safety", "Remote control", "Seamless integration", "24/7 Available to Service"],
      sub_content: "We offer a wide range of Testing Equipment, including electrical, mechanical, and environmental testing solutions. Our products are designed to meet industry standards and are backed by expert technical support. Upgrade your testing process and achieve consistent, high-quality results with our innovative Testing Equipment.",
      image_url: "/images/791_2.jpg",
    },
    "electrical-panels": {
      title: "Electrical Panels",
      main_content: "Our Electrical Panels are designed for efficient and safe distribution of electrical power. With options for custom design, our panels provide reliable performance in various industries. Trust us for all your electrical panel needs and experience a hassle-free power distribution system.",
      service_benefits: ["Flexible & Cost-Effective", "Increased efficiency", "Enhanced performance", "Improved safety", "Remote control", "Seamless integration", "24/7 Available to Service"],
      sub_content: "Our Electrical Panels are manufactured with top-quality components and are designed for easy installation and maintenance. Whether it's for a commercial or industrial setting, our panels ensure a secure and efficient electrical distribution system. Upgrade your power management with our reliable Electrical Panels today.",
      image_url: "/images/DSC03763-HDR-web.jpg",
    },
  };
  return (
    <div className="service-details-container">
      <div className="section-top-heading">
        <h1 className="heading mb-3">{servicedetails[servicename].title}</h1>
        <p className="breadcrumb d-flex align-items-center justify-content-center mb-0">
          <Link to="/">Home</Link>&nbsp;<i className="fa-solid fa-angle-right color-ff8b34 px-2"></i>&nbsp;<Link to="/services">Services</Link>&nbsp;<i className="fa-solid fa-angle-right color-ff8b34 px-2"></i>&nbsp;{servicedetails[servicename].title}
        </p>
      </div>
      <div className="row m-0 service-detail-section">
        <div className="col-md-8 pe-4">
          <h2 className="service-title font-Kanit color-252525 mb-4" data-aos="fade-right">
            About {servicedetails[servicename].title}
          </h2>
          <p className="mb-3">{servicedetails[servicename].main_content}</p>
          <div className="row m-0">
            <div className="col-md-6 ps-0">
              <img src={servicedetails[servicename].image_url} alt={servicedetails[servicename].title + "-service"} className="w-100" data-aos="fade-right-up" />
            </div>
            <div className="col-md-6">
              <ul className="benefits-list h-100 d-flex flex-column justify-content-center">
                {servicedetails[servicename]?.service_benefits &&
                  servicedetails[servicename]?.service_benefits?.length > 0 &&
                  servicedetails[servicename]?.service_benefits?.map((d, i) => {
                    return (
                      <li data-aos="fade-up-left" key={"service-benefit--" + i}>
                        {d}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <p className="mt-3">{servicedetails[servicename].sub_content}</p>
          <hr className="my-5" />
          <div className="row m-0 service-perks">
            <div className="col-md-4">
              <img src="/images/tools.svg" alt="proper-equipment" className="w-23 bounce-transition" />
              <h4 className="color-252525 font-Kanit mt-3">Proper Equipment</h4>
              <p className="">Proper equipment for reliable performance, minimal downtime.</p>
              <Link to="/contact" className="color-ff8b34 fs-semi-small fw-500">
                Contact Now&nbsp;<i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="col-md-4">
              <img src="/images/team.svg" alt="proper-equipment" className="w-23 bounce-transition" />
              <h4 className="color-252525 font-Kanit mt-3">Prefessional Team</h4>
              <p className="">Expert solutions from our experienced professional team.</p>
              <Link to="/contact" className="color-ff8b34 fs-semi-small fw-500">
                Contact Now&nbsp;<i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="col-md-4">
              <img src="/images/helmet.svg" alt="proper-equipment" className="w-23 bounce-transition" />
              <h4 className="color-252525 font-Kanit mt-3">Secure & Safety</h4>
              <p className="">Secure automation through latest technology and techniques.</p>
              <Link to="/contact" className="color-ff8b34 fs-semi-small fw-500">
                Contact Now&nbsp;<i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-information-box d-flex flex-column mb-5">
            <h5 className="font-Kanit fs-extra-large color-252525">
              Interested <span className="color-ff8b34 fs-normal">in Service</span>
            </h5>
            <Link className="button text-center w-100" to="/contact">
              Contact Now
            </Link>
            <h4 className="font-Kanit color-252525 mt-4 fs-semi-large">This Service Includes</h4>
            <ul className="m-0">
              <li>
                <i className="fa-solid fa-wrench"></i> Machine Installation
              </li>
              <li>
                <i className="fa-solid fa-book"></i> Manual Book
              </li>
              <li>
                <i className="fa-solid fa-shield-halved"></i> 1-Year Waranty
              </li>
              <li className="pb-0">
                <i className="fa-solid fa-user-shield"></i> Electronically & Secured
              </li>
            </ul>
          </div>
          <div className="need-help" data-aos="fade-up">
            <h4 className="font-Kanit mb-4">Need For Some Help ?</h4>
            <p>Get expert help today with ease and peace of mind. Contact us now.</p>
            <div className="d-flex mb-4">
              <div className="w-15">
                <div className="icon-wrapper">
                  <img src="/images/phone-call.svg" alt="phone-call" className="w-60" />
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center ps-3">
                <p className="font-Kanit fs-semi-large lh-100 fw-500 mb-0">Phone</p>
                <p className="mb-0">
                  {" "}
                  <a href="tel:7722968126" className="color-fff">
                    (+91) 77229 68126
                  </a>
                </p>
              </div>
            </div>
            <div className="d-flex mb-4">
              <div className="w-15">
                <div className="icon-wrapper">
                  <img src="/images/email.svg" alt="email" className="w-60" />
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center ps-3">
                <p className="font-Kanit fs-semi-large lh-100 fw-500 mb-0">Email</p>
                <p className="mb-0">
                  <a href="mailto:support@sublineautorob.com" className="color-fff">
                    support@sublineautorob.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetFreeConsultationService />
    </div>
  );
}
