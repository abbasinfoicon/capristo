import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeTheme } from '../reducers/theme'

const Dark = ({ children }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeTheme('dark_themes'))
    }, []);
    return (
        <>{children}</>
    )
}

export default Dark