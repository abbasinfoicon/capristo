import React, { useEffect } from 'react'

const ScrollBar = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <button onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} id="scrollUp" className='scrollUp'>
            <i class="fa fa-level-up"></i>
        </button>
    )
}

export default ScrollBar