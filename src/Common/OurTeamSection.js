export default function OurTeamSection() {
  return (
    <div className="our-team pt-0">
      <p className="main-title">Our Team</p>
      <h2 className="main-heading mb-3">The Professional Team</h2>
      <p className="px-26 color-878787">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      <div className="row m-0 team-wrapper">
        <div className="col-md-4 pb-5 px-3">
          <div className="item" style={{ backgroundImage: "url('/images/team-member-1.jpg')" }}>
            <div className="social-wrapper">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div className="details-wrapper">
              <h5 className="font-Kanit fs-semi-large">Archer Barlow</h5>
              <p className="mb-0">Sales Manager</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 pb-5 px-3">
          <div className="item" style={{ backgroundImage: "url('/images/team-member-2.jpg')" }}>
            <div className="social-wrapper">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div className="details-wrapper">
              <h5 className="font-Kanit fs-semi-large">Archer Barlow</h5>
              <p className="mb-0">Sales Manager</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 pb-5 px-3">
          <div className="item" style={{ backgroundImage: "url('/images/team-member-3.jpg')" }}>
            <div className="social-wrapper">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div className="details-wrapper">
              <h5 className="font-Kanit fs-semi-large">Archer Barlow</h5>
              <p className="mb-0">Sales Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
