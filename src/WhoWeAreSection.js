import { Link } from "react-router-dom";

export default function WhoWeAreSection() {
  return (
    <div className="row mx-0 home-who-we-are-section">
      <div className="col-md-6 body-content">
        <p className="main-title">Who We Are</p>
        <h2 className="heading">The One Stop Solution for Your Industries</h2>
        <p className="text">We offer a range of services including design, installation, maintenance, and support for all your industrial automation needs, streamlining your operations and saving you time and resources.</p>
        <div className="row m-0 pt-2 mb-3">
          <div className="col-md-7 p-0 pe-4">
            <p className="pe-3 mb-2 d-flex justify-content-between">
              <span className="fs-medium fw-bold">Save Your Time</span>
              <span>94%</span>
            </p>
            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar" style={{ width: "94%" }}></div>
            </div>
            <p className="pe-3 mt-4 mb-2 d-flex justify-content-between">
              <span className="fs-medium fw-bold">Trusted Company</span>
              <span>90%</span>
            </p>
            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar" style={{ width: "90%" }}></div>
            </div>
            <p className="mt-4 mb-2">
              <i className="fa-solid fa-check pe-2 color-ff8b34"></i> Constant Improvement
            </p>
            <p className="mb-2">
              <i className="fa-solid fa-check pe-2 color-ff8b34"></i> Commitment to Customers
            </p>
            <p className="m-0 mb-4">
              <i className="fa-solid fa-check pe-2 color-ff8b34"></i> Best Quality You Can Get
            </p>
          </div>
          <div className="col-md-5 pe-0">
            <div className="box" data-aos="fade-up-left">
              <img style={{ fill: "#ff8b34" }} src="/images/helmet.svg" alt="helmet" className="w-35 bounce-transition mb-4" />
              <p className="mt-1 font-Kanit">Controling all the system with modern technology</p>
            </div>
          </div>
        </div>
        <Link className="button" data-aos="fade-up" to="/services">
          Check Services
        </Link>
      </div>
      <div className="col-md-6 p-0 ps-3">
        <div className="image-box"></div>
      </div>
    </div>
  );
}
