import React from 'react'
import { Link } from 'react-router-dom'

const Car = () => {
    return (
        <section className="video-page-area">
            <p>(Video: Ferrari with Capristo products (no sound) )</p>
            <div className="video_wrapper video_wrapper_full js-videoWrapper">
                <a className="popup-youtube" href="https://www.youtube.com/watch?v=rDE4il6JC4U">
                    <img src="assets/img/cars/DSC00048.png" alt="" className="img-fluid" />
                </a>

                <div className="btns-link">
                    <Link to='/models'>Explore Exhausts Systems <i className="fa fa-plus"></i></Link>
                    <Link to='/models-carbon'>Explore Carbon Parts <i className="fa fa-plus"></i></Link>
                </div>
            </div>
        </section>
    )
}

export default Car