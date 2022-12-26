import React from 'react'
import { Link } from 'react-router-dom'
import { useGetCareerQuery } from '../features/career/CareerApi';

const Career = () => {
  const careerDetails = useGetCareerQuery();

  return (
    <section className="page-area pt-30 pb-30 bg_gray2 marginTop-110px">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
              <h3>Become Part of our Team</h3>
              <div className="line"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="title_small">
              <h4>Current Opening</h4>
            </div>
          </div>
          {careerDetails.isError ? (
            <p className='iserror'>Oh no, there was an error</p>
          ) : careerDetails.isLoading ? (
            <p className='isloading'>Loading...</p>
          ) : careerDetails.data ? (
            <>
              {
                careerDetails.data.map(({ postion, location, slug }, index) => {
                  return (
                    <div className="col-md-6" key={index}>
                      <div className="jop_des">
                        <Link to={slug}>
                          <div className="icon">
                            <img src="assets/img/places.png" alt="MapMarker" className="img-fluid" />
                          </div>
                          <div className="des">
                            <h3>{postion}</h3>
                            <p>{location}</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  )
                })
              }
            </>
          ) : <>NOT DATA</>}

          <div className="btn-block text-center">
            <Link to='/' className="btn btn-cst">Apply Now</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Career