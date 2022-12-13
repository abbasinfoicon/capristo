import React from 'react'
import { Link } from 'react-router-dom'

const ModelParts = () => {
  return (
    <section className="cars-list-area cars_models_zubehor bg_gray marginTop-110px">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 text-right">
                    <div className="car-img-name">
                        <div className="img-style">
                            <Link to='/model-details'><img src="assets/img/acc/valve-controller.png" alt="" className="img-fluid"/></Link>
                        </div>

                        <h3><Link to='/model-details'>Valve Controllers</Link></h3>
                    </div>
                </div>

                <div className="col-md-6 text-right">
                    <div className="car-img-name">
                        <div className="img-style">
                            <Link to='/model-details'><img src="assets/img/acc/performance-box.png" alt="" className="img-fluid"/></Link>
                        </div>

                        <h3><Link to='/model-details'>Performance Boxes</Link></h3>
                    </div>
                </div>

                <div className="col-md-6 text-right">
                    <div className="car-img-name">
                        <div className="img-style">
                            <Link to='/model-details'><img src="assets/img/acc/cls-1-lambda-simulator.png" alt=""
                                    className="img-fluid"/></Link>
                        </div>

                        <h3><Link to='/model-details'>CLS-1 Lambda Simulator</Link></h3>
                    </div>
                </div>

                <div className="col-md-6 text-right">
                    <div className="car-img-name">
                        <div className="img-style">
                            <Link to='/model-details'><img src="assets/img/acc/obd-wizard.png" alt="" className="img-fluid"/></Link>
                        </div>

                        <h3><Link to='/model-details'>OBD Wizard</Link></h3>
                    </div>
                </div>

                <div className="col-md-12 text-center">
                    <div className="car-img-name">
                        <div className="img-style">
                            <Link to='/model-details'><img src="assets/img/acc/exhaust-component.png" alt="" className="img-fluid"/></Link>
                        </div>

                        <h3><Link to='/model-details'>Exhaust Components</Link></h3>
                    </div>
                </div>

                <div className="col-md-12 text-center">
                    <div className="car-img-name">
                        <div className="img-style">
                            <Link to='/model-details'><img src="assets/img/acc/wheel-spacers.png" alt="" className="img-fluid"/></Link>
                        </div>

                        <h3><Link to='/model-details'>Wheel Spacers</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ModelParts