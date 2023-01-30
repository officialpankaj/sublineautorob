export default function TopBar() {
  return (
    <div className="top-bar-container">
      <div className="d-inline-flex justify-content-center">
        <i className="fa-solid fa-phone color-ff8b34 pt-1"></i>&nbsp; <span className="text">Need Free Consultation?</span>
        <strong className="ps-2">Contact Us Now</strong>
      </div>
      <div className="d-inline-flex social-icons color-ff8b34">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkedin-in"></i>
        <i className="fa-brands fa-instagram"></i>
      </div>
    </div>
  );
}
