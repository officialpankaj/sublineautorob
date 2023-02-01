import { Link } from "react-router-dom";

export default function GetFreeConsultationService() {
  return (
    <div className="get-free-consultation-section">
      <i className="fa-solid fa-play play-icon mb-4"></i>
      <h2 className="main-heading mb-3" data-aos="fade-up">Get A Free Consultation With Us</h2>
      <p className="px-15" data-aos="fade-up" data-aos-offset="110">Get a personalized approach to your automation needs with a free consultation from our experts. Our team listens to your unique needs and provides tailored answers to meet your goals. Book your consultation today and experience the benefits of working with a trusted automation partner.</p>
      <Link className="button mt-4" to="/contact" data-aos="fade-up">
        Contact Us
      </Link>
    </div>
  );
}
