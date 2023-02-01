import { Link } from "react-router-dom";

export default function UserFAQSection() {
  return (
    <div className="row m-0 user-faq accordion-container">
      <div className="col-md-6 d-flex flex-column justify-content-center pe-4 faqs-wrapper">
        <p className="main-title">User FAQ</p>
        <h2 className="main-heading" data-aos="fade-right">Answering all Your Need with Robot and Machine</h2>
        <p className="">At our company, we provide advanced robot and machine technology to answer all your needs, from automation to data analysis, improving your business operations and bottom line.</p>
        <div className="accordion mb-1" id="testimonial-accordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What services does your company offer?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#testimonial-accordion">
              <div className="accordion-body">
                Our company specializes in providing advanced automation solutions for various industries, including <strong>home automation</strong>, <strong>industry automation</strong>, <strong>smart class automation</strong>, <strong>testing equipments</strong>, and <strong>electrical Panels</strong>.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Do you offer custom automation solutions?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#testimonial-accordion">
              <div className="accordion-body">Yes, we offer custom automation solutions tailored to meet the specific needs of our clients. Our team of experts will work with you to understand your unique requirements and develop a solution that fits your specific needs and goals.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Do you offer support and maintenance services?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#testimonial-accordion">
              <div className="accordion-body">Yes, we offer ongoing support and maintenance services to ensure that our automation solutions continue to operate at optimal levels. Our team is available for troubleshooting and maintenance as needed.</div>
            </div>
          </div>
        </div>
        <Link className="button mt-4" to="/services/industry-automation" data-aos="fade-up">
          Learn More
        </Link>
      </div>
      <div className="col-md-6">
        <div className="image-wrapper d-flex align-items-end justify-content-end" data-aos="fade-up-left">
          <div className="w-fit-content d-flex align-items-center stats-box" data-aos="fade-left" data-aos-offset="50">
            <i className="fa-solid fa-users-gear fs-extra-large color-ff8b34 me-3"></i>
            <div className="w-fit-content">
              <p className="m-0 lh-100 font-Kanit fs-extra-large d-flex align-items-center fw-500">
                1,485&nbsp;<span className="fs-large color-ff8b34">+</span>
              </p>
              <p className="mb-0 fs-normal color-878787">Trusted Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
