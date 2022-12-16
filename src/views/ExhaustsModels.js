import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetSingleCarQuery } from '../features/car/CarApi'

const ExhaustsModels = () => {
    const params = useParams();
    // console.log(params.slug);
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
                                data[0].exhausts.map((item, index) => {
                                    return (
                                        <div className="col-md-12 text-center" key={index}>
                                            <div className="car-img-name">
                                                <div className="img-style">
                                                    <Link to={`/${params.slug}/${params.slug}-exhausts/${item.slug}`}><img src={item.img} alt="" className="img-fluid" /></Link>
                                                </div>

                                                <h3><Link to={`/${params.slug}/${params.slug}-exhausts/${item.slug}`}>{item.name}</Link></h3>
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

export default ExhaustsModels