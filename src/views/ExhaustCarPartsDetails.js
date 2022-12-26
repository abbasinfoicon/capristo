import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetSingleCarQuery } from '../features/car/CarApi';
import ModalVideo from 'react-modal-video'

const ExhaustCarPartsDetails = () => {
    const params = useParams();

    const { data, isError, isLoading } = useGetSingleCarQuery(params.slug);
    const [isOpen, setOpen] = useState(false) 

    useEffect(() => {
      document.body.classList.toggle('modal-open', isOpen);
    }, [isOpen])

    return (
        <>
            <section className="access-parts-area ptb-50 bg_gray marginTop-110px">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="car-img-name text-center">
                                <div className="img-style">
                                    <Link to='/'><img
                                        src="assets/img/product/img1.png" alt="" className="img-fluid" /></Link>
                                </div>

                                <h3><Link to='/'>RC-Kit</Link>
                                </h3>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="car-img-name text-center">
                                <div className="img-style">
                                    <Link to='/'><img
                                        src="assets/img/product/img2.png" alt="" className="img-fluid" /></Link>
                                </div>

                                <h3><Link to='/'>CES-3</Link>
                                </h3>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="car-img-name text-center">
                                <div className="img-style">
                                    <Link to='/'><img
                                        src="assets/img/product/img3.png" alt="" className="img-fluid" /></Link>
                                </div>

                                <h3><Link to='/'>EVCU-1</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {isError ? (
                <p className='iserror'>Oh no, there was an error</p>
            ) : isLoading ? (
                <p className='isloading'>Loading...</p>
            ) : data ? (
                <>
                    {
                        data[0].exhausts[0].models[0].modelsParts[0].parts[0].partDetails.map(({ id, product, artNo, img, desc, price, eceApproval, userGuide, soundLavelCloseValves, soundLavelOpenValves, video, videoId, videobg }, index) => {
                            return (
                                <section key={id}>
                                    <div className={(index + 1) % 2 == 0 ? "product-details-area ptb-50 bg_gray" : "product-details-area bg_white"}>
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
                                                        <h4>User Guide: <a href={userGuide}><i class="fa fa-download"></i></a></h4>

                                                        <ul class="list_ul_custom">
                                                            <li><p>Sound Level increase with closed vailves</p> <span>{soundLavelCloseValves}</span></li>
                                                            <li><p>Sound Level increase with open valves</p> <span>{soundLavelOpenValves}</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        (video === '') ? "" : (

                                            <div className="facts-page-area section_70">
                                                <div className="container">
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-12">
                                                            <div className="about-page-right">
                                                                <div className="video_wrapper video_wrapper_full js-videoWrapper">
                                                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />
                                                                    <a className="popup-youtube" onClick={() => setOpen(true)}><img src={videobg} alt={videobg} className="img-fluid" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </section>
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
                    <div className="row">
                        <div className="col-md-3">
                            <div className="interested-box">
                                <div className="img-style">
                                    <a href="#"><img src="assets/img/product/img4.jpg" alt="" className="img-fluid" /></a>
                                </div>

                                <div className="content-style">
                                    <a href="#">
                                        <h3>Ferrari SF90 Downpipe</h3>
                                    </a>
                                    <p>3.500,00 $</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="interested-box">
                                <div className="img-style">
                                    <a href="#"><img src="assets/img/product/img5.jpg" alt="" className="img-fluid" /></a>
                                </div>

                                <div className="content-style">
                                    <a href="#">
                                        <h3>Ferrari SF90 Downpipe</h3>
                                    </a>
                                    <p>3.500,00 $</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="interested-box">
                                <div className="img-style">
                                    <a href="#"><img src="assets/img/product/img6.jpg" alt="" className="img-fluid" /></a>
                                </div>

                                <div className="content-style">
                                    <a href="#">
                                        <h3>Ferrari SF90 Downpipe</h3>
                                    </a>
                                    <p>3.500,00 $</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="interested-box">
                                <div className="img-style">
                                    <a href="#"><img src="assets/img/product/img7.jpg" alt="" className="img-fluid" /></a>
                                </div>

                                <div className="content-style">
                                    <a href="#">
                                        <h3>Ferrari SF90 Downpipe</h3>
                                    </a>
                                    <p>3.500,00 $</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExhaustCarPartsDetails