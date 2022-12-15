import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeTheme } from '../reducers/theme'

const Light = ({ children }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeTheme('light_themes'))
    }, []);
    return (
        <>{children}</>
    )
}

export default Light