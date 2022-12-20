import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import { useGetAllSliderQuery } from '../../features/slider/SliderApi';
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

const Slider = () => {
    const sliderList = useGetAllSliderQuery();

    return (
        sliderList.data && <OwlCarousel className="capristo-slide" {...options}>
            {sliderList.isError ? (
                <p className='iserror'>Oh no, there was an error</p>
            ) : sliderList.isLoading ? (
                <p className='isloading'>Loading...</p>
            ) : sliderList.data ? (
                <>
                    {
                        sliderList.data.map((item, index) => {
                            return (
                                <div className="capristo-main-slide" style={{ backgroundImage: `url(${item.bg_img})` }} key={index}>
                                    <div className="capristo-main-caption">
                                        <div className="capristo-caption-cell">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-10">
                                                        <div className="slider-text">
                                                            <h2>{item.title}</h2>
                                                            <p>{item.desc}</p>
                                                            <div className="line"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </>
            ) : <>NOT DATA</>}
        </OwlCarousel>
    )
}

export default Slider