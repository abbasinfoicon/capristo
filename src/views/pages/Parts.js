import React from 'react'
import { Link } from 'react-router-dom'
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
            items: 3
        }
    }
}
const options2 = {
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
            items: 4
        },
        1200: {
            items: 4
        }
    }
}

const Parts = () => {
    return (
        <>
            <section className="access-parts-area ptb-50 bg_gray marginTop-110px">
                <div className="container-fluid">
                    <OwlCarousel className="product-listing" {...options}>
                        <div className="item">
                            <div className="car-img-name text-center">
                                <div className="img-style img_height250">
                                    <Link to='/model-parts'><img
                                        src="assets/img/product/img8.png" alt="" className="img-fluid" /></Link>
                                </div>

                                <h3><Link to='/model-parts'>Endschalldämpfer</Link>
                                </h3>
                            </div>
                        </div>

                        <div className="item">
                            <div className="car-img-name text-center">
                                <div className="img-style img_height250">
                                    <Link to='/model-parts'><img
                                        src="assets/img/product/img9.png" alt="" className="img-fluid" /></Link>
                                </div>

                                <h3><Link to='/model-parts'>Downpipes</Link>
                                </h3>
                            </div>
                        </div>

                        <div className="item">
                            <div className="car-img-name text-center">
                                <div className="img-style img_height250">
                                    <Link to='/model-parts'><img
                                        src="assets/img/product/img10.png" alt="" className="img-fluid" /></Link>
                                </div>

                                <h3><Link to='/model-parts'>Zubehör</Link>
                                </h3>
                            </div>
                        </div>

                        <div className="item">
                            <div className="car-img-name text-center">
                                <div className="img-style img_height250">
                                    <Link to='/model-parts'><img
                                        src="assets/img/product/img8.png" alt="" className="img-fluid" /></Link>
                                </div>

                                <h3><Link to='/model-parts'>RC-Kit</Link>
                                </h3>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </section>

            <section className="product-details-area bg_white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="product-img">
                                <img src="assets/img/product/big-img4.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="product-details">
                                <div className="title-cart">
                                    <div className="name">
                                        <h3>Product Name</h3>
                                        <p>Art. Nr. 02FE22550327</p>
                                    </div>

                                    <div className="cart">
                                        <i className="fa fa-shopping-cart"></i>
                                        <p>3.250,00 $</p>
                                    </div>
                                </div>

                                <p>Product description should describe in combination with which
                                    other product will the sound be increased
                                    Product description should describe in combination with which
                                    other product will the sound be increased</p>

                                <br />

                                <h4>ECE Approval: <Link to='/'>Yes <img src="assets/img/edit.png" alt="" className="img-fluid" /></Link>
                                </h4>

                                <ul className="list_ul_custom">
                                    <li><p>Sound Level increase</p> <span>20 PS / 20 dba</span></li>
                                    <li><p>Sound Level in combination with Downpipe 250 cells</p> <span>30 PS / 25 dba</span></li>
                                    <li><p>Sound Level in combination with Downpipe 100 cells</p> <span>80 PS / 40 dba</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="facts-page-area section_70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="about-page-right">
                                <div className="video_wrapper video_wrapper_full js-videoWrapper">
                                    <a className="popup-youtube" href="https://www.youtube.com/watch?v=rDE4il6JC4U">
                                        <img src="assets/img/product/video-img3.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product-details-area ptb-50 bg_gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="product-img">
                                <img src="assets/img/product/big-img5.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="product-details">
                                <div className="title-cart">
                                    <div className="name">
                                        <h3>Product Name</h3>
                                        <p>Art. Nr. 02FE22550327</p>
                                    </div>

                                    <div className="cart">
                                        <i className="fa fa-shopping-cart"></i>
                                        <p>3.250,00 $</p>
                                    </div>
                                </div>

                                <p>Product description should describe in combination with which
                                    other product will the sound be increased
                                    Product description should describe in combination with which
                                    other product will the sound be increased</p>

                                <br />

                                <h4>ECE Approval: <Link to='/'>Yes <img src="assets/img/edit.png" alt="" className="img-fluid" /></Link>
                                </h4>

                                <ul className="list_ul_custom">
                                    <li><p>Sound Level increase</p> <span>20 PS / 20 dba</span></li>
                                    <li><p>Sound Level in combination with Downpipe 250 cells</p> <span>30 PS / 25 dba</span></li>
                                    <li><p>Sound Level in combination with Downpipe 100 cells</p> <span>80 PS / 40 dba</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product-details-area bg_white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="product-img">
                                <img src="assets/img/product/big-img6.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="product-details">
                                <div className="title-cart">
                                    <div className="name">
                                        <h3>Product Name</h3>
                                        <p>Art. Nr. 02FE22550327</p>
                                    </div>

                                    <div className="cart">
                                        <i className="fa fa-shopping-cart"></i>
                                        <p>3.250,00 $</p>
                                    </div>
                                </div>

                                <p>Product description should describe in combination with which
                                    other product will the sound be increased
                                    Product description should describe in combination with which
                                    other product will the sound be increased</p>

                                <br />

                                <h4>ECE Approval: <Link to='/'>Yes <img src="assets/img/edit.png" alt="" className="img-fluid" /></Link>
                                </h4>

                                <ul className="list_ul_custom">
                                    <li><p>Sound Level increase</p> <span>20 PS / 20 dba</span></li>
                                    <li><p>Sound Level in combination with Downpipe 250 cells</p> <span>30 PS / 25 dba</span></li>
                                    <li><p>Sound Level in combination with Downpipe 100 cells</p> <span>80 PS / 40 dba</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="facts-page-area section_70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="about-page-right">
                                <div className="video_wrapper video_wrapper_full js-videoWrapper">
                                    <a className="popup-youtube" href="https://www.youtube.com/watch?v=rDE4il6JC4U">
                                        <img src="assets/img/product/video-img4.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product-details-area ptb-50 bg_gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="product-img">
                                <img src="assets/img/product/big-img7.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="product-details">
                                <div className="title-cart">
                                    <div className="name">
                                        <h3>Product Name</h3>
                                        <p>Art. Nr. 02FE22550327</p>
                                    </div>

                                    <div className="cart">
                                        <i className="fa fa-shopping-cart"></i>
                                        <p>3.250,00 $</p>
                                    </div>
                                </div>

                                <p>Product description should describe in combination with which
                                    other product will the sound be increased
                                    Product description should describe in combination with which
                                    other product will the sound be increased</p>

                                <br />

                                <h4>ECE Approval: <Link to='/'>Yes <img src="assets/img/edit.png" alt="" className="img-fluid" /></Link>
                                </h4>

                                <ul className="list_ul_custom">
                                    <li><p>Sound Level increase</p> <span>20 PS / 20 dba</span></li>
                                    <li><p>Sound Level in combination with Downpipe 250 cells</p> <span>30 PS / 25 dba</span></li>
                                    <li><p>Sound Level in combination with Downpipe 100 cells</p> <span>80 PS / 40 dba</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="interested">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title2">
                                <h3>You may also be interested in:</h3>
                            </div>
                        </div>
                    </div>
                    <OwlCarousel className="interste-carousel" {...options2}>
                        <div className="item">
                            <div className="interested-box">
                                <div className="img-style">
                                    <Link to='/'><img src="assets/img/product/img4.jpg" alt="" className="img-fluid" /></Link>
                                </div>

                                <div className="content-style">
                                    <Link to='/'>
                                        <h3>Ferrari SF90 Downpipe</h3>
                                    </Link>
                                    <p>3.500,00 $</p>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="interested-box">
                                <div className="img-style">
                                    <Link to='/'><img src="assets/img/product/img5.jpg" alt="" className="img-fluid" /></Link>
                                </div>

                                <div className="content-style">
                                    <Link to='/'>
                                        <h3>Ferrari SF90 Downpipe</h3>
                                    </Link>
                                    <p>3.500,00 $</p>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="interested-box">
                                <div className="img-style">
                                    <Link to='/'><img src="assets/img/product/img6.jpg" alt="" className="img-fluid" /></Link>
                                </div>

                                <div className="content-style">
                                    <Link to='/'>
                                        <h3>Ferrari SF90 Downpipe</h3>
                                    </Link>
                                    <p>3.500,00 $</p>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="interested-box">
                                <div className="img-style">
                                    <Link to='/'><img src="assets/img/product/img7.jpg" alt="" className="img-fluid" /></Link>
                                </div>

                                <div className="content-style">
                                    <Link to='/'>
                                        <h3>Ferrari SF90 Downpipe</h3>
                                    </Link>
                                    <p>3.500,00 $</p>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="interested-box">
                                <div className="img-style">
                                    <Link to='/'><img src="assets/img/product/img4.jpg" alt="" className="img-fluid" /></Link>
                                </div>

                                <div className="content-style">
                                    <Link to='/'>
                                        <h3>Ferrari SF90 Downpipe</h3>
                                    </Link>
                                    <p>3.500,00 $</p>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
        </>
    )
}

export default Parts