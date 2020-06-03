import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Redirect } from 'react-router-dom'
import Loader from 'react-loader-spinner'

import SinglePageAppLayout from '../components/Layout/SinglePageAppLayout/SinglePageAppLayout'

import WriterOrTranslatorImageAndInfo from '../components/WriterOrTranslator/WriterOrTranslatorImageAndInfo'
import Books from '../components/WriterOrTranslator/Books'
import Subscribe from '../components/common/Subscribe/Subscribe'

import { loadWriter } from '../store/Writer'

const WriterPage = () => {
    const dispatch = useDispatch()

    let { slug } = useParams()

    useEffect(() => {
        dispatch(loadWriter(slug))
    }, [dispatch, slug])

    const data = useSelector(({ writer }) => writer)
    const { isLoading } = useSelector(({ meta }) => meta)

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

    return isLoading ? (
        <div className="custom-loader">
            <span>
                <Loader type="Oval" color="#00BFFF" width={150} />
            </span>
        </div>
    ) : (
        <SinglePageAppLayout>
            <WriterOrTranslatorImageAndInfo data={data} />
            <Books data={data} />
            <Subscribe />
        </SinglePageAppLayout>
    )
}

export default WriterPage
