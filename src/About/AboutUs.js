import { Link } from "react-router-dom";
import OurTeamSection from "../Common/OurTeamSection";
import UserFAQSection from "../Common/UserFAQSection";
import WhoWeAreSection from "../Common/WhoWeAreSection";

export default function AboutUs() {
  return (
    <div className="aboutus-container">
      <div className="section-top-heading">
        <h1 className="heading mb-3">About Us</h1>
        <p className="breadcrumb d-flex align-items-center justify-content-center mb-0">
          <Link to="/">Home</Link>&nbsp;<i className="fa-solid fa-angle-right color-ff8b34 px-2"></i>&nbsp;About Us
        </p>
      </div>
      <div className="row m-0 about-aboutus-section">
        <div className="col-md-6 pe-4 d-flex flex-column justify-content-center">
          <p className="main-title">About Subline AutoRob</p>
          <h2 className="main-heading mb-3">Whatever Your Industry You Can Make it Automated and Fast</h2>
          <p>Unlock the full potential of your business with our automation solutions. No matter what industry you're in, our technology can streamline processes and increase efficiency, saving you time and money. From manufacturing to customer service, we can help you automate and speed up every aspect of your operations, allowing you to focus on growing your business and expanding your reach. Our team of experts will work closely with you to understand your specific needs and tailor our solutions to fit your business perfectly, so you can see measurable results and achieve your goals faster.</p>
          <h4 className="font-Kanit fs-medium-large mt-3">Deepak Singh</h4>
          <p className="color-878787">Subline AutoRob CEO</p>
        </div>
        <div className="col-md-6">
          <div className="row m-0 pb-5">
            <div className="col-md-6">
              <div className="image-wrapper box1" data-aos="fade-left">
                <div className="details-wrapper">
                  <h4 className="font-Kanit fs-semi-large">Solid Quality</h4>
                  <p className="mb-0">Our products are known for their solid quality and durability.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image-wrapper box2" data-aos="fade-left">
                <div className="details-wrapper">
                  <h4 className="font-Kanit fs-semi-large">Smart System</h4>
                  <p className="mb-0">We deliver solid quality in all of our products and services.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-0 py-3">
            <div className="col-md-12">
              <div className="image-wrapper box3" data-aos="fade-in-up">
                <div className="details-wrapper">
                  <h4 className="font-Kanit fs-semi-large">AI Integrated</h4>
                  <p className="mb-0">Our company is at the forefront of technology, with AI integrated into all of our products and services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhoWeAreSection />
      <UserFAQSection />
      {/* <OurTeamSection /> */}
    </div>
  );
}
