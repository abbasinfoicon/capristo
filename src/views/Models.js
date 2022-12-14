import React from 'react'
import { Link } from 'react-router-dom'

const Models = () => {
  return (
    <section className="cars-list-area marginTop-110px">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="car-img-name">
                        <div className="img-style">
                            <Link to='/parts'><img src="assets/img/cars/alfa-romeo.jpg"
                                    alt="" className="img-fluid"/></Link>
                        </div>

                        <h3><Link to='/parts'>288 GTO</Link></h3>
                    </div>
                </div>

                <div className="col-md-12 text-center">
                    <div className="car-img-name">
                        <div className="img-style">
                            <Link to='/parts'><img
                                    src="assets/img/cars/aston-martin.jpg" alt="" className="img-fluid"/></Link>
                        </div>

                        <h3><Link to='/parts'>308 Models</Link></h3>
                    </div>
                </div>

                <div className="col-md-12 text-center">
                    <div className="car-img-name">
                        <div className="img-style">
                            <Link to='/parts'><img src="assets/img/cars/audi.jpg"
                                    alt="" className="img-fluid"/></Link>
                        </div>

                        <h3><Link to='/parts'>Mondial 3.2</Link></h3>
                    </div>
                </div>

                <div className="col-md-12 text-center">
                    <div className="car-img-name">
                        <div className="img-style">
                            <Link to='/parts'><img src="assets/img/cars/bentley.jpg"
                                    alt="" className="img-fluid"/></Link>
                        </div>

                        <h3><Link to='/parts'>348</Link></h3>
                    </div>
                </div>

                <div className="col-md-12 text-center">
                    <div className="car-img-name">
                        <div className="img-style">
                            <Link to='/parts'><img src="assets/img/cars/bentley.jpg"
                                    alt="" className="img-fluid"/></Link>
                        </div>

                        <h3><Link to='/parts'>355</Link></h3>
                    </div>
                </div>

                <div className="col-md-12 text-center">
                    <div className="car-img-name">
                        <div className="img-style">
                            <Link to='/parts'><img src="assets/img/cars/chevrolet.jpg"
                                    alt="" className="img-fluid"/></Link>
                        </div>

                        <h3><Link to='/parts'>360</Link></h3>
                    </div>
                </div>

                <div className="col-md-12 text-center">
                    <div className="car-img-name">
                        <div className="img-style">
                            <Link to='/parts'><img src="assets/img/cars/bmw.jpg" alt=""
                                    className="img-fluid"/></Link>
                        </div>

                        <h3><Link to='/parts'>430 Models</Link></h3>
                    </div>
                </div>

                <div className="col-md-12 text-center">
                    <div className="car-img-name">
                        <div className="img-style">
                            <Link to='/parts'><img src="assets/img/cars/cupra.jpg"
                                    alt="" className="img-fluid"/></Link>
                        </div>

                        <h3><Link to='/parts'>458 Models</Link></h3>
                    </div>
                </div>

                <div className="col-md-12 text-center">
                    <div className="car-img-name">
                        <div className="img-style">
                            <Link to='/parts'><img src="assets/img/cars/dodge.jpg"
                                    alt="" className="img-fluid"/></Link>
                        </div>

                        <h3><Link to='/parts'>488 Models</Link></h3>
                    </div>
                </div>

                <div className="col-md-12 text-center">
                    <div className="car-img-name">
                        <div className="img-style">
                            <Link to='/parts'><img src="assets/img/cars/ferrari.jpg"
                                    alt="" className="img-fluid"/></Link>
                        </div>

                        <h3><Link to='/parts'>550 / 557 Maranello</Link></h3>
                    </div>
                </div>

                <div className="col-md-12 text-center">
                    <div className="car-img-name">
                        <div className="img-style">
                            <Link to='/parts'><img src="assets/img/cars/jaguar.jpg"
                                    alt="" className="img-fluid"/></Link>
                        </div>

                        <h3><Link to='/parts'>Testarossa</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Models