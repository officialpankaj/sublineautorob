import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg header">
      <div className="container-fluid p-0 d-flex justfify-content-between">
        <Link className="navbar-brand" to="/">
          <img src="/images/logo-3d.svg" alt="logo" className="logo" /> Subline AutoRob
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="services">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="header-contact-box">
          <img src="/images/chat.svg" alt="message" className="w-30px me-3" />
          <div className="col-md-10 d-flex flex-column justify-content-center">
            <p className="m-0">
              <strong>Get&nbsp;Consultation</strong>
            </p>
            <p className="m-0">+91 77229 68126</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
