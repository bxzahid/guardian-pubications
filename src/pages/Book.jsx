import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Redirect } from 'react-router-dom'

import SinglePageAppLayout from '../components/Layout/SinglePageAppLayout/SinglePageAppLayout'

import SingleBookImageAndInfo from '../components/Book/SingleBookImageAndInfo'
import EssenceOfTheBook from '../components/Book/EssenceOfTheBook'
import ReviewAndRating from '../components/Book/ReviewAndRating'
import WriteReview from '../components/Book/WriteReview'
import Subscribe from '../components/common/Subscribe/Subscribe'
import OurPublishedBooks from '../components/common/OurPublishedBooks/OurPublishedBooks'

import { loadBook } from '../store/Book'
import { loadBooks } from '../store/Books'

const BookPage = () => {
    const dispatch = useDispatch()

    let { slug } = useParams()

    const data = useSelector(({ book }) => book)
    const booksState = useSelector(({ books }) => books)

    useEffect(() => {
        dispatch(loadBook(slug))
        dispatch(loadBooks(booksState))
    }, [dispatch, slug])

    const tabTitle = data.name
        ? `${data.name} - গার্ডিয়ান পাবলিকেশন্স`
        : 'গার্ডিয়ান পাবলিকেশন্স'

    useEffect(() => {
        document.title = tabTitle
        window.scrollTo(0, 0)
    }, [tabTitle])

    if (data === 404) {
        return <Redirect to="/not-found" />
    }

    return (
        <SinglePageAppLayout>
            <SingleBookImageAndInfo />
            <EssenceOfTheBook />
            <ReviewAndRating />
            <WriteReview slug={slug} />
            <Subscribe />
            <OurPublishedBooks />
        </SinglePageAppLayout>
    )
}

export default BookPage
