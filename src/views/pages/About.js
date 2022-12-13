import React from 'react'
import OwlCarousel from 'react-owl-carousel';

const options = {
  autoplay: true,
  loop: true,
  margin: 30,
  touchDrag: true,
  mouseDrag: true,
  items: 1,
  nav: true,
  dots: false,
  autoplayTimeout: 6000,
  autoplaySpeed: 1200,
  navText: ["<img src='assets/img/left-chevron-black.png' class='left-img' alt='left'/>", "<img src='assets/img/right-chevron-black.png' class='right-img' alt='right'/>"],
  responsive: {
    0: {
      items: 1
    },
    480: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    },
    1200: {
      items: 3
    }
  }
}
const options2 = {
  autoplay: true,
  loop: true,
  margin: 10,
  touchDrag: true,
  mouseDrag: true,
  items: 1,
  nav: true,
  dots: false,
  autoplayTimeout: 7000,
  autoplaySpeed: 1500,
  navText: ["<img src='assets/img/left-chevron.png' class='left-img' alt='left'/>", "<img src='assets/img/right-chevron.png' class='right-img' alt='right'/>"],
  responsive: {
    0: {
      items: 1
    },
    480: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
}

const About = () => {
  return (
    <>
      <section className="about-page-area section_70 bg_gray3 marginTop-110px">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h3>Our Establishment</h3>
                <div className="line"></div>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="about-page-right">
                <div className="imgs">
                  <img src="assets/img/about/about_us_img.png" alt="about page" data-action="zoom" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="about-page-left">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                  the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                  leap into electronic typesetting, remaining essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="out-team-area section_70 bg_gray">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title text-center">
                <h3>Our Team</h3>
                <div className="line"></div>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="team-member">
                <div className="imgs">
                  <img src="assets/img/team/team1.jpg" alt="about page" data-action="zoom" className="img-fluid" />
                </div>
                <p>Antonio Capristo</p>
                <h3>Founder and CEO</h3>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-member">
                <div className="imgs">
                  <img src="assets/img/team/team2.jpg" alt="about page" data-action="zoom" className="img-fluid" />
                </div>
                <p>Ralf Engelhardt</p>
                <h3>CTO</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-design-area ptb-50 bg_gray3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title text-center">
                <h3>Our Designers</h3>
              </div>
            </div>
          </div>
          <OwlCarousel className="team-carousel" {...options}>
            <div className="item">
              <div className="ourTeam_member">
                <div className="img-style">
                  <a href="#"><img src="assets/img/team/img1.png" alt="" className="img-fluid" /></a>
                </div>

                <p>Stefan Krüger</p>
                <h3>Product Designer</h3>
              </div>
            </div>

            <div className="item">
              <div className="ourTeam_member">
                <div className="img-style">
                  <a href="#"><img src="assets/img/team/img1.png" alt="" className="img-fluid" /></a>
                </div>

                <p>Stefan Krüger</p>
                <h3>Product Designer</h3>
              </div>
            </div>

            <div className="item">
              <div className="ourTeam_member">
                <div className="img-style">
                  <a href="#"><img src="assets/img/team/img1.png" alt="" className="img-fluid" /></a>
                </div>

                <p>Stefan Krüger</p>
                <h3>Product Designer</h3>
              </div>
            </div>

            <div className="item">
              <div className="ourTeam_member">
                <div className="img-style">
                  <a href="#"><img src="assets/img/team/img1.png" alt="" className="img-fluid" /></a>
                </div>

                <p>Stefan Krüger</p>
                <h3>Product Designer</h3>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>

      <section className="meet-supplier-area section_70 bg_gray">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h3>Meet our Suppliers</h3>
                <div className="line"></div>
              </div>
            </div>
          </div>

          <OwlCarousel className="client-carousel" {...options2}>
            <div className="item">
              <div className="client_img">
                <div className="img-style">
                  <a href="#"><img src="assets/img/client/1.png" alt="" className="img-fluid" /></a>
                </div>
                <div className="img-style">
                  <a href="#"><img src="assets/img/client/3.png" alt="" className="img-fluid" /></a>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="client_img">
                <div className="img-style">
                  <a href="#"><img src="assets/img/client/2.png" alt="" className="img-fluid" /></a>
                </div>
                <div className="img-style">
                  <a href="#"><img src="assets/img/client/1.png" alt="" className="img-fluid" /></a>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="client_img">
                <div className="img-style">
                  <a href="#"><img src="assets/img/client/3.png" alt="" className="img-fluid" /></a>
                </div>
                <div className="img-style">
                  <a href="#"><img src="assets/img/client/4.png" alt="" className="img-fluid rounded-circle" /></a>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="client_img">
                <div className="img-style">
                  <a href="#"><img src="assets/img/client/4.png" alt="" className="img-fluid" /></a>
                </div>
                <div className="img-style">
                  <a href="#"><img src="assets/img/client/2.png" alt="" className="img-fluid" /></a>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="client_img">
                <div className="img-style">
                  <a href="#"><img src="assets/img/client/2.png" alt="" className="img-fluid" /></a>
                </div>
                <div className="img-style">
                  <a href="#"><img src="assets/img/client/1.png" alt="" className="img-fluid" /></a>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>

      <section className="team-design-area pt-50 bg_gray3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h3>Our Partners</h3>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>


        <div className="banner_img">
          <img src="assets/img/about/banner2.png" alt="" className="img-fluid" />
        </div>
      </section>
    </>
  )
}

export default About