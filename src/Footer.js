import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="row m-0 menus-container">
        <div className="col-md-3">
          <p className="d-flex align-items-center">
            <img src="/images/logo-light-grey.svg" alt="logo" className="logo me-1" />
            <span className="fs-large fw-bold font-Kanit">
              <em>
                Subline <span className="color-ff8b34">AutoRob</span>
              </em>
            </span>
          </p>
          <p>We specialize in providing advanced technology solutions to streamline your business operations and increase efficiency. We have the tools and expertise to help you achieve success.</p>
          <p className="fs-semi-large fw-500 font-Kanit">
            <span className="color-ff8b34 font-Kanit">Hotline</span> : <a className="color-fff font-Kanit" href="tel:7722968126">(+91) 77229 68126</a>
          </p>
        </div>
        <div className="col ps-5 pe-0">
          <div className="head-box d-flex">
            <div className="d-inline-flex pt-2 pe-2 text-end icon-box">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="d-inline-flex flex-column text-box">
              <p className="fw-bold title m-0">Phone</p>
              <p className="text m-0"><a className="color-fff" href="tel:7722968126">+91 77229 68126</a></p>
            </div>
          </div>
          <div className="body-box">
            <p className="heading mb-2">Quick Links</p>
            <p className="link-wrapper mb-2">
              <i className="fa-regular fa-circle-dot"></i> <a href="#">About</a>
            </p>
            <p className="link-wrapper mb-2">
              <i className="fa-regular fa-circle-dot"></i> <a href="#">Services</a>
            </p>
            <p className="link-wrapper mb-2">
              <i className="fa-regular fa-circle-dot"></i> <a href="#">Blog</a>
            </p>
            <p className="link-wrapper mb-2">
              <i className="fa-regular fa-circle-dot"></i> <a href="#">Contact</a>
            </p>
          </div>
        </div>
        <div className="col px-0">
          <div className="head-box d-flex">
            <div className="d-inline-flex pt-2 pe-2 text-end icon-box">
              <i className="fa-solid fa-envelope-open-text"></i>
            </div>
            <div className="d-inline-flex flex-column text-box">
              <p className="fw-bold title m-0">Email</p>
              <p className="text m-0"><a className="color-fff" href="mailto:support@sublineautorob.com">support@sublineautorob.com</a></p>
            </div>
          </div>
          <div className="body-box">
            <p className="heading mb-2">Customer Service</p>
            <p className="link-wrapper mb-2">
              <i className="fa-regular fa-circle-dot"></i> <a href="#">Privacy Policy</a>
            </p>
            <p className="link-wrapper mb-2">
              <i className="fa-regular fa-circle-dot"></i> <a href="#">Terms & Conditions</a>
            </p>
            <p className="link-wrapper mb-2">
              <i className="fa-regular fa-circle-dot"></i> <a href="#">Support</a>
            </p>
            <p className="link-wrapper mb-2">
              <i className="fa-regular fa-circle-dot"></i> <a href="#">Disclaimer</a>
            </p>
          </div>
        </div>
        <div className="col-md-3 px-0">
          <div className="head-box d-flex">
            <div className="d-inline-flex pt-2 pe-2 text-end icon-box">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="d-inline-flex flex-column text-box">
              <p className="fw-bold title m-0">Location</p>
              <p className="text m-0">7th Floor, Bandra Kurla Complex, 421203</p>
            </div>
          </div>
          <div className="body-box">
            <p className="heading mb-2">Subscribe Newsletter</p>
            <p>Subscribe to get the latest updates on our new innovations.</p>
            <div className="row m-0 subscriber-newsletter">
              <div className="col-md-10 ps-0">
                <input type="email" className="" placeholder="Your Email" />
              </div>
              <div className="col-md-2 p-0">
                <button>
                  <i className="fa-solid fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-container d-flex justify-content-between align-items-center">
        <span className="text">Copyright © Subline AutoRob 2023. All rights reserved.</span>
        <div className="social-icons d-inline-flex">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-instagram m-0"></i>
        </div>
      </div>
    </div>
  );
}
