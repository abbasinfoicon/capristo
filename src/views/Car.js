import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetSingleCarQuery } from '../features/car/CarApi'
import ModalVideo from 'react-modal-video'
import PageNotFound from './PageNotFound'

const Car = () => {
    const params = useParams();

    const { data, isError, isLoading } = useGetSingleCarQuery(params.slug);
    console.log("Daata ", data);
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        document.body.classList.toggle('modal-open', isOpen);
    }, [isOpen])

    return (
        <section className="video-page-area">
            {isError ? (
                <p className='iserror'>Oh no, there was an error</p>
            ) : isLoading ? (
                <p className='isloading'>Loading...</p>
            ) : data ? (
                <>
                    {
                        data.length > 0 ? (
                            data.map(({ id, img, slug, name }) => {
                                return (
                                    <div key={id}>
                                        <p>(Video: {name} with Capristo products (no sound) )</p>
                                        <div className="video_wrapper video_wrapper_full js-videoWrapper">
                                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="QDhLqbeVpKA" onClose={() => setOpen(false)} />
                                            <a className="popup-youtube" onClick={() => setOpen(true)}><img src={"/" + img} alt="" className="img-fluid" /></a>

                                            <div className="btns-link">
                                                <Link to={`/${slug}/${slug}-exhausts`}>Explore Exhausts Systems <i className="fa fa-plus"></i></Link>
                                                <Link to={`/${slug}/${slug}-carbon`}>Explore Carbon Parts <i className="fa fa-plus"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ) : <PageNotFound />
                    }
                </>

            ) : <>NOT DATA</>}
        </section>
    )
}

export default Car