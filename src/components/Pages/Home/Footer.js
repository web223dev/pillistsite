import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      {/* <ul> */}
      <div className="row">
        <div className="col-xl-2 col-lg-3 col-md-6 col-12 footer-boxes">
          <div className="footer-box footer-box-1">
            <div className="title">Links</div>
            <div className="discription">2014 Pictures</div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-12 footer-boxes">
          <div className="footer-box footer-box-2">
            <div className="title">Stay Tuned</div>
            <div className="discription">Connect with us and stay in the loop.</div>
            {/* <div className="links"><i className="fa fa-twitter social" aria-hidden="true"></i><i className="fa fa-facebook social" aria-hidden="true"></i></div> */}
            <div className="links">
              <div className="social">
                <i className="fab fa-twitter"></i>
              </div>
              <div className="social">
                <i className="fab fa-facebook-f"></i>
              </div>             
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-12 footer-boxes">
          <div className="footer-box footer-box-3">
            <div className="title">Email Updates</div>
            <div className="discription">Be the first to here about our offers and announcements.</div>
            <div className="links">
              <div className="email-text">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span>email</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-12 footer-boxes">
          <div className="footer-box footer-box-4">
            <div className="title">Contact Us</div>
            <div className="discription">Questions? We have got answers. Try us.</div>
            <div className="links">
              <div className="email-us"><span>Email Us</span></div>
            </div>
          </div>
        </div>
      </div>
      {/* </ul> */}
    </div>
  );
};

export default Footer;