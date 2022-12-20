import React from 'react'
import { Link } from 'react-router-dom';
import { useGetContactQuery } from '../features/contact/ContactApi';

const Contact = () => {
  const contactDetails = useGetContactQuery();

  return (
    <>
      {contactDetails.isError ? (
        <p className='iserror'>Oh no, there was an error</p>
      ) : contactDetails.isLoading ? (
        <p className='isloading'>Loading...</p>
      ) : contactDetails.data ? (
        <>
          {
            contactDetails.data.map(({banner, title, desc, phone, email, address, map}, index) => {
              return (
                <section key={index}>
                  <div className="capristo-banner-area">
                    <img src={banner} alt="Banner" className="img-fluid" />
                  </div>

                  <div className="page-area pt-30 pb-30 bg_dark">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="title text-center">
                            <h3>{title}</h3>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="title">
                            <p>{desc}</p>
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
                                <h3><Link to={`tel:${phone}`}>{phone}</Link></h3>
                              </div>
                            </div>

                            <div className="div_flex">
                              <div className="icon">
                                <img src="assets/img/email.png" alt="" className="img-fluid" />
                              </div>
                              <div className="content">
                                <h3>E-Mail</h3>
                                <h3><Link to={`/mailto:${email}`}>{email}</Link></h3>
                              </div>
                            </div>

                            <div className="div_flex">
                              <div className="icon">
                                <img src="assets/img/map.png" alt="" className="img-fluid" />
                              </div>
                              <div className="content">
                                <h3>Address</h3>
                                <h3>{address}</h3>
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
                            <iframe src={map} width="100%" height="250" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )
            })
          }
        </>
      ) : <>NOT DATA</>}
    </>
  )
}

export default Contact