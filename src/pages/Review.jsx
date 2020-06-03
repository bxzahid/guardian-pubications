import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from 'react-loader-spinner'

import AppLayout from '../components/Layout/AppLayout/AppLayout'
import Reviews from '../components/Review/Reviews'

import { loadReadersComments } from '../store/ReadersComments'

const ReviewPage = () => {
    const dispatch = useDispatch()

    const readersComments = useSelector(
        ({ readersComments }) => readersComments
    )
    const { isLoading } = useSelector(({ meta }) => meta)

    useEffect(() => {
        dispatch(loadReadersComments(readersComments))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        document.title = 'রিভিউ - গার্ডিয়ান পাবলিকেশন্স'
        window.scrollTo(0, 0)
    }, [])

    return isLoading ? (
        <div className="custom-loader">
            <span>
                <Loader type="Oval" color="#00BFFF" width={150} />
            </span>
        </div>
    ) : (
        <AppLayout>
            <Reviews />
        </AppLayout>
    )
}

export default ReviewPage
