import React from 'react'
import OwlCarousel from 'react-owl-carousel';

const options = {
    items: 1,
    nav: true,
    dots: false,
    autoplay: false,
    loop: false,
    navText: ["<img src='assets/img/prev-1.png'>", "<img src='assets/img/next-1.png'>"],
    mouseDrag: false,
    touchDrag: false
}

const ModelsCarbon = () => {
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
                                            <div className="video_wrapper video_wrapper_full js-videoWrapper">
                                                <a className="popup-youtube" href="https://www.youtube.com/watch?v=rDE4il6JC4U"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </section>

            <div className="car_tabs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="tab">
                                <li><a href="#front">Front Parts</a></li>
                                <li><a href="#side">Side Parts</a></li>
                                <li><a href="#rear">Rear Parts</a></li>
                                <li><a href="#additional">Additional Parts</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <section className="car-parts bg_gray" id="front">
                <div className="bg_gray_title">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title">
                                    <h3>Front Parts</h3>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="parts_sec">
                                <div className="car_img">
                                    <img src="assets/img/cars/part1.png" alt="" className="img-fluid" />
                                </div>

                                <div className="car_dtl">
                                    <div className="title-cart">
                                        <div className="name">
                                            <h3>Motorraum Front- und Seitenverkleidungen</h3>
                                            <p>Art. Nr. (Gloss varnished) 02FE22550327</p>
                                            <p>Art. Nr. (Matt laquired) 02FE22550327</p>
                                        </div>

                                        <div className="cart">
                                            <i className="fa fa-shopping-cart"></i>
                                            <p>3.250,00 $</p>
                                        </div>
                                    </div>

                                    <p>ECE Approval: <a href="#">Yes</a></p>
                                </div>
                            </div>

                            <div className="parts_sec">
                                <div className="car_img">
                                    <img src="assets/img/cars/part2.png" alt="" className="img-fluid" />
                                </div>

                                <div className="car_dtl">
                                    <div className="title-cart">
                                        <div className="name">
                                            <h3>Motorraum Front- und Seitenverkleidungen</h3>
                                            <p>Art. Nr. (Gloss varnished) 02FE22550327</p>
                                            <p>Art. Nr. (Matt laquired) 02FE22550327</p>
                                        </div>

                                        <div className="cart">
                                            <i className="fa fa-shopping-cart"></i>
                                            <p>3.250,00 $</p>
                                        </div>
                                    </div>

                                    <p>ECE Approval: <a href="#">Yes</a></p>
                                </div>
                            </div>

                            <div className="parts_sec">
                                <div className="car_img">
                                    <img src="assets/img/cars/part3.png" alt="" className="img-fluid" />
                                </div>

                                <div className="car_dtl">
                                    <div className="title-cart">
                                        <div className="name">
                                            <h3>Motorraum Front- und Seitenverkleidungen</h3>
                                            <p>Art. Nr. (Gloss varnished) 02FE22550327</p>
                                            <p>Art. Nr. (Matt laquired) 02FE22550327</p>
                                        </div>

                                        <div className="cart">
                                            <i className="fa fa-shopping-cart"></i>
                                            <p>3.250,00 $</p>
                                        </div>
                                    </div>

                                    <p>ECE Approval: <a href="#">Yes</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="car-parts bg_gray" id="side">
                <div className="bg_gray_title">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title">
                                    <h3>Side Parts</h3>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="parts_sec">
                                <div className="car_img">
                                    <img src="assets/img/cars/part1.png" alt="" className="img-fluid" />
                                </div>

                                <div className="car_dtl">
                                    <div className="title-cart">
                                        <div className="name">
                                            <h3>Motorraum Front- und Seitenverkleidungen</h3>
                                            <p>Art. Nr. (Gloss varnished) 02FE22550327</p>
                                            <p>Art. Nr. (Matt laquired) 02FE22550327</p>
                                        </div>

                                        <div className="cart">
                                            <i className="fa fa-shopping-cart"></i>
                                            <p>3.250,00 $</p>
                                        </div>
                                    </div>

                                    <p>ECE Approval: <a href="#">Yes</a></p>
                                </div>
                            </div>

                            <div className="parts_sec">
                                <div className="car_img">
                                    <img src="assets/img/cars/part2.png" alt="" className="img-fluid" />
                                </div>

                                <div className="car_dtl">
                                    <div className="title-cart">
                                        <div className="name">
                                            <h3>Motorraum Front- und Seitenverkleidungen</h3>
                                            <p>Art. Nr. (Gloss varnished) 02FE22550327</p>
                                            <p>Art. Nr. (Matt laquired) 02FE22550327</p>
                                        </div>

                                        <div className="cart">
                                            <i className="fa fa-shopping-cart"></i>
                                            <p>3.250,00 $</p>
                                        </div>
                                    </div>

                                    <p>ECE Approval: <a href="#">Yes</a></p>
                                </div>
                            </div>

                            <div className="parts_sec">
                                <div className="car_img">
                                    <img src="assets/img/cars/part3.png" alt="" className="img-fluid" />
                                </div>

                                <div className="car_dtl">
                                    <div className="title-cart">
                                        <div className="name">
                                            <h3>Motorraum Front- und Seitenverkleidungen</h3>
                                            <p>Art. Nr. (Gloss varnished) 02FE22550327</p>
                                            <p>Art. Nr. (Matt laquired) 02FE22550327</p>
                                        </div>

                                        <div className="cart">
                                            <i className="fa fa-shopping-cart"></i>
                                            <p>3.250,00 $</p>
                                        </div>
                                    </div>

                                    <p>ECE Approval: <a href="#">Yes</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="car-parts bg_gray" id="rear">
                <div className="bg_gray_title">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title">
                                    <h3>Rear Parts</h3>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="parts_sec">
                                <div className="car_img">
                                    <img src="assets/img/cars/part1.png" alt="" className="img-fluid" />
                                </div>

                                <div className="car_dtl">
                                    <div className="title-cart">
                                        <div className="name">
                                            <h3>Motorraum Front- und Seitenverkleidungen</h3>
                                            <p>Art. Nr. (Gloss varnished) 02FE22550327</p>
                                            <p>Art. Nr. (Matt laquired) 02FE22550327</p>
                                        </div>

                                        <div className="cart">
                                            <i className="fa fa-shopping-cart"></i>
                                            <p>3.250,00 $</p>
                                        </div>
                                    </div>

                                    <p>ECE Approval: <a href="#">Yes</a></p>
                                </div>
                            </div>

                            <div className="parts_sec">
                                <div className="car_img">
                                    <img src="assets/img/cars/part2.png" alt="" className="img-fluid" />
                                </div>

                                <div className="car_dtl">
                                    <div className="title-cart">
                                        <div className="name">
                                            <h3>Motorraum Front- und Seitenverkleidungen</h3>
                                            <p>Art. Nr. (Gloss varnished) 02FE22550327</p>
                                            <p>Art. Nr. (Matt laquired) 02FE22550327</p>
                                        </div>

                                        <div className="cart">
                                            <i className="fa fa-shopping-cart"></i>
                                            <p>3.250,00 $</p>
                                        </div>
                                    </div>

                                    <p>ECE Approval: <a href="#">Yes</a></p>
                                </div>
                            </div>

                            <div className="parts_sec">
                                <div className="car_img">
                                    <img src="assets/img/cars/part3.png" alt="" className="img-fluid" />
                                </div>

                                <div className="car_dtl">
                                    <div className="title-cart">
                                        <div className="name">
                                            <h3>Motorraum Front- und Seitenverkleidungen</h3>
                                            <p>Art. Nr. (Gloss varnished) 02FE22550327</p>
                                            <p>Art. Nr. (Matt laquired) 02FE22550327</p>
                                        </div>

                                        <div className="cart">
                                            <i className="fa fa-shopping-cart"></i>
                                            <p>3.250,00 $</p>
                                        </div>
                                    </div>

                                    <p>ECE Approval: <a href="#">Yes</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="car-parts bg_gray" id="additional">
                <div className="bg_gray_title">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title">
                                    <h3>Additional Parts</h3>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="parts_sec">
                                <div className="car_img">
                                    <img src="assets/img/cars/part1.png" alt="" className="img-fluid" />
                                </div>

                                <div className="car_dtl">
                                    <div className="title-cart">
                                        <div className="name">
                                            <h3>Motorraum Front- und Seitenverkleidungen</h3>
                                            <p>Art. Nr. (Gloss varnished) 02FE22550327</p>
                                            <p>Art. Nr. (Matt laquired) 02FE22550327</p>
                                        </div>

                                        <div className="cart">
                                            <i className="fa fa-shopping-cart"></i>
                                            <p>3.250,00 $</p>
                                        </div>
                                    </div>

                                    <p>ECE Approval: <a href="#">Yes</a></p>
                                </div>
                            </div>

                            <div className="parts_sec">
                                <div className="car_img">
                                    <img src="assets/img/cars/part2.png" alt="" className="img-fluid" />
                                </div>

                                <div className="car_dtl">
                                    <div className="title-cart">
                                        <div className="name">
                                            <h3>Motorraum Front- und Seitenverkleidungen</h3>
                                            <p>Art. Nr. (Gloss varnished) 02FE22550327</p>
                                            <p>Art. Nr. (Matt laquired) 02FE22550327</p>
                                        </div>

                                        <div className="cart">
                                            <i className="fa fa-shopping-cart"></i>
                                            <p>3.250,00 $</p>
                                        </div>
                                    </div>

                                    <p>ECE Approval: <a href="#">Yes</a></p>
                                </div>
                            </div>

                            <div className="parts_sec">
                                <div className="car_img">
                                    <img src="assets/img/cars/part3.png" alt="" className="img-fluid" />
                                </div>

                                <div className="car_dtl">
                                    <div className="title-cart">
                                        <div className="name">
                                            <h3>Motorraum Front- und Seitenverkleidungen</h3>
                                            <p>Art. Nr. (Gloss varnished) 02FE22550327</p>
                                            <p>Art. Nr. (Matt laquired) 02FE22550327</p>
                                        </div>

                                        <div className="cart">
                                            <i className="fa fa-shopping-cart"></i>
                                            <p>3.250,00 $</p>
                                        </div>
                                    </div>

                                    <p>ECE Approval: <a href="#">Yes</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ModelsCarbon