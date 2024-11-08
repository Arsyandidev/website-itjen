import About from "../components/Layouts/About";
import Blog from "../components/Layouts/Blog";
import Footer from "../components/Layouts/Footer";
import Hero from "../components/Layouts/Hero";
import HeroBottom from "../components/Layouts/HeroBottom";
import Navbar from "../components/Layouts/Navbar";
import Projects from "../components/Layouts/Projects";
import Service from "../components/Layouts/Service";

const Beranda = () => {
  return (
    <>
      <Navbar />
      <Hero
        style={{
          backgroundImage: `url('./src/assets/img/bg/hero1-bg.png')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="main-headding">
                <span
                  className="span"
                  data-aos="zoom-in-left"
                  data-aos-duration="700"
                >
                  <img src="./src/assets/img/icons/span1.png" alt="" /> TechXen
                  Technology & It Solution
                </span>
                <h1 className="title tg-element-title">
                  Transform Your Business With Next Generation
                  <span className="after">IT Solutions</span>
                </h1>
                <div className="space16"></div>
                <p>
                  Welcome to TechXen where we specialise in delivering tailored
                  technology and IT solutions designed to propel your business
                  forward. From streamlining operations to and driving growth.
                </p>

                <div className="space30"></div>
                <div className="buttons">
                  <a className="theme-btn1" href="contact.html">
                    Get Started Now
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                  <a
                    className="play-btn"
                    href="https://www.youtube.com/watch?v=kcfs1-ryKWE"
                  >
                    <span>
                      <i className="fa-regular fa-play"></i>
                    </span>{" "}
                    Watch Demo Video
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="hero1-all-images">
                <div className="image1">
                  <img src="./src/assets/img/hero/hero1-image1.png" alt="" />
                </div>
                <div className="image2 reveal">
                  <img src="./src/assets/img/hero/hero1-image2.png" alt="" />
                </div>
                <div className="image3 shape-animaiton3">
                  <img src="./src/assets/img/hero/hero1-image3.png" alt="" />
                </div>
                <div className="image4 shape-animaiton3">
                  <img src="./src/assets/img/hero/hero1-image4.png" alt="" />
                </div>
                <div className="shape1">
                  <img
                    src="./src/assets/img/shapes/header1-shape1.png"
                    alt=""
                  />
                </div>
                <div className="shape2">
                  <img
                    src="./src/assets/img/shapes/header1-shape2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hero>
      <HeroBottom />
      <About />
      <Service />
      <Projects />
      <Blog />
      <Footer />
    </>
  );
};

export default Beranda;
