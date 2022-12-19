import React from 'react'
import { Link, useParams } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import { useGetSingleCarQuery } from '../features/car/CarApi';

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
    navText: ["<img src='assets/img/left-chevron.png' alt='left'/>", "<img src='assets/img/right-chevron.png' alt='right'/>"],
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
    navText: ["<img src='assets/img/left-chevron.png' alt='left'/>", "<img src='assets/img/right-chevron.png' alt='right'/>"],
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

const CarDetails = () => {
    const params = useParams();

    const { data, isError, isLoading } = useGetSingleCarQuery(params.slug);

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

            {isError ? (
                <p className='iserror'>Oh no, there was an error</p>
            ) : isLoading ? (
                <p className='isloading'>Loading...</p>
            ) : data ? (
                <>
                    {
                        data[0].exhausts[0].models.map(({ id, product, artNo, img, desc, price, eceApproval, soundLavel, soundLavelComb250, soundLavelComb100, video, videobg }, index) => {
                            return (
                                <>
                                    <section className={(index + 1) % 2 == 0 ? "product-details-area ptb-50 bg_gray" : "product-details-area bg_white"} key={id}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="product-img">
                                                        <img src={img} alt={product} className="img-fluid" />
                                                    </div>
                                                </div>

                                                <div className="col-md-8">
                                                    <div className="product-details">
                                                        <div className="title-cart">
                                                            <div className="name">
                                                                <h3>{product}</h3>
                                                                <p>Art. Nr. {artNo}</p>
                                                            </div>

                                                            <div className="cart">
                                                                <i className="fa fa-shopping-cart"></i>
                                                                <p>{price} $</p>
                                                            </div>
                                                        </div>

                                                        <p>{desc}</p>

                                                        <br />

                                                        <h4>ECE Approval: <Link to='/'>{(eceApproval === 'approval') ? "Yes" : "No"} <img src="assets/img/edit.png" alt="edit" className="img-fluid" /></Link>
                                                        </h4>

                                                        <ul className="list_ul_custom">
                                                            <li><p>Sound Level increase</p> <span>{soundLavel}</span></li>
                                                            <li><p>Sound Level in combination with Downpipe 250 cells</p> <span>{soundLavelComb250}</span></li>
                                                            <li><p>Sound Level in combination with Downpipe 100 cells</p> <span>{soundLavelComb100}</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {(video === '') ? "" : (

                                      <section className="facts-page-area section_70">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="col-lg-12">
                                                    <div className="about-page-right">
                                                        <div className="video_wrapper video_wrapper_full js-videoWrapper">
                                                            <a className="popup-youtube" href={video}>
                                                                <img src={videobg} alt={videobg} className="img-fluid" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    )
                                    }
                                </>
                            )
                        })
                    }
                </>

            ) : <>NOT DATA</>}

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

export default CarDetails