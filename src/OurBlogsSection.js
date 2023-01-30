export default function OurBlogsSection(){
  return <div className="row mx-0 our-blog-section">
  <p className="main-title text-center mb-2">Our Blogs</p>
  <h2 className="main-heading text-center mb-3">Latest Blogs & Articles</h2>
  <p className="text mb-4 pb-3 text-center">
    Stay up-to-date with the latest insights and trends in your industry by <br />
    exploring our collection of blogs and articles
  </p>
  <div className="row m-0">
    <div className="col-md-4" data-aos="fade-up">
      <div className="image-box box1">
        <div className="d-inline-flex button px-4 py-2 fs-semi-small">Technology</div>
      </div>
      <p className="article-title">ABB replaces heavy lifting and improves efficiency</p>
      <p className="description">leading technology company that specializes in automation and robotics, has developed a new solution that replaces heavy lifting ...</p>
      <p className="color-ff8b34 fw-600">
        Read More <i className="fa-solid fa-arrow-right"></i>
      </p>
    </div>
    <div className="col-md-4" data-aos="fade-up" data-aos-offset="160">
      <div className="image-box box2">
        <div className="d-inline-flex button px-4 py-2 fs-semi-small">News</div>
      </div>
      <p className="article-title">Robots Won't Close the Warehouse Worker Gap Anytime Soon</p>
      <p className="description">Robots and automation can certainly help to increase efficiency and productivity in warehouses, but it is unlikely that they ...</p>
      <p className="color-ff8b34 fw-600">
        Read More <i className="fa-solid fa-arrow-right"></i>
      </p>
    </div>
    <div className="col-md-4" data-aos="fade-up" data-aos-offset="200">
      <div className="image-box box3">
        <div className="d-inline-flex button px-4 py-2 fs-semi-small">Industry</div>
      </div>
      <p className="article-title">Farming Drives Toward 'Precision Agriculture' Technologies</p>
      <p className="description">Precision agriculture is a method of farming that uses advanced technologies such as GPS, drones, and sensors to improve crop yields ...</p>
      <p className="color-ff8b34 fw-600">
        Read More <i className="fa-solid fa-arrow-right"></i>
      </p>
    </div>
  </div>
</div>
}