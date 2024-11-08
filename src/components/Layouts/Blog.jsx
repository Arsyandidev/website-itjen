const Blog = () => {
  return (
    <>
      <div className="blog sp">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <div className="heading1">
                <span
                  className="span"
                  data-aos="zoom-in-left"
                  data-aos-duration="700"
                >
                  <img src="./src/assets/img/icons/span1.png" alt="" /> Blog &
                  Latest News
                </span>
                <h2 className="title tg-element-title">Latest News & Blog</h2>
              </div>
            </div>
          </div>
          <div className="space30"></div>
          <div className="row">
            <div className="col-lg-4">
              <div
                className="blog-box"
                data-aos="zoom-in-up"
                data-aos-duration="1100"
              >
                <div className="image image-anime">
                  <img src="./src/assets/img/blog/blog-img1.png" alt="" />
                </div>
                <div className="heading">
                  <div className="tags">
                    <a href="#">
                      <img src="./src/assets/img/icons/blog-icon1.png" alt="" />
                      John William
                    </a>
                    <a href="#">
                      <img src="./src/assets/img/icons/blog-icon2.png" alt="" />
                      Feb 25, 24
                    </a>
                  </div>
                  <h4>
                    <a href="blog-details.html">
                      Demystifying Blockchain: How It`s Revolutionising
                      Industries.
                    </a>
                  </h4>
                  <a href="blog-details.html" className="learn">
                    Learn More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="blog-box"
                data-aos="zoom-in-up"
                data-aos-duration="900"
              >
                <div className="image image-anime">
                  <img src="./src/assets/img/blog/blog-img2.png" alt="" />
                </div>
                <div className="heading">
                  <div className="tags">
                    <a href="#">
                      <img src="./src/assets/img/icons/blog-icon1.png" alt="" />
                      John William
                    </a>
                    <a href="#">
                      <img src="./src/assets/img/icons/blog-icon2.png" alt="" />
                      Feb 25, 24
                    </a>
                  </div>
                  <h4>
                    <a href="blog-details.html">
                      Cybersecurity Essentials: Protecting Your Business
                    </a>
                  </h4>
                  <a href="blog-details.html" className="learn">
                    Learn More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="blog-box"
                data-aos="zoom-in-up"
                data-aos-duration="700"
              >
                <div className="image image-anime">
                  <img src="./src/assets/img/blog/blog-img3.png" alt="" />
                </div>
                <div className="heading">
                  <div className="tags">
                    <a href="#">
                      <img src="./src/assets/img/icons/blog-icon1.png" alt="" />
                      John William
                    </a>
                    <a href="#">
                      <img src="./src/assets/img/icons/blog-icon2.png" alt="" />
                      Feb 25, 24
                    </a>
                  </div>
                  <h4>
                    <a href="blog-details.html">
                      The Future of Work: Embracing Remote Collaboration Tools
                    </a>
                  </h4>
                  <a href="blog-details.html" className="learn">
                    Learn More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
