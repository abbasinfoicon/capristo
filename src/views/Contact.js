import React from 'react'

const Contact = () => {
  return (
    <>
      <section className="capristo-banner-area">
        <img src="assets/img/about/banner1.png" alt="Banner" className="img-fluid" />
      </section>
      <section className="page-area pt-30 pb-30 bg_dark">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title text-center">
                <h3>Contact Us</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="contact_us">
                <h3>Get in Touch</h3>

                <div className="div_flex">
                  <div className="icon">
                    <img src="assets/img/phone.png" alt="" className="img-fluid" />
                  </div>
                  <div className="content">
                    <h3>Call us</h3>
                    <h3><a href="tel:02933">02933</a></h3>
                  </div>
                </div>

                <div className="div_flex">
                  <div className="icon">
                    <img src="assets/img/email.png" alt="" className="img-fluid" />
                  </div>
                  <div className="content">
                    <h3>E-Mail</h3>
                    <h3><a href="mailto:info@capristo.de">info@capristo.de</a></h3>
                  </div>
                </div>

                <div className="div_flex">
                  <div className="icon">
                    <img src="assets/img/map.png" alt="" className="img-fluid" />
                  </div>
                  <div className="content">
                    <h3>Address</h3>
                    <h3>Kalmecke 5, 59846 Sundern</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form">
                <form action="">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="" id="" className="form-control" placeholder="Name" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" name="" id="" className="form-control" placeholder="Email Address" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="tel" name="" id="" className="form-control" placeholder="Phone" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <select name="" id="" className="form-control">
                          <option value="">Related Subject</option>
                          <option value="">Related Subject</option>
                          <option value="">Related Subject</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <textarea name="" id="" cols="30" rows="10" className="form-control" placeholder="Message..."></textarea>
                  </div>

                  <div className="btn-block mt-5">
                    <a href="#" className="btn btn-cst">Send Message</a>
                    <a href="#" className="attach-file"><img src="assets/img/attach.png" alt="" className="img-fluid" /> Attach File</a>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-12">
              <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.0604119470245!2d7.993670215920574!3d51.34679973025358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b95ec1e67b63b3%3A0x9d5d2c1a3f73b0f0!2sCapristo%20Automotive%20GmbH!5e0!3m2!1sen!2sin!4v1670580951348!5m2!1sen!2sin" width="100%" height="250" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact