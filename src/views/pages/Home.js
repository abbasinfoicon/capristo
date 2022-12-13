import React, { useState } from 'react'
import OwlCarousel from 'react-owl-carousel';

const options = {
  animateOut: 'fadeOutLeft',
  animateIn: 'fadeIn',
  items: 2,
  nav: true,
  dots: false,
  autoplayTimeout: 9000,
  autoplaySpeed: 5000,
  autoplay: true,
  loop: true,
  navText: ["<img src='assets/img/prev-1.png'>", "<img src='assets/img/next-1.png'>"],
  mouseDrag: true,
  touchDrag: true,
  responsive: {
    0: {
      items: 1
    },
    480: {
      items: 1
    },
    600: {
      items: 1
    },
    750: {
      items: 1
    },
    1000: {
      items: 1
    },
    1200: {
      items: 1
    }
  }
}

const Home = () => {
  return (
    <>
      <section className="capristo-slider-area fix">
        <OwlCarousel className="capristo-slide" {...options}>
          <div className="capristo-main-slide" style={{ backgroundImage: 'url(assets/img/slider/slider1.jpg)' }}>
            <div className="capristo-main-caption">
              <div className="capristo-caption-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10">
                      <div className="slider-text">
                        <h2>Ferrari Roma <br />Capristo carbon fiber parts</h2>
                        <p>Elegance in Motion...</p>
                        <div className="line"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="capristo-main-slide" style={{ backgroundImage: 'url(assets/img/slider/slider2.jpg)' }}>
            <div className="capristo-main-caption">
              <div className="capristo-caption-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10">
                      <div className="slider-text">
                        <h2>Ferrari Roma <br />Capristo carbon fiber parts</h2>
                        <p>Elegance in Motion...</p>
                        <div className="line"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </section>

      <section className="about-page-area section_70 bg_gray">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h3>Design</h3>
                <div className="line"></div>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-page-left">
                <p>What is Lorem Ipsum? </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deleniti repudiandae modi minima
                  perspiciatis eos soluta. Commodi ullam optio consectetur, id accusamus, eum ad iure numquam
                  doloribus ipsum, accusantium provident? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat deleniti repudiandae modi minima
                  perspiciatis eos soluta. Commodi ullam optio consectetur, id accusamus, eum ad iure numquam
                  doloribus ipsum, accusantium provident?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deleniti repudiandae modi minima
                  perspiciatis eos soluta. Commodi ullam optio consectetur, id accusamus, eum ad iure numquam
                  doloribus ipsum, accusantium provident? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat deleniti repudiandae modi minima
                  perspiciatis eos soluta. Commodi ullam optio consectetur, id accusamus, eum ad iure numquam
                  doloribus ipsum, accusantium provident?</p>

                <div className="btn-block mt-5">
                  <a href="#" className="btn btn-cst">Explore Carbon Design</a>
                  <a href="#" className="btn btn-cst">Explore Exhaust Design</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-page-right">
                <div className="row">
                  <div className="col-md-6 pr-custom">
                    <div className="imgs">
                      <img src="assets/img/about/img1.jpg" alt="about page" data-action="zoom" className="img-fluid" />
                    </div>
                  </div>

                  <div className="col-md-6 pl-custom">
                    <div className="imgs">
                      <img src="assets/img/about/img2.jpg" alt="about page" data-action="zoom" className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="video_wrapper video_wrapper_full js-videoWrapper">
                      <a className="popup-youtube" href="https://www.youtube.com/watch?v=rDE4il6JC4U">
                        <img src="assets/img/about/video1.jpg" alt="" className="img-fluid" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="excellence-page-area section_70 bg_white">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h3>Excellence</h3>
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-page-left">
                <p>What is Lorem Ipsum? </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deleniti repudiandae modi minima
                  perspiciatis eos soluta. Commodi ullam optio consectetur, id accusamus, eum ad iure numquam
                  doloribus ipsum, accusantium provident? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat deleniti repudiandae modi minima
                  perspiciatis eos soluta. Commodi ullam optio consectetur, id accusamus, eum ad iure numquam
                  doloribus ipsum, accusantium provident?</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-page-right">
                <div className="imgs">
                  <img src="assets/img/about/img5.jpg" alt="about page" data-action="zoom" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="power-page-area section_70 bg_gray">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h3>Power and Sound</h3>
                <div className="line"></div>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-page-left">
                <p>What is Lorem Ipsum? </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deleniti repudiandae modi minima
                  perspiciatis eos soluta. Commodi ullam optio consectetur, id accusamus, eum ad iure numquam
                  doloribus ipsum, accusantium provident? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat deleniti repudiandae modi minima
                  perspiciatis eos soluta. Commodi ullam optio consectetur, id accusamus, eum ad iure numquam
                  doloribus ipsum, accusantium provident? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat deleniti repudiandae modi minima
                  perspiciatis eos soluta. Commodi ullam optio consectetur, id accusamus, eum ad iure numquam
                  doloribus ipsum.</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-page-right">
                <div className="row">
                  <div className="col-md-6 pr-custom">
                    <div className="imgs">
                      <img src="assets/img/about/img6.jpg" alt="about page" data-action="zoom" className="img-fluid" />
                    </div>
                  </div>

                  <div className="col-md-6 pl-custom">
                    <div className="imgs">
                      <img src="assets/img/about/img7.jpg" alt="about page" data-action="zoom" className="img-fluid" />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div style={{ width: '50px', height: '50px' }}></div>
                    <div className="audio-player">
                      <div className="timeline">
                        <div className="progress"></div>
                      </div>
                      <div className="controls">
                        <div className="play-container">
                          <div className="toggle-play play">
                          </div>
                        </div>
                        <div className="volume-container">
                          <div className="volume-button">
                            <div className="volume icono-volumeMedium"></div>
                          </div>

                          <div className="volume-slider">
                            <div className="volume-percentage"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="facts-page-area section_70 bg_white">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h3>Facts and Figures</h3>
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="about-page-left">
                <div className="table-responsive">
                  <table className="table custom-table">
                    <thead>
                      <tr>
                        <th>Car Model</th>
                        <th>Original Exhaust</th>
                        <th>Capristo Exhast</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Ferrari 355</td>
                        <td>
                          <p className="r_price">508,9 PS</p>
                        </td>
                        <td>
                          <p className="g_price">516,7 PS</p>
                        </td>
                        <td><a href="#">Explore More</a></td>
                      </tr>
                      <tr>
                        <td>Porsche 992 GT2</td>
                        <td>
                          <p className="r_price">508,9 PS</p>
                        </td>
                        <td>
                          <p className="g_price">516,7 PS</p>
                        </td>
                        <td><a href="#">Explore More</a></td>
                      </tr>
                      <tr>
                        <td>Audi RS6 C8</td>
                        <td>
                          <p className="r_price">508,9 PS</p>
                        </td>
                        <td>
                          <p className="g_price">516,7 PS</p>
                        </td>
                        <td><a href="#">Explore More</a></td>
                      </tr>
                      <tr>
                        <td>Ferrari Testarossa</td>
                        <td>
                          <p className="r_price">508,9 PS</p>
                        </td>
                        <td>
                          <p className="g_price">516,7 PS</p>
                        </td>
                        <td><a href="#">Explore More</a></td>
                      </tr>
                      <tr>
                        <td>Ferrari SF90</td>
                        <td>
                          <p className="r_price">508,9 PS</p>
                        </td>
                        <td>
                          <p className="g_price">516,7 PS</p>
                        </td>
                        <td><a href="#">Explore More</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <a href="#" className="load-more text-center">Load More...</a>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="about-page-right">
                <div className="video_wrapper video_wrapper_full js-videoWrapper">
                  <div className="video_wrapper video_wrapper_full js-videoWrapper">
                    <a className="popup-youtube" href="https://www.youtube.com/watch?v=rDE4il6JC4U">
                      <img src="assets/img/about/video2.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="endurance-page-area section_70 bg_gray">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h3>Endurance</h3>
                <div className="line"></div>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-page-left">
                <p>What is Lorem Ipsum? </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deleniti repudiandae modi minima
                  perspiciatis eos soluta. Commodi ullam optio consectetur, id accusamus, eum ad iure numquam
                  doloribus ipsum, accusantium provident? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat deleniti repudiandae modi minima
                  perspiciatis eos soluta. Commodi ullam optio consectetur, id accusamus, eum ad iure numquam
                  doloribus ipsum, accusantium provident? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat deleniti repudiandae modi minima
                  perspiciatis eos soluta. Commodi ullam optio consectetur, id accusamus, eum ad iure numquam
                  doloribus ipsum, accusantium provident.</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-page-right">
                <div className="row">
                  <div className="col-md-6 pr-custom">
                    <div className="imgs">
                      <img src="assets/img/about/img3.jpg" alt="about page" data-action="zoom" className="img-fluid" />
                    </div>
                  </div>

                  <div className="col-md-6 pl-custom">
                    <div className="imgs">
                      <img src="assets/img/about/img4.jpg" alt="about page" data-action="zoom" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_us-area section_70 bg_white">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h3>About us</h3>
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-page-left">
                <p>Mission and Vission</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                  the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-page-right">
                <div className="imgs">
                  <img src="assets/img/about/faces-emplyees.jpg" alt="about page" data-action="zoom"
                    className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home