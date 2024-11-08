const Footer = () => {
  return (
    <>
      <div className="footer1 _relative bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-footer-items footer-logo-area">
                <div className="footer-logo">
                  <a href="">
                    <img src="./src/assets/img/logo/footer-logo1.png" alt="" />
                  </a>
                </div>
                <div className="space20"></div>
                <div className="heading1">
                  <p>
                    At TechXen IT Solutions, we`re dedicated to delivering
                    innovative technology solutions tailored to meet the unique
                    needs of businesses like yours.
                  </p>
                </div>
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

            <div className="col-lg col-md-6 col-12">
              <div className="single-footer-items">
                <h3>Service We Offer</h3>

                <ul className="menu-list">
                  <li>
                    <a href="#">Cloud Computing Solution</a>
                  </li>
                  <li>
                    <a href="#">Cybersecurity & Compliance</a>
                  </li>
                  <li>
                    <a href="#">Software Development</a>
                  </li>
                  <li>
                    <a href="#">It Consulting & Support</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg col-md-6 col-12">
              <div className="single-footer-items">
                <h3>Useful Links</h3>

                <ul className="menu-list">
                  <li>
                    <a href="#">About Us </a>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">Blog & News</a>
                  </li>
                  <li>
                    <a href="#">Brand assets</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer-items">
                <h3>Contact Us</h3>

                <div className="contact-box">
                  <div className="icon">
                    <img
                      src="./src/assets/img/icons/footer1-icon1.png"
                      alt=""
                    />
                  </div>
                  <div className="pera">
                    <a href="tel:0500222333">0500 222 333</a>
                  </div>
                </div>

                <div className="contact-box">
                  <div className="icon">
                    <img
                      src="./src/assets/img/icons/footer1-icon2.png"
                      alt=""
                    />
                  </div>
                  <div className="pera">
                    <a href="tel:0356588547">03 5658 8547</a>
                  </div>
                </div>

                <div className="contact-box">
                  <div className="icon">
                    <img
                      src="./src/assets/img/icons/footer1-icon3.png"
                      alt=""
                    />
                  </div>
                  <div className="pera">
                    <a href="mailto:admin@techxen.org">admin@techxen.org</a>
                  </div>
                </div>

                <div className="contact-box">
                  <div className="icon">
                    <img
                      src="./src/assets/img/icons/footer1-icon4.png"
                      alt=""
                    />
                  </div>
                  <div className="pera">
                    <a href="mailto:admin@techxen.org">www.techxen.org</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space40"></div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="coppyright">
                  <p>Copyright @2024 TechXen.All Rights Reserved</p>
                </div>
              </div>
              <div className="col-md-7">
                <div className="coppyright right-area">
                  <a href="#">Terms & Conditions</a>
                  <a href="#">Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
