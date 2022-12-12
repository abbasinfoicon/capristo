import React from 'react'
import { Link } from 'react-router-dom'

const Career = () => {
  return (
    <section className="page-area pt-30 pb-30 bg_gray2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
              <h3>Become Part of our Team</h3>
              <div className="line center"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="title_small">
              <h4>Current Opening</h4>
            </div>
          </div>

          <div className="col-md-6">
            <div className="jop_des">
              <Link to='/'>
                <div className="icon">
                  <img src="assets/img/places.png" alt="MapMarker" className="img-fluid" />
                </div>
                <div className="des">
                  <h3>Jop Possition Name</h3>
                  <p>Kalmecke 5, 59845 Sundern</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="jop_des">
              <Link to='/'>
                <div className="icon">
                  <img src="assets/img/places.png" alt="MapMarker" className="img-fluid" />
                </div>
                <div className="des">
                  <h3>Jop Possition Name</h3>
                  <p>Kalmecke 5, 59845 Sundern</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="jop_des">
              <Link to='/'>
                <div className="icon">
                  <img src="assets/img/places.png" alt="MapMarker" className="img-fluid" />
                </div>
                <div className="des">
                  <h3>Jop Possition Name</h3>
                  <p>Kalmecke 5, 59845 Sundern</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="jop_des">
              <Link to='/'>
                <div className="icon">
                  <img src="assets/img/places.png" alt="MapMarker" className="img-fluid" />
                </div>
                <div className="des">
                  <h3>Jop Possition Name</h3>
                  <p>Kalmecke 5, 59845 Sundern</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="btn-block text-center">
            <Link to='/' className="btn btn-cst">Apply Now</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Career