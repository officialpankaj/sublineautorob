import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className="contactus-container">
      <div className="section-top-heading">
        <h1 className="heading mb-3">Contact Us</h1>
        <p className="breadcrumb d-flex align-items-center justify-content-center mb-0">
          <Link to="/">Home</Link>&nbsp;<i className="fa-solid fa-angle-right color-ff8b34 px-2"></i>&nbsp;Contact Us
        </p>
      </div>
      <div className="row m-0 get-in-touch">
        <div className="col-md-6 pe-5">
          <form
            className="w-100 shadow contact-form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input type="text" placeholder="Your Name" className="form-control" />
            <input type="email" placeholder="Your Email" className="form-control" />
            <input type="text" placeholder="Your Subject" className="form-control" />
            <textarea rows="5" placeholder="Your Message" className="form-control" ></textarea>
            <button type="submit" className="button mt-2">Send Message</button>
          </form>
        </div>
        <div className="col-md-6 ps-4">
          <p className="main-title">Get In Touch</p>
          <h2 className="main-heading mb-3">Contact Us Now</h2>
          <p>Get in touch with us today! Our team is here to answer any questions and help you with all your automation needs. Simply send us a message and we'll get back to you promptly. We look forward to hearing from you.</p>
          <div className="row m-0 mb-4 contact-details-wrapper">
            <div className="col-md-6 ps-0 row m-0">
              <div className="col-md-4 ps-0">
                <div className="icon-wrapper">
                  <img src="/images/skyscraper.svg" alt="location" className="w-45" />
                </div>
              </div>
              <div className="col-md-8">
                <h5 className="font-Kanit fs-semi-large">Location</h5>
                <p className="mb-0">Thane, Mumbai, 421203</p>
              </div>
            </div>
            <div className="col-md-6 ps-0 row m-0">
              <div className="col-md-4 ps-0">
                <div className="icon-wrapper">
                  <img src="/images/office-building.svg" alt="location" className="w-75" />
                </div>
              </div>
              <div className="col-md-8">
                <h5 className="font-Kanit fs-semi-large">Office</h5>
                <p className="mb-0">7th Floor, Bandra Kurla Complex</p>
              </div>
            </div>
          </div>
          <div className="row m-0 contact-details-wrapper">
            <div className="col-md-6 ps-0 row m-0">
              <div className="col-md-4 ps-0">
                <div className="icon-wrapper">
                  <img src="/images/phone-call.svg" alt="location" className="w-75" />
                </div>
              </div>
              <div className="col-md-8">
                <h5 className="font-Kanit fs-semi-large">Call Us</h5>
                <p className="mb-0">(+91) 77229 68126</p>
              </div>
            </div>
            <div className="col-md-6 ps-0 row m-0">
              <div className="col-md-4 ps-0">
                <div className="icon-wrapper">
                  <img src="/images/mail.svg" alt="location" className="w-75" />
                </div>
              </div>
              <div className="col-md-8">
                <h5 className="font-Kanit fs-semi-large">Email Address</h5>
                <p className="mb-0">support@sublineautorob.com</p>
              </div>
            </div>
          </div>
          <hr className="my-5" />
          <h4 className="font-Kanit fs-medium-large mb-4">Follow Our Social Media</h4>
          <div className="social-wrapper">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-instagram m-0"></i>
          </div>
        </div>
      </div>
      <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15084.029653017482!2d72.8518560727656!3d19.063411674512952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8df0b86ea1b%3A0xce7eea4b1bbdf296!2sBandra%20Kurla%20Complex%2C%20Bandra%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1675068838817!5m2!1sen!2sin" loading="lazy" title="office-location" className="w-100 h-450px"></iframe>
    </div>
  );
}
