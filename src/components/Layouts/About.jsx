const About = () => {
  return (
    <div className="">
      <div className="about1 sp">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <div className="image1 reveal">
                  <img src="./src/assets/img/about/about1-img1.png" alt="" />
                </div>
                <div className="image2 reveal image-anime">
                  <img src="./src/assets/img/about/about1-img2.png" alt="" />
                </div>
                <div className="icon-box">
                  <img
                    src="./src/assets/img/icons/about1-shape-icon.png"
                    alt=""
                  />
                  <h4>24/7 Support</h4>
                  <p>TechXen Technology & It Solution</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="heading1">
                <span
                  className="span"
                  data-aos="zoom-in-left"
                  data-aos-duration="700"
                >
                  <img src="./src/assets/img/icons/span1.png" alt="" /> About
                  Our Company
                </span>
                <h2 className="title tg-element-title">
                  Discover Our Story Empowering Business Through Innovation
                </h2>
                <div className="space16"></div>
                <p data-aos="fade-left" data-aos-duration="800">
                  TechXen pioneering force in the realm of technology and IT
                  solutions, dedicated to revolutionising the way businesses
                  thrive in the digital age. Our approach is rooted in
                  collaboration, transparency, and a relentless pursuit of
                  excellence. We believe that by staying ahead of the curve and
                  embracing change, we can help our clients stay ahead of
                  competition.
                </p>

                <ul
                  className="list"
                  data-aos="fade-left"
                  data-aos-duration="1100"
                >
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>{" "}
                    Dramatically re-engineer value added IT system.
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>{" "}
                    Highlight any unique selling points or differentiators.
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>{" "}
                    Incorporate visuals such as team photos shots.
                  </li>
                </ul>
                <div className="space30"></div>
                <div className="" data-aos="fade-left" data-aos-duration="900">
                  <a className="theme-btn1" href="about.html">
                    Discover More
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
    </div>
  );
};

export default About;
