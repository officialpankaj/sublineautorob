export default function ClientTestimonialSection() {
  return (
    <div className="row m-0 services-client-testimonial">
      <div className="col-md-6">
        <p className="main-title">Client Testimonial</p>
        <h2 className="main-heading mb-4">We are Trusted Over 16+ Countries Worldwide</h2>
        <p className="text">Our team's expertise and dedication to innovation make us the go-to choice for businesses seeking top-quality automation solutions across the country.</p>
      </div>
      <div className="col-md-6 pe-0 d-flex align-items-center">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner row m-0">
            <div className="carousel-item col-md-6 active">
              <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam.</p>
              <div className="row m-0">
                <div className="col-md-9 ps-0 row m-0">
                  <div className="col-md-2 p-0 d-flex align-items-center">
                    <img src="/images/user-avatar-2.webp" className="w-100 user-avatar" alt="customer-avatar" />
                  </div>
                  <div className="col-md-9 ps-3 d-flex flex-column justify-content-center">
                    <h5 className="customer-name font-Kanit m-0 fs-large color-252525">Gerald Flynn</h5>
                    <p className="customer-position fs-medium-small m-0">Businessman</p>
                  </div>
                </div>
                <div className="col-md-3 text-end pt-5">
                  <i className="fa-solid fa-quote-right fa-4x color-ff8b34"></i>
                </div>
              </div>
            </div>
            <div className="carousel-item col-md-6">
              <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam.</p>
              <div className="row m-0">
                <div className="col-md-9 ps-0 row m-0">
                  <div className="col-md-2 p-0 d-flex align-items-center">
                    <img src="/images/user-avatar-2.webp" className="w-100 user-avatar" alt="customer-avatar" />
                  </div>
                  <div className="col-md-9 ps-3 d-flex flex-column justify-content-center">
                    <h5 className="customer-name font-Kanit m-0 fs-large color-252525">Evelyn Bush</h5>
                    <p className="customer-position fs-medium-small m-0">Businessman</p>
                  </div>
                </div>
                <div className="col-md-3 text-end pt-5">
                  <i className="fa-solid fa-quote-right fa-4x color-ff8b34"></i>
                </div>
              </div>
            </div>
            <div className="carousel-item col-md-6">
              <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam.</p>
              <div className="row m-0">
                <div className="col-md-9 ps-0 row m-0">
                  <div className="col-md-2 p-0 d-flex align-items-center">
                    <img src="/images/user-avatar-2.webp" className="w-100 user-avatar" alt="customer-avatar" />
                  </div>
                  <div className="col-md-9 ps-3 d-flex flex-column justify-content-center">
                    <h5 className="customer-name font-Kanit m-0 fs-large color-252525">Carlo Conrad</h5>
                    <p className="customer-position fs-medium-small m-0">Businessman</p>
                  </div>
                </div>
                <div className="col-md-3 text-end pt-5">
                  <i className="fa-solid fa-quote-right fa-4x color-ff8b34"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
