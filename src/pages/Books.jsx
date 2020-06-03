import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import AppLayout from '../components/Layout/AppLayout/AppLayout'

import NewPublishedBook from '../components/Books/NewPublishedBook/NewPublishedBook'
import BestSellerBook from '../components/Books/BestSellerBook/BestSellerBook'
import OurAllBooks from '../components/Books/OurAllBooks/OurAllBooks'
import Subscribe from '../components/common/Subscribe/Subscribe'

import { loadBooks } from '../store/Books'

const BooksPage = () => {
    const dispatch = useDispatch()

    const { books } = useSelector(({ books }) => books)

    useEffect(() => {
        dispatch(loadBooks(books))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        document.title = 'বইগুলো - গার্ডিয়ান পাবলিকেশন্স'
        window.scrollTo(0, 0)
    }, [])

    return (
        <AppLayout>
            <NewPublishedBook />
            <BestSellerBook />
            <OurAllBooks />
            <Subscribe />
        </AppLayout>
    )
}

export default BooksPage
