import React from 'react'
import { Link } from 'react-router-dom'
import { useGetAllCarQuery } from '../features/car/CarApi'

const CarList = () => {
  const carList = useGetAllCarQuery();
  // console.log("Data ", carList.data);

  return (
    <section className="cars-list-area marginTop-110px">
      <div className="container-fluid">
        <div className="row">
          {carList.isError ? (
            <>Oh no, there was an error</>
          ) : carList.isLoading ? (
            <>Loading...</>
          ) : carList.data ? (
            <>
              {
                carList.data.map((item, index) => {
                  return (
                    <div className={(index + 1) % 3 == 0 ? "col-md-12 text-center" : "col-md-6 text-right"} key={index}>
                      <div className="car-img-name">
                        <div className="img-style">
                          <Link to={item.slug}><img src={item.img} alt="" className="img-fluid" /></Link>
                        </div>

                        <h3><Link to={item.slug}>{item.name}</Link></h3>
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