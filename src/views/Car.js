import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetSingleCarQuery } from '../features/car/CarApi'

const Car = () => {
    const params = useParams();

    const { data, isError, isLoading } = useGetSingleCarQuery(params.slug);

    return (
        <section className="video-page-area">
            <p>(Video: Ferrari with Capristo products (no sound) )</p>
            {isError ? (
                <p className='iserror'>Oh no, there was an error</p>
            ) : isLoading ? (
                <p className='isloading'>Loading...</p>
            ) : data ? (
                <>
                    {
                        data.map(({ id, img, slug }) => {
                            return (
                                <div className="video_wrapper video_wrapper_full js-videoWrapper" key={id}>
                                    <a className="popup-youtube" href="https://www.youtube.com/watch?v=rDE4il6JC4U">
                                        <img src={"/" + img} alt="" className="img-fluid" />
                                    </a>

                                    <div className="btns-link">
                                        <Link to={`/car-list/${slug}/models`}>Explore Exhausts Systems <i className="fa fa-plus"></i></Link>
                                        <Link to='/models-carbon'>Explore Carbon Parts <i className="fa fa-plus"></i></Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </>

            ) : <>NOT DATA</>}
        </section>
    )
}

export default Car