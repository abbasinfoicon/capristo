import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
import { useGetAllCarQuery } from '../features/car/CarApi'


const CarList = () => {
  const carList = useGetAllCarQuery();



  return (
    <section className="cars-list-area marginTop-110px">
      <div className="container-fluid">
        <div className="row">
          {carList.isError ? (
            <p className='iserror'>Oh no, there was an error</p>
          ) : carList.isLoading ? (
            <p className='isloading'>Loading...</p>
          ) : carList.data ? (
            <>
              {
                carList.data.map((item, index) => {
                  return (
                    <div className={(index + 1) % 3 == 0 ? "col-md-12 text-center" : "col-md-6 text-right"} key={index}>
                      <div className="car-img-name">
                        <div className="img-style">
                          <Link to={'/car-list/' + item.slug}><img src={item.img} alt="" className="img-fluid" /></Link>
                        </div>

                        <h3><Link to={'/car-list/' + item.slug}>{item.name}</Link></h3>
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

export default CarList