import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetSingleCarQuery } from '../features/car/CarApi';

const ExhaustCarParts = () => {
    const params = useParams();
    const { data, isError, isLoading } = useGetSingleCarQuery(params.slug);
    console.log("ExhaustCarPart Data - ", params)


    return (
        <section className="cars-list-area cars_models_zubehor bg_gray marginTop-110px">
            <div className="container-fluid">
                <div className="row">
                    {isError ? (
                        <p className='iserror'>Oh no, there was an error</p>
                    ) : isLoading ? (
                        <p className='isloading'>Loading...</p>
                    ) : data.length ? (
                        <>
                            {
                                data[0].exhausts[0].models[0].modelsParts[0].parts.map((item, index) => {
                                    return (
                                        <div className={(index + 1) % 3 == 0 ? "col-md-12 text-center" : "col-md-6 text-right"} key={index}>
                                            <div className="car-img-name">
                                                <div className="img-style">
                                                    <Link to={item.slug}><img src={item.img} alt="" className="img-fluid" /></Link>
                                                </div>

                                                <h3><Link to={item.slug}>{item.product}</Link></h3>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </>

                    ) : <>NOT DATA</>}
                </div>
            </div>
        </section>
    )
}

export default ExhaustCarParts