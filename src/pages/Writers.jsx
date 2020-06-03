import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import AppLayout from '../components/Layout/AppLayout/AppLayout'

// import PopularWriters from '../components/Writers/PopularWriters/PopularWriters'
import AllWriter from '../components/Writers/Writers/Writers'
import Subscribe from '../components/common/Subscribe/Subscribe'

import { loadWriters } from '../store/Writers'

const WritersPage = () => {
    const dispatch = useDispatch()

    const { writers } = useSelector(({ writers }) => writers)

    useEffect(() => {
        dispatch(loadWriters(writers))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        document.title = 'লেখকবৃন্দ - গার্ডিয়ান পাবলিকেশন্স'
        window.scrollTo(0, 0)
    }, [])

    return (
        <AppLayout>
            {/* TODOS: Have to remove comment when we will can filter popular writers */}
            {/* <PopularWriters /> */}
            <AllWriter />
            <Subscribe />
        </AppLayout>
    )
}

export default WritersPage
