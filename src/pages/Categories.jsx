import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import AppLayout from '../components/Layout/AppLayout/AppLayout'

import BookCategories from '../components/Categories/Categories'

import { loadCategories } from '../store/Categories'

const CategoriesPage = () => {
    const dispatch = useDispatch()

    const categories = useSelector(({ categories }) => categories)

    useEffect(() => {
        dispatch(loadCategories(categories))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        document.title = 'ক্যাটাগরি - গার্ডিয়ান পাবলিকেশন্স'
        window.scrollTo(0, 0)
    }, [])

    return (
        <AppLayout>
            <BookCategories />
        </AppLayout>
    )
}

export default CategoriesPage
