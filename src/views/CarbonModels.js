import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetSingleCarQuery } from '../features/car/CarApi'

const CarbonModels = () => {
    const params = useParams();
    const { data, isError, isLoading } = useGetSingleCarQuery(params.slug);
    // console.log("All Data ", data);
    // console.log("Models Data ", data.models);

    return (
        <section className="cars-list-area marginTop-110px">
            <div className="container-fluid">
                <div className="row">
                    {isError ? (
                        <p className='iserror'>Oh no, there was an error</p>
                    ) : isLoading ? (
                        <p className='isloading'>Loading...</p>
                    ) : data ? (
                        <>
                            {
                                data[0].carbon.map((item, index) => {
                                    return (
                                        <div className="col-md-12 text-center" key={index}>
                                            <div className="car-img-name">
                                                <div className="img-style">
                                                    <Link to='/parts'><img src={item.img} alt="" className="img-fluid" /></Link>
                                                </div>

                                                <h3><Link to='/parts'>{item.name}</Link></h3>
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

export default CarbonModels