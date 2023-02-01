import { Link } from "react-router-dom";
import OurBlogsSection from "../Common/OurBlogsSection";
import OurServicesSection from "../Common/OurServicesSection";
import WhoWeAreSection from "../Common/WhoWeAreSection";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-top-section">
        <div className="box-wrapper">
          <div className="box" data-aos="fade-left">
            <h1 className="main-heading">
              The Modern Industry of <div className="d-inline-flex fw-600 color-ff8b34">Automation</div>
            </h1>
            <p className="description">We specialize in providing cutting-edge technology solutions to streamline your business operations and increase efficiency. Whether you're looking to automate a specific process or overhaul your entire operation, we have the tools and expertise to help you achieve success</p>
            <div className="d-flex">
              <Link className="button me-4" to="/contact">
                Contact Us
              </Link>
              <div className="watch-video-box">
                <i className="fa-solid fa-play"></i> Watch Video
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-0 home-aboutus-section" id="home-aboutus-section">
        <div className="col-md-6 row m-0 left-section">
          <div className="col-md-6 box-wrapper">
            <div className="box box1" data-aos="fade-up">
              <div className="content-box">
                <h4 className="heading">Industry Automation</h4>
                <p className="text">Service includes design, installation, and maintenance of automated systems.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 box-wrapper">
            <div className="box box2" data-aos="fade-up">
              <div className="content-box">
                <h4 className="heading">Smart System Automation</h4>
                <p className="text">Automated processes control with self-learning and adaptability features..</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 right-section">
          <p className="main-title">About Subline AutoRob</p>
          <h2 className="main-heading">We Provide The Best Service for the Modern Industry</h2>
          <p className="text py-3">We Provide The Best Service for the Modern Industry by Utilizing Cutting-Edge Technology and Expertise.</p>
          <div className="row m-0 box" data-aos="fade-up-left">
            <div className="col-md-6 p-0 image-box"></div>
            <div className="col-md-6 p-0 ps-3 d-flex flex-column justify-content-center box-content py-4">
              <h5 className="fw-bold">Home Automation</h5>
              <p className="text">For controlling and automating systems in the home for convenience and energy efficiency..</p>
              <p className="color-ff8b34 m-0 fw-bold">Read more</p>
            </div>
          </div>
        </div>
      </div>
      <WhoWeAreSection />
      <OurBlogsSection />
      <OurServicesSection />
    </div>
  );
}
