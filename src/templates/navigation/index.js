import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser } from 'source/redux/actions/auth'

import Splash from 'source/ui/auth/splash'
import MainNavigation from './Drawer'
import UnAuth from './UnAuth'

export default function AppNavigation() {
    const dispatch = useDispatch()
    const [isLoading, setLoading] = useState(true)
    const { isAuth } = useSelector(({auth}) => auth)

    useEffect(() => {
        dispatch(getCurrentUser(()=>setLoading(false)))
    }, [])

    if(isLoading)
        return <Splash />

    return (
        isAuth ? 
            <MainNavigation />
        :    
            <UnAuth />
    )
}
