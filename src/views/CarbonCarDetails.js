import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import { useGetSingleCarQuery } from "../features/car/CarApi";

const options = {
    items: 1,
    nav: true,
    dots: false,
    autoplay: false,
    loop: false,
    navText: [
        "<img src='assets/img/prev-1.png'>",
        "<img src='assets/img/next-1.png'>",
    ],
    mouseDrag: false,
    touchDrag: false,
};
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
    navText: [
        "<img src='assets/img/left-chevron.png' alt='left'/>",
        "<img src='assets/img/right-chevron.png' alt='right'/>",
    ],
    responsive: {
        0: {
            items: 1,
        },
        480: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 4,
        },
        1200: {
            items: 4,
        },
    },
};

const CarbonCarDetails = () => {
    const params = useParams();
    const [carbon, setCarbon] = useState(null);
    const { data, isError, isLoading } = useGetSingleCarQuery(params.slug);

    // console.log("Data-params ", data);

    useEffect(() => {
        if (data && data[0]) {
            const filter = data[0].carbon.filter((car) => car.slug === params.name);

            if (filter.length) {
                setCarbon({ ...filter[0] });
            }
        }
    }, [data]);

    return (
        <>
            <section className="capristo-slider-area fix">
                <OwlCarousel className="capristo-slide" {...options}>
                    <div
                        className="capristo-main-slide"
                        style={{ backgroundImage: "url(assets/img/slider/slider1.jpg)" }}
                    >
                        <div className="capristo-main-caption">
                            <div className="capristo-caption-cell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-10">
                                            <div className="video_wrapper video_wrapper_full js-videoWrapper">
                                                <a
                                                    className="popup-youtube"
                                                    href="https://www.youtube.com/watch?v=rDE4il6JC4U"
                                                ></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </section>

            {isError ? (
                <p className="iserror">Oh no, there was an error</p>
            ) : isLoading ? (
                <p className="isloading">Loading...</p>
            ) : carbon ? (
                <>
                    <section>
                        <div className="car_tabs">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul className="tab">
                                            {Object.keys(carbon).map((key,index) => {
                                                if (
                                                    key != "id" &&
                                                    key != "name" &&
                                                    key != "img" &&
                                                    key != "slug"
                                                ) {
                                                    return (
                                                        <li key={index}>
                                                            <Link to={`#${key}`}>{key} Parts</Link>
                                                        </li>
                                                    );
                                                }
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {Object.keys(carbon).map((key, index) => {
                            if (
                                key != "id" &&
                                key != "name" &&
                                key != "img" &&
                                key != "slug"
                            ) {
                                return (
                                    <div className="car-parts bg_gray" key={key} id={key}>
                                        <div className="bg_gray_title">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="title">
                                                            <h3>{key} Parts</h3>
                                                            <div className="line"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    {
                                                        carbon[key].map((item) => {
                                                            return (
                                                                <div className="parts_sec" key={item.id}>
                                                                    <div className="car_img">
                                                                        <img src={item.img} alt={item.productName} className="img-fluid" />
                                                                    </div>

                                                                    <div className="car_dtl">
                                                                        <div className="title-cart">
                                                                            <div className="name">
                                                                                <h3>{item.productName}</h3>
                                                                                <p>Art. Nr. (Gloss varnished) {item.artnrGloss}</p>
                                                                                <p>Art. Nr. (Matt laquired) {item.artnrMatt}</p>
                                                                            </div>

                                                                            <div className="cart">
                                                                                <i className="fa fa-shopping-cart"></i>
                                                                                <p>{item.price} $</p>
                                                                            </div>
                                                                        </div>

                                                                        <p>ECE Approval: <Link to="/">{(item.eceApproval === 'approval') ? "Yes" : "No"}</Link></p>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </section>
                </>
            ) : (
                <>NOT DATA</>
            )}

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
                                    <Link to="/">
                                        <img
                                            src="assets/img/product/img4.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                </div>

                                <div className="content-style">
                                    <Link to="/">
                                        <h3>Ferrari SF90 Downpipe</h3>
                                    </Link>
                                    <p>3.500,00 $</p>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="interested-box">
                                <div className="img-style">
                                    <Link to="/">
                                        <img
                                            src="assets/img/product/img5.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                </div>

                                <div className="content-style">
                                    <Link to="/">
                                        <h3>Ferrari SF90 Downpipe</h3>
                                    </Link>
                                    <p>3.500,00 $</p>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="interested-box">
                                <div className="img-style">
                                    <Link to="/">
                                        <img
                                            src="assets/img/product/img6.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                </div>

                                <div className="content-style">
                                    <Link to="/">
                                        <h3>Ferrari SF90 Downpipe</h3>
                                    </Link>
                                    <p>3.500,00 $</p>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="interested-box">
                                <div className="img-style">
                                    <Link to="/">
                                        <img
                                            src="assets/img/product/img7.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                </div>

                                <div className="content-style">
                                    <Link to="/">
                                        <h3>Ferrari SF90 Downpipe</h3>
                                    </Link>
                                    <p>3.500,00 $</p>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="interested-box">
                                <div className="img-style">
                                    <Link to="/">
                                        <img
                                            src="assets/img/product/img4.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                </div>

                                <div className="content-style">
                                    <Link to="/">
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
    );
};

export default CarbonCarDetails;
