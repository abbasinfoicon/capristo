import React from 'react'
import { Link } from 'react-router-dom'
import ScrollBar from './ScrollBar'

const Footer = () => {
  return (
    <>
      <footer className="capristo-footer-area">
        <div className="footer-top-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="single-footer quick_links">
                  <h3>Site Links</h3>
                  <ul className="quick-links">
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/partner'>Retailer near You</Link></li>
                    <li><Link to='/career'>Careers</Link></li>
                    <li><Link to='/car-list'>Online Store</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="single-footer quick_links">
                  <h3>Contact</h3>
                  <ul className="quick-links">
                    <li><a href="mailto:order@capristo.de">E-mail: order@capristo.de</a></li>
                    <li><a href="tel:+492933922270">Tel.: +49 2933 922270</a></li>
                    <li>Address: Kalmecke 5, <br /> 59846 Sundern</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="single-footer quick_links">
                  <h3>Legal</h3>
                  <ul className="quick-links">
                    <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
                    <li><Link to='/cookie-policy'>Cookie Policy</Link></li>
                    <li><Link to='/impressum'>Impressum</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="single-footer">
                  <div className="footer-address">
                    <h3>Follow us</h3>
                    <ul>
                      <li><a href="https://www.instagram.com/" target='_blank'><i className="fa fa-instagram"></i></a></li>
                      <li><a href="https://www.facebook.com/" target='_blank'><i className="fa fa-facebook-square"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright">
                  <p>Design With <i className="fa fa-heart"></i> from <a href="https://www.infoicontechnologies.com/"
                    target="_blank">Infoicon</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ScrollBar />
    </>
  )
}

export default Footer