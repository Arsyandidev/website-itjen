import { Link } from "react-router-dom";
import Button from "../Elements/Button";

const Navbar = () => {
  return (
    <>
      <header>
        <div
          className="header-area header-area1 header-area-all d-none d-lg-block"
          id="header"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-elements">
                  <div className="site-logo">
                    <a href="index.html">
                      <img
                        src="https://web.komdigi.go.id/resource/dXBsb2Fkcy8yMDI0LzEwLzIyLzNhYjdiYTA2LWEwODktNGJmMC1hODA5LWNhM2VhNjBmNmU2MS5wbmc="
                        width={75}
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="main-menu-ex main-menu-ex1">
                    <ul>
                      <li className="mx-4">
                        <Link to="/" className="active">
                          Beranda
                        </Link>
                      </li>
                      <li className="mx-4">
                        <Link to="/profil">Profil</Link>
                      </li>
                      <li>
                        <a href="#">Layanan Publik</a>
                      </li>
                      <li>
                        <a href="#">Publikasi</a>
                      </li>
                      <li>
                        <a href="#">Tautan</a>
                      </li>
                    </ul>
                  </div>

                  <div className="header1-buttons">
                    <div className="contact-btn">
                      <div className="icon">
                        <img
                          src="./src/assets/img/icons/header1-icon.png"
                          alt=""
                        />
                      </div>
                      <div className="headding">
                        <p>Make a Call</p>
                        <a href="tel:124(555)6565">124 (555) 6565</a>
                      </div>
                    </div>
                    <Button style="1">Hubungi Kami</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-header d-block d-lg-none">
        <div className="container-fluid">
          <div className="col-12">
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <a href="index1.html">
                  <img src="./src/assets/img/logo/header-logo1.png" alt="" />
                </a>
              </div>
              <div className="mobile-nav-icon">
                <i className="fa-duotone fa-bars-staggered"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-sidebar d-block d-lg-none">
        <div className="logo-m">
          <a href="index.html">
            <img src="./src/assets/img/logo/header3-logo.png" alt="" />
          </a>
        </div>
        <div className="menu-close">
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="mobile-nav">
          <ul>
            <li className="has-dropdown">
              <a href="#">Home </a>
              <ul className="sub-menu">
                <li className="has-dropdown has-dropdown1">
                  <a href="#">Multipage</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="index.html">Home 1</a>
                    </li>
                    <li>
                      <a href="index2.html">Home 2</a>
                    </li>
                    <li>
                      <a href="index3.html">Home 3</a>
                    </li>
                    <li>
                      <a href="index4.html">Home 4</a>
                    </li>
                    <li>
                      <a href="index5.html">Home 5</a>
                    </li>
                    <li>
                      <a href="index6.html">Home 6</a>
                    </li>
                    <li>
                      <a href="index7.html">Home 7</a>
                    </li>
                    <li>
                      <a href="index8.html">Home 8</a>
                    </li>
                    <li>
                      <a href="index9.html">Home 9</a>
                    </li>
                    <li>
                      <a href="index10.html">Home 10</a>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown has-dropdown1">
                  <a href="#">Landing Page</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="single-index1.html">Home 1</a>
                    </li>
                    <li>
                      <a href="single-index2.html">Home 2</a>
                    </li>
                    <li>
                      <a href="single-index3.html">Home 3</a>
                    </li>
                    <li>
                      <a href="single-index4.html">Home 4 </a>
                    </li>
                    <li>
                      <a href="single-index5.html">Home 5 </a>
                    </li>
                    <li>
                      <a href="single-index6.html">Home 6 </a>
                    </li>
                    <li>
                      <a href="single-index7.html">Home 7 </a>
                    </li>
                    <li>
                      <a href="single-index8.html">Home 8 </a>
                    </li>
                    <li>
                      <a href="single-index9.html">Home 9 </a>
                    </li>
                    <li>
                      <a href="single-index10.html">Home 10 </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="about.html">About Us</a>
            </li>
            <li className="has-dropdown">
              <a href="#">Service</a>
              <ul className="sub-menu">
                <li>
                  <a href="service.html">Service</a>
                </li>
                <li>
                  <a href="service-details-left.html">Service Left</a>
                </li>
                <li>
                  <a href="service-details-right.html">Service Right</a>
                </li>
                <li>
                  <a href="service-details.html">Service Details</a>
                </li>
              </ul>
            </li>

            <li className="has-dropdown">
              <a href="#">Pages</a>
              <ul className="sub-menu">
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                <li>
                  <a href="team.html">Team</a>
                </li>
                <li>
                  <a href="testimonial.html">Testimonial</a>
                </li>
                <li>
                  <a href="error.html">404</a>
                </li>
              </ul>
            </li>

            <li className="has-dropdown">
              <a href="#">Blog</a>
              <ul className="sub-menu">
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="blog-sidebar.html">Blog Sidebar</a>
                </li>
                <li>
                  <a href="blog-details-left.html">Details Left</a>
                </li>
                <li>
                  <a href="blog-details-right.html">Details Right</a>
                </li>
                <li>
                  <a href="blog-details.html">Blog Details</a>
                </li>
              </ul>
            </li>

            <li className="has-dropdown">
              <a href="#">Project</a>
              <ul className="sub-menu">
                <li>
                  <a href="project.html">Project</a>
                </li>
                <li>
                  <a href="project-details-left.html">Project Left</a>
                </li>
                <li>
                  <a href="project-details-right.html">Project Right</a>
                </li>
                <li>
                  <a href="project-details.html">Project Details</a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="mobile-button">
            <a className="menu-btn2" href="service.html">
              Learn More{" "}
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </a>
          </div>

          <div className="single-footer-items">
            <h3>Contact Us</h3>

            <div className="contact-box">
              <div className="icon">
                <img src="./src/assets/img/icons/footer1-icon1.png" alt="" />
              </div>
              <div className="pera">
                <a href="tel:0500222333">0500 222 333</a>
              </div>
            </div>

            <div className="contact-box">
              <div className="icon">
                <img src="./src/assets/img/icons/footer1-icon2.png" alt="" />
              </div>
              <div className="pera">
                <a href="tel:0356588547">03 5658 8547</a>
              </div>
            </div>

            <div className="contact-box">
              <div className="icon">
                <img src="./src/assets/img/icons/footer1-icon3.png" alt="" />
              </div>
              <div className="pera">
                <a href="mailto:admin@techxen.org">admin@techxen.org</a>
              </div>
            </div>

            <div className="contact-box">
              <div className="icon">
                <img src="./src/assets/img/icons/footer1-icon4.png" alt="" />
              </div>
              <div className="pera">
                <a href="mailto:admin@techxen.org">www.techxen.org</a>
              </div>
            </div>
          </div>

          <div className="contact-infos">
            <h3>Our Location</h3>
            <ul className="social-icon">
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
