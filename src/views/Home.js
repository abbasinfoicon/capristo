import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import HomeSlider from '../components/templates/HomeSlider';
import ModalVideo from 'react-modal-video'

const Home = () => {
  const params = useParams();
  const [isOpen, setOpen] = useState(false)
  console.log(params)

  useEffect(() => {
    document.body.classList.toggle('modal-open', isOpen);
  }, [isOpen])


  return (
    <>
      <section className="capristo-slider-area fix">
        <HomeSlider />
      </section>
      {/* about-page-area */}
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
                  <Link to='/car-list' className="btn btn-cst">Explore Carbon Design</Link>
                  <Link to='/car-list' className="btn btn-cst">Explore Exhaust Design</Link>
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
                      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="rDE4il6JC4U" onClose={() => setOpen(false)} />

                      <a className="popup-youtube" onClick={() => setOpen(true)}><img src="assets/img/about/video1.jpg" alt="" className="img-fluid" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* excellence-page-area */}
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
      {/* power-page-area */}
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
      {/* facts-page-area */}
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
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="QDhLqbeVpKA" onClose={() => setOpen(false)} />
                    <a className="popup-youtube" onClick={() => setOpen(true)}><img src="assets/img/about/video2.jpg" alt="" className="img-fluid" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* endurance-page-area */}
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
      {/* about_us-area */}
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